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


// 		function renderContent() {

// 			for (let i = 0; i < students.length; i++) {

// 				$("table").append(`

// 					<tr>
// 						<td>${students[i].name}</td>
// 						<td>${students[i].gender}</td>
// 						<td>${students[i].birthday}</td>
// 						<td>${students[i].homeTown}</td>
// 					</tr>	

// 					`)

// 			}

// 		}

// 		renderContent();

// //Sort by name

// $("th:first").on("click", function() {
// 	students.sort(function(a, b) {

// 		let fullNameA = a.name.split(" ");
// 		let fullNameB = b.name.split(" "); 

// 		let nameA = fullNameA[fullNameA.length - 1];
// 		let nameB = fullNameB[fullNameB.length - 1];

// 		if (nameA < nameB) {return -1};
// 		if (nameA > nameB) {return 1};
// 		return 0;


// 	})


// 	$("tr:gt(0)").remove();
// 	$("#th_child_1").html(`<i class="fas fa-sort-down"></i>`);
// 	renderContent();

// 	$("th:first").on("click",function() {
// 		students.sort(function(a, b) {

// 			let fullNameA = a.name.split(" ");
// 			let fullNameB = b.name.split(" "); 

// 			let nameA = fullNameA[fullNameA.length - 1];
// 			let nameB = fullNameB[fullNameB.length - 1];

// 			if (nameA < nameB) {return 1};
// 			if (nameA > nameB) {return -1};
// 			return 0;

// 		})

// 		$("tr:gt(0)").remove();
// 		$("#th_child_1").html(`<i class="fas fa-sort-up"></i>`);
// 		renderContent();

// 	})

// })


// //Sort by gender

// $("tr th:nth-child(2)").on("click", function() {

// 	students.sort(function(a, b) {
// 		if (a.gender < b.gender) {return -1};
// 		if (a.gender > b.gender) {return 1};
// 		return 0;
// 	})


// 	$("tr:gt(0)").remove();
// 	$("#th_child_2").html(`<i class="fas fa-sort-down"></i>`);
// 	renderContent();


// 	$("tr th:nth-child(2)").on("click", function() {

// 		students.sort(function(a, b) {
// 			if (a.gender > b.gender) {return -1};
// 			if (a.gender < b.gender) {return 1};
// 			return 0;
// 		})

// 		$("tr:gt(0)").remove();
// 		$("#th_child_2").html(`<i class="fas fa-sort-up"></i>`);
// 		renderContent();

// 	})


// })

// //Sort by birthday

// $("tr th:nth-child(3)").on('click', function() {
// 	students.sort(function(a, b) {
// 		return new Date(a.birthday) - new Date(b.birthday);
// 	})

// 	$("tr:gt(0)").remove();
// 	$("#th_child_3").html(`<i class="fas fa-sort-down"></i>`);
// 	renderContent();


// 	$("tr th:nth-child(3)").on("click",function() {
// 		students.sort(function(a, b) {
// 			return new Date(b.birthday) - new Date(a.birthday);
// 		})

// 		$("tr:gt(0)").remove();
// 		$("#th_child_3").html(`<i class="fas fa-sort-up"></i>`);
// 		renderContent();

// 	})

// })


// //Sort by home town


// $("th:last").on("click", function() {

// 	students.sort(function(a, b) {
// 		if (a.homeTown < b.homeTown) {return -1};
// 		if (a.homeTown > b.homeTown) {return 1};
// 		return 0;
// 	})


// 	$("tr:gt(0)").remove();
// 	$("#th_child_4").html(`<i class="fas fa-sort-down"></i>`);
// 	renderContent();

// 	$("th:last").on("click",function() {

// 		students.sort(function(a, b) {
// 			if (a.homeTown < b.homeTown) {return 1};
// 			if (a.homeTown > b.homeTown) {return -1};
// 			return 0;
// 		})

// 		$("tr:gt(0)").remove();
// 		$("#th_child_4").html(`<i class="fas fa-sort-up"></i>`);
// 		renderContent();

// 	})

// })


// //Add event keypress 
// 	$("#search").on('keyup', function() {
// 		let keyword = $("#search").val().toLowerCase();

// 		$("table tr:gt(0)").filter(function() {
// 			$(this).toggle($(this).text().toLowerCase().indexOf(keyword) > -1)
// 		})

		
// 	});




	let result = [];
	let compare = {
		name: function(a, b) {
			let fullNameA = a.split(" ");
			let fullNameB = b.split(" ");
			
			let nameA = fullNameA[fullNameA.length - 1];
			let nameB = fullNameB[fullNameB.length - 1];

			if (nameA < nameB) return 1;
			if (nameA > nameB) return -1;
			return 0; 
		},
		gender: function(a, b) {
			if (a < b) return 1;
			if (a > b) return -1;
			return 0;
		},
		birthday: function(a, b) {
			a = new Date(a);
			b = new Date(b);
			return a - b;
		}
	};

	function renderContent(array) {
		//xóa hết cái ban đầu, render lại
		$("tbody").empty();
		//Lặp qua object students để đổ dữ liệu
		array.forEach( function(element) {
			$("tbody").append(`
				<tr>
					<td>${element.name}</td>
					<td>${element.gender}</td>
					<td>${element.birthday}</td>
					<td>${element.homeTown}</td>
				</tr>
			`);			
		});	
	}
	renderContent(students);


	//Sort - Sort cái table đang được show ngoài HTML
	$('th').on('click', function() {
		let column = $('th').index(this);
		let order = $(this).data('sort');
		let rows = $('tbody tr').toArray(); //lấy các <tr> hiện tại lưu vào 1 mảng

		if ($(this).is('.ascending') || $(this).is('.descending')) {
			$(this).toggleClass('ascending descending');
			$('tbody').append(rows.reverse());
		} else {
			$(this).siblings().attr('class', 'normal'); //Khi sort sang <th> khác thì các <th> còn lại về normal
			$(this).attr('class', 'ascending');

			rows.sort(function(a, b) {
				a = $(a).find('td').eq(column).text();
				b = $(b).find('td').eq(column).text();
				return compare[order](a,b);
			});
			//không cần $('tbody').empty()
			$('tbody').append(rows);
		}
	});

	//Search
	$('[type="search"]').on('input', function() { 
		if ($(this).val() == '') {//Luôn show hết data lên bảng khi input rỗng
			renderContent(students);
			$('#no_result').text('');
			$('th').attr('class', 'normal');
		}
	});

	$(document).on('keyup', function(event) {		
			results = [];
			$('th').attr('class', 'normal');

			let input = $('[type="search"]').val().trim().toLowerCase();
			if (input == '') renderContent(students);
			else {
				students.forEach( function(element, index) {
					for (let prop in element) {
						//Nếu data có chứa input
						if (element[prop].toLowerCase().indexOf(input) != -1) {
							results.push(element);
							break; //prop nào chứa input thì push element (object) của prop đó vào array results, sau đó BREAK luôn để thoát khỏi element hiện tại, tiếp tục với element tiếp theo
						}
					}
				});

				if (!results[0]) $('#no_result').text(`Không tìm thấy kết quả`);
				else $('#no_result').text(``);
				renderContent(results);
			}
			console.log(results);
	});
	
});


