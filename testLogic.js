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

			for (let i = 0; i < parties.length; i++) {
				var party = document.createElement('li');
				party.innerText = parties[i].name;
				list.appendChild(party);
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
/*
results = {
		"VVD" {
			score = 0
		},
		"CDA" {
			score = 0
		},
		"PVV" {
			score = 0
		},
		"D66" {
			score = 0
		},
		"GroenLinks" {
			score = 0
		},
		"SP" {
			score = 0
		},
		"PvdA" {
			score = 0
		},
		"ChristenUnie" {
			score = 0
		},
		"Partij voor de Dieren" {
			score = 0
		},
		"SGP" {
			score = 0
		},
		"DENK" {
			score = 0
		},
		"Forum voor Democratie" {
			score = 0
		},
		"Lokaal in de kamer" {
			score = 0
		},
		"OndernemersPartij" {
			score = 0
		},
		"VNL" {
			score = 0
		},
		"Nieuwe Wegen" {
			score = 0
		},
		"De Burger Beweging" {
			score = 0
		},
		"Piratenpartij" {
			score = 0
		},
		"Artikel 1" {
			score = 0
		},
		"50Plus" {
			score = 0
		},
		"Vrijzinnige Partij" {
			score = 0
		},
		"Libertarische Partij" {
			score = 0
		}
}
*/
