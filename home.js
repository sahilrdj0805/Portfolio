window.addEventListener("load",()=>{
   var tl=gsap.timeline() 
   tl.from("#nav h3 ", {
      y:-50 ,
      opacity:0,
      delay:0.2,
      duration:1,
      stagger:0.3 
  
   })
  
   tl.from("#div1", {
      x:-500,
      opacity:0,
      duration:0.8,
      stagger:0.3
   })
   tl.from("#div2", {
      x:-500,
      opacity:0,
      duration:0.8,
      stagger:0.3
   })
   tl.from("#div3", {
      x:-500,
      opacity:0,
      duration:0.8,
      stagger:0.3
   }) 
  
   tl.from("#bottom h3 ", {
     y:50 ,
     opacity:0,
     delay:0.4,
     duration:1,
     stagger:0.3 
  
  })
})


VANTA.BIRDS({
  el: "#main",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  wingSpan:34,
//   backgroundColor: 0xdeeded,
backgroundColor: 0xF3D9C2,

  color1: 0xf1468,
  color2: 0xff0078
})

let btn=document.querySelector("#btn")
function speak(text){
   let text_speak=new SpeechSynthesisUtterance(text)
   text_speak.rate=0.9;
   text_speak.pitch=0.8;
   text_speak.volume=1;
   text_speak.lang="hi-GB"
   window.speechSynthesis.speak(text_speak)
   }

   let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{

   let currentIndex= event.resultIndex
  let transcript= event.results[currentIndex][0].transcript
 

  takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
   recognition.start()
  
})

function takeCommand(msg){


   if(msg.includes("open about")||msg.includes("open about page")||msg.includes("open about section")||msg.includes("open about ")){
      speak("as you command sir")
      window.open("./About.html")
      }
   
      else if(msg.includes("open home")||msg.includes("open home page")||msg.includes("open home section")||msg.includes("open home")){
         speak("as you command sir")
         window.open("./index.html")
         }
         else if(msg.includes("open projects")||msg.includes("open projects page")||msg.includes("open projects section")||msg.includes("open Projects")){
            speak("as you command sir")
            window.open("./project.html")
            }
            else if(msg.includes("open contact")||msg.includes("open contact page")||msg.includes("open contact section")||msg.includes("open connect")||msg.includes("open connect page")||msg.includes("open connect section")||msg.includes("connect")){
               speak("as you command sir")
               window.open("./contact.html")
               }
               else if(msg.includes("open back")){
                  speak("as you command sir")
                  window.open("./index.html")
                  
               }
   else{
   speak("Sorry Sir!!! I dont have any idea about this")
   
   }
   
   }


