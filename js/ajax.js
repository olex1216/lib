//原生Ajax方法
var XHR;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  XHR=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  XHR=new ActiveXObject("Microsoft.XHR");
  }

  //get
var XHR = new XMLHttpRequest();
  XHR.open("GET","server.php?number=" + keyword.value);
  XHR.send();
  XHR.onreadystatechange = function(){
    if (XHR.readyState===4) {
      if (XHR.status===200) {
        searchResult.innerHTML = XHR.responseText;
      } else {
        searchResult.innerHTML = "发生错误:" + XHR.status;
      }
    } 
   };


  // Post
  var XHR = new XMLHttpRequest();
  XHR.open("POST","ajax_test.asp",true);
  XHR.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  XHR.send("fname=Bill&lname=Gates");