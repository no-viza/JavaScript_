//Events

/*

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault(); //to prevent a default functionality
    // in this case, prevent the submit button from actually submitting

    // everything below happens after I click the button

    //console.log('click');
    document.querySelector('#my-form').style.background = 
    'orange';
    document.querySelector('body').classList.add('bg-dark');
    //document.querySelector('.items').lastElementChild.innerHTML = '<h1>potato</h1>';
});

*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    // to get the actual name instead of the element itself
    //console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000 /* millisecond */);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }


}