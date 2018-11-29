var myHeading = document.querySelector('h1');
myHeading.textContent = 'Live Life';
var myBtn = document.querySelector('button');

var myImg = document.querySelector('img');

myImg.onclick = function() {
	var imgSrc = myImg.getAttribute('src');
	if(imgSrc==='images/shaarav1.jpg') {
		myImg.setAttribute('src', 'images/shaarav2.jpg');
	}
	else {
		console.log("coming inside");
		myImg.setAttribute('src','images/shaarav1.jpg');
	}
}

function setUserName() {
	var myName = prompt('Please enter your name..');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'JS is cool   ' + myName;
}


if(!localStorage.getItem('name')) {
	setUserName();
}
else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'JS is cool   ' + storedName;
}

myBtn.onclick = function() {
	setUserName();
}