console.log(subjects[2].title);

var questionsAnswered = 0;
document.getElementById('title').innerHTML = subjects[questionsAnswered].title;
document.getElementById('statement').innerHTML = subjects[questionsAnswered].statement;

function questions() {
	 if (questionsAnswered > 14) {
		   questionsAnswered--
	    } else {
	       questionsAnswered++;
	        document.getElementById('title').innerHTML = subjects[questionsAnswered].title;
	        document.getElementById('statement').innerHTML = subjects[questionsAnswered].statement;
         }
}

function goBack() {
    if (questionsAnswered < 0) {
		    questionsAnswered++
        questionsAnswered++
	     } else {
         questionsAnswered--;
	        document.getElementById('title').innerHTML = subjects[questionsAnswered].title;
	         document.getElementById('statement').innerHTML = subjects[questionsAnswered].statement;
         }
}
