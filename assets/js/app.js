document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.count');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;

        const updateCount = () => {
            if (count < target) {
                count++;
                counter.innerHTML = count + ' <span style="color: #00C663; font-family: \'Inter Display\'; font-size: 48px; font-weight: 600;">+</span>';
                requestAnimationFrame(updateCount);
            } else {
                counter.innerHTML = target + ' <span style="color: #00C663; font-family: \'Inter Display\'; font-size: 48px; font-weight: 600;">+</span>';
            }
        };

        updateCount();
    });
});
