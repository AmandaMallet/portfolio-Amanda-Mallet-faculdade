const menuMobile = document.getElementById("menuMobile");
const menu = document.getElementById("menu");

const alternarTema = document.getElementById("alternarTema");

const formContato = document.getElementById("formContato");
const mensagemStatus = document.getElementById("mensagemStatus");

/* =========================
   MENU MOBILE
========================= */

menuMobile.addEventListener("click", function () {
    menu.classList.toggle("ativo");
});

/* =========================
   TEMA CLARO / ESCURO
========================= */

alternarTema.addEventListener("change", function () {
    document.body.classList.toggle("tema-escuro");
});

/* =========================
   FORMULÁRIO
========================= */

formContato.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
        mensagemStatus.textContent = "Preencha todos os campos.";
        mensagemStatus.style.color = "#d9534f";
        return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        mensagemStatus.textContent = "Digite um e-mail válido.";
        mensagemStatus.style.color = "#d9534f";
        return;
    }

    mensagemStatus.textContent = "Mensagem enviada com sucesso!";
    mensagemStatus.style.color = "#2f9a66";

    formContato.reset();
});