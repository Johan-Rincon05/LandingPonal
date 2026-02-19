// Funciones globales para modales
// ============================================

// Función para abrir modal de features
function openFeatureModal(featureKey) {
    const modal = document.getElementById('featureModal');
    const titleEl = document.getElementById('featureModalTitle');
    const bodyEl = document.getElementById('featureModalBody');
    
    const data = featureData[featureKey];
    if (data) {
        titleEl.textContent = data.title;
        bodyEl.innerHTML = data.content;
    }
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal de features
function closeFeatureModal() {
    const modal = document.getElementById('featureModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Función para abrir modal de registro desde modal de features
function openRegistrationModal() {
    closeFeatureModal();
    const modal = document.getElementById('registrationModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Función para mostrar modal de éxito
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal de éxito
function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Funciones del carrusel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const totalSlides = slides.length;

function showSlide(n) {
    currentSlide = n;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        dots[index].classList.remove('active');
    });
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function goToSlide(n) {
    showSlide(n);
}

// Datos de los modales de features
const featureData = {
    homologacion: {
        title: "Homologación hacia 11 Programas Activos",
        content: `<p>Gracias al convenio entre la Corporación Universitaria Americana y la Policía Nacional, puedes homologar tu Técnico Profesional en Servicios de Policía hacia los siguientes programas:</p>
        <ul>
            <li>Administración de Empresas</li>
            <li>Administración Pública</li>
            <li>Administración Turística y Hotelera</li>
            <li>Comunicaciones y Marketing</li>
            <li>Contaduría Pública</li>
            <li>Derecho</li>
            <li>Ingeniería de Sistemas</li>
            <li>Ingeniería Industrial</li>
            <li>Licenciatura en Educación Infantil</li>
            <li>Negocios Internacionales</li>
            <li>Psicología</li>
        </ul>
        <p style="margin-top: 1rem;"><strong>Homologación inmediata</strong> convalidando tus conocimientos y experiencia policial.</p>`
    },
    reduccion: {
        title: "Reducción de Tiempo y Costos entre 49% al 68%",
        content: `<p>Optimiza tu inversión educativa con nuestro programa de homologación:</p>
        <ul>
            <li><strong>Ahorro en tiempo:</strong> Completa tu profesional en solo 4 cuatrimestres en lugar de 8 semestres tradicionales</li>
            <li><strong>Ahorro económico:</strong> Benefíciate de descuentos exclusivos Negociados para personal policial</li>
            <li><strong>Metodología eficiente:</strong> Presencial Asistida por Tecnologías (PAT) compatible con tu horario de servicio</li>
        </ul>
        <p style="margin-top: 1rem;">El proceso de homologación reconoce tus estudios anteriores, eliminando la necesidad de repetir materias ya cursadas.</p>`
    },
    carrera: {
        title: "Culmina tu Especialización o Posgrado en 2 Cuatrimestres",
        content: `<p>Gracias al convenio con la Policía Nacional, puedes acceder a las siguientes especializaciones:</p>
        <ul>
            <li>Especialización en Derecho Administrativo</li>
            <li>Especialización en Derecho Penal</li>
            <li>Especialización en Gerencia de Proyectos</li>
            <li>Especialización en Gerencia del Talento Humano</li>
            <li>Especialización en Gerencia Empresarial y Competitividad</li>
            <li>Especialización en Gerencia Tributaria</li>
        </ul>
        <p style="margin-top: 1rem;">Homologa tu técnico policial y obtén tu especialización en solo 2 cuatrimestres.</p>`
    },
    valor: {
        title: "Valor Cuatrimestral: $1.900.000",
        content: `<p>Gracias al convenio exclusivo con la Policía Nacional, accede a un beneficio único:</p>
        <ul>
            <li><strong>Precio regular:</strong> $5.000.000 - $6.000.000 por cuatrimestre</li>
            <li><strong>Precio conveniado:</strong> <span style="color: #CEFE3B; font-weight: bold;">$1.900.000 COP</span> por cuatrimestre</li>
            <li><strong>Ahorro:</strong> ¡Más del 60% de descuento!</li>
            <li><strong>Formas de pago:</strong> Diferentes opciones adaptadas a tu presupuesto</li>
            <li><strong>Descuentos especiales:</strong> Para grupos o pagos anticipados</li>
            <li><strong>Financiación:</strong> Posibilidad de planes de financiamiento</li>
        </ul>
        <p style="margin-top: 1rem; color: #CEFE3B; font-weight: 600;">Esta es una oportunidad única. ¡No dejes pasar este beneficio exclusivo para ti y tu familia!</p>`
    }
};

// ============================================
// Código que se ejecuta cuando el DOM está listo
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const modal = document.getElementById('registrationModal');
    const openButtons = document.querySelectorAll('.btn-primary:not([type="submit"])');
    const closeButton = document.querySelector('.modal-close');
    const form = document.getElementById('leadForm');

    // Referencias para la barra fija inferior
    const fixedBottomBar = document.getElementById('fixedBottomBar');
    const fixedBottomBtn = document.querySelector('.btn-fixed-bottom');

    // Referencia para el campo "Código" y "Cuál"
    const codigoSelect = document.getElementById('codigo');
    const cualContainer = document.getElementById('cualContainer');
    const cualInput = document.getElementById('cual');

    // Función para abrir el modal
    function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        form.reset();
        if (cualContainer) {
            cualContainer.style.display = 'none';
            if (cualInput) cualInput.removeAttribute('required');
        }
    }

    // Event listener para abrir el modal (botones originales)
    openButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    // Event listener para el botón de la barra fija inferior
    if (fixedBottomBtn) {
        fixedBottomBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    }

    // Event listener para cerrar el modal (botón X)
    closeButton.addEventListener('click', closeModal);

    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Mostrar/ocultar campo "Cuál" según selección de "Código"
    if (codigoSelect && cualContainer) {
        codigoSelect.addEventListener('change', function() {
            if (this.value === 'Otro') {
                cualContainer.style.display = 'flex';
                cualInput.setAttribute('required', 'required');
            } else {
                cualContainer.style.display = 'none';
                cualInput.removeAttribute('required');
                cualInput.value = '';
            }
        });
    }

    // Manejo del envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Enviando...';
        
        const formData = new FormData(form);
        
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxLlyYjKjcgSLgn5ebadE4dQCBejNhr1UzxnA9rTYFz7WrZVDmJNhDPn8g84YGHTATk/exec';

        fetch(scriptURL, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(text => {
            console.log('Formulario enviado con éxito');
            
            submitBtn.innerHTML = '¡ENVIADO!';
            submitBtn.style.backgroundColor = '#4CAF50';
            submitBtn.style.color = 'white';
            
            setTimeout(() => {
                closeModal();
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                    submitBtn.disabled = false;
                }, 500);
                
                showSuccessModal();
                form.reset();
            }, 1500);
        })
        .catch(error => {
            console.error('Error:', error);
            
            submitBtn.innerHTML = 'Error al enviar';
            submitBtn.style.backgroundColor = '#f44336';
            submitBtn.style.color = 'white';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.style.color = '';
                submitBtn.disabled = false;
            }, 3000);
            
            alert('Hubo un error al enviar el formulario. Por favor intenta de nuevo.');
        });
    });

    // ===== LÓGICA DE BARRA FIJA INFERIOR =====
    function checkButtonsVisibility() {
        if (!fixedBottomBar || !openButtons.length) return;
        
        let anyButtonVisible = false;
        
        openButtons.forEach(btn => {
            if (isElementInViewport(btn)) {
                anyButtonVisible = true;
            }
        });
        
        if (!anyButtonVisible) {
            fixedBottomBar.classList.add('visible');
            fixedBottomBar.classList.remove('hidden');
        } else {
            fixedBottomBar.classList.remove('visible');
            setTimeout(() => {
                if (!fixedBottomBar.classList.contains('visible')) {
                    fixedBottomBar.classList.add('hidden');
                }
            }, 400);
        }
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        const vertInView = (rect.top <= windowHeight - 100) && ((rect.top + rect.height) >= 100);
        const isNotHidden = rect.height > 0 && rect.width > 0;
        
        return vertInView && isNotHidden;
    }

    window.addEventListener('scroll', checkButtonsVisibility);
    window.addEventListener('resize', checkButtonsVisibility);
    setTimeout(checkButtonsVisibility, 100);

    // Cerrar feature modal al hacer clic fuera
    const featureModal = document.getElementById('featureModal');
    if (featureModal) {
        featureModal.addEventListener('click', (e) => {
            if (e.target === featureModal) {
                closeFeatureModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !featureModal.classList.contains('hidden')) {
                closeFeatureModal();
            }
        });
    }

    // Cerrar success modal al hacer clic fuera
    const successModal = document.getElementById('successModal');
    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                closeSuccessModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !successModal.classList.contains('hidden')) {
                closeSuccessModal();
            }
        });
    }

    // Animaciones y funcionalidades interactivas
    animateOnScroll();
    enhanceHoverEffects();
    animateHeader();
    initParallax();
    initCounters();

    // Auto-play del carrusel
    setInterval(() => {
        changeSlide(1);
    }, 3000);
});

