import React from "react";
import jujutsuImg from "../../img/hero-images/jujutsu-keisen.png";
import jujutsulogo from "../../img/hero-images/jujutsu-kaisen-logo.png"
import zomImg from "../../img/hero-images/zom-100.jpg";
import zomLogo from "../../img/hero-images/zom-logo.png";
import hellsImg from "../../img/hero-images/hells-paradise.png";
import hellslogo from "../../img/hero-images/hells-paradise-logo.png";


import "../../styles/home.css";

export const Home = () => {
	

	return (
		<div>
			<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button className="indicator" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
					<button className="indicator" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button className="indicator" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner">
					<div class="carousel-item active c-item">
					<img src={hellsImg} class="d-block w-100 c-img" alt="..."/>
					<div class="carousel-caption d-none d-md-block right-caption text-start">
						<img class="hells-logo" src={hellslogo}/>
						<p>Some representative placeholder content for the first slide blah blah blah seeing if its centered yata yata.</p>
                	</div>
					</div>
					<div class="carousel-item c-item">
					<img src={zomImg} class="d-block w-100 c-img" alt="..."/>
					<div class="carousel-caption d-none d-md-block left-caption text-start">
						<img class="zom-logo" src={zomLogo}/>
						<p>Some representative placeholder content for the first slide blah blah blah seeing if its centered yata yata.</p>
					</div>
					</div>
					<div class="carousel-item c-item">
					<img src={jujutsuImg} class="d-block w-100 c-img" alt="..."/>
					<div class="carousel-caption d-none d-md-block right-caption text-start">
						<img class="jujutsu-logo" src={jujutsulogo}/>
						<p>Some representative placeholder content for the first slide blah blah blah seeing if its centered yata yata.</p>
					</div>
					</div>
				</div>
			</div>
		</div>
	);
};


