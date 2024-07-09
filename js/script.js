// ---------- Mobile Menu ---------- \\
const btnMobile = document.querySelector('#btn-mobile');

if(btnMobile){
    function toggleMenu(event){
        if(event.type === 'touchstart'){
            event.preventDefault();
        }

        const headerNav = document.querySelector('.header-nav');
        headerNav.classList.toggle('active');
        const active = headerNav.classList.contains('active');

        event.currentTarget.setAttribute('aria-expanded', active);
        if(active){
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        }else{
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
}

// ---------- Link Ativo ---------- \\
const links = document.querySelectorAll('.nav-link');

function ativarLink(link){
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);

// ---------- Perguntas Frequentes ---------- \\
const faqList = document.querySelectorAll(".faq-list button");

function activeFaq(event){
    const question = event.currentTarget;
    const controls = question.getAttribute("aria-controls");
    const answer = document.getElementById(controls);

    answer.classList.toggle("active");
    const active = answer.classList.contains("active");
    question.setAttribute("aria-expanded", active);
    
}

function activeQuestions(question){
    question.addEventListener("click", activeFaq);
}

faqList.forEach(activeQuestions);
