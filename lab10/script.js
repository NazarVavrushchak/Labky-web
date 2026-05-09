const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

const welcomeMsg = document.getElementById('welcome-back-msg');
const savedName = localStorage.getItem('userName');

if (savedName) {
    welcomeMsg.textContent = `Welcome back, ${savedName}! Glad to see you again.`;
    welcomeMsg.style.display = 'block';
}

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Error! Please fill in all form fields.");
        return;
    }

    localStorage.setItem('userName', name);

    console.log("--- New message from the form ---");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    contactForm.reset();

    welcomeMsg.textContent = `Welcome back, ${name}! Glad to see you again.`;
    welcomeMsg.style.display = 'block';
});