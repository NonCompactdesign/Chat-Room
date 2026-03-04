// Room UI JavaScript - Basic Setup
// This file will handle the room UI logic

console.log('Room UI loaded');

// Tab Switching Logic
const tabButtons = document.querySelectorAll('.tab-button');
const chatDisplayArea = document.querySelector('.chat-display-area');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all tabs
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Get channel type
        const channelType = this.getAttribute('data-channel');
        console.log(`Switched to ${channelType} channel`);
        
        // Clear chat area (will be replaced with actual channel switching logic)
        // chatDisplayArea.innerHTML = '';
    });
});

// Send button click handler
const sendButton = document.querySelector('.send-button');
const messageInput = document.querySelector('.message-input');

sendButton.addEventListener('click', function() {
    const message = messageInput.value.trim();
    if (message) {
        console.log('Sending message:', message);
        // Message sending logic will be added later
        messageInput.value = '';
    }
});

// Send message on Enter key
messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
