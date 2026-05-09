document.addEventListener('DOMContentLoaded', () => {
    
    // Feature 1: Smooth Scrolling for Navigation Anchor Links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only apply smooth scrolling to internal links (starting with #)
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20, // Adjust offset if you make the header fixed later
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Feature 2: Reveal Animation on Scroll (Fades in AND out)
    const platformBoxes = document.querySelectorAll('.platform-box');
    
    // Set the initial hidden state and smooth transitions
    platformBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px)';
        // Keeps your color and shadow transitions from the hover effect intact
        box.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
    });

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade IN when the box enters the screen
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                // Fade OUT when the box leaves the screen (scrolling up or down)
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
            }
        });
    }, {
        // This threshold means the animation triggers when 15% of the box is visible
        threshold: 0.6
    });

    // Tell the observer to watch every platform box
    platformBoxes.forEach(box => {
        observer.observe(box);
    });

    // Feature 3: JS-powered Hover Effect for Platform Boxes
    platformBoxes.forEach(box => {
        // When the mouse hovers OVER the box
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'translateY(0) scale(1.05)';
            box.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.4)';
            box.style.cursor = 'default';
            box.style.backgroundColor = '#cd44ff';
        });

        // When the mouse moves OFF the box
        box.addEventListener('mouseleave', () => {
            // Revert back to normal size and normal shadow
            box.style.transform = 'translateY(0) scale(1)';
            box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; 
            box.style.backgroundColor = '#5c277a';
        });
    });

    // Feature 4: Scrolling Animation for Text Boxes in main.html

    const textBoxes = document.querySelectorAll('#text-box'); 
    
    // 2. Set the initial hidden state and smooth transitions
    textBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(40px)'; // Pushed down slightly more for a nice effect
        box.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });

    // 3. Create a new Intersection Observer specifically for the text boxes
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Fade IN and slide up when the box enters the screen
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                // Fade OUT and slide down when the box leaves the screen
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(40px)';
            }
        });
    }, {
        threshold: 0.65 // Triggers when 15% of the text box is visible
    });

    // 4. Tell the observer to watch every text box
    textBoxes.forEach(box => {
        textObserver.observe(box);
    });
});