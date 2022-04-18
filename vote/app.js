function AddIndex(){
	var table = document.getElementById("MainTable")
  var ni = table.insertRow()
  
  var s1 = ni.insertCell()
  var s2 = ni.insertCell()
  var s3 = ni.insertCell()
  
  s1.style.textAlign = "center"
  
  var newText = document.createTextNode((table.rows.length - 1).toString());
  s1.appendChild(newText)
  
  var input = document.createElement("input");
  input.type = "text";
  s2.appendChild(input)
  let btn = document.createElement("button");
  btn.setAttribute("row", table.rows.length - 1)
  btn.innerHTML = "❌";
  btn.onclick = function(){
  	table.deleteRow(btn.getAttribute("row"))
    for (var i = 0, row; row = table.rows[i]; i++){
    		if (i != 0){
          for (var j = 0, col; col = row.cells[j]; j++) {
              if (j == 0){
              		col.innerHTML = i.toString()
              }
              else if (j==2){
              		col.firstChild.setAttribute("row", i)
              }
          }
       }
    }
  }
  s3.appendChild(btn)
}

var print = console.log

function getThumb(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#previewthumb').attr('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

let idxinput = document.getElementById("idxbox")
let idxprv = document.getElementById("idxPreview")

idxinput.addEventListener("input", idxu)

let prvd = {
	"[]" : '2️⃣',
  "()" : '②',
  "{}" : "2"
}

var pvv = ''

function idxu(e){
	if (e.target.value){
  	let a = e.target.value.match(/\{\}|\[\]|\(\)/g)
   	var t = e.target.value
    
    if (a) {
    	if (a.length > 1){
      Swal.fire({
      title: "오류!", 
      html: "번호 형식에는 숫자 기호를 2개 이상 사용할 수 없습니다.",  
      confirmButtonText: "확인", 
    });
      e.target.value = pvv
      t = pvv
      return
      }
    	else {
      pvv = e.target.value
      t = t.replace(a[0], prvd[a])
      }
    }
		idxprv.textContent = "미리보기 : " + t
  }
  else{
  	idxprv.textContent = ''
  }
}

function idxsubmit(){
	var t = document.getElementById("idxbox")
  print(t.value)
}
