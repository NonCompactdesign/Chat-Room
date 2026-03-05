// Room UI JavaScript - Basic Setup
// This file will handle the room UI logic

console.log('Room UI loaded');

// Burger Menu Toggle for Mobile
const burgerMenu = document.getElementById('burgerMenu');
const leftSidebar = document.querySelector('.left-sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function toggleSidebar() {
    burgerMenu.classList.toggle('active');
    leftSidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
}

// Toggle sidebar when burger menu is clicked
burgerMenu.addEventListener('click', toggleSidebar);

// Close sidebar when overlay is clicked
sidebarOverlay.addEventListener('click', toggleSidebar);

// Tab Switching Logic
const tabButtons = document.querySelectorAll('.tab-button');
const publicLobbyView = document.querySelector('.public-lobby-view');
const privateChannelsView = document.querySelector('.private-channels-view');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all tabs
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Get channel type
        const channelType = this.getAttribute('data-channel');
        console.log(`Switched to ${channelType} channel`);
        
        // Toggle between views
        if (channelType === 'public') {
            publicLobbyView.classList.add('active-view');
            privateChannelsView.classList.remove('active-view');
            document.body.classList.remove('private-view-active');
        } else if (channelType === 'private') {
            publicLobbyView.classList.remove('active-view');
            privateChannelsView.classList.add('active-view');
            document.body.classList.add('private-view-active');
        }
    });
});

// Contact Item Selection (Private Channels)
const contactItems = document.querySelectorAll('.contact-item');
const contactItemsSidebar = document.querySelectorAll('.contact-item-sidebar');

// Function to handle contact selection
function selectContact(contactName, sidebarItems, mainItems) {
    console.log(`Selected conversation with: ${contactName}`);
    
    // Close sidebar on mobile when contact is selected
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
    
    // Load conversation (will be implemented later)
}

// Main contacts list (desktop private channels view)
contactItems.forEach((contact, index) => {
    contact.addEventListener('click', function() {
        // Remove active class from all contacts
        contactItems.forEach(item => item.classList.remove('active'));
        contactItemsSidebar.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked contact
        this.classList.add('active');
        
        // Sync with sidebar contact
        if (contactItemsSidebar[index]) {
            contactItemsSidebar[index].classList.add('active');
        }
        
        const contactName = this.querySelector('.contact-name').textContent;
        selectContact(contactName, contactItemsSidebar, contactItems);
    });
});

// Sidebar contacts list (mobile private channels view)
contactItemsSidebar.forEach((contact, index) => {
    contact.addEventListener('click', function() {
        // Remove active class from all contacts
        contactItems.forEach(item => item.classList.remove('active'));
        contactItemsSidebar.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked contact
        this.classList.add('active');
        
        // Sync with main contact
        if (contactItems[index]) {
            contactItems[index].classList.add('active');
        }
        
        const contactName = this.querySelector('.contact-name').textContent;
        selectContact(contactName, contactItemsSidebar, contactItems);
    });
});

// Send button click handler
const sendButtons = document.querySelectorAll('.send-button');
const messageInputs = document.querySelectorAll('.message-input');

sendButtons.forEach((sendButton, index) => {
    const messageInput = messageInputs[index];
    
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
});
