var img = document.getElementsByTagName("IMG")[0];
img.style.marginLeft = "0px";

/*img.addEventListener("click", function(){
	var currentMargin = parseInt(this.style.marginLeft);
	var nextMargin = currentMargin + 50;
	this.style.marginLeft = nextMargin + "px";
	})
*/

setInterval(function(){
	var currentMargin = parseInt(img.style.marginLeft);
	var nextMargin = currentMargin + 25;
		if (nextMargin >= 150){
		}
		else{
			
			img.style.marginLeft = nextMargin + "px";
			}

}, 120);

