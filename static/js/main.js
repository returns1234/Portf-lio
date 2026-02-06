// Animação de Reveal ao Scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        // Mostrar elementos que já estão na tela ou próximos
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('show');
        }
    });
}

// Menu Mobile Toggle
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });
}

// Executar reveal IMEDIATAMENTE ao carregar
document.addEventListener('DOMContentLoaded', () => {
    revealOnScroll(); // Executa uma vez ao carregar
});

// Executar reveal ao fazer scroll
window.addEventListener('scroll', revealOnScroll);

const light = document.querySelector('.mouse-light');

document.addEventListener('mousemove', (e) => {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
});

let timeout;

document.addEventListener('mousemove', (e) => {
    light.style.opacity = '1';
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        light.style.opacity = '0';
    }, 500);
});

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        light.style.transform = 'translate(-50%, -50%) scale(1.2)';
    });

    card.addEventListener('mouseleave', () => {
        light.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});
