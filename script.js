let  inputitems = [];

function fetchinputdata(){
let inputdata = document.querySelector("#input-type");
let item = inputdata.value;
console.log(item);
inputitems.push(item);
console.log(inputitems);
inputdata.value="";
putdata();

}
function deleteItem(index) {
  inputitems.splice(index, 1);
  putdata();
}

function putdata() {
  const displayitem = document.querySelector(".item p");
  displayitem.innerHTML = ""; // clear previous content

  inputitems.forEach((item, index) => {
    displayitem.innerHTML += `${item} <button onclick="deleteItem(${index})" id="delete-btn">Delete</button><br>`;
  });
}
fetchinputdata();
putdata();
