var i = 1;
show(i);

function changeSlide(n) {
	i += n;
	show(i);
}

function show(n) {
	var slides = document.getElementsByClassName("slide");
	console.log(slides);
	if (n > slides.length) {i = 1}
	if (n < 1) {i = slides.length}
	for (var j = 0; j < slides.length; j++) {
		slides[j].style.display = "none";
	}
	slides[i-1].style.display = "block";
}
