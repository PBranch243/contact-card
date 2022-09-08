// import js files
import './form.js';
import './submit';
// import initDb function, et. al.
import { initDb, getDb, postDb } from './database';
// import images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
window.addEventListener('load', function () {
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
  initDb();
  //place these functions here for testing, but will move later
  // getDb();
  // postDb("Phil", "phil@email.com", 3145555555, "Bear");
  // getDb();
});
// import css
import '../css/index.css';
// import bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';