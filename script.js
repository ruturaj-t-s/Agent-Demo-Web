const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const exampleBtns = document.querySelectorAll(".example-btn");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function fakeAgentResponse(question) {
  return (
    "I’ve received your question: \"" +
    question +
    "\".\n\nIn a real deployment, this would trigger MMM analysis, simulations, or budget optimization logic."
  );
}

function handleSend(text) {
  if (!text.trim()) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    addMessage(fakeAgentResponse(text), "agent");
  }, 700);
}

sendBtn.addEventListener("click", () => {
  handleSend(userInput.value);
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleSend(userInput.value);
  }
});

exampleBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    handleSend(btn.textContent);
  });
});
