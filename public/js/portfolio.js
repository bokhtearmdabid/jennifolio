// Portfolio Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.portfolio-filter');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-primary-500', 'text-white');
                btn.classList.add('bg-dark-700', 'text-gray-300');
            });
            button.classList.add('active', 'bg-primary-500', 'text-white');
            button.classList.remove('bg-dark-700', 'text-gray-300');
            
            // Filter items
            portfolioItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    item.classList.add('animate-fade-in');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
