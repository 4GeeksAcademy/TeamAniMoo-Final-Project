"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash, check_password_hash



api = Blueprint('api', __name__)
@api.route('/user', methods =['GET'])
def get_users(): 
     users = User.query.all()
     all_users =  list(map(lambda x: x.serialize(), users))

     return jsonify(all_users)


@api.route('/signup', methods =['POST'])
def create_users(): 

    request_body_user = request.get_json()

    user1 = User(email=request_body_user['email'],
                 password=generate_password_hash(request_body_user['password']),
                 first_name=request_body_user['firstname'], 
                 last_name=request_body_user['lastname'])
    db.session.add(user1)
    db.session.commit()
    email = request.json.get('email', None)
    access_token = create_access_token(identity=email)

    return jsonify(request_body_user, access_token)







@api.route('/token', methods=['POST']) 
def create_token():
        email = request.json.get("email", None)
        password = request.json.get("password", None)
        user = User.query.filter_by(email=email).first()
        if not user or not check_password_hash(user.password,password):
            return jsonify({"msg": "Bad username or password"}), 401

        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token)


