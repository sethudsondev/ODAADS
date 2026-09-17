function toggleMenu() {
  var ham = document.getElementById('hamburger');
  var menu = document.getElementById('mobile-menu');
  var drawer = document.getElementById('mobile-drawer');
  if (!menu) return;
  var isOpen = menu.classList.contains('open');
  if (isOpen) {
    _closeMenuElements(ham, menu, drawer);
  } else {
    if (ham) ham.classList.add('open');
    menu.classList.add('open');
    if (drawer) drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMenu() {
  var ham = document.getElementById('hamburger');
  var menu = document.getElementById('mobile-menu');
  var drawer = document.getElementById('mobile-drawer');
  _closeMenuElements(ham, menu, drawer);
}

function _closeMenuElements(ham, menu, drawer) {
  if (ham) ham.classList.remove('open');
  if (menu) menu.classList.remove('open');
  if (drawer) drawer.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });
});

// ── QUIZ DATA ──
const allQuestions = [
  // ── ENGENHARIA DE SOFTWARE ──
  { cat: "Engenharia de Software", q: "Qual é o nome da reunião diária de sincronização no Scrum?", opts: ["Sprint Review", "Daily Scrum", "Sprint Planning", "Retrospective"], correct: 1, fb: "O Daily Scrum (ou Daily Standup) ocorre todo dia em até 15 minutos para sincronizar o time." },
  { cat: "Engenharia de Software", q: "No modelo MVC, qual camada é responsável pela regra de negócio?", opts: ["View", "Controller", "Model", "Router"], correct: 2, fb: "O Model cuida dos dados e da lógica de negócio. View é a interface; Controller é o intermediário." },
  { cat: "Engenharia de Software", q: "O que é a Sprint Retrospective no Scrum?", opts: ["Reunião para planejar próxima Sprint", "Reunião para revisar o produto entregue", "Reunião para inspecionar e adaptar o processo da equipe", "Reunião diária de 15 minutos"], correct: 2, fb: "A Retrospective ocorre ao final de cada Sprint para o time refletir sobre seu processo e definir melhorias." },
  { cat: "Engenharia de Software", q: "Qual diagrama UML representa a sequência de mensagens entre objetos?", opts: ["Diagrama de Classe", "Diagrama de Caso de Uso", "Diagrama de Sequência", "Diagrama de Estado"], correct: 2, fb: "O Diagrama de Sequência mostra como os objetos interagem ao longo do tempo, com mensagens ordenadas." },
  { cat: "Engenharia de Software", q: "O que significa TDD (Test-Driven Development)?", opts: ["Desenvolvimento guiado por tecnologia", "Desenvolvimento guiado por testes: escrever o teste antes do código", "Técnica de documentação de dados", "Tipo de deploy automatizado"], correct: 1, fb: "No TDD, o ciclo é: escrever teste (falha) → escrever código mínimo (passa) → refatorar." },
  { cat: "Engenharia de Software", q: "Qual é o papel do Product Owner no Scrum?", opts: ["Gerenciar a equipe técnica", "Maximizar o valor do produto e gerenciar o Product Backlog", "Facilitar as cerimônias Scrum", "Escrever o código do sistema"], correct: 1, fb: "O Product Owner representa os stakeholders, prioriza o Backlog e garante que o time entregue valor." },

  // ── BANCO DE DADOS ──
  { cat: "Banco de Dados", q: "O que significa a sigla ACID em banco de dados?", opts: ["Atomicidade, Consistência, Isolamento, Durabilidade", "Acesso, Controle, Integridade, Dados", "Algoritmo, Cache, Indexação, Deploy", "Autenticação, Criptografia, Identidade, Dados"], correct: 0, fb: "ACID garante transações confiáveis: Atomicidade (tudo ou nada), Consistência, Isolamento e Durabilidade." },
  { cat: "Banco de Dados", q: "Qual das alternativas é um banco de dados NoSQL?", opts: ["MySQL", "PostgreSQL", "Oracle", "MongoDB"], correct: 3, fb: "MongoDB é NoSQL orientado a documentos. MySQL, PostgreSQL e Oracle são bancos relacionais (SQL)." },
  { cat: "Banco de Dados", q: "Na normalização de banco de dados, o que a 3FN (Terceira Forma Normal) elimina?", opts: ["Grupos de atributos repetidos", "Dependência parcial da chave primária", "Dependência transitiva entre atributos não-chave", "Atributos multivalorados"], correct: 2, fb: "A 3FN garante que todo atributo não-chave dependa diretamente da chave primária, sem transitividade." },
  { cat: "Banco de Dados", q: "Qual cláusula SQL é usada para filtrar grupos após um GROUP BY?", opts: ["WHERE", "HAVING", "FILTER", "ORDER BY"], correct: 1, fb: "HAVING filtra grupos após agregação. WHERE filtra linhas ANTES do agrupamento." },
  { cat: "Banco de Dados", q: "O que é um índice em banco de dados?", opts: ["Uma cópia completa da tabela", "Uma estrutura que acelera a busca de registros", "Uma restrição de integridade", "Um tipo de relacionamento entre tabelas"], correct: 1, fb: "Índices aceleram SELECT mas tornam INSERT/UPDATE/DELETE ligeiramente mais lentos." },
  { cat: "Banco de Dados", q: "Qual tipo de JOIN retorna apenas os registros que têm correspondência em ambas as tabelas?", opts: ["LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "INNER JOIN"], correct: 3, fb: "INNER JOIN retorna somente registros com correspondência nas duas tabelas." },

  // ── PROGRAMAÇÃO WEB ──
  { cat: "Programação Web", q: "O que faz o método HTTP POST?", opts: ["Busca um recurso no servidor", "Deleta um recurso existente", "Envia dados para criar um novo recurso", "Atualiza parcialmente um recurso"], correct: 2, fb: "POST envia dados ao servidor para criar novo recurso. GET busca; DELETE remove; PATCH atualiza parcialmente." },
  { cat: "Programação Web", q: "O que é CORS (Cross-Origin Resource Sharing)?", opts: ["Um tipo de banco de dados", "Mecanismo que controla requisições entre origens diferentes", "Linguagem de estilização CSS", "Protocolo de transferência de arquivos"], correct: 1, fb: "CORS é um mecanismo de segurança do browser que controla quais origens podem acessar recursos de outra origem." },
  { cat: "Programação Web", q: "Em JavaScript, o que faz o método Array.map()?", opts: ["Filtra elementos do array", "Reduz o array a um único valor", "Cria novo array transformando cada elemento", "Ordena os elementos do array"], correct: 2, fb: "map() retorna um novo array com o resultado de aplicar uma função a cada elemento do array original." },
  { cat: "Programação Web", q: "O que é o Virtual DOM no React?", opts: ["Um banco de dados virtual", "Uma representação leve do DOM real na memória", "Um tipo de componente funcional", "Uma API do navegador"], correct: 1, fb: "O Virtual DOM é uma cópia leve do DOM real. O React compara as versões (diffing) e atualiza só o necessário." },
  { cat: "Programação Web", q: "Qual código de status HTTP indica que um recurso não foi encontrado?", opts: ["200", "301", "404", "500"], correct: 2, fb: "404 Not Found. 200 = OK, 301 = Redirecionamento, 500 = Erro interno do servidor." },
  { cat: "Programação Web", q: "O que é async/await em JavaScript?", opts: ["Uma biblioteca de animações", "Sintaxe para trabalhar com Promises de forma mais legível", "Um tipo de loop assíncrono", "Um método de array"], correct: 1, fb: "async/await é açúcar sintático sobre Promises, tornando código assíncrono mais legível e fácil de depurar." },

  // ── REDES DE COMPUTADORES ──
  { cat: "Redes de Computadores", q: "Qual camada do modelo OSI é responsável pelo endereçamento IP?", opts: ["Camada de Enlace", "Camada Física", "Camada de Rede", "Camada de Transporte"], correct: 2, fb: "A Camada de Rede (Camada 3) cuida do endereçamento lógico (IP) e do roteamento entre redes." },
  { cat: "Redes de Computadores", q: "Qual protocolo é usado por padrão para comunicação segura na web (HTTPS)?", opts: ["FTP", "SSH", "TLS/SSL", "UDP"], correct: 2, fb: "HTTPS usa TLS (Transport Layer Security) para criptografar a comunicação entre cliente e servidor." },
  { cat: "Redes de Computadores", q: "O que significa a notação CIDR /24 em um endereço de rede?", opts: ["24 hosts disponíveis", "Máscara de 24 bits (255.255.255.0), permitindo 254 hosts", "24 sub-redes", "Velocidade de 24 Mbps"], correct: 1, fb: "/24 significa que os primeiros 24 bits são a parte de rede, deixando 8 bits para hosts (254 utilizáveis)." },
  { cat: "Redes de Computadores", q: "Qual a principal diferença entre TCP e UDP?", opts: ["TCP é mais rápido; UDP é mais confiável", "TCP garante entrega ordenada; UDP é sem conexão e mais rápido", "TCP é para vídeo; UDP é para texto", "Não há diferença prática"], correct: 1, fb: "TCP usa handshake e confirmações (confiável e ordenado). UDP não confirma entrega, usado em streaming e jogos." },
  { cat: "Redes de Computadores", q: "Qual protocolo converte nomes de domínio em endereços IP?", opts: ["DHCP", "DNS", "FTP", "SMTP"], correct: 1, fb: "DNS (Domain Name System) traduz nomes como 'google.com' para endereços IP como '142.250.74.46'." },
  { cat: "Redes de Computadores", q: "O que é NAT (Network Address Translation)?", opts: ["Um tipo de cabo de rede", "Tradução de endereços privados para públicos permitindo compartilhar uma IP", "Protocolo de roteamento dinâmico", "Tipo de firewall"], correct: 1, fb: "NAT permite que múltiplos dispositivos de uma rede privada compartilhem um único IP público." },

  // ── ALGORITMOS E ESTRUTURAS ──
  { cat: "Algoritmos e Estruturas", q: "Qual é a complexidade do algoritmo de Busca Binária em um array ordenado?", opts: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correct: 1, fb: "Busca Binária divide o espaço de busca pela metade a cada iteração → O(log n)." },
  { cat: "Algoritmos e Estruturas", q: "Qual estrutura de dados segue o princípio LIFO (Last In, First Out)?", opts: ["Fila (Queue)", "Pilha (Stack)", "Árvore Binária", "Lista Ligada"], correct: 1, fb: "A Pilha (Stack) funciona como uma pilha de pratos: o último a entrar é o primeiro a sair." },
  { cat: "Algoritmos e Estruturas", q: "Qual algoritmo de ordenação tem complexidade média O(n log n)?", opts: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort"], correct: 3, fb: "Merge Sort divide o array recursivamente e combina, garantindo O(n log n) em todos os casos." },
  { cat: "Algoritmos e Estruturas", q: "Na programação orientada a objetos, o que é encapsulamento?", opts: ["Criar objetos a partir de uma classe", "Herdar atributos de outra classe", "Ocultar detalhes internos expondo apenas a interface necessária", "Sobrescrever métodos da classe pai"], correct: 2, fb: "Encapsulamento protege dados internos via modificadores de acesso (private/public/protected)." },
  { cat: "Algoritmos e Estruturas", q: "O que é uma Árvore Binária de Busca (BST)?", opts: ["Árvore onde cada nó tem exatamente 2 filhos", "Árvore onde nós à esquerda são menores e à direita maiores que o pai", "Árvore usada apenas para ordenação", "Árvore com altura sempre balanceada"], correct: 1, fb: "Em uma BST, para cada nó: todos os valores à esquerda são menores e à direita são maiores." },

  // ── SEGURANÇA ──
  { cat: "Segurança da Informação", q: "O que é SQL Injection?", opts: ["Técnica para otimizar queries SQL", "Ataque que insere código SQL malicioso em campos de entrada", "Método de backup do banco de dados", "Tipo de índice em banco de dados"], correct: 1, fb: "SQL Injection ocorre quando dados do usuário são inseridos diretamente na query sem sanitização." },
  { cat: "Segurança da Informação", q: "O que os princípios CIA representam em segurança da informação?", opts: ["Controle, Integridade, Acesso", "Confidencialidade, Integridade, Disponibilidade", "Criptografia, Identificação, Autenticação", "Código, Interface, Aplicação"], correct: 1, fb: "CIA Triad: Confidencialidade (acesso restrito), Integridade (dados não adulterados) e Disponibilidade (sistema acessível)." },
  { cat: "Segurança da Informação", q: "Qual a diferença entre criptografia simétrica e assimétrica?", opts: ["Simétrica usa chaves diferentes; assimétrica usa a mesma chave", "Simétrica usa a mesma chave; assimétrica usa par de chaves (pública/privada)", "Simétrica é mais segura; assimétrica é mais rápida", "Não há diferença prática"], correct: 1, fb: "Simétrica (AES): mesma chave para cifrar/decifrar. Assimétrica (RSA): chave pública cifra, privada decifra." },
  { cat: "Segurança da Informação", q: "O que é XSS (Cross-Site Scripting)?", opts: ["Ataque de força bruta de senhas", "Injeção de scripts maliciosos em páginas web visualizadas por outros usuários", "Intercepção de tráfego de rede", "Tipo de ataque de negação de serviço"], correct: 1, fb: "XSS injeta código JavaScript malicioso em páginas confiáveis, executado no browser da vítima." },
  { cat: "Segurança da Informação", q: "Qual lei brasileira regula a proteção de dados pessoais?", opts: ["Lei de Acesso à Informação (LAI)", "Lei Geral de Proteção de Dados (LGPD, Lei 13.709/2018)", "Código de Defesa do Consumidor", "Marco Civil da Internet"], correct: 1, fb: "A LGPD (Lei 13.709/2018) regula o tratamento de dados pessoais no Brasil, inspirada na GDPR europeia." }
];

// Embaralhar e selecionar 10 questões (2 por categoria)
function shuffleQuestions() {
  // Usa o banco inteiro (34 perguntas, como anunciado no site) so embaralhado -
  // a versao anterior sorteava so 2 por categoria, entao o quiz nunca passava
  // de ~14 perguntas.
  return allQuestions.slice().sort(() => Math.random() - 0.5);
}

let questions = shuffleQuestions();

let current = 0;
let score = 0;
let answered = false;

function renderQuestion() {
  const total = questions.length;
  const q = questions[current];
  const num = String(current+1).padStart(2,'0');
  document.getElementById('quiz-num').textContent = `${num} / ${total}`;
  document.getElementById('quiz-counter').textContent = `Questão ${current+1} de ${total}`;
  document.getElementById('quiz-bar').style.width = `${((current+1)/total)*100}%`;
  // Mostrar categoria da questão
  const catEl = document.getElementById('quiz-category');
  if (catEl && q.cat) catEl.textContent = q.cat;
  document.getElementById('quiz-q').textContent = q.q;
  document.getElementById('quiz-score-live').textContent = `✦ ${score} acerto${score !== 1 ? 's' : ''}`;
  const fb = document.getElementById('quiz-fb');
  fb.className = 'quiz-feedback';
  fb.textContent = '';
  document.getElementById('quiz-next').style.display = 'none';
  answered = false;
  if (typeof startQuizTimer === 'function') startQuizTimer();

  const letters = ['A', 'B', 'C', 'D'];
  const opts = document.getElementById('quiz-opts');
  opts.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span>${opt}`;
    btn.onclick = () => selectOption(i);
    opts.appendChild(btn);
  });
}

function selectOption(idx) {
  if (answered) return;
  answered = true;
  if (typeof stopQuizTimer === 'function') stopQuizTimer();
  const q = questions[current];
  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach(o => o.disabled = true);
  opts[idx].classList.add(idx === q.correct ? 'correct' : 'wrong');
  opts[q.correct].classList.add('correct');
  const fb = document.getElementById('quiz-fb');
  if (idx === q.correct) {
    score++;
    fb.className = 'quiz-feedback correct-fb show';
    fb.textContent = '✅ ' + q.fb;
  } else {
    fb.className = 'quiz-feedback wrong-fb show';
    fb.textContent = '❌ ' + q.fb;
  }
  document.getElementById('quiz-score-live').textContent = `✦ ${score} acerto${score !== 1 ? 's' : ''}`;
  document.getElementById('quiz-next').style.display = 'inline-flex';
}

function nextQuestion() {
  current++;
  if (current >= questions.length) {
    showResult(); return;
  }
  renderQuestion();
}

function showResult() {
  if (typeof stopQuizTimer === 'function') stopQuizTimer();
  window._quizScore = score;
  document.getElementById('quiz-body').style.display = 'none';
  document.getElementById('quiz-nav').style.display = 'none';
  const res = document.getElementById('quiz-result');
  res.classList.add('show');
  document.getElementById('final-score').textContent = score;
  document.getElementById('quiz-total-display').textContent = questions.length;
  const pct = score / questions.length;
  const emoji = pct >= 0.9 ? '★★★' : pct >= 0.7 ? '★★' : pct >= 0.5 ? '★' : '○';
  const msg = pct >= 0.9 ? 'Excelente! Você domina os conceitos de ADS!' :
              pct >= 0.7 ? 'Muito bom! Continue estudando para chegar à perfeição.' :
              pct >= 0.5 ? 'Bom começo! Revise os módulos e tente novamente.' :
              'Não desanime! Leia os módulos e tente de novo. Você chega lá!';
  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-msg').textContent = msg;
  if (score >= Math.round(questions.length * 0.7)) {
    setTimeout(function() { showCert(score); }, 800);
  }
}

function restartQuiz() {
  current = 0; score = 0;
  questions = shuffleQuestions();
  document.getElementById('quiz-body').style.display = '';
  document.getElementById('quiz-nav').style.display = '';
  const res = document.getElementById('quiz-result');
  res.classList.remove('show');
  renderQuestion();
}

renderQuestion();

// ── ACCORDION ──
function toggleAccordion(header) {
  const item = header.parentElement;
  const body = item.querySelector('.accordion-body');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.accordion-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.accordion-body').classList.remove('open');
  });
  if (!isOpen) { item.classList.add('open'); body.classList.add('open'); }
}

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const roadmapObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.roadmap-item').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.15}s`;
  roadmapObserver.observe(el);
});


function openModal(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Marcar como visitado e notificar
  var moduleNames = {
    'mod-eng':   'Engenharia de Software',
    'mod-bd':    'Banco de Dados',
    'mod-web':   'Programação Web',
    'mod-redes': 'Redes de Computadores',
    'mod-algo':  'Algoritmos e Estruturas',
    'mod-seg':   'Segurança da Informação',
    'mod-fund':  'Fundamentos de ADS'
  };
  var name = moduleNames[id];
  if (name) {
    var isNew = !visitedModules.includes(id);
    markVisited(id);
    if (isNew && typeof showToast === 'function') {
      showToast('📖 Módulo aberto: ' + name, 2500, 'view');
    }
  }
}
function closeModal(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('open');
  document.body.style.overflow = '';

  var moduleNames = {
    'mod-eng':   'Engenharia de Software',
    'mod-bd':    'Banco de Dados',
    'mod-web':   'Programação Web',
    'mod-redes': 'Redes de Computadores',
    'mod-algo':  'Algoritmos e Estruturas',
    'mod-seg':   'Segurança da Informação',
    'mod-fund':  'Fundamentos de ADS'
  };
  var name = moduleNames[id];
  if (name && typeof showToast === 'function') {
    var pct = Math.min(100, Math.round((visitedModules.length / totalModules) * 100));
    showToast(name + ' concluído ✓ ' + pct + '%', 3000, 'done');
  }
}
function closeModalOut(e, id) {
  if (e.target === e.currentTarget) closeModal(id);
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(function(m) {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});


// ── CONTADOR ANIMADO ──
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 1200;
  const step = Math.ceil(duration / target / 16);
  let current = 0;
  el.classList.add('counting');
  const timer = setInterval(function() {
    current += Math.ceil(target / (duration / 16));
    if (current >= target) {
      current = target;
      clearInterval(timer);
      el.classList.remove('counting');
    }
    el.textContent = current + suffix;
  }, 16);
}

const statObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting && !e.target.dataset.animated) {
      e.target.dataset.animated = '1';
      animateCounter(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num[data-target]').forEach(function(el) {
  statObserver.observe(el);
});

// ── FLASHCARDS ──
var fcFlipped = 0;
var fcTotal = document.querySelectorAll('.fc-card').length;

function flipCard(card) {
  var wasFlipped = card.classList.contains('flipped');
  card.classList.toggle('flipped');
  if (!wasFlipped) fcFlipped++;
  else fcFlipped--;
  fcFlipped = Math.max(0, fcFlipped);
  document.getElementById('fc-progress').textContent =
    fcFlipped + ' de ' + fcTotal + ' cards revelados';
}

function resetCards() {
  document.querySelectorAll('.fc-card').forEach(function(c) {
    c.classList.remove('flipped');
  });
  fcFlipped = 0;
  document.getElementById('fc-progress').textContent =
    '0 de ' + fcTotal + ' cards revelados';
}

function closeCert() {
  document.getElementById('cert-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('cert-overlay').addEventListener('click', function(e) {
  if (e.target === e.currentTarget) closeCert();
});

// ── TEMA CLARO/ESCURO ──
function _applyThemeIcons(isLight) {
  var moon = document.getElementById('theme-icon-moon');
  var sun  = document.getElementById('theme-icon-sun');
  if (!moon || !sun) return;
  if (isLight) {
    moon.style.display = 'none';
    sun.style.display  = '';
  } else {
    moon.style.display = '';
    sun.style.display  = 'none';
  }
}

(function() {
  var saved = localStorage.getItem('oda-theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
  }
  // Aplicar ícones após o DOM estar pronto
  document.addEventListener('DOMContentLoaded', function() {
    _applyThemeIcons(document.body.classList.contains('light-mode'));
  });
})();

function toggleTheme() {
  var isLight = document.body.classList.toggle('light-mode');
  _applyThemeIcons(isLight);
  localStorage.setItem('oda-theme', isLight ? 'light' : 'dark');
  if (typeof showToast === 'function') showToast(isLight ? '☀️ Modo claro ativado' : '🌙 Modo escuro ativado', 1800);
}

// ── PROGRESSO DOS MÓDULOS ──
var visitedModules = JSON.parse(localStorage.getItem('oda-visited') || '[]');
var totalModules = 7;

function markVisited(modId) {
  // Só contar IDs de módulos válidos
  var validIds = ['mod-fund','mod-eng','mod-bd','mod-web','mod-redes','mod-algo','mod-seg'];
  if (!validIds.includes(modId)) return;
  if (!visitedModules.includes(modId)) {
    visitedModules.push(modId);
    try { localStorage.setItem('oda-visited', JSON.stringify(visitedModules)); } catch(e) {}
    var pct = Math.min(100, Math.round((visitedModules.length / totalModules) * 100));
    if (typeof showToast === 'function') showToast('✓ Módulo concluído! ' + pct + '%', 2500, 'done');
  }
  updateProgress();
}

function updateProgress() {
  var validIds = ['mod-fund','mod-eng','mod-bd','mod-web','mod-redes','mod-algo','mod-seg'];
  var unique = visitedModules
    .filter(function(id) { return validIds.includes(id); })
    .filter(function(id, i, arr) { return arr.indexOf(id) === i; });

  // Atualizar visual dos cards
  document.querySelectorAll('.module-card[onclick]').forEach(function(card) {
    var m = (card.getAttribute('onclick') || '').match(/openModal\('([^']+)'\)/);
    if (m && unique.includes(m[1])) {
      card.classList.add('visited');
      var badge = card.querySelector('.progress-badge');
      if (badge) badge.style.opacity = '1';
    }
  });

  var total = validIds.length;
  var done  = unique.length;
  var pct   = Math.min(100, Math.round((done / total) * 100));

  var fill    = document.getElementById('progress-fill');
  var pctEl   = document.getElementById('progress-pct');
  var countEl = document.getElementById('progress-modules-count');
  var section = document.getElementById('progress-section');

  if (fill)    fill.style.width = pct + '%';
  if (pctEl)   pctEl.textContent = pct + '%';
  if (countEl) countEl.textContent = done + ' / ' + total + ' módulos';
  if (section) {
    section.style.display = done > 0 ? 'flex' : 'none';
    // Adicionar classe de celebração ao completar
    if (pct === 100) {
      section.classList.add('complete');
      if (typeof showToast === 'function') showToast('🎉 Todos os módulos concluídos!', 4000, 'done');
    } else {
      section.classList.remove('complete');
    }
  }
}

function resetProgress() {
  if (!confirm('Reiniciar o progresso dos módulos?')) return;
  visitedModules = [];
  try { localStorage.removeItem('oda-visited'); } catch(e) {}
  document.querySelectorAll('.module-card').forEach(function(card) {
    card.classList.remove('visited');
    var badge = card.querySelector('.progress-badge');
    if (badge) badge.style.opacity = '0';
  });
  updateProgress();
  document.getElementById('progress-section').style.display = 'none';
  if (typeof showToast === 'function') showToast('✓ Progresso reiniciado.', 2000, 'info');
}
function safeLS(action, key, value) {
  try {
    if (action === 'get') return localStorage.getItem(key);
    if (action === 'set') localStorage.setItem(key, value);
    if (action === 'remove') localStorage.removeItem(key);
  } catch(e) { /* incognito ou storage cheio */ }
  return null;
}

// ── TOAST ──
var _toastTimer = null;
function showToast(msg, dur) {
  dur = dur || 2800;
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(function() { t.classList.remove('show'); }, dur);
}

// ── SCROLL REVEAL ──
(function() {
  if (!('IntersectionObserver' in window)) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.module-card, .flashcard, .topic-item, .stat-card, .roadmap-step, .faq-item, .about-card').forEach(function(el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  });
})();

// ── BACK TO TOP ──
(function() {
  var btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
})();

// ── NAVEGAÇÃO SUAVE COM OFFSET (navbar fixa) ──
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = 72;
      var top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
});

