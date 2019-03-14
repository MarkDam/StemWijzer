var outcome = [];
var questionsAnswered = 0;
var list = document.getElementById('list');
var mainId = document.getElementsByClassName('main');

document.getElementById('title').innerHTML = subjects[questionsAnswered].title;
document.getElementById('statement').innerHTML = subjects[questionsAnswered].statement;



function answer(antwoord) {
	endScreen();
	outcome.push(antwoord);
	questions();
/*
	for (let i = 0; i < parties.length; i++) {
	if (subjects[questionsAnswered].parties[i].position == pro) {
		results[i].score ++;
	//	results[i] = parseInt(results[i]+1);
		}
	}
*/
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
	document.getElementById('title').innerHTML = "Uw beste partijen zijn:";
	document.getElementById('voteButtons').style.visibility = "hidden";
	document.getElementById('statement').style.visibility = "hidden";
	document.getElementById('bigPartiesButton').style.visibility = "hidden";
	document.getElementById('secularPartiesButton').style.visibility = "hidden";
	document.getElementById('allPartiesButton').style.visibility = "hidden";
	document.getElementById('list').style.visibility = "hidden";
	document.getElementById('goToOutcome').style.visibility = "hidden";

	list.innerHTML = "";

	mainId[0].style.height = "470px";
	mainId[0].style.width = "1000px";
}

function sortBigParties() {
	list.innerHTML = "";

	var bigParties = [];
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
}
function sortSecularParties() {
	list.innerHTML = "";

	var secularParties = [];
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
}
function viewAllParties() {
	list.innerHTML = "";

	for (let i = 0; i < parties.length; i++) {
		var partiesList = document.createElement('li');
		partiesList.innerText = parties[i].name;
		list.appendChild(partiesList);
	}
}


var results = [{
	name: "VVD",
	score: 0
	}, {
	name: "CDA",
	score: 0
	}, {
	name: "PVV",
	score: 0
	}, {
	name: "D66",
	score: 0
	}, {
	name: "GroenLinks",
	score: 0
	}, {
	name: "SP",
	score: 0
	}, {
	name: "PvdA",
	score: 0
  }, {
	name: "ChristenUnie",
	score: 0
	}, {
	name: "Partij voor de Dieren",
	score: 0
	}, {
	name: "SGP",
	score: 0
  }, {
	name: "DENK",
	score: 0
  }, {
	name: "Forum voor Democratie",
	score: 0
  }, {
	name: "Lokaal in de kamer",
	score: 0
	}, {
	name: "OndernemersPartij",
	score: 0
  }, {
	name: "VNL",
	score: 0
  }, {
	name: "Nieuwe Wegen",
	score: 0
  }, {
	name: "De Burger Beweging",
	score: 0
	}, {
	name: "Piratenpartij",
	score: 0
  }, {
	name: "Artikel 1",
	score: 0
  }, {
	name: "50Plus",
	score: 0
  }, {
	name: "Vrijzinnige Partij",
	score: 0
	}, {
	name: "Libertarische Partij",
	score: 0
}];
