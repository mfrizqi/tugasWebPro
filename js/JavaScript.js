
$(document).ready(function(){
	var i = 0;
	var temp3 = 0;
	var j = 0;
	$.getJSON("../js/Data.json",function(jd){
	for (var temp2 = 1; temp2<=20; temp2++) {
		if (jd.gambar[temp3].nama == "Door Bumper") {
			$("#product"+temp2+" a").attr("href","descriptionpage.html");
		}
		$("#product"+temp2+" img").attr("src",jd.gambar[temp3].url);
		$("#product"+temp2+" div h4").append(jd.gambar[temp3].nama);
		$("#product"+temp2+" div a p").append(jd.gambar[temp3].price);
		temp3++;
	}
	temp3 = 12;
	for (var temp2 = 1; temp2<=4; temp2++) {
		$("#productt"+temp2+" img").attr("src",jd.gambar[temp3].url);
		$("#productt"+temp2+" div h4").append(jd.gambar[temp3].nama);
		$("#productt"+temp2+" div a p").append(jd.gambar[temp3].price);
		temp3++;
	}
		
	$("#btnAddToCart").click(function(){
		window.location.href = "billingpage.html";
	})
	$("#signin").click(function(){
		var nama = document.getElementById("Email").value;
		var pass = document.getElementById("pass").value;
		// alert("hahah");
		// $.getJSON("../js/Data.json",function(jd){	
			i = jd.Admin.length;
			var temp = false;
			j = 0;
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