// ── TECLADO: fechar modal com Escape (reforço) ──
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    // fecha qualquer modal aberto
    document.querySelectorAll('.modal-overlay.open').forEach(function(m) {
      m.classList.remove('open');
    });
    var cert = document.getElementById('cert-overlay');
    if (cert && cert.classList.contains('open')) cert.classList.remove('open');
    document.body.style.overflow = '';
    closeMenu && closeMenu();
  }
});

// ── QUIZ: timer por questão (20 segundos) ──
var _quizTimerInterval = null;
var _quizTimerSeconds = 20;

function startQuizTimer() {
  clearInterval(_quizTimerInterval);
  _quizTimerSeconds = 20;
  var fill = document.getElementById('quiz-timer-fill');
  if (!fill) return;
  fill.style.transition = 'none';
  fill.style.width = '100%';
  fill.style.background = 'linear-gradient(90deg, var(--accent2), var(--accent))';
  // forçar reflow
  fill.offsetHeight;
  fill.style.transition = 'width 1s linear, background 0.3s';

  _quizTimerInterval = setInterval(function() {
    _quizTimerSeconds--;
    var pct = (_quizTimerSeconds / 20) * 100;
    fill.style.width = pct + '%';
    if (_quizTimerSeconds <= 5) fill.style.background = 'var(--accent3)';
    if (_quizTimerSeconds <= 0) {
      clearInterval(_quizTimerInterval);
      // tempo esgotado, avanca como errada
      if (typeof answered !== 'undefined' && !answered) {
        answered = true;
        var opts = document.querySelectorAll('.quiz-option');
        if (opts.length && typeof questions !== 'undefined') {
          opts[questions[current].correct].classList.add('correct');
        }
        var fb = document.getElementById('quiz-fb');
        if (fb) {
          fb.className = 'quiz-feedback wrong';
          fb.textContent = '⏰ Tempo esgotado! ' + (questions[current] ? questions[current].fb : '');
        }
        var nxt = document.getElementById('quiz-next');
        if (nxt) nxt.style.display = '';
      }
    }
  }, 1000);
}

