jQuery(document).ready(function($) {
	
//Add event cho ô tìm kiếm
$("#search").focus(function() {

	$("#search").css({
		border: '2px solid blue',// #0099ff
		boxShadow: '0px 0px 20px 0px #f2f2f2'
	});

})

$("#search").blur(function() {

	$("#search").css({
		border: '2px solid #aaa',
		boxShadow: 'none'
	});

})



//Add content

let students = [

		{name: 'Đặng Văn Quyết', gender: 'Nam', birthday: '1994-06-29', homeTown: 'Thái Bình'}, //29-June-1994
		{name: 'Đỗ Duy Anh', gender: 'Nam', birthday: '1999-10-19', homeTown: 'Thái Nguyên'}, //19-October-1999
		{name: 'Khuất Đức Thiện', gender: 'Nam', birthday: '1994-08-13', homeTown: 'Hà Nội'}, //13-August-1994
		{name: 'Nguyễn Duy Vương', gender: 'Nam', birthday: '1997-09-12', homeTown: 'Hưng Yên'}, //12-September-1997
		{name: 'Cấn Văn Hưng', gender: 'Nam', birthday: '1999-09-05', homeTown: 'Hà Nội'}, //05-September-1999
		{name: 'Đoàn Trà My', gender: 'Nữ', birthday: '1999-09-21', homeTown: 'Hà Nội'}, //21-September-1999
		{name: 'Ngyễn Hà Trung', gender: 'Nam', birthday: '2000-02-01', homeTown: 'Nghệ An'} //01-February-2000

		];


		function renderContent() {

			for (let i = 0; i < students.length; i++) {

				$("table").append(`

					<tr>
						<td>${students[i].name}</td>
						<td>${students[i].gender}</td>
						<td>${students[i].birthday}</td>
						<td>${students[i].homeTown}</td>
					</tr>	

					`)

			}

		}

		renderContent();

//Sort by name

$("th:first").on("click", function() {
	students.sort(function(a, b) {

		let fullNameA = a.name.split(" ");
		let fullNameB = b.name.split(" "); 

		let nameA = fullNameA[fullNameA.length - 1];
		let nameB = fullNameB[fullNameB.length - 1];

		if (nameA < nameB) {return -1};
		if (nameA > nameB) {return 1};
		return 0;


	})


	$("tr:gt(0)").remove();
	$("#th_child_1").html(`<i class="fas fa-sort-down"></i>`);
	renderContent();

	$("th:first").on("click",function() {
		students.sort(function(a, b) {

			let fullNameA = a.name.split(" ");
			let fullNameB = b.name.split(" "); 

			let nameA = fullNameA[fullNameA.length - 1];
			let nameB = fullNameB[fullNameB.length - 1];

			if (nameA < nameB) {return 1};
			if (nameA > nameB) {return -1};
			return 0;

		})

		$("tr:gt(0)").remove();
		$("#th_child_1").html(`<i class="fas fa-sort-up"></i>`);
		renderContent();

	})

})


//Sort by gender

$("tr th:nth-child(2)").on("click", function() {

	students.sort(function(a, b) {
		if (a.gender < b.gender) {return -1};
		if (a.gender > b.gender) {return 1};
		return 0;
	})


	$("tr:gt(0)").remove();
	$("#th_child_2").html(`<i class="fas fa-sort-down"></i>`);
	renderContent();


	$("tr th:nth-child(2)").on("click", function() {

		students.sort(function(a, b) {
			if (a.gender > b.gender) {return -1};
			if (a.gender < b.gender) {return 1};
			return 0;
		})

		$("tr:gt(0)").remove();
		$("#th_child_2").html(`<i class="fas fa-sort-up"></i>`);
		renderContent();

	})


})

//Sort by birthday

$("tr th:nth-child(3)").on('click', function() {
	students.sort(function(a, b) {
		return new Date(a.birthday) - new Date(b.birthday);
	})

	$("tr:gt(0)").remove();
	$("#th_child_3").html(`<i class="fas fa-sort-down"></i>`);
	renderContent();


	$("tr th:nth-child(3)").on("click",function() {
		students.sort(function(a, b) {
			return new Date(b.birthday) - new Date(a.birthday);
		})

		$("tr:gt(0)").remove();
		$("#th_child_3").html(`<i class="fas fa-sort-up"></i>`);
		renderContent();

	})

})


//Sort by home town


$("th:last").on("click", function() {

	students.sort(function(a, b) {
		if (a.homeTown < b.homeTown) {return -1};
		if (a.homeTown > b.homeTown) {return 1};
		return 0;
	})


	$("tr:gt(0)").remove();
	$("#th_child_4").html(`<i class="fas fa-sort-down"></i>`);
	renderContent();

	$("th:last").on("click",function() {

		students.sort(function(a, b) {
			if (a.homeTown < b.homeTown) {return 1};
			if (a.homeTown > b.homeTown) {return -1};
			return 0;
		})

		$("tr:gt(0)").remove();
		$("#th_child_4").html(`<i class="fas fa-sort-up"></i>`);
		renderContent();

	})

})


//Add event keypress 
	$("#search").on('keyup', function() {
		let keyword = $("#search").val().toLowerCase();

		$("table tr:gt(0)").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(keyword) > -1)
		})

		
	});




});


