jQuery(document).ready(function($) {
	
	$.getJSON('https://minhducluong.github.io/db.json', function(data) {
		
		let films = data.films;

		let htmlContent = '';		

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

		let count = 0;
		$("#btn").on("click", function() {
			
			if (count <= 1) {
				htmlContent += `
					<tr>
						<td>${films[count * 2].id}</td>
						<td>${films[count * 2].genre}</td>
						<td>${films[count * 2].title}</td>
						<td>${films[count * 2].duration}</td>
						<td>${films[count * 2].date}</td>
					</tr>
					
					<tr>
						<td>${films[count * 2 + 1].id}</td>
						<td>${films[count * 2 + 1].genre}</td>
						<td>${films[count * 2 + 1].title}</td>
						<td>${films[count * 2 + 1].duration}</td>
						<td>${films[count * 2 + 1].date}</td>
					</tr>
				`;
			}

			if (count > 1) {
				htmlContent += `
					<tr>
						<td>${films[count * 2].id}</td>
						<td>${films[count * 2].genre}</td>
						<td>${films[count * 2].title}</td>
						<td>${films[count * 2].duration}</td>
						<td>${films[count * 2].date}</td>
					</tr>
				`;
			}

			count += 1;
			$("#content").html(htmlContent);
		})


	});
});