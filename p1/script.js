let button = document.querySelector('button');
console.log(button);
button.addEventListener('click', function(e) {
    paragraphe = document.querySelector('p');
    paragraphe.classList.remove('design');
});

const someObjet = {str: "Some text", id: 5};
console.log(someObjet.str);

const car = "Dodge Charger";
const anotherOject = {str: "Some text", id: 5};
console.info("My first car was a ", car, ". The object is ", anotherOject);

for (let i = 0; i < 5; i++) {
    console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
}

function foo() {
    function bar() {
        console.trace();
    }
    bar();
}
foo();

let admin;
let name1;
name1 = "Geoffroy";
admin = name1;
// alert(name1);

let name2 = "Ilya";
// alert( `hello ${1}` );
// alert( `hello ${"name2"}` );
// alert( `hello ${name2}` );

// let reponse = prompt("Quel est le nom officiel de Javascript ?");
// if (reponse == "ECMAScript") {
//     alert("Bonne réponse !");
// } else {
//     alert("Vous ne connaissez pas ECMAScript ?!");
// }
// alert((reponse == "ECMAScript") ? "Bonne réponse !" : "Vous ne connaissez pas ECMAScript ?!");

// switch (reponse) {
//     case "ECMAScript":
//         alert("Bonne réponse !");
//         break;
//     default:
//         alert("Vous ne connaissez pas ECMAScript ?!");
//         break;
// }

function puissance(x, n) {
    let resultat = x;
    if (n > 1) {
        for (let i = 1; i < n; i++) {
            resultat *= x;
        }
    } else if (n == 0) {
        resultat = 1;
    } else {
        for (let i = 0; i > n-1; i--) {
            resultat /= x;
        }
    }
    return resultat;
}

// alert(puissance(2, 3));
// alert(puissance(2, 0));
// alert(puissance(2, -2));

// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   () => alert("Hello!") :
//   () => alert("Greetings!");

// welcome();

// let tab = ["JavaScript", "CSS"];
// tab.push("PHP");
// let taille = tab.length;
// tab[Math.floor(taille/2)] = "SCSS";
// alert(tab[0]);
// tab.push("Python");
// alert(tab);



function calculSommeInput() {
    let tab = [];
    let quitter = false;
    while (!quitter) {
        let reponse = prompt("Entrez un nombre :");
        if (reponse == "") {quitter = true;}
        for (let carac of reponse) {
            if (carac in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
                continue;
            } quitter = true;
        }
        if (quitter) {break;}
        tab.push(reponse);
    }
    let somme = 0;
    for (let i = 0; i < tab.length; i++) {
        somme += Number(tab[i]);
    }
    alert(somme);
}

// calculSommeInput();

let langages = [];

let buttonDebut = document.querySelector('#debut');
let buttonFin = document.querySelector('#fin');
let buttonEffacer = document.querySelector('#effacer');
let buttonAfficher = document.querySelector('#afficher');
function getValeur() {
    let val = document.querySelector('#valeur').value;
    document.querySelector('#valeur').value = "";
    return val;
}
function actualiserTabP() {
    document.querySelector('#tableau').innerHTML = langages.join(', ');
}
buttonDebut.addEventListener('click', function(e) {
    let val = getValeur();
    if (val != "") {
        langages.unshift(val);
        actualiserTabP();
    }
});
buttonFin.addEventListener('click', function(e) {
    let val = getValeur();
    if (val != "") {
        langages.push(val);
        actualiserTabP();
    }
});
buttonEffacer.addEventListener('click', function(e) {
    langages = [];
    actualiserTabP();
});
buttonAfficher.addEventListener('click', function(e) {
    alert(langages);
});

function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        alert("Hello, my name is " + this.name);
    }
}

let personne = new User("Geoffroy", 26);
// personne.sayHi();
let personne2 = new User("Bob", 30);
// personne2.sayHi();

function say(message) {
    return `je veux dire ${message}`;
}
console.log(typeof say);
console.log(Object.getPrototypeOf(say));

let tab = ['one', 'two', 'three'];
console.log(typeof tab);
console.log(Object.getPrototypeOf(tab));

let message = 'un string';
console.log(typeof message);
console.log(Object.getPrototypeOf(message));

let user1 = {
    firstname: 'geoffroy',
    lastname: 'cochard',
}
console.log(typeof user1);
console.log(Object.getPrototypeOf(user1));

function User(u,a,admin){
    this.username = u;
    this.acces = a;
    this.isAdmin = admin;
    this.profil = function() {
        return `Username is "${this.username}" and acces are ${this.acces}`;
    }
}

User.prototype.hasAccessOf = function(elem) {
    return this.acces.includes(elem);
}

