//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'

//include your index.scss file into the bundle
import "../styles/articles.css";

import 'bootstrap/dist/css/bootstrap.css';

//import your own components
import Layout from "./layout";
import { GlobalContextProvider } from "./component/global";

//render your react application
ReactDOM.render(<GlobalContextProvider><Layout /></GlobalContextProvider>, document.querySelector("#app"));
