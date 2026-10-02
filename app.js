const messages = document.getElementById("messages");

function addMessage(text, type) {
  const item = document.createElement("p");
  item.textContent = text;
  item.className = type;
  messages.appendChild(item);
}
