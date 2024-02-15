import UserAll from "./view/allusers.js";

let userall = new UserAll();
window.addEventListener('load', userall.render("ul"))
// window.addEventListener('load', userall.render2())