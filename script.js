// Data do início do namoro: 10 de Setembro de 2023
const startDate = new Date("2023-09-10T00:00:00").getTime();

// Atualizar o contador a cada segundo
const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    const now = new Date().getTime();
    const distance = now - startDate;

    if (distance < 0) return; // Caso a data seja no futuro

    // Cálculos de tempo
    const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    const years = Math.floor(totalDays / 365);
    const days = totalDays % 365;
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualizar HTML
    if (document.getElementById("days")) {
        if (document.getElementById("years")) {
            document.getElementById("years").innerText = years;
        }
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }
}

// Chamar uma vez para não ter o delay de 1 segundo inicial
updateTimer();

// Animação de Scroll (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Para animar apenas 1 vez
        }
    });
}, observerOptions);

document.querySelectorAll('.hidden').forEach((element) => {
    // Para a seção hero, mostrar imediatamente se já estiver na tela, 
    // mas deixamos as animações CSS lidarem com o conteúdo interno
    if(element.classList.contains('hero')){
        element.classList.add('show');
    } else {
        observer.observe(element);
    }
});

// Header Dinâmico (Muda background ao rolar a página)
const header = document.getElementById("header");
if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}
