import UserAll from "./view/allusers.js";
import UserOne from "./view/oneuser.js";
import Error404 from "./view/Error404.js";
import About from "./view/about.js";
import Utils from "./services/utils.js";

const routes = {
    '/about': About,
    '/users': UserAll,
    '/users/:id': UserOne,
};

const router = async () => {
    let content = document.querySelector("#content");
    let request = Utils.parseRequestURL();
    let parsedURL = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');
    let page = routes[parsedURL] ? new routes[parsedURL] : new Error404;
    console.log(page);
    if (parsedURL === '/users/:id') {
        content.innerHTML = await page.render(request.id);
    } else {
        content.innerHTML = await page.render();
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);