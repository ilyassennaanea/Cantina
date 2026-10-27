const dialog = document.getElementById("recipeDialog");
const form = document.getElementById("recipeForm");
const recipeList = document.getElementById("recipeList");
const editDialog = document.getElementById("editDialog");
const editForm = document.getElementById("editForm");

document.getElementById("openRecipeForm").addEventListener("click", () => {
  dialog.showModal();
});

document.getElementById("close").addEventListener("click", () => {
  dialog.close();
});

document.getElementById("closeEdit").addEventListener("click", () => {
  editDialog.close();
});

document.getElementById("cancelEdit").addEventListener("click", () => {
  editDialog.close();
});
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const recipe = {
    name: data.get("name").trim(),
    category: data.get("category"),
    price: data.get("price")
  };

  const card = document.createElement("div");
  card.className =
    "inline-flex items-center gap-2 rounded-xl border border-[#EEE4DA] bg-[#FFFDF9] px-4 py-3 m-2 text-sm text-[#342B25] shadow-sm";

  const title = document.createElement("b");
  title.className = "font-bold";
  title.textContent = recipe.name;

  const category = document.createElement("span");
  category.textContent = ` · ${recipe.category}`;

  const price = document.createElement("span");
  price.textContent = ` · ${recipe.price} DH`;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => card.remove());

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.textContent = "Modifier";
  editButton.addEventListener("click", () => {
    editForm.elements.name.value = title.textContent;
    editForm.elements.category.value = card.dataset.category;
    editForm.elements.price.value = card.dataset.price;
    document.querySelectorAll('select[data-category]').forEach((select) => {
  if (select.dataset.category === recipe.category) {
    const option = document.createElement("option");
    option.value = recipe.name;
    option.textContent = `${recipe.name} · ${recipe.price} DH`;
    option.dataset.price = recipe.price;
    select.append(option);
  }
});

    
    editForm.currentCard = card;
    editDialog.showModal();
  });

  card.dataset.category = recipe.category;
  card.dataset.price = recipe.price;

  card.append(title, category, price, deleteButton, editButton);
  recipeList.append(card);

  form.reset();
  dialog.close();

});

editForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const card = editForm.currentCard;
  if (!card) return;

  const newName = editForm.elements.name.value.trim();
  const newCategory = editForm.elements.category.value;
  const newPrice = editForm.elements.price.value;

  card.querySelector("b").textContent = newName;

  const spans = card.querySelectorAll("span");
  spans[0].textContent = ` · ${newCategory}`;
  spans[1].textContent = ` · ${newPrice} DH`;

  card.dataset.category = newCategory;
  card.dataset.price = newPrice;

  editDialog.close();
});