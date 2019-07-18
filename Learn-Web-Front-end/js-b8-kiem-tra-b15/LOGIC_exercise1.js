function printNumber() {
	
	for (let i = 0; i < 1000; i++) {
		
		if (Math.sqrt(i) % 1 == 0) {
			document.write (i + "<br>");
		}
	}
}

printNumber();