const myTextArea = document.querySelector('textarea');
const myParagraph = document.querySelector('p.description');
const myButton = document.querySelector('button')
const myTitle = document.querySelector('#preview');
const myDelete = document.querySelector('#icon');


// DRY: 337(old) - 205(new) = 132
myButton.addEventListener('click', () => {
	myParagraph.textContent = myTextArea.value;
	myParagraph.style.color = 'black';
	myTitle.style.color = 'blue';
	myTitle.innerHTML = 'Comment Preview &#11088' });

// myButton.addEventListener('click', () => { myParagraph.textContent = myTextArea.value });
// myButton.addEventListener('click', () => { myParagraph.style.color = 'black' });
// myButton.addEventListener('click', () => { myTitle.style.color = 'blue' });
// myButton.addEventListener('click', () => { myTitle.innerHTML = 'Comment Preview &#11088' });

icon.addEventListener('click', () => { location.reload(); });



// If SUBMIT EMPTY FORM SHOW MESSAGE

// const myTextArea2 = document.querySelector('textarea').innerHTML;

// myButton.addEventListener('click', () => {
// if (myTextArea2.innerHTML = "" ) {
// 	myTextArea2.innerHTML = "WRITE HERE" }
// });




// myButton.addEventListener('click', () => { if ( myTextArea.value = "" ) { myTextArea.value = "write something";
// 	} else {
// 		myParagraph.textContent = myTextArea.value }});






// Social Media

// <img src=img/bk.jpg style="width:100px;height:100px">




// IF ELSE FAIL
// if ( myTextArea.value === "d" ) {
// 	myParagraph.style.color = "red";
// } else {
// 	myParagraph.style.color = "blue"
// };


// Bad technique as it would require a function to run on the listening event, anyway.
// Translated text could not compare/evaluate against a hard-coded text value.

// if ( myParagraph.innerHTML === "User Thoughts" ) {
// 	myParagraph.style.color = "red";
// } else {
// 	myParagraph.style.color = "blue"
// };




// const emptyParagraph = document.getElementById('p.description').value;


// p.title = "list description";