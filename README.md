1. HTML

HTML sert à créer la structure de la page : les formulaires, les boutons, les cartes et les listes.

<form> : formulaire utilisé pour saisir ou modifier les informations d’une recette.

<input> : champ de saisie, par exemple pour le nom ou le prix.

<select> : liste déroulante utilisée pour choisir une catégorie ou une recette.

<option> : choix disponible dans une liste <select>.

<button> : bouton qui déclenche une action.

<dialog> : fenêtre modale qui s’ouvre au-dessus de la page.

id : identifiant qui permet de retrouver un élément HTML avec JavaScript.

data-* : attribut personnalisé utilisé pour enregistrer une information sur un élément HTML, par exemple data-category ou data-price.

2. JavaScript et le DOM

Le DOM est la représentation de la page HTML que JavaScript peut lire et modifier.

document.getElementById() : sélectionne un élément grâce à son id.

document.querySelector() : sélectionne le premier élément qui correspond à un sélecteur CSS.

document.querySelectorAll() : sélectionne tous les éléments qui correspondent au sélecteur.

document.createElement() : crée un nouvel élément HTML.

textContent : lit ou change le texte d’un élément.

append() : ajoute un ou plusieurs éléments à un autre élément.

remove() : supprime un élément de la page.

dataset : permet de lire ou modifier les attributs data-* en JavaScript.

3. Événements

Un événement est une action réalisée par l’utilisateur, comme un clic ou l’envoi d’un formulaire.

addEventListener() : écoute un événement et exécute une fonction quand il se produit.

click : événement déclenché quand l’utilisateur clique sur un bouton.

submit : événement déclenché quand un formulaire est envoyé.

event : objet qui contient des informations sur l’événement.

event.preventDefault() : empêche le comportement normal du formulaire, comme le rechargement de la page.

event.stopPropagation() : empêche un événement de continuer vers les éléments parents.

4. Formulaires

FormData : récupère les valeurs saisies dans un formulaire.

form.reset() : vide les champs du formulaire.

required : rend un champ obligatoire.

value : correspond à la valeur saisie ou sélectionnée dans un champ.

trim() : enlève les espaces au début et à la fin d’un texte.

5. Fenêtres modales

showModal() : ouvre une fenêtre <dialog>.

close() : ferme la fenêtre.

stopPropagation() peut être utilisé pour qu’un clic à l’intérieur de la fenêtre ne la ferme pas.

6. Listes déroulantes

select.options : contient les choix d’une liste déroulante.

selectedOptions : contient le choix actuellement sélectionné.

selectedIndex : indique la position du choix sélectionné.

option.remove() : supprime un choix de la liste.

option.dataset.price : permet de garder le prix d’une recette dans son option.

7. Validation avec Regex

Une Regex est une expression utilisée pour vérifier le format d’un texte.

Dans ce projet, elle peut servir à vérifier que le nom d’une recette respecte la longueur demandée, par exemple entre 3 et 30 caractères.

La validation permet d’afficher un message d’erreur et de désactiver le bouton tant que les informations ne sont pas correctes.

8. Calculs et conditions

Number() : transforme une valeur en nombre pour effectuer un calcul.

if : exécute une action si une condition est vraie.

forEach() : répète une action pour chaque élément d’une liste.

querySelectorAll() avec forEach() : permet, par exemple, de parcourir toutes les listes déroulantes.

dataset : peut conserver le prix ou la catégorie d’une recette pour les calculs.

Le coût d’une journée est calculé ainsi :

Entrée + Plat principal + Dessert

Si le total dépasse 50 DH, l’application bloque la sélection et affiche un message d’erreur.

9. Délégation d’événements

La délégation d’événements consiste à écouter les événements sur un conteneur parent au lieu d’ajouter un écouteur à chaque bouton.

C’est utile lorsque les cartes ou les boutons sont créés dynamiquement avec JavaScript.
