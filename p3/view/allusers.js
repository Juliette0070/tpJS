import UserProvider from "../services/userprovider.js";

export default class UserAll{
    // async render(tag){
    //     let users = await UserProvider.fetchUsers();
    //     const myList = document.querySelector(tag);
    //     for (const user of users) {
    //         console.log(user);
    //         const listItem = document.createElement('li');
    //         let link = document.createElement('a');
    //         link.href = "/p3/oneuser.html";
    //         listItem.appendChild(link).textContent = user.name;
    //         listItem.appendChild(document.createElement("strong")).textContent = user.name;
    //         listItem.appendChild(document.createElement("span")).textContent = ", email: " + user.email;
    //         myList.appendChild(listItem);
    //     }
    // }
    async render(){
        let users = await UserProvider.fetchUsers();
        let view = /* html*/`
            <h2>Tous les users:</h2>
            <ul>
                ${users.map(user => /* html */`
                    <li><strong>${user.name}</strong>, email: ${user.email}</li>
                `).join('')}
            </ul>
        `;
        let content = document.querySelector("#content");
        content.innerHTML = view;
    }
}