fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/restaurant-bresilien.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
       //mon header
       let header=document.getElementById("header");
       console.log(data.nomCommercial);

       let h1=document.createElement("h1");
       h1.textContent=data.nomCommercial;
    //    crer mes containers
       let infosContainer=document.createElement("div");
       infosContainer.className=("infosContainer")
       let infoGauche=document.createElement("div");
       infoGauche.className=("infoGauche")
       let infoDroite= document.createElement("div");
       infoDroite.className=("infoDroite")
       let accroche=document.createElement("p");
       accroche.textContent=data.texteAccroche;

       let bouton=document.createElement("button");
       bouton.textContent=data.texteBouton;


let Steve=Object.keys(data);
let promesseClients=document.createElement("h2");

promesseClients.textContent=Steve[3]+" :";

// tout embriquer
header.appendChild(h1);
header.appendChild(infosContainer);
infosContainer.appendChild(infoGauche);
infoGauche.appendChild(accroche);
infoGauche.appendChild(bouton);
infosContainer.appendChild(infoDroite);
infoDroite.appendChild(promesseClients);

// rajouter mes commentaires
data.promessesClient.forEach(element => {
    let p=document.createElement("p");
    p.textContent=element;
    infoDroite.appendChild(p);
});

// récupérer mon main
let main=document.getElementById("main");
// ma première section
let platsContainer=document.getElementById("platsContainer");
let plats=document.createElement("h2");
plats.textContent=Steve[4]+" :";
let grandeCarte=document.createElement("div");
grandeCarte.className="grandeCarte"



data.plats.forEach(element => {    
    // creer ma div de carte
let platCarte=document.createElement("div");
platCarte.className="platCarte"

// creer mon image
let img=document.createElement("img");
img.src=element["image-url"];
// creer mon h3
let h3=document.createElement("h3");
h3.textContent=element.nom;
// creer mon p
let par=document.createElement("p");
par.textContent=element.desc;
par.className="pPlat"
console.log(element.desc);
platCarte.appendChild(img);
platCarte.appendChild(h3);
platCarte.appendChild(par);
grandeCarte.appendChild(platCarte);
});
// troisième section
let servicesContainer=document.getElementById("servicesContainer");
let serviceType=document.createElement("h2");
serviceType.textContent=Steve[5];
let serviceGrandeCarte=document.createElement("div");
serviceGrandeCarte.className="serviceGrandeCarte"

// eternel for each
data.services.forEach(element => {
    let servicesCarte=document.createElement("div");
    servicesCarte.className="servicesCarte"
    let serviceNom=document.createElement("h3");
    serviceNom.textContent=element.nom;
    console.log(serviceNom);
    
    let commentaire=document.createElement("p");
    commentaire.textContent=element.desc;
    servicesCarte.appendChild(serviceNom);
    servicesCarte.appendChild(commentaire);
    serviceGrandeCarte.appendChild(servicesCarte);
    console.log(element.nom);
});

let footer=document.getElementById("footer");

let avis=document.createElement("h2");
avis.textContent=Steve[6]+" :";

data.temoignages.forEach(element => {
    let commentairesContainer=document.createElement("div")
    commentairesContainer.className="commentairesContainer"

    let icon=document.createElement("i")
    icon.className=("fa-solid fa-user")
    let commentaireCarte=document.createElement("div");
    commentairesContainer.className="commentairesContainer"

    let prenom=document.createElement("h3");
    prenom.textContent=element.prenom;
    let experience=document.createElement("h4");
    experience.textContent=element.typeExperience;
    let descr=document.createElement("p");
    descr.textContent=element.commentaire;
    // ma note
    let noteContainer=document.createElement("section")
    noteContainer.className=("noteContainer")
    // let iconNote=document.createElement("i")
    // iconNote.classList=("fa-solid fa-star iconNote" )
    let note=document.createElement("p")
    note.innerHTML= `${element.note} <i class="fa-solid fa-star"></i>`
    // mettre tout mes éléments les uns dans les autres
    noteContainer.appendChild(prenom)
    commentaireCarte.appendChild(noteContainer)
    commentaireCarte.appendChild(experience)
    commentaireCarte.appendChild(descr)
    commentaireCarte.appendChild(note)
    noteContainer.appendChild(note)
    // noteContainer.appendChild(iconNote)
    commentairesContainer.appendChild(icon)
    commentairesContainer.appendChild(commentaireCarte)
    
    footer.appendChild(commentairesContainer)

});

main.appendChild(platsContainer);
main.appendChild(servicesContainer);
platsContainer.appendChild(plats);
platsContainer.appendChild(grandeCarte);
servicesContainer.appendChild(serviceType);
servicesContainer.appendChild(serviceGrandeCarte);

console.log(data);


})
.catch(error => console.error('Error:', error));