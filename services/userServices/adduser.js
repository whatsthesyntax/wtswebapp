//url bon, un truc qui m'échape comment recupéré les param du post 
var data = new FormData();
data.append('user', 'person');
data.append('pwd', 'password');
data.append('organization', 'place');
data.append('requiredkey', 'key');

var http = new XMLHttpRequest();

http.open("POST", "localhost:8080/WTSRestWebService/rest/users/adduser", true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.setRequestHeader("Content-length", postdata.length);

http.onreadystatechange = function() {
   if(http.readyState == 4 && http.status == 200) {
      alert(http.responseText);
   }
}
http.send(data);
