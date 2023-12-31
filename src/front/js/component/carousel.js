import React from "react";
import jujutsuImg from "../../img/hero-images/jujutsu-keisen.png";
import jujutsulogo from "../../img/hero-images/jujutsu-kaisen-logo.png"
import zomImg from "../../img/hero-images/zom-100.jpg";
import zomLogo from "../../img/hero-images/zom-logo.png";
import hellsImg from "../../img/hero-images/hells-paradise.png";
import hellslogo from "../../img/hero-images/hells-paradise-logo.png";
import { Link } from "react-router-dom";

import "../../styles/carousel.css";

export const Carousel = () => {
	

	return (
		<div>
			<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button className="indicator" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button className="indicator" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button className="indicator" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active c-item">
					<img src={hellsImg} className="d-block w-100 c-img" alt="..."/>
					<div className="carousel-caption d-none d-md-block right-caption hells-p">
						<img className="hells-logo" src={hellslogo} alt="Hells Logo"/>
						<p>In the Edo period of Japan, a select group of convicts awaiting execution are offered the chance to be pardoned and freed the Shogunate of Japan if they go to investigate an island recently discovered southwest of the Ryukyu Kingdom. the convicts are accompanied by elite guards to ensure they won't escape. Once they reach there, they find themselves overwhelmed by the island's residents, a host of monsters and their creators, a group of immortal beings. Now the convicts and guards must work together to stop the immortals and escape the island.</p>
						<Link to='/anime/46569' key='46569'>
							<button type="button" className="btn btn-primary">Find out More!</button>
						</Link>
                	</div>
					</div>
					<div className="carousel-item c-item">
					<img src={zomImg} className="d-block w-100 c-img" alt="..."/>
					<div className="carousel-caption d-none d-md-block left-caption zom">
						<img className="zom-logo" src={zomLogo} alt="Zom Logo"/>
						<p>Akira Tendo, a 24-year-old office worker of ZLM, discovers himself trapped in a routine and meaningless life. He lacks drive and motivation since he is disenchanted with his career; however, when a zombie apocalypse caused by experimental bio weaponry unexpectedly strikes Tokyo, everything is turned upside down. Instead of succumbing to dread, Akira sees this as an opportunity to experience life to the fullest rather than settle for his humdrum existence. He decides to create a bucket list of everything he wants to do before dying in order to not only experience it firsthand but also to show that he is still alive and well. This decision is made with a newfound sense of purpose.</p>
						<Link to='/anime/54112' key='54112'>
							<button type="button" className="btn btn-primary">Find out More!</button>
						</Link>
					</div>
					</div>
					<div className="carousel-item c-item">
					<img src={jujutsuImg} className="d-block w-100 c-img" alt="..."/>
					<div className="carousel-caption d-none d-md-block right-caption jujutsu">
						<img className="jujutsu-logo" src={jujutsulogo} alt="Jujutsu Logo"/>
						<p>Yuji Itadori, a kind-hearted teenager, joins his school's Occult Club for fun, but discovers that its members are actual sorcerers who can manipulate the energy between beings for their own use. He hears about a cursed talisman - the finger of Sukuna, a demon - and its being targeted by other cursed beings. Yuji eats the finger to protect his friends, and ends up becoming Sukuna's host. However, Yuji discovers that he has inherited magic and is able to control this power without interference from Sukuna. He joins the Tokyo Metropolitan Magic Technical College to consumes all of Sukuna's fingers, which will enable a full exorcism to take place that will free him.</p>
						<Link to='/anime/51009' key='51009'>
							<button type="button" className="btn btn-primary">Find out More!</button>
						</Link>
					</div>
					</div>
				</div>
			</div>
		</div>
	);
};