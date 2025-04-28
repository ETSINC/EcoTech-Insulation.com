// Script for basic form handling and validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (name && email && message) {
    alert('Thank you, ' + name + '! Your message has been sent.');
    // Reset form after successful "submission"
    this.reset();
  } else {
    alert('Please fill in all fields before submitting.');
  }
});