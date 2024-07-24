// elements

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");

// speech recognitiion setup

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


// sr start
recognition.onstart = function () {
  console.log("vr active");
};

// sr result
recognition.onresult = function (event) {
  let current = event.resultIndex;
  let transcript = event.results[current][0].transcript;
  transcript = transcript.toLowerCase();
  console.log(`my words : ${transcript} `);
  if (transcript.includes("hello")) {
    readOut("hello sinu");
    console.log("hello sinu");
  }
  if (transcript.includes("open youtube")) {
    readOut("ok sinu opening");
    window.open("https://www.youtube.com/");
  }
  if (transcript.includes("open google")) {
    readOut("ok sinu opening");
    window.open("https://www.google.com/");
  }

  // for open calculator

  if (transcript.includes("open calculator")) {
    readOut("ok sinu opening");
    
    window.open("https://www.online-calculator.com/full-screen-calculator/");
    console.log("calculator has been opened");
   
  }

  // google search result

  if (transcript.toLowerCase().includes("search")) {
    readOut("ok sinu");
    let searchTerm = transcript.toLowerCase().replace("search", "").trim();
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`,
      "_blank"
    );
  }

  // play music

  if (transcript.includes("play")) {
    const songName = transcript.replace("play ", "").trim().replace(/\.$/, ""); // Extract the song name from the transcript
    readOut(`Playing ${songName} for you`);
    const youtubeUrl = `https://www.youtube.com/results?search_query=${songName}`;
    window.open(youtubeUrl, "_blank");
  }

  // open github

  const phrases = ["open github", "github open"];  

if (phrases.some(phrase => transcript.includes(phrase))) {  
    readOut("ok sinu opening");  
    window.open("https://github.com/");  
    console.log("github has been opened");  
}


const portfolio = ["open my portfolio", " i want to see my website"];

if (portfolio.some(phrase => transcript.includes(phrase))) 
{
  readOut("ok sinu opening");  
  window.open("https://www.sinudeveloper.me/");  
  console.log("portfolio has been opened");
}



};

// sr stop
recognition.onend = function () {
  console.log("vr deactive");
};

startBtn.addEventListener("click", () => {
  recognition.start();
});
stopBtn.addEventListener("click", () => {
  recognition.stop();
});

// sinu speech

function readOut(message) {
  if ("speechSynthesis" in window) {
    const speech = new SpeechSynthesisUtterance();
    // const allVoices =  speechSynthesis.getVoices();
    speech.text = message;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
  } else {
    console.log("Speech Synthesis not supported in this browser");
  }
}

// example
speakBtn.addEventListener("click", () => {
  readOut("teri maa ki chuut");
});
