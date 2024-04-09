document.addEventListener('DOMContentLoaded', function() {
    
    const buttons = document.querySelectorAll('button[data-target]');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPage = button.getAttribute('data-target');
            window.location.href = targetPage + '.html';
        });
    });
});