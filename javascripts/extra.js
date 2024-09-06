document.addEventListener('DOMContentLoaded', function () {

    // Select the button by its classes
    const subscribeButton = document.querySelector('.md-button.md-button--primary');

    // Check if the button exists
    if (subscribeButton) {
        // Attach a click event listener
        subscribeButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            alert('Thank you for subscribing!');
            // You can add more custom behavior here
        });
    }


    // Select all elements with the .md-clipboard class
    const clickedTargets = document.querySelectorAll('.md-clipboard.md-icon');
    clickedTargets.forEach(function (clickedTarget) {
        clickedTarget.addEventListener('click', function (e) {
            console.error("Viet Pro ---");
            confetti({
                angle: randomInRange(55, 125),
                spread: randomInRange(50, 70),
                particleCount: randomInRange(50, 100),
                origin: { y: 0.6 },
            });

        });
    });

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }
});
