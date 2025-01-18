
let taches = [];
let doneTaches = [];

// Récupération localStorage
const dataRecuperee = localStorage.getItem('taches');
if (dataRecuperee) {
  taches = JSON.parse(dataRecuperee);
}

const dataDone = localStorage.getItem('doneTaches');
if (dataDone) {
  doneTaches = JSON.parse(dataDone);
}

// Fonction d'affichage "à faire"
function renderTaches() {
  const todoContainer = document.querySelector('.todo');
  todoContainer.innerHTML = '<h1>Liste des choses à faire</h1>';

  taches.forEach((tache, index) => {
    const divTache = document.createElement('div');
    divTache.classList.add('tache');

    const h2 = document.createElement('h2');
    h2.textContent = tache.nom;

    const p = document.createElement('p');
    p.textContent = tache.description;

    // Bouton "Valider"
    const validerBtn = document.createElement('button');
    validerBtn.textContent = 'Valider';
    validerBtn.addEventListener('click', () => {
      validerTache(index);
    });

    divTache.appendChild(h2);
    divTache.appendChild(p);
    divTache.appendChild(validerBtn);

    todoContainer.appendChild(divTache);
  });
}

// Fonction d'affichage "terminées"
function renderDoneTaches() {
  const doneContainer = document.querySelector('.done');
  doneContainer.innerHTML = '<h1>Les tâches réalisées</h1>';

  doneTaches.forEach((tache) => {
    const divTache = document.createElement('div');
    divTache.classList.add('tache');

    const h2 = document.createElement('h2');
    h2.textContent = tache.nom;

    const p = document.createElement('p');
    p.textContent = tache.description;

    divTache.appendChild(h2);
    divTache.appendChild(p);

    doneContainer.appendChild(divTache);
  });
}

// Valider une tâche => passage taches[] -> doneTaches[]
function validerTache(index) {
  const tacheValidee = taches[index];
  taches.splice(index, 1);
  doneTaches.push(tacheValidee);

  localStorage.setItem('taches', JSON.stringify(taches));
  localStorage.setItem('doneTaches', JSON.stringify(doneTaches));

  renderTaches();
  renderDoneTaches();
}

// Affichage initial si on a déjà des données
renderTaches();
renderDoneTaches();

// EventListener sur le formulaire
const form = document.getElementById('formulaire');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nom = document.getElementById('nom').value.trim();
  const description = document.getElementById('description').value.trim();

  if (!nom) {
    alert("Nommez la tâche");
    return;
  }
  if (!description) {
    alert("Veuillez fournir une description");
    return;
  }

  const nouvelleTache = { nom, description };
  taches.push(nouvelleTache);

  // Sauvegarde
  localStorage.setItem('taches', JSON.stringify(taches));

  // Réafficher la liste "à faire"
  renderTaches();

  form.reset();
});

// -- Gestion Next/Back (inchangé) --
let currentStep = 1;
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

nextBtn.addEventListener("click", () => {
  if (currentStep === 1) {
    step1.style.display = "none";
    step2.style.display = "inline";
    currentStep = 2;
  } else if (currentStep === 2) {
    step2.style.display = "none";
    step3.style.display = "inline";
    currentStep = 3;
    if (currentStep !== 3) {
      nextBtn.style.display = "none";
    } else {
      backBtn.style.display = "inline";
    }
  }
});

backBtn.addEventListener("click", () => {
  if (currentStep === 2) {
    step1.style.display = "inline";
    step2.style.display = "none";
    currentStep = 1;
    if (currentStep !== 1) {
      backBtn.style.display = "none";
    } else {
      nextBtn.style.display = "inline";
    }
  } else if (currentStep === 3) {
    step2.style.display = "inline";
    step3.style.display = "none";
    currentStep = 2;
  }
});


