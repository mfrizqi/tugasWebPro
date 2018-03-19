
$(document).ready(function(){
	var i = 0;
	var temp3 = 0;
	var j = 0;
	var h = [];
	var k = 0;
	var ceek = false;
	var temp2 = 1;
    $.getJSON("../js/Data.json", function (jd) {
        while (temp2 <= 20) {
            ceek = false;
            k = 0;
            j = h.length;
            i = Math.floor(Math.random() * 20);
            // alert(i);
            while ((ceek == false) && (k <= j - 1)) {
                if (h[k] == i) {
                    ceek = true
                }
                k++;
            }
            if (ceek != true) {
                if (jd.gambar[i].nama == "Door Bumper") {
                    $("#product" + temp2 + " a").attr("href", "descriptionpage.html");
                }
                $("#product" + temp2 + " img").attr("src", jd.gambar[i].url);
                $("#product" + temp2 + " div h4").append(jd.gambar[i].nama);
                $("#product" + temp2 + " div a p").append(jd.gambar[i].price);
                // temp2++;
                // temp3++;
                // h.push(i);
            }
            if (ceek != true) {
                if (jd.gambar[i].nama == "Door Bumper") {
                    $("#productt" + temp2 + " a").attr("href", "descriptionpage.html");
                }
                $("#productt" + temp2 + " img").attr("src", jd.gambar[i].url);
                $("#productt" + temp2 + " div h4").append(jd.gambar[i].nama);
                $("#productt" + temp2 + " div a p").append(jd.gambar[i].price);
                temp2++;
                temp3++;
                h.push(i);
            }
        }

	// for (var temp2 = 1; temp2<=20; temp2++) {
	// 	if (jd.gambar[temp3].nama == "Door Bumper") {
	// 		$("#product"+temp2+" a").attr("href","descriptionpage.html");
	// 	}
	// 	$("#product"+temp2+" img").attr("src",jd.gambar[temp3].url);
	// 	$("#product"+temp2+" div h4").append(jd.gambar[temp3].nama);
	// 	$("#product"+temp2+" div a p").append(jd.gambar[temp3].price);
	// 	temp3++;
	// }
	// temp3 = 12;
	// for (var temp2 = 1; temp2<=4; temp2++) {
	// 	$("#productt"+temp2+" img").attr("src",jd.gambar[temp3].url);
	// 	$("#productt"+temp2+" div h4").append(jd.gambar[temp3].nama);
	// 	$("#productt"+temp2+" div a p").append(jd.gambar[temp3].price);
	// 	temp3++;
	// }
		
        // Fungsi pindah ke page billing
        $("#btnAddToCart").click(function () {
            window.location.href = "billingpage.html";
        });

        // Fungsi Sign In
        $("#signin").click(function () {
            var nama = document.getElementById("Email").value;
            var pass = document.getElementById("pass").value;
            // alert("hahah");
            // $.getJSON("../js/Data.json",function(jd){	
            i = jd.Admin.length;
            var temp = false;
            j = 0;
            while ((temp != true) && (j <= i - 1)) {
                if ((nama == jd.Admin[j].email) && (pass == jd.Admin[j].Pass)) {
                    temp = true;
                }
                j++;
            }
            if (temp == false) {
                j = 0;
                while ((temp != true) && (j <= i - 1)) {
                    if ((nama == jd.User[j].Nama) && (pass == jd.User[j].Pass)) {
                        temp = true;
                    }
                    j++;
                }
            }
            validasi(temp);
        });

        // Fungsi update jumlah produk dibeli
        $("#btnAddingProduct").click(function () {
            sumproduk++;
            $("#quantityProduct").html(sumproduk);
        });
        $("#btnSubtractProduct").click(function () {
            if (sumproduk > 0) {
                sumproduk--;
                $("#quantityProduct").html(sumproduk);
            }
        });
    });
});

// fungsi validasi akun saat login
function validasi(temp) {
    if (temp == true) {
        window.location.href = "landingpage.html";
    }
    else {
        alert("Email Or Password not match!");
    }
}