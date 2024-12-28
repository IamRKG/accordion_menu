document.addEventListener('click', (e) => {
    if (e.target.tagName === 'H2') {
        const parent = e.target.parentElement;
        console.log(parent);
        const p = parent.querySelector('p');
        const isHidden = p.classList.contains('hidden');
        p.classList.toggle('hidden', !isHidden);
        e.target.setAttribute('aria-expanded', !isHidden);
    }
});