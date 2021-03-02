function opennav(){
	document.getElementById('side_bar').style.transform = "translateX(0px)"
	document.getElementById('body').style.overflow = "hidden"
	document.getElementById('close_btn').style.display = "flex"
}

function closenav(){
	document.getElementById('side_bar').style.transform = "translateX(1500px)"
	document.getElementById('body').style.overflow = "auto"
	document.getElementById('close_btn').style.display = "none"
}


