function btnCloseHandler() {
    $("#infoBox").css("display", "none");
	$("#appBox").css("filter", "none");
}

function blurApp() {
    $("#infoBox").css("display", "flex");
    $("#appBox").css("filter", "blur(5px)");
	$("#url").val("");
}

function showErrorMessage(msg) {
	let invalid = `<div id="invalid" class="invalid-feedback">${msg}</div>`;
	$("#form").children(".form-group").append(invalid);
	$("#url").addClass("is-invalid");
}

function hideErrorMessage() {
	$("#invalid").remove();
	$("#url").removeClass("is-invalid");
}

function urlFocusHandler() {
	hideErrorMessage();
};

function formSubmitHandler(e) {
    e.preventDefault();
    let url = $("#url").val();
	
	// check url null
    if(!url) {
        return showErrorMessage("must provide valid url"); //error
    }
	
	/*const re = RegExp('.*([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?', 'i');
	console.log("test");
	console.log(url);
	console.log(re.test(url));
	if(!re.test(url)) {
        return showErrorMessage("must provide valid url"); //error
    }*/
	
	// check url valid
	if(!url.includes(".")) {
        return showErrorMessage("must provide valid url"); //error
    }
    
	//Hide Error Message
	hideErrorMessage();
	
    const params = { url: url };
    $.post("/create", params)
     .done(function(data) {
		
        if(!data.hasOwnProperty("url")) {
            return showErrorMessage("must provide valid url"); //error
        }
        
        $("#link").val("http://127.0.0.1:3000/" + data.url);
        blurApp();
        
    });
}

$(document).ready(function(){
	
	//Url input focus
	$("#url").on('focus', urlFocusHandler);
    
    //Form submit
    $("#form").on('submit', formSubmitHandler);
    
    //Close btn clicked
    $("#btnClose").on('click', btnCloseHandler);
    
});