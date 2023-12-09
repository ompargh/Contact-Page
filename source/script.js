const buttons = document.querySelectorAll('.call-button, .email-button, .telegram-button, .instagram-button, .youtube-button, .twitter-button, .discord-button, .whatsapp-button');

buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', function() {
        button.style.transform = 'scale(1)';
    });
});