const socket = io();

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const usernameInput = document.getElementById('usernameInput');
const messageList = document.getElementById('messageList');
const h4 = document.createElement('h4');

sendButton.addEventListener('click', (e) => {
  const message = messageInput.value;
  const username = usernameInput.value;
  if (message.trim() !== '' && username.trim() !== '') {
    socket.emit('chatMessage', { username, message });
    messageInput.value = '';
    h4.textContent = '';
  }else{
    e.preventDefault();
    messageList.appendChild(h4)
    h4.textContent = 'Debe completar los campos';
  }
});

socket.on('chatMessage', ({ username, message }) => {
  const li = document.createElement('li');
  li.textContent = `${username}: ${message}`;
  messageList.appendChild(li);
});
