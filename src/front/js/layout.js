import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { News } from "./pages/news";
import { Manga } from "./pages/manga";
import { Anime } from "./pages/anime";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { AnimeItem } from "./pages/animeitem"
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<News />} path="/News" />
            <Route element={<Manga />} path="/Manga" />
            <Route element={<Anime />} path="/Anime" />
            <Route element= {<AnimeItem />} path="/anime/:id"/>
            <Route element={<Login />} path="/Login"/>
            <Route element={<Signup/>} path="/Signup"/>
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
