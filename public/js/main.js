// Age Verification
document.addEventListener('DOMContentLoaded', function() {
    const ageModal = document.getElementById('ageModal');
    const hasVerified = localStorage.getItem('ageVerified');
    
    if (!hasVerified && ageModal) {
        ageModal.classList.remove('hidden');
    }
});

function confirmAge() {
    localStorage.setItem('ageVerified', 'true');
    document.getElementById('ageModal').classList.add('hidden');
}

function denyAge() {
    window.location.href = 'https://www.google.com';
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('bg-dark-900/95');
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('bg-dark-900/95');
        navbar.classList.remove('shadow-lg');
    }
    
    lastScroll = currentScroll;
});

// Newsletter Form
const newsletterForm = document.getElementById('newsletterForm');
const newsletterMessage = document.getElementById('newsletterMessage');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[name="email"]').value;
        const submitBtn = newsletterForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;
        
        try {
            const response = await fetch('/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            
            const data = await response.json();
            
            if (data.success) {
                newsletterMessage.textContent = data.message;
                newsletterMessage.className = 'text-sm mt-2 text-green-400';
                newsletterForm.reset();
            } else {
                newsletterMessage.textContent = data.message;
                newsletterMessage.className = 'text-sm mt-2 text-red-400';
            }
        } catch (error) {
            newsletterMessage.textContent = 'An error occurred. Please try again.';
            newsletterMessage.className = 'text-sm mt-2 text-red-400';
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            setTimeout(() => {
                newsletterMessage.textContent = '';
            }, 5000);
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
