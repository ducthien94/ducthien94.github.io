jQuery(document).ready(function($) {
	
	$.getJSON('https://minhducluong.github.io/questions.json', function(data) {
			
		let questions = data.questions;

		function getQuestion(index) {

			$("#question").html(questions[index].question);
			$(".optionA").html(questions[index].optionA);
			$(".optionB").html(questions[index].optionB);
			$(".optionC").html(questions[index].optionC);
			$(".optionD").html(questions[index].optionD);
		}

		let count = 0;
		getQuestion(count);
		$("#next").on("click", function() {
			if (count < 4) {
				getQuestion(count + 1);
				count++;
			}
			else {
				count = 0;
				getQuestion(count);
			}
		})

		$("#prev").on("click", function() {
			if (count > 0 && count < 5) {	
				getQuestion(count - 1);
				count--;
			}
			else {
				count = 4;
				getQuestion(count);
			}
		})


	});
});