const replyElement = document.querySelector('#reply');
const inputQuestion = document.querySelector('#inputQuestion');
const buttonAnswear = document.querySelector('#buttonAnswear');
const replys = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
];

// clicar em fazer pergunta
function doTheQuestion() {
  if (inputQuestion.value == '') {
    alert('Digite sua pergunta primeiro...');
    return;
  }

  buttonAnswear.setAttribute('disabled', true);

  const question = '<div>' + inputQuestion.value + '</div>';

  // gerar numero aletorio
  const totalReplys = replys.length;
  const randomNumber = Math.floor(Math.random() * totalReplys);

  replyElement.innerHTML = question + replys[randomNumber];

  replyElement.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function () {
    replyElement.style.opacity = 0;
    buttonAnswear.removeAttribute('disabled');
  }, 3000);
}