// Script for basic form handl// Script for basic form handling and validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting by default

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation
  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    // Reset form after successful "submission"
    this.reset();
  } else {
    alert('Please fill in all fields before submitting.');
  }
});