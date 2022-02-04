const colour = document.querySelector('#color');
const place = document.querySelector('#place');
const ritual = document.querySelector('#ritual');


function favouriteColour(){
    alert('My favourite colour is red');
}

function favouritePlace(){
    alert('My favourite place is New York');
}

function favouriteRitual(){
    alert('My favourite favourite is watching my favourite musicians live');
}


colour.addEventListener('click', favouriteColour);
place.addEventListener('click', favouritePlace);
ritual.addEventListener('click',favouriteRitual);

colour.classList.add('buttonChange');
place.classList.add('buttonChange');
ritual.classList.add('buttonChange');