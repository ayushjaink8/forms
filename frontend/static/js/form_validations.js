

document.getElementById('male').checked=true;    //for male to be checked by default


///    Adding the dob to be 18+ years
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

yyyy= (parseInt(yyyy)-18).toString();
today = yyyy  + '-' + mm + "-" + dd;
// document.write(today);
document.getElementById('dob').max=today;


/////// add phone number validation
var phone = document.getElementById('phone');
phone.type="text";
document.getElementById('phone').addEventListener("input", function(e) {
    // console.log(e);
    var maxLength=10;
    var currentLength = phone.value.length;

    if(currentLength > maxLength){
        phone.value = phone.value.slice(0, maxLength)
    }

    var data = e.data;
    var valid=["0","1","2","3","4","5","6","7","8","9"]
    var flag = true;
    for (v in valid){
        if(v==data){
            flag = false;
            break;
        }
    }
    if(flag){
        phone.value = phone.value.slice(0, currentLength-1)
    }
    // console.log(phone.value);
});

var code = document.getElementById('phone_code');
document.getElementById('phone_code').addEventListener("input", function(e){
    var maxLength=4;
    var currentLength = code.value.length;
    if(currentLength > maxLength){
        code.value = code.value.slice(0, maxLength)
    }
    // console.log(e.data)
    var data = e.data;
    var valid=["0","1","2","3","4","5","6","7","8","9"];
    var flag = true;
    for (v in valid){
        if(v === data){
            flag = false;
            break;
        }
    }
    if(e.data === '+' || e.data === '-'){        // i dont know why but adding this on top of the array is not working
        flag=false;
    }
    if(flag){
        code.value = code.value.slice(0, currentLength-1)
    }
    // console.log(code.value);
});