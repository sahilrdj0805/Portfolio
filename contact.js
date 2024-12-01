var tl=gsap.timeline() 
tl.from("#nav h3 ", {
   y:-50 ,
   opacity:0,
   delay:0.2,
   duration:1,
   stagger:0.3 

})

tl.from(".contact , .input-box ", {
    z:150 ,
    opacity:0,
    delay:0.2,
    duration:1,
    stagger:0.3 
 
 })



function sendEmail(){



   Email.send({
      Host : "smtp.elasticemail.com",
      Username : "rdjahmadnke@gmail.com",
      Password : "5E2220C3CF52DFF5D52D70F40335C8F45B92",
      To : 'rdjahmadnke@gmail.com',
      From : document.getElementById("email").value,
      Subject :document.getElementById("subject").value,
      Body : document.getElementById("message").value
  }).then(
    message =>sendmsg(message)
  );
}

function sendmsg() {
   const popupContainer = document.getElementById("popupContainer");


   popupContainer.classList.add("show");
   document.body.classList.add("no-scroll"); 
}

// Function to close the popup
function closePopup() {
   const popupContainer = document.getElementById("popupContainer");
   popupContainer.classList.remove("show");
   document.body.classList.remove("no-scroll"); 
}

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