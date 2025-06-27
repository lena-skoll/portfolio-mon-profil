// Objet contenant les descriptions pour chaque compétence
const descriptions = {
    html: "HTML (HyperText Markup Language) est le langage standard utilisé pour créer et structurer les pages web.",
    css: "CSS (Cascading Style Sheets) permet de styliser et de mettre en forme les éléments HTML d'une page web.",
    js: "JavaScript est un langage de programmation qui permet de rendre les pages web interactives.",
    python: "Python est un langage de programmation polyvalent, souvent utilisé pour le développement web, la data science et l'automatisation.",
    git: "Git est un système de contrôle de version qui permet de gérer les modifications du code source et GitHub est une plateforme pour héberger ces projets."
  };
  
  // Initialiser le compteur des clics à partir du localStorage ou par défaut à 0
  let compteur = JSON.parse(localStorage.getItem("compteurCompetences")) || {
    html: 0,
    css: 0,
    js: 0,
    python: 0,
    git: 0
  };
  
  // Fonction pour afficher la description d’une compétence et mettre à jour le compteur
  function afficherCompetence(cle) {
    // Afficher la description
    const descriptionDiv = document.getElementById("description");
    descriptionDiv.textContent = descriptions[cle];
  
    // Incrémenter le compteur
    compteur[cle]++;
  
    // Sauvegarder dans localStorage
    localStorage.setItem("compteurCompetences", JSON.stringify(compteur));
  
    // Mettre à jour l’affichage du compteur
    afficherCompteur();
  }
  
  // Fonction pour afficher le compteur dans la liste dédiée
  function afficherCompteur() {
    const listeCompteur = document.getElementById("liste-compteur");
    listeCompteur.innerHTML = ""; // vider avant de réafficher
  
    for (const cle in compteur) {
      const li = document.createElement("li");
      li.textContent = `${cle.toUpperCase()} (${compteur[cle]} clic${compteur[cle] > 1 ? "s" : ""})`;
      listeCompteur.appendChild(li);
    }
  }
  
  // Au chargement de la page, afficher le compteur actuel
  window.onload = function() {
    afficherCompteur();
  };
  