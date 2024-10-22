let mode = document.querySelector(".mode");
let goUp = document.querySelector(".go-up");
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
let moodCR = "create";
let moodSearch = "title";
let indexUpdate;
/*----------------------------------------------------*/
/* Start Mode */
let localMode = localStorage.getItem("localMode");

if(localMode != null){
  if(localMode == "light"){
    mode.querySelector("i").className = "moon fa-solid fa-moon";
    document.body.classList.add("light");
  }else{
    mode.querySelector("i").className = "sun fa-solid fa-sun";
    document.body.classList.remove("light");
  }
}

mode.onclick = function(){
  if(mode.querySelector("i").className.includes("moon")){
    mode.querySelector("i").className = "sun fa-solid fa-sun";
    localStorage.setItem("localMode", "dark");
    document.body.classList.remove("light");
  }else{
    mode.querySelector("i").className = "moon fa-solid fa-moon";
    localStorage.setItem("localMode", "light");
    document.body.classList.add("light");
  }
}
/* End Mode */
/*----------------------------------------------------*/
/* Start Go Up */
window.onscroll = function(){
  if(window.scrollY > 110){
    goUp.classList.add("active");
  }else{
    goUp.classList.remove("active");
  }
}
/* End Go Up */
/*----------------------------------------------------*/
/* Start Total */
function getTotal(){
  if(price.value != ''){
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.backgroundColor = document.documentElement.style.getPropertyValue("--total-color");
  }else{
    total.innerHTML = '';
    total.style.backgroundColor = document.documentElement.style.getPropertyValue("--button-hover-color");
  }
}
/* End Total */
/*----------------------------------------------------*/
/* Start LocalStorage */
let dataProducts;
if(localStorage.product != null){
  dataProducts = JSON.parse(localStorage.product);
}else{
  dataProducts = [];
}

submit.onclick = function (){
  let newProduct = {
    title : title.value.toLowerCase(),
    price : price.value,
    taxes : taxes.value,
    ads : ads.value,
    discount : discount.value,
    total : total.innerHTML,
    count : count.value,
    category : category.value.toLowerCase(),
  }

  if(title.value != '' && price.value != '' && count.value >= 1 && count.value <= 100 && category.value != ''){
    if(moodCR == "create"){
      if(count.value > 1){
        for(let i = 0; i < count.value; i++){
          dataProducts.push(newProduct);
        }
      }else{
        dataProducts.push(newProduct);
      }
    }else{
      dataProducts[indexUpdate] = newProduct;
      count.style.display = "block";
      submit.innerHTML = "Create";
      moodCR = "create";
    }
    clearInputs();
  }

  localStorage.setItem("product", JSON.stringify(dataProducts));

  showData();
}
/* End LocalStorage */
/*----------------------------------------------------*/
/* Start Clear Inputs */
function clearInputs(){
  title.value = '';
  price.value = '';
  taxes.value = '';
  ads.value = '';
  discount.value = '';
  total.innerHTML = '';
  count.value = '';
  category.value = '';
  total.style.backgroundColor = "rgb(16, 48, 40)";
}
/* Start Clear Inputs */
/*----------------------------------------------------*/
/* Start Read Data */
function showData(){
  let table = '';

  for(let i = 0; i < dataProducts.length; i++){
    table += `
      <tr>
        <td>${i + 1}</td>
        <td>${dataProducts[i].title}</td>
        <td>${dataProducts[i].price}</td>
        <td>${dataProducts[i].taxes}</td>
        <td>${dataProducts[i].ads}</td>
        <td>${dataProducts[i].discount}</td>
        <td>${dataProducts[i].total}</td>
        <td>${dataProducts[i].category}</td>
        <td><button onclick="updateElement(${i})" class="update button">Update</button></td>
        <td><button onclick="deleteElement(${i})" class="delete button">Delete</button></td>
      </tr>
      `
  }
  document.getElementById("tbody").innerHTML = table;

  let deleteAll = document.getElementById("deleteAll");
  if(dataProducts.length > 0){
    deleteAll.innerHTML = `<button onclick="deleteAllElements()" class="button">Delete All (${dataProducts.length})</button>`;
  }else{
    deleteAll.innerHTML = '';
  }
}
showData();
/* Start Read Data */
/*----------------------------------------------------*/
/* Start Delete Element */
function deleteElement(i){
  dataProducts.splice(i, 1);
  localStorage.product = JSON.stringify(dataProducts);
  showData();
}
/* End Delete Element */
/*----------------------------------------------------*/
/* Start Delete All Elements */
function deleteAllElements(){
  dataProducts.splice(0);
  localStorage.product = JSON.stringify(dataProducts);
  showData();
}
/* End Delete All Elements */
/*----------------------------------------------------*/
/* Start Update Element */
function updateElement(i){
  indexUpdate = i;
  moodCR = "update";

  title.value = dataProducts[i].title;
  price.value = dataProducts[i].price;
  taxes.value = dataProducts[i].taxes;
  ads.value = dataProducts[i].ads;
  discount.value = dataProducts[i].discount;
  getTotal();
  count.style.display = "none";
  category.value = dataProducts[i].category;
  submit.innerHTML = "Update";

  scroll({
    top: 0,
    behavior: "smooth",
  })
}
/* End Update Element */
/*----------------------------------------------------*/
/* Start Search */
function getSearchMode(id){
  let search = document.getElementById("search");
  if(id == "searchTitle"){
    moodSearch = "title";
  }else{
    moodSearch = "category";
  }
  search.placeholder = "Search By " + moodSearch[0].toUpperCase() + moodSearch.slice(1);
  search.focus();
  search.value = '';
  showData();
}

function searchData(value){
  let table = '';
  for(let i = 0; i < dataProducts.length; i++){

    if(moodSearch === "title"){
      if(dataProducts[i].title.includes(value.toLowerCase())){
        table += `
        <tr>
          <td>${i + 1}</td>
          <td>${dataProducts[i].title}</td>
          <td>${dataProducts[i].price}</td>
          <td>${dataProducts[i].taxes}</td>
          <td>${dataProducts[i].ads}</td>
          <td>${dataProducts[i].discount}</td>
          <td>${dataProducts[i].total}</td>
          <td>${dataProducts[i].category}</td>
          <td><button onclick="updateElement(${i})" class="update button">Update</button></td>
          <td><button onclick="deleteElement(${i})" class="delete button">Delete</button></td>
          </tr>
        `
      }
    }else{
      if(dataProducts[i].category.includes(value.toLowerCase())){
        table += `
        <tr>
          <td>${i + 1}</td>
          <td>${dataProducts[i].title}</td>
          <td>${dataProducts[i].price}</td>
          <td>${dataProducts[i].taxes}</td>
          <td>${dataProducts[i].ads}</td>
          <td>${dataProducts[i].discount}</td>
          <td>${dataProducts[i].total}</td>
          <td>${dataProducts[i].category}</td>
          <td><button onclick="updateElement(${i})" class="update button">Update</button></td>
          <td><button onclick="deleteElement(${i})" class="delete button">Delete</button></td>
          </tr>
        `
      }
    }

  }

  document.getElementById("tbody").innerHTML = table;
}
/* End Search */