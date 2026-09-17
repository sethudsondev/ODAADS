// ============================================================
// ODA·ADS — Aplicacao da traducao (mecanismo)
// Le i18n.js (dados EN/ES). O PT nunca fica hardcoded aqui: na primeira
// carga da pagina, capturamos o conteudo original (que ja esta em PT no
// HTML/JS) como "snapshot", e usamos esse snapshot pra voltar ao PT depois
// de trocar de idioma.
// ============================================================
'use strict';

(function () {
  const KEY = 'oda_lang';
  const supported = ['pt', 'en', 'es'];
  const MOD_IDS = ['mod-fund', 'mod-eng', 'mod-bd', 'mod-web', 'mod-redes', 'mod-algo', 'mod-seg'];

  let snapshot = null; // capturado uma vez, no primeiro apply()

  function getLang() {
    // So usa o idioma salvo explicitamente pela pessoa (clique no seletor).
    // Sem auto-deteccao pelo navegador: o site e PT-BR por padrao, ninguem
    // deve abrir a pagina e ver ingles/espanhol sem ter escolhido isso.
    try { const s = localStorage.getItem(KEY); if (supported.includes(s)) return s; } catch (e) {}
    return 'pt';
  }

  function captureSnapshot() {
    const snap = { ui: {}, flashcards: [], faq: [], roadmap: [], modules: {}, quiz: null };

    document.querySelectorAll('[data-i18n]').forEach(el => { snap.ui[el.dataset.i18n] = el.innerHTML; });
    document.querySelectorAll('[data-i18n-title]').forEach(el => { snap.ui[el.dataset.i18nTitle] = el.getAttribute('title'); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { snap.ui[el.dataset.i18nAria] = el.getAttribute('aria-label'); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { snap.ui[el.dataset.i18nPlaceholder] = el.getAttribute('placeholder'); });

    // Textos com icone que nao tem equivalente com data-i18n em outro lugar
    // (a versao PT so existe aqui, precisa ser guardada explicitamente)
    function textAfterIcon(el) {
      if (!el) return null;
      const clone = el.cloneNode(true);
      const svg = clone.querySelector('svg');
      if (svg) svg.remove();
      return clone.textContent.trim();
    }
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    if (mobileLinks[6]) snap.ui.mobile_sobre = textAfterIcon(mobileLinks[6]);
    if (mobileLinks[7]) snap.ui.mobile_abnt = textAfterIcon(mobileLinks[7]);
    if (mobileLinks[8]) snap.ui.mobile_help = textAfterIcon(mobileLinks[8]);
    snap.ui.tutorial_help = textAfterIcon(document.querySelector('.side-nav-help'));

    document.querySelectorAll('.fc-term').forEach(el => snap.flashcards.push({ term: el.innerHTML }));
    document.querySelectorAll('.fc-def').forEach((el, i) => { snap.flashcards[i].def = el.innerHTML; });

    document.querySelectorAll('.accordion-title').forEach(el => snap.faq.push({ q: el.innerHTML }));
    document.querySelectorAll('.accordion-body').forEach((el, i) => { snap.faq[i].a = el.innerHTML; });

    document.querySelectorAll('.roadmap-content h3 [data-rm-text]').forEach(el => snap.roadmap.push({ title: el.innerHTML }));
    document.querySelectorAll('.roadmap-content p').forEach((el, i) => { snap.roadmap[i].desc = el.innerHTML; });

    MOD_IDS.forEach(id => {
      const modal = document.getElementById(id);
      if (!modal) return;
      const intro = modal.querySelector('.modal-intro');
      const codeLabel = modal.querySelector('.modal-code-label');
      const topics = [];
      if (id === 'mod-fund') {
        modal.querySelectorAll('.topic-item').forEach(el => topics.push(el.textContent.replace(/^→\s*/, '')));
      } else {
        modal.querySelectorAll('.topic-text').forEach(el => {
          const strong = el.querySelector('strong');
          topics.push({ title: strong ? strong.innerHTML : '', desc: strong ? strong.nextSibling ? el.innerHTML.replace(strong.outerHTML, '') : '' : el.innerHTML });
        });
      }
      snap.modules[id] = { intro: intro ? intro.innerHTML : '', codeLabel: codeLabel ? codeLabel.innerHTML : '', topics };
    });

    snap.quiz = allQuestions.map(q => ({ q: q.q, opts: q.opts.slice(), fb: q.fb }));
    snap.cats = {};
    allQuestions.forEach(q => { snap.cats[q.cat] = q.cat; });

    return snap;
  }

  function setIconText(el, text) {
    // preserva um <svg> no comeco do elemento (icone), troca so o texto depois dele
    const svg = el.querySelector('svg');
    if (svg) {
      el.innerHTML = '';
      el.appendChild(svg);
      el.appendChild(document.createTextNode(text));
    } else {
      el.textContent = text;
    }
  }

  function applyModule(id, data) {
    const modal = document.getElementById(id);
    if (!modal || !data) return;
    const tagEl = modal.querySelector('.modal-tag');
    const titleEl = modal.querySelector('.modal-title');
    const subtitleEl = modal.querySelector('.modal-subtitle');
    const introEl = modal.querySelector('.modal-intro');
    const codeLabelEl = modal.querySelector('.modal-code-label');
    if (tagEl && data.tag != null) tagEl.innerHTML = data.tag;
    if (titleEl && data.title != null) titleEl.innerHTML = data.title;
    if (subtitleEl && data.subtitle !== undefined) subtitleEl.innerHTML = data.subtitle == null ? '' : data.subtitle;
    if (introEl && data.intro) introEl.innerHTML = data.intro;
    if (codeLabelEl && data.codeLabel) codeLabelEl.innerHTML = data.codeLabel;

    if (id === 'mod-fund') {
      const items = modal.querySelectorAll('.topic-item');
      items.forEach((el, i) => {
        if (data.topics[i] == null) return;
        el.innerHTML = '→ ' + (typeof data.topics[i] === 'string' ? data.topics[i] : data.topics[i]);
      });
    } else {
      const items = modal.querySelectorAll('.topic-text');
      items.forEach((el, i) => {
        const t = data.topics[i];
        if (!t) return;
        el.innerHTML = `<strong>${t.title}</strong>${t.desc}`;
      });
    }
  }

  function apply(lang) {
    if (!snapshot) snapshot = captureSnapshot();
    const ui = lang === 'pt' ? snapshot.ui : (ODA_UI[lang] || {});
    const fc = lang === 'pt' ? snapshot.flashcards : (ODA_FLASHCARDS[lang] || []);
    const faq = lang === 'pt' ? snapshot.faq : (ODA_FAQ[lang] || []);
    const rm = lang === 'pt' ? snapshot.roadmap : (ODA_ROADMAP[lang] || []);
    const mods = lang === 'pt' ? snapshot.modules : (ODA_MODULES[lang] || {});

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = ui[el.dataset.i18n];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const v = ui[el.dataset.i18nTitle];
      if (v != null) el.setAttribute('title', v);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const v = ui[el.dataset.i18nAria];
      if (v != null) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const v = ui[el.dataset.i18nPlaceholder];
      if (v != null) el.setAttribute('placeholder', v);
    });

    // Links com icone (sidebar e menu mobile) - preserva o <svg>, troca so o texto
    const navKeys = ['nav_modulos', 'nav_roadmap', 'nav_conceitos', 'nav_flashcards', 'nav_quiz', 'nav_faq', 'nav_sobre', 'nav_abnt'];
    document.querySelectorAll('.side-nav-links a').forEach((a, i) => {
      const v = ui[navKeys[i]];
      if (v != null) setIconText(a, v);
    });
    const mobileKeys = ['nav_modulos', 'nav_roadmap', 'nav_conceitos', 'nav_flashcards', 'nav_quiz', 'nav_faq', 'mobile_sobre', 'mobile_abnt', 'mobile_help'];
    document.querySelectorAll('.mobile-menu a').forEach((a, i) => {
      const v = ui[mobileKeys[i]];
      if (v != null) setIconText(a, v);
    });
    const helpBtn = document.querySelector('.side-nav-help');
    if (helpBtn && ui.tutorial_help != null) setIconText(helpBtn, ui.tutorial_help);
    const installMobile = document.getElementById('btn-install-app-mobile');
    if (installMobile && ui.nav_install != null) setIconText(installMobile, ui.nav_install);

    document.querySelectorAll('.fc-term').forEach((el, i) => { if (fc[i]) el.innerHTML = fc[i].term; });
    document.querySelectorAll('.fc-def').forEach((el, i) => { if (fc[i]) el.innerHTML = fc[i].def; });

    document.querySelectorAll('.accordion-title').forEach((el, i) => { if (faq[i]) el.innerHTML = faq[i].q; });
    document.querySelectorAll('.accordion-body').forEach((el, i) => { if (faq[i]) el.innerHTML = faq[i].a; });

    document.querySelectorAll('.roadmap-content').forEach((el, i) => {
      if (!rm[i]) return;
      const span = el.querySelector('[data-rm-text]');
      if (span) span.innerHTML = rm[i].title;
      const p = el.querySelector('p');
      if (p) p.innerHTML = rm[i].desc;
    });

    if (lang === 'pt') {
      MOD_IDS.forEach(id => {
        const modal = document.getElementById(id);
        const s = snapshot.modules[id];
        if (!modal || !s) return;
        const introEl = modal.querySelector('.modal-intro');
        const codeLabelEl = modal.querySelector('.modal-code-label');
        if (introEl) introEl.innerHTML = s.intro;
        if (codeLabelEl) codeLabelEl.innerHTML = s.codeLabel;
        if (id === 'mod-fund') {
          modal.querySelectorAll('.topic-item').forEach((el, i) => { el.innerHTML = '→ ' + s.topics[i]; });
        } else {
          modal.querySelectorAll('.topic-text').forEach((el, i) => {
            el.innerHTML = `<strong>${s.topics[i].title}</strong>${s.topics[i].desc}`;
          });
        }
      });
    } else {
      MOD_IDS.forEach(id => applyModule(id, mods[id]));
    }

    // Quiz: so troca o conteudo das perguntas que ainda nao foram exibidas
    // teria efeito colateral; mais simples e seguro reiniciar o quiz ao
    // trocar de idioma (o usuario normalmente troca antes de comecar).
    if (typeof allQuestions !== 'undefined') {
      const src = lang === 'pt' ? snapshot.quiz : ODA_QUIZ[lang];
      if (src) {
        allQuestions.forEach((q, i) => {
          if (!src[i]) return;
          q.q = src[i].q; q.opts = src[i].opts.slice(); q.fb = src[i].fb;
        });
        if (typeof window.restartQuiz === 'function' && document.getElementById('quiz-result') && !document.getElementById('quiz-result').classList.contains('show')) {
          // current/questions/score sao "let" no escopo global compartilhado entre
          // scripts classicos (nao module) - setar via window.* criaria propriedades
          // separadas que NAO afetam as variaveis reais lidas por renderQuestion().
          current = 0; score = 0;
          if (typeof window.renderQuestion === 'function') {
            questions = allQuestions.slice().sort(() => Math.random() - 0.5);
            window.renderQuestion();
          }
        }
      }
      window._odaLang = lang;
    }

    document.querySelectorAll('.oda-lang-btn').forEach(b => {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    window.dispatchEvent(new CustomEvent('oda:lang', { detail: { lang } }));
  }

  function buildSwitcher() {
    const hosts = document.querySelectorAll('.oda-lang');
    hosts.forEach(host => {
      host.innerHTML = supported.map(l =>
        `<button type="button" class="oda-lang-btn" data-lang="${l}" aria-pressed="false" aria-label="${ODA_LANG_META[l].label}" title="${ODA_LANG_META[l].label}">${ODA_FLAGS[ODA_LANG_META[l].flag]}</button>`
      ).join('');
      host.addEventListener('click', e => {
        const b = e.target.closest('.oda-lang-btn');
        if (b) apply(b.dataset.lang);
      });
    });
  }

  window.ODA_lang = { get: getLang, apply, current: () => window._odaLang || getLang() };

  document.addEventListener('DOMContentLoaded', () => {
    buildSwitcher();
    // captura o snapshot em PT ANTES de qualquer troca (renderQuestion() do
    // script.js ja rodou por ser um <script> anterior a este)
    snapshot = captureSnapshot();
    const lang = getLang();
    if (lang !== 'pt') apply(lang);
    else {
      window._odaLang = 'pt';
      document.querySelectorAll('.oda-lang-btn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === 'pt')));
    }
  });
})();
