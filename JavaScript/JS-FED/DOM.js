//Single element 

//'.' to specify its a class
// if the mehtod is specifically for class then no need to
// include it.
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

//Multiple elements
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));

const item = document.querySelectorAll('.item');

item.forEach((item)=>console.log(item));

const ul = document.querySelector('.items');

// ul.remove(); => will remove the whole list
// ul.lastElementChild.remove(); removes last item of the list
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'There';
//ul.lastElementChild.innerHTML = '<h4>Friend</h4>';

//const btn = document.querySelector('.btn');
//btn.style.background = 'purple';