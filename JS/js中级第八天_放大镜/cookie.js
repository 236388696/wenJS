function getCookie(con) {
	// userName=zhangsan; passWord=123456;
	var cookies = document.cookie;
	var arr = cookies.split(";");
	for(var i = 0; i < arr.length; i++) {
		var arr2 = arr[i].split("=");
		if(arr2[0] == con) {
			return arr2[1];
		}

	}
	return false;

}

function saveCookie(name, value, day) {
	var date1 = new Date();
	date1.setDate(date1.getDate() + day);
	document.cookie = name + "=" + value + ";expires=" + date1;
}

//移除 :改有效期就行
  function removeCookie(con){
  	 saveCookie(con,"",-1)
  }
