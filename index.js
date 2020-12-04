let inputText = document.querySelector(".input-txt");
let button = document.querySelector(".btn");
let output = document.querySelector(".output");


const url = "https://api.funtranslations.com/translate/groot.json";

let serverUrl=(text)=>{
    return url +"?" +"text=" + text;
}
const errorHandler=(error)=>{
    alert("The Server is down! Please try after some time");
}

const clickHandler=()=>{
    var input = inputText.value;
   fetch(serverUrl(input))
   .then(response=>response.json())
   .then(json=>{
       var outputText = json.contents.translated;
       output.innerText = outputText +" 😂" +" !!!";
   })
   .catch(errorHandler);

}
button.addEventListener("click",clickHandler);
