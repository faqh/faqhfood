import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import "regenerator-runtime";
import "./styles/style.css";
import './script/parts/navbar.js';
import './script/parts/jumbotron.js';
import './script/parts/about.js';
import './script/parts/footer';
import imgAb1 from './script/images/ab-1.jpg';
import imgAb2 from './script/images/ab-2.jpg';
import imgIc from './script/images/dinner.png';
import logo from './script/images/icon.jpg';
// import logonav from './script/images/iconnav.jpg';
import beef from './script/data/data-beef.js';
import chicken from './script/data/data-chicken';
import lamb from './script/data/data-lamb';
import pasta from './script/data/data-pasta';
import seafood from './script/data/data-seafood';
import vegetarian from './script/data/data-vegetarian';
document.querySelector('#ab1').src = imgAb1;
document.querySelector('#ab2').src = imgAb2;
document.querySelector('#iconFood').src = imgIc;
document.querySelector('#logo').src = logo;
// document.querySelector('#iconNav').src = logonav;

document.addEventListener("DOMContentLoad", beef(), chicken(), lamb(), pasta(), seafood(), vegetarian());