function stopQuizTimer() {
  clearInterval(_quizTimerInterval);
  var fill = document.getElementById('quiz-timer-fill');
  if (fill) { fill.style.transition = 'none'; fill.style.width = '100%'; }
}

// ── SCROLL SPY: destacar link ativo na nav (topo + menu lateral) ──
(function() {
  var sections = ['modulos','roadmap-section','conceitos','flashcards','quiz','faq','sobre','referencias'];
  var links = {};
  sections.forEach(function(id) {
    var as = document.querySelectorAll('nav a[href="#' + id + '"], .side-nav-links a[href="#' + id + '"]');
    if (as.length) links[id] = as;
  });

  function updateActive() {
    var scrollY = window.scrollY + 80;
    var active = null;
    sections.forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) active = id;
    });
    Object.values(links).forEach(function(as) { as.forEach(function(a) { a.classList.remove('active'); }); });
    if (active && links[active]) links[active].forEach(function(a) { a.classList.add('active'); });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  document.addEventListener('DOMContentLoaded', updateActive);
})();

// ── CONTAGEM DE VIRADAS NOS FLASHCARDS ──
var _flipCounts = {};
var _origFlipCard = window.flipCard;
window.flipCard = function(card) {
  var id = card.getAttribute('data-id') || Array.from(document.querySelectorAll('.flashcard')).indexOf(card);
  _flipCounts[id] = (_flipCounts[id] || 0) + 1;
  if (typeof _origFlipCard === 'function') _origFlipCard(card);
  var countEl = card.querySelector('.flip-count');
  if (countEl) countEl.textContent = 'Virado ' + _flipCounts[id] + 'x';
};

