function manipulation() {
	var redBorder = document.getElementById("redBorder").value;
	var greenBorder = document.getElementById("greenBorder").value;
	var blueBorder = document.getElementById("blueBorder").value;
	var widthBorder = document.getElementById("widthBorder").value;

	var redBackground = document.getElementById("redBackground").value;
	var greenBackground = document.getElementById("greenBackground").value;
	var blueBackground = document.getElementById("blueBackground").value;

	var manipulate = document.getElementById("manipulation");
	console.log(manipulate);
	manipulate.style.borderColor = "rgb("+redBorder+", "+greenBorder+", "+blueBorder+")";
	manipulate.style.borderWidth = widthBorder + "px";
	manipulate.style.backgroundColor = "rgb("+redBackground+", "+greenBackground+", "+blueBackground+")";

}
