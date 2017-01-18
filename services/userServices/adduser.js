//pas fini à travailler

var data = new FormData();
data.append('user', 'person');
data.append('pwd', 'password');
data.append('organization', 'place');
data.append('requiredkey', 'key');

var xhr = new XMLHttpRequest();
xhr.open('POST', 'somewhere', true);
xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
};
xhr.send(data);

//combinaison des trois
var http = new XMLHttpRequest();
var postdata= "foo=bar&baz=hey"; //Probably need the escape method for values here, like you did

http.open("POST", "http://yourdomain.com", true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.setRequestHeader("Content-length", postdata.length);

http.onreadystatechange = function() {//Call a function when the state changes.
   if(http.readyState == 4 && http.status == 200) {
      alert(http.responseText);
   }
}
http.send(postdata);

var req = new XMLHttpRequest();
req.open('POST', 'http://somesite.com/', true);
req.setRequestHeader("num", "20");
req.setRequestHeader("str", "qwerty");
req.send(post);
