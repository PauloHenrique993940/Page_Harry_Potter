// Seleciona todos os botões e as listas para as abas
const buttons = document.querySelectorAll('.shows__tabs__button');
const lists = document.querySelectorAll('.shows__list');
const heroSection = document.querySelector('.hero');
const alturahero = heroSection.clientHeight;

window.addEventListener('scroll', function(){
    const positionAtual = this.window.scrollY;

    if(positionAtual < alturahero){
        ocultaElementoDoHeader();

    }else{
        exibeElementosDoHeader();
    }

    
    

})

function ocultaElementoDoHeader(){
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
}
function exibeElementosDoHeader(){
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
}

// Função para exibir a lista correspondente ao botão clicado
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab-button'); // Obtém o valor de data-tab-button

        // Alterna a classe 'btn__active' nos botões
        buttons.forEach(btn => btn.classList.remove('btn__active'));
        button.classList.add('btn__active');

        // Exibe a lista correspondente e oculta as outras
        lists.forEach(list => {
            list.style.display = list.getAttribute('data-tab-id') === targetTab ? 'grid' : 'none';
        });
    });
});

// Adiciona efeito visual de hover nos botões
document.querySelectorAll('.faq__toggle-button, .btn__active__active').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.borderBottom = '5px solid red'; // Altera a cor da borda
        button.style.color = 'red'; // Altera a cor do texto
    });

    button.addEventListener('mouseout', () => {
        button.style.borderBottom = '5px solid transparent'; // Restaura a borda transparente
        button.style.color = 'var(--corTextoSecundario)'; // Restaura a cor do texto
    });
});

document.querySelectorAll('.faq__questions__item').forEach(item => {
    const question = item.querySelector('.faq__questions__item__question');
    const answer = item.querySelector('.faq__questions__item__answer');
    const toggleButton = item.querySelector('.faq__toggle-button');

    question.addEventListener('click', () => {
        // Alternar visibilidade da resposta
        const isVisible = answer.classList.contains('open');
        answer.classList.toggle('open', !isVisible);

        // Alternar texto do botão (+/-)
        toggleButton.textContent = isVisible ? '+' : '-';
    });
});




