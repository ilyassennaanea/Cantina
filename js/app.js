const dialog = document.getElementById('recipeDialog');
const form = document.getElementById('recipeForm');
const recipeList = document.getElementById('recipeList');
const fermer = document.getElementById('close');
const dialogé = document.querySelector("#editDialog");
const editForm = document.querySelector("#editForm");
document.querySelector("#closeEdit").addEventListener("click", function () {
  editDialog.close();
});

document.querySelector("#cancelEdit").addEventListener("click", function () {
  editDialog.close();
});


fermer.addEventListener('click', () => {
  dialog.close();
});

document.getElementById('openRecipeForm').addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = data.get('name').trim();
  const category = data.get('category');
  const price = data.get('price');


  const card = document.createElement('div');
  card.className =
    'inline-flex items-center gap-2 rounded-xl border border-[#EEE4DA] bg-[#FFFDF9] px-4 py-3 m-2 text-sm text-[#342B25] shadow-sm';

  const title = document.createElement('b');
  title.textContent = name;
  title.className = 'font-bold';

  const cate = document.createElement('span');
  cate.textContent = ` · ${category}`;

  const prix = document.createElement('span');
  prix.textContent = ` · ${price} DH`;
  const btnDelet=document.createElement('button')
  btnDelet.textContent = 'Delete';
   btnDelet.addEventListener('click',function(){
    card.remove()
  })
  const bntModifier = document.createElement('button')
  bntModifier.textContent='Modifier'
 bntModifier.addEventListener('click',function(){
  editForm.elements.name.value = name;
  editForm.elements.category.value = category;
  editForm.elements.price.value = price;
  dialogé.showModal();
 })
 editForm.addEventListener("submit", function (event) {
  event.preventDefault(); // كيمنع reload ديال الصفحة

  // حدّث معلومات الكارت
  title.textContent = editForm.elements.name.value;
  cate.textContent = ` · ${editForm.elements.category.value}`;
  prix.textContent = ` · ${editForm.elements.price.value} DH`;

  // سدّ popup
  editDialog.close();
});
  card.append(title, cate, prix,btnDelet,bntModifier);
recipeList.append(card);
  document.querySelectorAll('select[data-category]').forEach((selectMenu) => {
    if (selectMenu.dataset.category === category) {
      const option = document.createElement('option');
      
      option.dataset.price = price
      option.value = name;
      option.textContent = `${name} · ${price} DH`;
      selectMenu.append(option);
    }
  });

  form.reset();
  dialog.close();
});

const vendredidesert = document.getElementById('vendredidesert');
const vendrediplat = document.getElementById('vendrediplat');
const vendredientre = document.getElementById('vendredientre');

const jeudientre = document.getElementById('jeudientre');
const jeudiplat = document.getElementById('jeudiplat');
const jeudidesert = document.getElementById('jeudidesert');

const mercredientre = document.getElementById('mercredientre');
const mercrediplat = document.getElementById('mercrediplat');
const mercredidesert = document.getElementById('mercredidesert');


const mardientre = document.getElementById('mardientre');
const mardiplat = document.getElementById('mardiplat');
const mardidesert = document.getElementById('mardidesert');




// document.querySelectorAll('select[data-category]').forEach((select) => resetDef(day));


function resetDef(day){

const lundientre = document.getElementById(day+'entre');
const lundiplat = document.getElementById(day+'plat');
const lundidesert = document.getElementById(day+'desert');
const totalLundiHtml = document.getElementById('total'+day);

console.log(totalLundiHtml)





  const totalLundi =
      Number(lundientre.selectedOptions[0]?.dataset.price || 0) +
      Number(lundiplat.selectedOptions[0]?.dataset.price || 0) +
      Number(lundidesert.selectedOptions[0]?.dataset.price || 0);

    console.log(totalLundi);

    if(totalLundi > 50){
      alert("vous avez passé la budger de repat !!");
      lundientre.selectedIndex = 0;
      lundiplat.selectedIndex = 0;
      lundidesert.selectedIndex = 0;
    }else{
      totalLundiHtml.innerHTML = totalLundi;
    }
}
