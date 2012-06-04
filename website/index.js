define(function (require) {
	var domReady=require("domReady")

	domReady(function(){
		document.getElementById("messageDiv").innerHTML="ready to go"
	})
})