// CONSEGNA
/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto. */

/* MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. */
const membriTeam = [
    {
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder & CEO",
        "foto" : "wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief Editor",
        "foto" : "angela-caroll-chief-editor.jpg"
    },
    {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto" : "walter-gordon-office-manager.jpg"
    },
    {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "foto" : "angela-lopez-social-media-manager.jpg"
    },
    {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "foto" : "scott-estrada-developer.jpg"
    },
    {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "foto" : "barbara-ramos-graphic-designer.jpg"
    },
];

console.log(membriTeam);

/* MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto */
for (let i = 0; i < membriTeam.length; i++){

    let membro = membriTeam[i];

    console.log(membro.nome, membro.ruolo, membro.foto);
}


/* MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe */







// FUNZIONI
// Creo la funzione per generare vari elementi con classi o id
function createElement (typeElement, idClassElement) {
    // creo l'elemento
    const element = document.createElement(typeElement);
    element.classList.add(idClassElement);

    // ritorno l'elemento
    return element;
} 