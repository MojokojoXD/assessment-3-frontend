console.log("hello world");

const catPic = document.querySelector('img');

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully');
}

function pictureMouseOver()
{
	alert('Go on, you\'re doing an amazing job');
}


let form = document.querySelector('form#contact');

catPic.addEventListener('mouseover',pictureMouseOver);
form.addEventListener('submit', handleSubmit);