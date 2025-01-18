Voici un exemple de **README** (en français) que vous pouvez adapter et améliorer selon vos besoins. Il présente la structure classique d'un projet sur GitHub. Vous pourrez y ajouter des captures d’écran, des badges, des liens vers vos pages démo, etc.

---

# To-do List

> Consolidation de mon apprentissage avec un projet simple : une To-do list développée en JavaScript, HTML et CSS.

Ce projet est une **application de To-do list** qui permet d’ajouter des tâches, de les marquer comme réalisées et de les supprimer. J’y intègre plusieurs fonctionnalités pour pratiquer la manipulation du DOM, le stockage local (LocalStorage) et la navigation entre différentes sections.

## Sommaire
1. [Aperçu du projet](#aperçu-du-projet)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies utilisées](#technologies-utilisées)
4. [Installation](#installation)
5. [Utilisation](#utilisation)
6. [Améliorations prévues](#améliorations-prévues)
7. [Auteurs](#auteurs)


---

## Aperçu du projet

Une **To-do list** basique organisée en **trois sections** principales :
1. **Formulaire** pour ajouter une nouvelle tâche (avec un nom et une description).
2. **Liste des tâches à faire** (section “To-do”).
3. **Liste des tâches réalisées** (section “Done”).

Le passage d’une section à l’autre se fait via des **boutons** (Next / Back). Les tâches sont **enregistrées dans le LocalStorage**, permettant de **persister** les données même après rafraîchissement de la page.

---

## Fonctionnalités

- **Ajout de tâche** avec nom et description.
- **Stockage en LocalStorage** : les tâches sont enregistrées localement et restaurées au rechargement de la page.
- **Validation d’une tâche** : lorsqu’une tâche est terminée, on peut la basculer dans la liste “Done”.
- **Affichage dynamique** : chaque nouvelle tâche ajoutée est immédiatement affichée grâce à la manipulation du DOM.
- **Navigation** entre trois étapes (Formulaire → To-do → Done) à l’aide de boutons Next et Back.

---

## Technologies utilisées

- **HTML5** : structure de la page.
- **CSS3** : mise en forme et styles (cartes, transitions au survol, etc.).
- **JavaScript (ES6+)** :  
  - Manipulation du DOM (ajout dynamique de cartes-tâches).  
  - LocalStorage (persistant).  
  - Gestion des événements (clics, soumission du formulaire).

---

## Installation

1. **Cloner** ce dépôt ou téléchargez les fichiers ZIP.
   ```bash
   git clone https://github.com/Komedjadavid/To-do-list.git
   ```
2. **Ouvrir** le fichier `index.html` dans votre navigateur (Chrome, Firefox, etc.).

*(Aucune dépendance supplémentaire n’est requise, le projet est 100% front-end.)*

---

## Utilisation

1. **Étape 1** : Dans la première page (Formulaire), entrez le nom de la tâche et une courte description puis cliquez sur **Ajouter**.  
2. Cliquez sur **Next** pour passer à la section “Liste des tâches à faire”.  
3. **Étape 2** : Vous voyez la liste des tâches ajoutées. Chaque tâche possède un bouton **Valider** (ou autre bouton d’action) qui la déplacera dans la section “Done”.  
4. Cliquez à nouveau sur **Next** pour accéder à la section des tâches réalisées.  
5. **Étape 3** : Consultez la liste des tâches terminées.

En cas de rafraîchissement de la page, vos tâches sont toujours présentes grâce à l’utilisation du **LocalStorage**.

---

## Améliorations prévues

- **Bouton Supprimer** pour retirer définitivement une tâche.
- **Filtrage & Recherche** : rechercher une tâche par nom/description.
- **Mode Dark** : ajouter un thème sombre.
- **Organisation** en catégories ou tags.
- **Tests unitaires** (Jest ou autre) pour valider la logique JavaScript.

---

## Auteurs

- **[Komedja / Komedjadavid]**  
  
  

*(N’hésitez pas à mentionner d’autres contributeurs si vous travaillez à plusieurs.)*

---


---

### Merci d’avoir consulté ce README ! 

Si vous avez des questions ou des suggestions, n’hésitez pas à créer une **issue** ou à me **contacter** directement. Bon code !