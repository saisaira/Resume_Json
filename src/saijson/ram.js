// XMLHttpRequest Initilisation
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
// Fetch and promises
//   //Fecth and promises
  function loadJSON(url) {
    return new Promise((resolve, reject) => {
      return fetch(url).then(response => {
        if (response.ok) {
          resolve(response.json());
        } else {
          reject(new Error('error'));
        }
      })
    })
  }
  //data calling
  var myPromise = loadJSON("data.json");
myPromise.then(data => {
  // Here's a list of repos!
      console.log(data);
      basic(data.basics);
      edu(data.education);
      interest(data.interest);
      lang(data.Languages);
      carrier(data.carrier);
      experience(data.experience);
      skills(data.technicalskils);
      Acheivements(data.Acheivements);
      declaration(data.Declaration);
});
