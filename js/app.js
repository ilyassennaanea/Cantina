// Sélectionner les éléments HTML
const dialog = document.getElementById("recipeDialog");
const form = document.getElementById("recipeForm");
const recipeList = document.getElementById("recipeList");

const editDialog = document.getElementById("editDialog");
const editForm = document.getElementById("editForm");

// Ouvrir le formulaire d'ajout
document.getElementById("openRecipeForm").addEventListener("click", () => {
  dialog.showModal();
});

// Fermer le formulaire d'ajout
document.getElementById("close").addEventListener("click", () => {
  dialog.close();
});

// Fermer le formulaire de modification
document.getElementById("closeEdit").addEventListener("click", () => {
  editDialog.close();
});

document.getElementById("cancelEdit").addEventListener("click", () => {
  editDialog.close();
});

// Ajouter une recette
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Récupérer les valeurs du formulaire
  const data = new FormData(form);

  const recipe = {
    name: data.get("name").trim(),
    category: data.get("category"),
    price: data.get("price")
  };

  // Créer la carte
  const card = document.createElement("div");
  card.className =
    "inline-flex items-center gap-2 rounded-xl border border-[#EEE4DA] bg-[#FFFDF9] px-4 py-3 m-2 text-sm text-[#342B25] shadow-sm";

  card.dataset.category = recipe.category;
  card.dataset.price = recipe.price;

  const title = document.createElement("b");
  title.className = "font-bold";
  title.textContent = recipe.name;

  const categoryText = document.createElement("span");
  categoryText.textContent = ` · ${recipe.category}`;

  const priceText = document.createElement("span");
  priceText.textContent = ` · ${recipe.price} DH`;

  // Créer le bouton de suppression
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
    card.remove();

    // Supprimer cette recette des listes de choix
    document.querySelectorAll("select[data-category]").forEach((select) => {
      [...select.options].forEach((option) => {
        if (
          option.value === recipe.name &&
          option.dataset.category === recipe.category
        ) {
          option.remove();
        }
      });
    });
  });

  // Créer le bouton de modification
  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.textContent = "Modifier";

  editButton.addEventListener("click", () => {
    // Remplir le formulaire avec les informations de cette carte
    editForm.elements.name.value = title.textContent;
    editForm.elements.category.value = card.dataset.category;
    editForm.elements.price.value = card.dataset.price;

    // Garder la carte sélectionnée pour la modifier ensuite
    editForm.currentCard = card;

    editDialog.showModal();
  });

  // Ajouter les éléments dans la carte
  card.append(title, categoryText, priceText, deleteButton, editButton);
  recipeList.append(card);

  // Ajouter la recette à la liste de choix de sa catégorie
  document.querySelectorAll("select[data-category]").forEach((select) => {
    if (select.dataset.category === recipe.category) {
      const option = document.createElement("option");
      option.value = recipe.name;
      option.textContent = `${recipe.name} · ${recipe.price} DH`;
      option.dataset.price = recipe.price;
      option.dataset.category = recipe.category;
      select.append(option);
    }
  });

  // Vider et fermer le formulaire d'ajout
  form.reset();
  dialog.close();
});

// Enregistrer les modifications
editForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const card = editForm.currentCard;
  if (!card) return;

  // Garder les anciennes informations
  const oldName = card.querySelector("b").textContent;
  const oldCategory = card.dataset.category;

  // Récupérer les nouvelles informations
  const newName = editForm.elements.name.value.trim();
  const newCategory = editForm.elements.category.value;
  const newPrice = editForm.elements.price.value;

  // Modifier le texte de la carte
  card.querySelector("b").textContent = newName;

  const spans = card.querySelectorAll("span");
  spans[0].textContent = ` · ${newCategory}`;
  spans[1].textContent = ` · ${newPrice} DH`;

  // Enregistrer les nouvelles informations dans la carte
  card.dataset.category = newCategory;
  card.dataset.price = newPrice;

  // Supprimer l'ancienne recette des listes de choix
  document.querySelectorAll("select[data-category]").forEach((select) => {
    [...select.options].forEach((option) => {
      if (
        option.value === oldName &&
        option.dataset.category === oldCategory
      ) {
        option.remove();
      }
    });

    // Ajouter la recette modifiée dans la liste de sa nouvelle catégorie
    if (select.dataset.category === newCategory) {
      const option = document.createElement("option");
      option.value = newName;
      option.textContent = `${newName} · ${newPrice} DH`;
      option.dataset.price = newPrice;
      option.dataset.category = newCategory;
      select.append(option);
    }
  });

  // Fermer le formulaire de modification
  editDialog.close();
});