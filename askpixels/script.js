// Initialize EmailJS with your public key (replace with your actual key)
emailjs.init("YOUR_PUBLIC_KEY");

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "info@premiumphotography.com" // Replace with your email
    })
    .then(function(response) {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
    }, function(error) {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
    });
});

// Gallery Lightbox Functionality
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
    });
});

closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = 'none';
    }
});