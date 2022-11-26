
// Yaser Habib
// U20103460
//this script for the search Box,, it search the word and highlight
	const p = document.getElementById("p");
	var input, regExp;
	function search() {
		console.log("search");
		input = document.getElementById("input").value;
		if (input !== "") {
			regExp = new RegExp(input, "gi");
			p.innerHTML = (p.textContent).replace(regExp, "<mark>$&</mark>");
		}
	}