import UserProvider from "../services/userprovider.js";

export default class UserOne{
    async render(id){
        let user = await UserProvider.fetchUser(id);
        console.log(user);
        let myList = document.createElement('ul');
        myList.appendChild(document.createElement("li")).textContent = user.name;
        myList.appendChild(document.createElement("li")).textContent = user.email;
        myList.appendChild(document.createElement("li")).textContent = user.phone;
        myList.appendChild(document.createElement("li")).textContent = user.website;
        myList.appendChild(document.createElement("li")).textContent = "company:";
        let company = document.createElement("ul");
        company.appendChild(document.createElement("li")).textContent = user.company.name;
        company.appendChild(document.createElement("li")).textContent = user.company.catchPhrase;
        company.appendChild(document.createElement("li")).textContent = user.company.bs;
        myList.appendChild(company);
        myList.appendChild(document.createElement("li")).textContent = "address:";
        let address = document.createElement("ul");
        address.appendChild(document.createElement("li")).textContent = user.address.street;
        address.appendChild(document.createElement("li")).textContent = user.address.suite;
        address.appendChild(document.createElement("li")).textContent = user.address.city;
        address.appendChild(document.createElement("li")).textContent = user.address.zipcode;
        myList.appendChild(address);
        return myList;
    }
}