// ── RESETAR contagens ao resetar cards ──
var _origResetCards = window.resetCards;
window.resetCards = function() {
  _flipCounts = {};
  if (typeof _origResetCards === 'function') _origResetCards();
  document.querySelectorAll('.flip-count').forEach(function(el){ el.textContent = ''; });
};

// ── KEYBOARD no Quiz: 1,2,3,4 para selecionar opção, Enter para próxima ──
document.addEventListener('keydown', function(e) {
  var modal = document.querySelector('.modal-overlay.open');
  if (modal) return; // não interferir com modal aberto
  var quizSection = document.getElementById('quiz');
  if (!quizSection) return;
  var rect = quizSection.getBoundingClientRect();
  var inView = rect.top < window.innerHeight && rect.bottom > 0;
  if (!inView) return;

  if (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4') {
    var idx = parseInt(e.key) - 1;
    if (typeof answered !== 'undefined' && !answered && typeof selectOption === 'function') {
      selectOption(idx);
    }
  }
  if (e.key === 'Enter' || e.key === ' ') {
    var nxt = document.getElementById('quiz-next');
    if (nxt && nxt.style.display !== 'none' && typeof nextQuestion === 'function') {
      nextQuestion();
    }
  }
});

// ── STATS DO QUIZ: compartilhar resultado ──
window.shareResult = function() {
  if (typeof score === 'undefined' || typeof questions === 'undefined') return;
  var txt = 'Completei o Quiz do ODA·ADS com ' + score + '/' + questions.length + ' acertos! #ADS #UNIGRANDE';
  if (navigator.share) {
    navigator.share({ title: 'Resultado ODA·ADS', text: txt });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(txt);
    if (typeof showToast === 'function') showToast('✓ Resultado copiado!', 2000, 'read');
  }
};

