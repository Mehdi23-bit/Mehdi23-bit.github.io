h1=document.getElementById("cursur")
let   phrase1="Hi I am El Mehdi Iskandar"
let  phrase2="Welcom to My Portfolio"
function Phrase(i){
setInterval(() => {
  
    h1.textContent= h1.textContent.slice(0, -1); 
    h1.textContent+=phrase1[i]+"|"
        i++;
        if(i>=phrase1.length){
        temp=phrase1
        phrase1=phrase2
        phrase2=temp
        setTimeout(3300)
        h1.textContent="|"
          i=0
    }
  }, 300);
}
Phrase(0)