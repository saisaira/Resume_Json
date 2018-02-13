(function(){
     function sai(file,callback){
       var xhr=new XMLHttpRequest();
       xhr.overrideMimeType("application/json");
       xhr.open("GET",file,true);
       xhr.onReadystatechange=function(){
         if(xhr.readystate ===4 && xhr.status =="200"){
           callback(xhr.responseText);
         }
       }
       xhr.send();
     }
//load json file
sai("data.json",function(text) {
  let data =JSON.parse(text);
  console.log(data);


})





})();
