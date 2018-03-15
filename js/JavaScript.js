
$(document).ready(function(){
	$("#signin").click(function(){
		var nama = document.getElementById("Email").value;
		var pass = document.getElementById("pass").value;
		// alert("hahah");
		$.getJSON("../js/Data.json",function(jd){
			var temp = false;
			var i = jd.Admin.length;
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
		window.location.href = "";
	}
	else{
		alert("Username Or Password not match!");
	}
}