var r = prompt("Diameter");
			r=parseFloat(r) && Number(r);//获取输入的纯数字,其余情况皆转换为NaN
			
			if(!isNaN(r)){//判断用户输入的是否为数值
				var area=Math.PI*r*r;
				var cir=2*Math.PI*r;
				
				document.getElementById('r').value= r;
				document.getElementById('cir').value=cir.toFixed(2);
				document.getElementById('area').value=area.toFixed(2);
			}else{
				alert("Voer een nummer in")
			}

 function getDate(){
var date = new Date();
var date1 = date.toLocaleString();
var div1 = document.getElementById("times");
div1.innerHTML = date1;          
 }
setInterval("getDate()",1000);