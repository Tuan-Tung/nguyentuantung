 function nick() {
 let ten = document.getElementById("name").value;
 let pass = document.getElementById("pass").value;
 let flag =true;
  if(ten !== 'tung' || pass !== '1234'){
    document.getElementById("result").innerHTML = 'tài khoản hoặc mật khẩu sai';
      flag = false;
  }
  if(ten === 'tung' && pass ==='1234'){
    document.getElementById("result").innerHTML = '';
      flag =true;
  }
  return flag;
 }
 nick();