// ============================================
// Funciones de animaciones (definidas fuera de DOMContentLoaded)
// ============================================

function animateOnScroll() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.feature-card, section h2, section p');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

function enhanceHoverEffects() {
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.02)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const glow = card.querySelector('.feature-glow');
            if (glow) glow.style.opacity = '1';
        });
        card.addEventListener('mouseleave', () => {
            const glow = card.querySelector('.feature-glow');
            if (glow) glow.style.opacity = '0';
        });
    });

    const routeImages = document.querySelectorAll('.group');
    routeImages.forEach(group => {
        group.addEventListener('mouseenter', () => {
            const img = group.querySelector('img');
            if (img) img.style.transform = 'scale(1.05)';
        });
        group.addEventListener('mouseleave', () => {
            const img = group.querySelector('img');
            if (img) img.style.transform = 'scale(1)';
        });
    });

    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#CEFE3B';
        });
        link.addEventListener('mouseleave', () => {
            link.style.color = '';
        });
    });
}

function animateHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.style.background = 'rgba(14, 34, 62, 0.9)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = '';
            header.style.backdropFilter = '';
            header.style.boxShadow = '';
        }
    });
}

function initParallax() {
    const backgroundEffects = document.querySelectorAll('.fixed > div');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        backgroundEffects.forEach((el, index) => {
            const speed = (index + 1) * 0.1;
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
}

function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const end = parseInt(target.getAttribute('data-counter'));
                const duration = 2000;
                const start = 0;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(start + (end - start) * easeOut);
                    
                    target.textContent = current;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }

                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => counterObserver.observe(counter));
}

// Smooth scroll para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Lazy loading para imágenes
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console info
console.log('%c🚀 Landing Policía Nacional', 'color: #CEFE3B; font-size: 16px; font-weight: bold;');
