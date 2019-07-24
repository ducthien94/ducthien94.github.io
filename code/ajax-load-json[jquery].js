jQuery(document).ready(function($) {
	
	$.getJSON('https://minhducluong.github.io/db.json', function(data) {
		
		let films = data.films;

		let htmlContent = '';
		let htmlContent2 = '';
		let htmlContent3 = '';

		htmlContent += `<table>`;
		htmlContent += `
			<tr>
				<th>order</th>
				<th>genre</th>
				<th>title</th>
				<th>duration</th>
				<th>date</th>
			</tr>
			`;
		
			
			$("#content").html(htmlContent);
			
			//Click button thêm 2 phim đầu tiên
			$("#btn").on("click", function() {
				for (let i = 0; i < 2; i++) {
					htmlContent += `
						<tr>
							<td>${films[i].id}</td>
							<td>${films[i].genre}</td>
							<td>${films[i].title}</td>
							<td>${films[i].duration}</td>
							<td>${films[i].date}</td>
						</tr>
						
						`;
				}

				htmlContent += `</table>`;

				$("#content").html(htmlContent);

				//Click button thêm 2 phim tiếp theo
				$("#btn").on("click", function() {

					htmlContent2 += `
					<table>
						<tr>
							<th>order</th>
							<th>genre</th>
							<th>title</th>
							<th>duration</th>
							<th>date</th>
						</tr>
					
					`;

					for (let j = 0; j <= 3; j++) {
						htmlContent2 += `
							<tr>
								<td>${films[j].id}</td>
								<td>${films[j].genre}</td>
								<td>${films[j].title}</td>
								<td>${films[j].duration}</td>
								<td>${films[j].date}</td>
							</tr>
						`;
					}
					htmlContent2 += `</table>`;

					$("#content").html(htmlContent2);

					//Click button thêm phim cuối cùng
					$("#btn").on("click", function() {

						htmlContent3 += `
						<table>
							<tr>
								<th>order</th>
								<th>genre</th>
								<th>title</th>
								<th>duration</th>
								<th>date</th>
							</tr>
						
						`;

						for (let k = 0; k < films.length; k++) {
							htmlContent3 += `
								<tr>
									<td>${films[k].id}</td>
									<td>${films[k].genre}</td>
									<td>${films[k].title}</td>
									<td>${films[k].duration}</td>
									<td>${films[k].date}</td>
								</tr>
							`;
						}
						htmlContent3 += `</table>`;

					$("#content").html(htmlContent3);
					$("table tr:gt(5)").remove();
				})
			})

		});

	});
});