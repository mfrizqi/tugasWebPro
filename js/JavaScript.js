
$(document).ready(function(){
	var i = Math.floor(Math.random() * 20);
	// alert(i);
	$.getJSON("../js/Data.json",function(jd){
		$("#div"+i).css("background-image","url("+ jd.gambar[0].url +")");
		$("#div"+i).css("background-size","cover");
	// });
	
	$("#signin").click(function(){
		var nama = document.getElementById("Email").value;
		var pass = document.getElementById("pass").value;
		// alert("hahah");
		// $.getJSON("../js/Data.json",function(jd){	
			i = jd.Admin.length;
			var temp = false;
			var j = 0;
			while((temp != true) && (j <= i-1 )){
				if ((nama == jd.Admin[j].email) && (pass == jd.Admin[j].Pass)) {
					temp = true;
				}
				j++;
			}
			if (temp == false) {
				j=0;
				while((temp != true) && (j <= i-1 )){
				if ((nama == jd.User[j].Nama) && (pass == jd.User[j].Pass)) {
					temp = true;
				}
				j++;
			}
			}
			validasi(temp);
		});
	});
});
function validasi(temp){
	if (temp == true) {
		window.location.href = "landingpage.html";
	}
	else{
		alert("Email Or Password not match!");
	}
}