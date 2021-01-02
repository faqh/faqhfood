import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "regenerator-runtime";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './script/parts/navbar-detail';
import './script/parts/footer';

import logo from './script/images/icon.jpg';
import logoNav from './script/images/iconnav.png';

document.querySelector('#logo').src = logo;
document.querySelector('#icon').src = logoNav;

import detail from './script/data/data-detail';

document.addEventListener("DOMContentLoad", detail());