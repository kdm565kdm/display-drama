$(document).ready(function(){

	$.ajax({
		type: "POST",
		url: "https://qinghuaju.cn/softDrama/testDisplay.php",
		data: {"name":"abc"},
		success: function(data){
		        console.log(data);
		  }
	});
});