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

    // Feature 2: Reveal Animation on Scroll for Platform Boxes
    const platformBoxes = document.querySelectorAll('.platform-box');
    
    // Set the initial hidden state for the animation
    platformBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px)';
        box.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const revealOnScroll = () => {
        // Calculate when the element enters the bottom 80% of the viewport
        const triggerBottom = (window.innerHeight / 5) * 4;
        
        platformBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            
            if (boxTop < triggerBottom) {
                // Reveal the box
                box.style.opacity = '1';
                box.style.transform = 'translateY(0)';
            }
        });
    };

    // Listen for scroll events and trigger on initial load
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 

    // Feature 3: JS-powered Hover Effect for Platform Boxes
    // (Note: We already declared 'platformBoxes' earlier for the scroll animation, 
    // so we can just reuse that same variable here!)
    platformBoxes.forEach(box => {
        // When the mouse hovers OVER the box
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'translateY(0) scale(1.05)';
            box.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.4)';
            box.style.cursor = 'default';
        });

        // When the mouse moves OFF the box
        box.addEventListener('mouseleave', () => {
            // Revert back to normal size and normal shadow
            box.style.transform = 'translateY(0) scale(1)';
            box.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; 
        });
    });
});