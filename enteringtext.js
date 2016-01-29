var text=function(){
    var str="";
    var count=12;
    $("#demo").on("keyup", function(){
        var str=$("#demo").val();
        count=str.length;
		if (count>12) {
            		str = str.substring(0, 12);
            		$("#demo").val(str);
            		//$("#demo").focus();
            		alert("Over flow")
            		return;
        	}
        $("#demo1").html(12-count);
        alert("str key :: "+str+" size : "+count);
        if(count<2){
		$("button").css("background-color", "");
		}
	else if(count>=2&&count<5){
            //$("demo1").css("background-color","green");
            $("button").css("background-color", "green");
        }
	else if(count>=5&&count<8){
            //$("demo1").css("background-color","green");
            $("button").css("background-color", "yellow");
        }
	else if(count>=8&&count<12){
            //$("demo1").css("background-color","green");
            $("button").css("background-color", "red");
        }
   
    });
	
}	

$(document).ready(function(){
    text();
});
