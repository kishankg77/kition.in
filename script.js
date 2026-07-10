document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusDiv = document.getElementById('formStatus');
    
    if(name && email && message) {
        statusDiv.style.color = 'green';
        statusDiv.textContent = 'Thank you, ' + name + '! Your message has been sent successfully.';
        this.reset();
    } else {
        statusDiv.style.color = 'red';
        statusDiv.textContent = 'Please fill in all fields.';
    }
});