let user = new User('geoffroy', ['admin','back'], false);
console.log(user.profil());
console.log(user.hasAccessOf('admin'));
console.log(user.hasAccessOf('front'));
console.log(user.hasAccessOf('back'));

function UserBack(u,admin){
    this.__proto__ = new User(u,['back'], admin);
    this.ajouterAcces = function(elem) {
        this.acces.push(elem);
    }
}

let userBack = new UserBack('claude', false);
console.log(userBack.profil());
userBack.ajouterAcces('front');
console.log(userBack.profil());

function UserFront(u,admin){
    this.__proto__ = new User(u,['front'], admin);
    this.ajouterAcces = function(elem) {
        this.acces.push(elem);
    }
}

let userFront = new UserFront('annie', true);
console.log(userFront.profil());
userFront.ajouterAcces('back');
console.log(userFront.profil());

class UserClass {
    constructor(u,a,admin) {
        this.username = u;
        this.acces = a;
        this.isAdmin = admin;
    }
    profil() {
        return `Username is "${this.username}" and acces are ${this.acces}`;
    }
    hasAccessOf(elem) {
        return this.acces.includes(elem);
    }
}

let userClass = new UserClass('geoffroy', ['admin','back'], false);
console.log(userClass.profil());
console.log(userClass.hasAccessOf('admin'));
console.log(userClass.hasAccessOf('front'));
console.log(userClass.hasAccessOf('back'));

class Clock {
    constructor({template}) {
        this.template = template;
        this.timer = null;
    }
    render(){
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(this.render(), 1000);
    }
}

let clock = new Clock({template: 'h:m:s'});
clock.start();

class Event {
    #_type;
    #_date;
    constructor(type, dateString) {
        if (type === undefined) {
            throw 'type manquant';
        }
        let date = new Date(dateString);
        if (date instanceof Date === false) {
            throw 'mauvais format de date';
        }
        this.#_type = type;
        this.#_date = date;
    }

    get type() {
        return this.#_type;
    }

    get date() {
        return this.#_date;
    }
}

class ConcertEvent extends Event {
    #_artist;
    constructor(artist, dateString) {
        super('concert', dateString);
        if (artist === undefined) {
            throw 'artiste manquant';
        }
        this.#_artist = artist;
    }

    get type() {
        return super.type + " de " + this.#_artist;
    }
}

class SportEvent extends Event {
    #_equipeA;
    #_equipeB;
    constructor(sport, equipeA, equipeB, dateString) {
        super(`Rencontre de ${sport}`, dateString);
        if (sport === undefined) {
            throw 'sport manquant';
        }
        this.#_equipeA = equipeA || 'équipe A';
        this.#_equipeB = equipeB || 'équipe B';
    }
    
    get type() {
        return super.type + " entre " + this.#_equipeA + " et " + this.#_equipeB;
    }
}

let ev = new Event('concert', '2020-01-01');
console.log(ev.type);
console.log(ev.date);
let concertEvent = new ConcertEvent('Geoffroy', '2020-01-01');
console.log(concertEvent.type);
console.log(concertEvent.date);
let sportEvent = new SportEvent('football', 'PSG', 'OM', '2020-01-01');
console.log(sportEvent.type);
console.log(sportEvent.date);

class EventFactory{
    constructor(type,data) {
        switch (type) {
            case 'sport':
                return new SportEvent(data.sport, data.equipeA, data.equipeB, data.dateString);
            case 'concert':
                return new ConcertEvent(data.artist, data.dateString);
            default:
                break;
        }
    }
}

let events = [
    {
        type: 'sport', 
        sport: 'basket', 
        teamA: 'OLB', 
        teamB: 'LA ROCHELLE', 
        date: '2023-12-25'
    },
    {
        type: 'sport', 
        sport: 'foot', 
        teamA: 'USO', 
        teamB: 'PSG', 
        date: '2024-01-10'
    },
    {
        type: 'concert', 
        artist: 'Machin', 
        date: '2024-01-10'
    },
];

events.forEach((values) => {
    let e = new EventFactory(values.type, values);
    console.log(e);
});

class listeRender{
    #container;
    #list = [];

    constructor(container) {
        this.#container = container;
    }

    set add(item) {
        this.#list.push(item);
    }

    render() {
        let ul = document.createElement('ul');
        for (const e of this.#list) {
            let li = document.createElement('li');
            li.textContent = e;
            ul.append(li);
        };
        let container = document.querySelector(this.#container);
        container.append(ul);
    }
}

let liste = new listeRender('#liste');
events.forEach((values) => {
    let e = new EventFactory(values.type, values);
    liste.add = e.type;
});

liste.render();
