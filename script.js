// Modal Logic
document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const modal = document.getElementById('registrationModal');
    const openButtons = document.querySelectorAll('.btn-primary:not([type="submit"])'); // Selecciona los botones que no son del form
    const closeButton = document.querySelector('.modal-close');
    const form = document.getElementById('leadForm');

    // Función para abrir el modal
    function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Bloquea el scroll de fondo
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restaura el scroll
        form.reset(); // Limpia el formulario
    }

    // Event listener para abrir el modal
    openButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Previene cualquier comportamiento por defecto
            openModal();
        });
    });

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

    // Manejo del envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Estado de carga
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Enviando...';
        
        const formData = new FormData(form);
        
        // URL del Google Apps Script
        const scriptURL = 'https://script.google.com/macros/s/AKfycbw_WdQqsXyO01bEOsBF13TeWlMc8gPOs9rOaXnEkRKxT0wT-S8b5kKq1nYfNDGSlgo1/exec';

        fetch(scriptURL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Importante para evitar errores de CORS con Google Scripts
        })
        .then(() => {
            // Éxito
            console.log('Formulario enviado con éxito');
            
            submitBtn.innerHTML = '¡ENVIADO!';
            submitBtn.style.backgroundColor = '#4CAF50';
            submitBtn.style.color = 'white';
            
            setTimeout(() => {
                closeModal();
                // Restaura el botón después de cerrar
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                    submitBtn.disabled = false;
                }, 500);
                
                alert('¡Gracias! Tus datos han sido recibidos. Nos pondremos en contacto pronto.');
                form.reset();
            }, 1500);
        })
        .catch(error => {
            console.error('Error!', error.message);
            
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
});

// Animaciones y funcionalidades interactivas

document.addEventListener('DOMContentLoaded', () => {
    // Animaciones de entrada para las secciones
    animateOnScroll();
    
    // Efectos hover mejorados
    enhanceHoverEffects();
    
    // Animación del header
    animateHeader();
    
    // Parallax effect para fondos
    initParallax();
    
    // Contador animado para estadísticas (si se necesita)
    initCounters();
});

// Animación al hacer scroll
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

    // Observar elementos animados
    const animatedElements = document.querySelectorAll('.feature-card, section h2, section p');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Efectos hover mejorados
function enhanceHoverEffects() {
    // Botones CTA
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-2px) scale(1.02)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const glow = card.querySelector('.feature-glow');
            if (glow) {
                glow.style.opacity = '1';
            }
        });
        card.addEventListener('mouseleave', () => {
            const glow = card.querySelector('.feature-glow');
            if (glow) {
                glow.style.opacity = '0';
            }
        });
    });

    // Imágenes en Route Section
    const routeImages = document.querySelectorAll('.group');
    routeImages.forEach(group => {
        group.addEventListener('mouseenter', () => {
            const img = group.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
        });
        group.addEventListener('mouseleave', () => {
            const img = group.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });

    // Links del footer
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

// Animación del header
function animateHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    let lastScroll = 0;
    
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
        
        lastScroll = currentScroll;
    });
}

// Efecto Parallax
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

// Contadores animados (para futuras estadísticas)
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

// Sonido hover (opcional - comentar si no se desea)
function playHoverSound() {
    // Esta función puede habilitarse si se desea sonido al hacer hover
    // const audio = new Audio('path/to/sound.mp3');
    // audio.volume = 0.1;
    // audio.play().catch(() => {});
}

// Console info
console.log('%c🚀 Landing Policía Nacional - Versión HTML/CSS/JS', 'color: #CEFE3B; font-size: 16px; font-weight: bold;');
console.log('%cDesarrollado con ❤️', 'color: #0E223E; background: #CEFE3B; padding: 4px 8px; border-radius: 4px;');
