// Accessing the DOM(tagName, className, id, querySelector, querySelectorAll).

// Node element, text, comment

let btn = document.querySelector('button');
let headerOne = document.getElementsByTagName('h1');
let demoClass = document.getElementsByClassName('demo-class');
let demoId = document.getElementById("demo-id");
let demoQueryClass = document.querySelector(".demo-class");
// let carContainer = document.querySelector('div');
let ul = document.querySelector('ul');
let myImg = document.querySelector('img');



headerOne[0].style.color = 'red';
demoClass[1].style.color = "blue";
demoId.style.color = "green";

// create element, textContent, appendChild, remove, inerHtml
let listOfCars = document.createElement('ol');
let carOne = document.createElement('li');
carOne.textContent = "Benze";
document.body.appendChild(listOfCars);
listOfCars.appendChild(carOne);

// Modifying classes (classList.toggle, classLists.add)

ul.classList.add('container');

headerOne[1].addEventListener('mouseenter', ()=> {
    headerOne[1].classList.toggle('swap');
})
headerOne[1].addEventListener('mouseleave', ()=> {
    headerOne[1].classList.toggle('swap');
})

// Modifying attributes (getAttribute, setAttribute, hasAttribute, removeAttribute)

btn.addEventListener('click', ()=> {
    myImg.setAttribute('src', './assets/New Bloom(magazine)-02-2.3.001-bigpicture_02_1.jpg');
})

myImg.setAttribute('class', 'img-class');

function handleBgChange() {
    document.body.style.backgroundColor = "pink"
} 


// headerOne[2].onclick = handleBgChange();
headerOne[2].addEventListener('click', function(){
    document.body.style.backgroundColor = "blue"
});










