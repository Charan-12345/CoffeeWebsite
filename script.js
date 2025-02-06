
//imp! NAVBAR SCROLLING COLOR

window.onscroll = () => {
    if(scrollY > 233){
        document.querySelector('.header-section').style.backgroundColor = '#1b1514e7';
    }
    else if (scrollY === 0){
        document.querySelector('.header-section').style.backgroundColor = 'transparent';
    }
}

//imp! COUNTER UP JAVASCRIPT
let valueDisplays = document.querySelectorAll(".section-5__counter-number");
let interval = 5000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.innerHTML =`${startValue}<span class="plus-symbol">+</span>`;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// chatbot code
document.getElementById("chatbot-toggle").addEventListener("click", function() {
  document.getElementById("chatbot").style.display = "flex";
});

document.getElementById("close-chat").addEventListener("click", function() {
  document.getElementById("chatbot").style.display = "none";
});

document.getElementById("send-btn").addEventListener("click", function() {
  let input = document.getElementById("chatbot-input");
  let message = input.value;
  if (message.trim() !== "") {
      let chatbox = document.getElementById("chatbot-messages");
      let userMsg = document.createElement("p");
      userMsg.textContent = "You: " + message;
      chatbox.appendChild(userMsg);
      input.value = "";
      
      setTimeout(() => {
          let botMsg = document.createElement("p");
          botMsg.textContent = "Bot: Thanks for reaching out! How can I assist you?";
          chatbox.appendChild(botMsg);
          chatbox.scrollTop = chatbox.scrollHeight;
      }, 2000);
  }
});
