const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');

function sendMessage() {
  const msg = messageInput.value.trim();
  if(msg === "") return;

  const msgDiv = document.createElement('div');
  msgDiv.className = 'message';
  msgDiv.innerText = msg;
  
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
  messageInput.value = "";
}