// ══════════════════════════════════════════════════════
// RASTREAMENTO DE SCROLL NOS MODAIS
// ══════════════════════════════════════════════════════
(function() {
  var readModals = {};  // modais onde o usuário rolou até o final

  document.addEventListener('scroll', function(e) {
    var modal = e.target;
    if (!modal || !modal.classList || !modal.classList.contains('modal-overlay')) return;
    if (!modal.classList.contains('open')) return;

    var scrolled = modal.scrollTop + modal.clientHeight;
    var total    = modal.scrollHeight;
    var pct      = scrolled / total;

    var id = modal.id;
    if (pct >= 0.75 && !readModals[id]) {
      readModals[id] = true;
      var moduleNames = {
        'mod-eng':   'Engenharia de Software',
        'mod-bd':    'Banco de Dados',
        'mod-web':   'Programação Web',
        'mod-redes': 'Redes de Computadores',
        'mod-algo':  'Algoritmos e Estruturas',
        'mod-seg':   'Segurança da Informação',
        'mod-fund':  'Fundamentos de ADS'
      };
      var name = moduleNames[id] || 'Módulo';
      if (typeof showToast === 'function') {
        showToast('✅ Conteúdo lido: ' + name, 2500, 'read');
      }
    }
  }, true); // capture: true para pegar scroll dentro do modal

  // Também rastrear scroll da página para seções
  var sectionsRead = {};
  var sectionNames = {
    'modulos':          'Módulos',
    'roadmap-section':  'Roadmap',
    'conceitos':        'Conceitos-chave',
    'flashcards':       'Flashcards',
    'quiz':             'Quiz',
    'faq':              'FAQ',
    'sobre':            'Sobre o Grupo',
    'referencias':      'Referências ABNT'
  };

  if ('IntersectionObserver' in window) {
    var sectionObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var id = entry.target.id;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4 && !sectionsRead[id]) {
          sectionsRead[id] = true;
          var name = sectionNames[id];
          if (name && typeof showToast === 'function') {
            showToast('👁 Visualizando: ' + name, 1800, 'view');
          }
        }
      });
    }, { threshold: 0.4 });

    Object.keys(sectionNames).forEach(function(id) {
      var el = document.getElementById(id);
      if (el) sectionObs.observe(el);
    });
  }
})();

