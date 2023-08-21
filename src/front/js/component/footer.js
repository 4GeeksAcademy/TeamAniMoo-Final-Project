import React from "react";
import logoImg from "../../img/Logo1.png"

import "../../styles/footer.css";

export const Footer = () => {

	return (
		<footer class="bg-dark text-center text-white fixed-bottom">
			<div class="container p-2 pb-0">
				<section>
				<a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
					<i class="fab fa-facebook-f"></i>
				</a>
				<a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
					<i class="fab fa-twitter"></i>
				</a>
				<a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
					<i class="fab fa-google"></i>
				</a>
				<a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
					<i class="fab fa-instagram"></i>
				</a>
				<a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
					<i class="fab fa-github"></i>
				</a>
				</section>
				<div class="text-center pb-2"><img src={logoImg} className="logo"/><span className="text">Created by Jaylyn Stample and Christopher Garcia</span></div>
			</div>
		</footer>
      

   );
};
