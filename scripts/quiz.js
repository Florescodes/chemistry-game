var score = 0; //Score at start
var total = 10; //Total questions
var point = 2; //Point per answer correct
var highest = total * point;

//Initializer
function init(){
	//Correct answers
	sessionStorage.setItem('a1','D');
	sessionStorage.setItem('a2','D');
	sessionStorage.setItem('a3','C');
	sessionStorage.setItem('a4','C');
	sessionStorage.setItem('a5','A');
	sessionStorage.setItem('a6','D');
	sessionStorage.setItem('a7','C');
	sessionStorage.setItem('a8','B');
	sessionStorage.setItem('a9','D');
	sessionStorage.setItem('a10','B');
}

$(document).ready(function(){
	//Hide all questions
	$('.questionForm').hide();
	
	//Show first question
	$('#q1').show();
	
	$('.questionForm #submit').click(function(){
		//Get data attributes
		current = $(this).parents('form:first').data('question');
		next = $(this).parents('form:first').data('question') + 1;
		//Hide all questions
		$('.questionForm').hide();
		//Show next question
		$('#q' + next + '').fadeIn(300);
		process('' + current + '');
		return false;
	});
});

//Process the answers
function process(n) {
	
	//Get input value
	var submitted = $('input[name=q' + n +']:checked').val();
	if(submitted == sessionStorage.getItem('a' + n + '')){
			score = score + point;
		}

	if(n == total) {
		$('#results').html('<h3><strong>Your final score is: ' + score + ' out of ' + highest + '</strong></h3><a href="index.html"><strong>Take Quiz Again</strong></a>');
		if(score == highest){
			$('#results').append('<p><strong>You are the Mole Master!</strong></p>');
		}else if(score == highest - point || score == highest - point - point) {
			$('#results').append('<p><strong>Good Job!</strong></p>');
		}else if(score == highest - point - point - point || score == highest - point - point - point - point) {
			$('#results').append('<p><strong>Retake the quiz</strong></p>');
		}
	}
	return false;
}
//Add event listener
window.addEventListener('load',init,false);