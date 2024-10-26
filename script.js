function sendMessage() {
    const input = document.getElementById("chat-input");
    const chatBox = document.getElementById("chat-box");
    
    if (input.value.trim() !== "") {
        const message = document.createElement("div");
        message.textContent
       }
     }

       // List of image URLs for the slideshow
    const images = [
        'images/young1.jpg',
        'images/young2.jpg',
        'images/young3.jpg',
        'images/young4.jpg',
        'images/young5.jpg',
        'images/young6.jpg',
        'images/young7.jpg',
        'images/young8.jpg',
        'images/young9.jpg',
        'images/youngg2.jpg'
    ];

    // Select the hero div
    const heroDiv = document.querySelector('.hero');
    let currentImageIndex = 0;

    // Function to change the background image
    function changeBackgroundImage() {
        heroDiv.style.backgroundImage = `url(${images[currentImageIndex]})`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Set an interval to change the image every 5 seconds
    setInterval(changeBackgroundImage, 5000); // 5000ms = 5 seconds


    const registerButton = document.querySelector('.btn[href="#register"]');
    const loginButton = document.querySelector('.btn[href="#login"]');
    const registerForm = document.getElementById('register');
    const loginForm = document.getElementById('login');

    registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.style.display = 'block'; // Show registration form
        loginForm.style.display = 'none'; // Hide login form
    });

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'block'; // Show login form
        registerForm.style.display = 'none'; // Hide registration form
    });

// script.js
document.addEventListener('DOMContentLoaded', function() {
  const sendButton = document.getElementById('sendButton');
  const inputField = document.getElementById('messageInput');
  const messagesDiv = document.querySelector('.messages');

  // Function to send message
  sendButton.addEventListener('click', function() {
      sendMessage();
  });

  // Allow sending message with Enter key
  inputField.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          sendMessage();
      }
  });

  function sendMessage() {
      const messageText = inputField.value.trim();
      
      if (messageText) {
          // Create a new message element
          const messageContainer = document.createElement('div');
          messageContainer.classList.add('message', 'sender');

          const messageContent = document.createElement('div');
          messageContent.classList.add('message-content');
          messageContent.innerHTML = `<p>${messageText}</p>`;
          
          messageContainer.appendChild(messageContent);
          messagesDiv.appendChild(messageContainer);
          inputField.value = ''; // Clear input field

          // Scroll to the bottom of the messages
          messagesDiv.scrollTop = messagesDiv.scrollHeight;
      }
  }
});
