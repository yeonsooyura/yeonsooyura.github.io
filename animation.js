function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.setAttribute('class', '')
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

animateCSS('#tree', 'slideInUp', function() {
    setTimeout(function() {
        animateCSS('#person', 'bounceInUp')
    }, 200);
});