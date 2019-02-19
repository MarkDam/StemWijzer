var outcome = [];
var questionsAnswered = 0;
var list = document.getElementById('list');

document.getElementById('title').innerHTML = subjects[questionsAnswered].title;
document.getElementById('statement').innerHTML = subjects[questionsAnswered].statement;



function pro() {
	endScreen();
	outcome.push("pro");
	questions();
	/*
	for (let i = 0; i < parties.length; i++) {
	if (subjects[questionsAnswered].parties.position == pro) {
			results.score++;
		}
	}
	*/
}
function contra() {
	endScreen();
	outcome.push("contra");
	questions();
}
function neither() {
	endScreen();
  outcome.push("neither");
	questions();
}
function skip() {
	endScreen();
	outcome.push("skip");
	questions();
}

function endScreen() {
	if (questionsAnswered == 11) {
			document.getElementById('title').innerHTML = "Uw partijen zijn:";
			document.getElementById('voteButtons').style.visibility = "hidden";
			document.getElementById('statement').style.visibility = "hidden";
			var mainId = document.getElementsByClassName('main');
			mainId[0].style.height = "700px";
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
         }
}

/*
parties.forEach(function(element){
	document.getElementById('statement').innnerHTML = element;
});

*/

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
