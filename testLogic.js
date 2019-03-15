var outcome = [];
var questionsAnswered = 0;
var list = document.getElementById('list');
var mainId = document.getElementsByClassName('main');
var bigParties = [];
var secularParties = [];
var chosenParties;

document.getElementById('title').innerHTML = subjects[questionsAnswered].title;
document.getElementById('statement').innerHTML = subjects[questionsAnswered].statement;



function answer(antwoord) {
	endScreen();
	outcome.push(antwoord);
	questions();

	for (let i = 0; i < parties.length; i++) {
	if (subjects[questionsAnswered].parties[i].position == antwoord) {
		results[i].score++;
		}
	}
	results.sort();
	chosenParties = "all";
}

function endScreen() {
	if (questionsAnswered == 11) {
			document.getElementById('title').innerHTML = "Kies uw favoriete partijen:";
			document.getElementById('voteButtons').style.visibility = "hidden";
			document.getElementById('statement').style.visibility = "hidden";
			document.getElementById('bigPartiesButton').style.visibility = "visible";
			document.getElementById('secularPartiesButton').style.visibility = "visible";
			document.getElementById('allPartiesButton').style.visibility = "visible";
			document.getElementById('goToOutcome').style.visibility = "visible";
			mainId[0].style.height = "700px";
			mainId[0].style.width = "470px";
//			var bigParties = document.createElement('BUTTON');
//			document.body.appendChild(bigParties);
//			bigParties.id = "bigPartiesButton";
			for (let i = 0; i < parties.length; i++) {
				var partiesList = document.createElement('li');
				partiesList.innerText = parties[i].name;
				list.appendChild(partiesList);
//				console.log(parties[i].name);
			}
		}
}
function questions() {
	  questionsAnswered++;
		document.getElementById('title').innerHTML = subjects[questionsAnswered].title;
		document.getElementById('statement').innerHTML = subjects[questionsAnswered].statement;
}

function goBack() {
    if (questionsAnswered == 0) {
		    window.location.href = "index.html";
	     } else {
         questionsAnswered--;
	        document.getElementById('title').innerHTML = subjects[questionsAnswered].title;
	        document.getElementById('statement').innerHTML = subjects[questionsAnswered].statement;
					outcome.pop();
		 			document.getElementById('voteButtons').style.visibility = "visible";
		 			document.getElementById('statement').style.visibility = "visible";
		 			document.getElementById('bigPartiesButton').style.visibility = "hidden";
		 			document.getElementById('secularPartiesButton').style.visibility = "hidden";
		 			document.getElementById('allPartiesButton').style.visibility = "hidden";
					document.getElementById('list').style.visibility = "hidden";
					document.getElementById('goToOutcome').style.visibility = "hidden";
					list.innerHTML = "";
					mainId[0].style.height = "470px";
					mainId[0].style.width = "1000px";
         }
}

function theOutcome() {
	list.innerHTML = "";
	mainId[0].style.height = "470px";
	mainId[0].style.width = "1000px";
	document.getElementById('title').innerHTML = "Uw beste partijen zijn:";
	document.getElementById('voteButtons').style.visibility = "hidden";
	document.getElementById('statement').style.visibility = "hidden";
	document.getElementById('bigPartiesButton').style.visibility = "hidden";
	document.getElementById('secularPartiesButton').style.visibility = "hidden";
	document.getElementById('allPartiesButton').style.visibility = "hidden";
	document.getElementById('goToOutcome').style.visibility = "hidden";
	document.getElementById('reverseButton').style.visibility = "hidden";
	if (chosenParties == "all") {
		var allPartiesResult = results.slice(0, 3);
		for (var i = 0; i < allPartiesResult.length; i++) {
			var partiesList = document.createElement('li');
			partiesList.innerText = allPartiesResult[i];
			list.appendChild(partiesList);
		}
	} else if (chosenParties == "big") {
		var bigPartiesResult = bigParties.slice(0, 3);
		for (var i = 0; i < bigPartiesResult.length; i++) {
			var partiesList = document.createElement('li');
			partiesList.innerText = bigPartiesResult[i];
			list.appendChild(partiesList);
		}
	} else if (chosenParties == "secular") {
		var secularPartiesResult = secularParties.slice(0, 3);
		for (var i = 0; i < secularPartiesResult.length; i++) {
			var partiesList = document.createElement('li');
			partiesList.innerText = secularPartiesResult[i];
			list.appendChild(partiesList);
		}
	}
	results.sort();
}

function sortBigParties() {
	list.innerHTML = "";
	bigParties.sort();
	for (let i = 0; i < parties.length; i++) {
		if (parties[i].size >= 1) {
			bigParties.push(parties[i].name);
		}
	}
	for (let i = 0; i < bigParties.length; i++) {
		var partiesList = document.createElement('li');
		partiesList.innerText = bigParties[i];
		list.appendChild(partiesList);
	}
	chosenParties = "big";
}
function sortSecularParties() {
	list.innerHTML = "";
	secularParties.sort();
	for (var i = 0; i < parties.length; i++) {
		if (parties[i].secular === true) {
			secularParties.push(parties[i].name);
		}
	}
	for (let i = 0; i < secularParties.length; i++) {
		var partiesList = document.createElement('li');
		partiesList.innerText = secularParties[i];
		list.appendChild(partiesList);
	}
	chosenParties = "secular";
}
function viewAllParties() {
	list.innerHTML = "";
	results.sort();
	for (let i = 0; i < parties.length; i++) {
		var partiesList = document.createElement('li');
		partiesList.innerText = parties[i].name;
		list.appendChild(partiesList);
	}
	chosenParties = "all";
}
