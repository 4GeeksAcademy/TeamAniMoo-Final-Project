import React from "react";
import logogirl from "../../img/hero-images/logo-girl.png"
import logoImg from "../../img/Logo1.png"

import "../../styles/welcome.css";


export const Welcome = () => {
    return (
        <div className="welcome">

        <div className="container d-flex mt-4 p-4 welcome-container">
            <div className="card mb-3 welcome-card">
                <div className="row g-0">
                    <div className="col-md-3 welcome-img-container">
                        <img src={logogirl}className="img-fluid rounded-start welcome-logo-girl" alt="..."/>
                    </div>
                    <div className="col">
                        <div className="card-body welcome-card-body">
                            <h5 className="card-title welcome-title row">
                                Welcome to <img src={logoImg} className="welcome-logo-img"/>
                            </h5>
                            <p className="card-text welcome-card-text">
                            Where does it come from?
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
        </div>

    )
}