// ── CERTIFICADO ──────────────────────────────────────────────────
var _certScore = 0;

function showCert(s) {
  _certScore = s;
  var inputScreen = document.getElementById('cert-input-screen');
  var genScreen = document.getElementById('cert-generated-screen');
  var nameInput = document.getElementById('cert-name-input');
  if (inputScreen) inputScreen.style.display = 'block';
  if (genScreen) genScreen.style.display = 'none';
  if (nameInput) { nameInput.value = ''; setTimeout(function(){ nameInput.focus(); }, 300); }
  var ov = document.getElementById('cert-overlay');
  if (ov) { ov.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

function generateCert() {
  var nome = (document.getElementById('cert-name-input') || {}).value || '';
  nome = nome.trim();
  if (!nome) {
    if (typeof showToast === 'function') showToast('Digite seu nome completo!', 2000);
    var inp = document.getElementById('cert-name-input');
    if (inp) { inp.style.borderColor = '#ff4466'; inp.focus(); }
    return;
  }
  var s = window._certScore || 0;
  var total = (typeof questions !== 'undefined') ? questions.length : 10;

  // Data
  var d = new Date();
  var months = ['janeiro','fevereiro','março','abril','maio','junho',
                'julho','agosto','setembro','outubro','novembro','dezembro'];
  var dateStr = d.getDate() + ' de ' + months[d.getMonth()] + ' de ' + d.getFullYear();

  // Código único
  var code = 'ODA-ADS-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2,6).toUpperCase();

  // Preencher campos
  var nameEl = document.getElementById('cert-name-display');
  var dateEl = document.getElementById('cert-date');
  var scoreEl = document.getElementById('cert-score-display');
  var codeEl = document.getElementById('cert-code-display');
  if (nameEl) nameEl.textContent = nome;
  if (dateEl) dateEl.textContent = dateStr;
  if (scoreEl) scoreEl.textContent = s + ' / ' + total;
  if (codeEl) codeEl.textContent = code;

  // Salvar localStorage
  try { localStorage.setItem('oda-cert', JSON.stringify({nome, code, date: dateStr, score: s})); } catch(e) {}

  // Trocar telas
  var inputScreen = document.getElementById('cert-input-screen');
  var genScreen = document.getElementById('cert-generated-screen');
  if (inputScreen) inputScreen.style.display = 'none';
  if (genScreen) genScreen.style.display = 'block';

  if (typeof showToast === 'function') showToast('🎉 Certificado gerado, ' + nome + '!', 3500);
}
function copiarCodigo() {
  var codeEl = document.getElementById('cert-code-display');
  var code = codeEl ? codeEl.textContent : '';
  if (!code || code === '-') return;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(function() {
      if (typeof showToast === 'function') showToast('✓ Código copiado!', 2000);
    });
  }
}
function shareResult() {
  var score = window._quizScore || 0;
  var total = (typeof questions !== 'undefined') ? questions.length : 10;
  var txt = 'Completei o Quiz do ODA·ADS com ' + score + '/' + total + ' acertos! #ADS #UNIGRANDE';
  if (navigator.share) {
    navigator.share({ title: 'Resultado ODA·ADS', text: txt });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(txt);
    if (typeof showToast === 'function') showToast('✓ Resultado copiado!', 2000);
  }
}

// ── INSTALAR COMO APP (PWA) ──
// O botao fica sempre visivel (nao so quando o navegador dispara
// beforeinstallprompt), pra garantir que o usuario sempre encontre o
// caminho de instalar - com uma instrucao manual quando o navegador nao
// suporta o prompt nativo (ex.: iOS/Safari).
var _pwaDeferred = null;
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  _pwaDeferred = e;
});
window.addEventListener('appinstalled', function() {
  var btn1 = document.getElementById('btn-install-app');
  var btn2 = document.getElementById('btn-install-app-mobile');
  if (btn1) btn1.style.display = 'none';
  if (btn2) btn2.style.display = 'none';
  if (typeof showToast === 'function') showToast('✓ App instalado com sucesso!', 3000);
});
function installApp() {
  if (_pwaDeferred) {
    _pwaDeferred.prompt();
    _pwaDeferred.userChoice.then(function() { _pwaDeferred = null; });
    return;
  }
  if (typeof showToast !== 'function') return;
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  if (isIOS) {
    showToast('No Safari: toque em compartilhar (⬆) e depois em "Adicionar à Tela de Início"', 5000);
  } else {
    showToast('Para instalar: menu do navegador → "Adicionar à tela inicial" ou "Instalar app"', 5000);
  }
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').catch(function() {});
  });
}

// ── TUTORIAL NA PRIMEIRA VISITA ──
document.addEventListener('DOMContentLoaded', function() {
  var jaViu = false;
  try { jaViu = localStorage.getItem('oda-tutorial-visto') === '1'; } catch (e) {}
  if (!jaViu) {
    setTimeout(function() {
      if (typeof openModal === 'function') openModal('tutorial-modal');
      try { localStorage.setItem('oda-tutorial-visto', '1'); } catch (e) {}
    }, 1200);
  }
});