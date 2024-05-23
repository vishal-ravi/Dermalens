const chatbotToggler = document.querySelector(".chatbot-toggler"),
  closeBtn = document.querySelector(".close-btn"),
  chatbox = document.querySelector(".chatbox"),
  chatInput = document.querySelector(".chat-input textarea"),
  sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null;
const API_KEY = "PASTE-YOUR-API-KEY";
const inputInitHeight = chatInput.scrollHeight;

// Function to create chat list item
const createChatLi = (message, type) => {
  let li = document.createElement("li");
  li.classList.add("chat", type);
  let content = type === "outgoing" ? "<p></p>" : '<span class="material-symbols-outlined">smart_toy</span><p></p>';
  li.innerHTML = content;
  li.querySelector("p").textContent = message;
  return li;
};

// Function to handle chat input
const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (userMessage) {
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    setTimeout(() => {
      let t = createChatLi("Typing...", "incoming");
      chatbox.appendChild(t);
      chatbox.scrollTo(0, chatbox.scrollHeight);
      generateResponse(t);
    }, 600);
  }
};

// Function to generate response
const generateResponse = t => {
  let e = t.querySelector("p");
  let userQuestion = userMessage.trim().toLowerCase(); // Convert user input to lowercase
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const { greetings, responses } = data;
      const allQuestions = responses.map(obj => obj.question.toLowerCase());
      const allAnswers = responses.map(obj => obj.answer);

      if (greetings.includes(userQuestion)) {
        e.textContent = greetings[Math.floor(Math.random() * greetings.length)];
      } else {
        const index = allQuestions.indexOf(userQuestion);
        if (index !== -1) {
          e.textContent = allAnswers[index];
        } else {
          e.textContent = "I'm sorry, I don't understand that question.";
        }
      }
    })
    .catch(error => {
      e.classList.add("error");
      e.textContent = "Oops! Something went wrong. Please try again.";
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

// Event listeners for chat input
chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", t => {
  if (t.key === "Enter" && !t.shiftKey && window.innerWidth > 800) {
    t.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);

// Event listener for toggling chatbot visibility
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
