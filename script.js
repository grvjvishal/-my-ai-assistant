function sendMessage() {
  const input = document.getElementById("message");
  const output = document.getElementById("output");

  if (input.value.trim() === "") return;

  output.textContent = "You said: " + input.value;
  input.value = "";
}
