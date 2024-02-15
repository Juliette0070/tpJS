import UserProvider from "../services/userprovider.js";

export default class UserAll{
    async render(tag){
        let users = await UserProvider.fetchUsers();
        const myList = document.querySelector(tag);
        for (const user of users) {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createElement("strong")).textContent = user.name;
            listItem.appendChild(document.createElement("span")).textContent = ", email: " + user.email;
            myList.appendChild(listItem);
        }
    }
}