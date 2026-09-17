# ODA · Análise e Desenvolvimento de Sistemas

> Objeto Digital de Aprendizagem interativo desenvolvido como Projeto de Extensão, UNIGRANDE Grupo A, 4º Semestre 2026.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-Instalável-5A0FC8?style=flat&logo=pwa&logoColor=white)
![i18n](https://img.shields.io/badge/Idiomas-PT%20%7C%20EN%20%7C%20ES-informational?style=flat)
![License](https://img.shields.io/badge/Licenca-MIT-green?style=flat)
![Status](https://img.shields.io/badge/Status-Concluido-blue?style=flat)

**Ao vivo em: [odaads.lumvix.com.br](https://odaads.lumvix.com.br/)**

---

## Sobre o Projeto

O **ODA·ADS** é uma plataforma educacional single-page construída em HTML/CSS/JS puro, sem frameworks ou dependências de build. Reúne conteúdo teórico, exercícios gamificados e recursos de revisão para os principais temas do curso de Análise e Desenvolvimento de Sistemas, instalável como app (PWA), com suporte a uso offline e disponível em **português, inglês e espanhol**.

---

## Funcionalidades

| Recurso | Descrição |
|---|---|
| **7 Módulos de Conteúdo** | Engenharia de Software, Banco de Dados, Programação Web, Redes de Computadores, Algoritmos e Estruturas, Segurança da Informação, Fundamentos de ADS |
| **Multilíngue (PT/EN/ES)** | Seletor de idioma com bandeiras no menu; traduz tudo — módulos, quiz, flashcards, FAQ, roadmap, tutorial e certificado. Sem escolha salva, o site abre sempre em português |
| **Quiz com 34 questões** | Sorteia o banco completo (não uma amostra), timer por questão, feedback imediato, atalhos de teclado (1-4 / Enter), textos traduzidos por idioma |
| **Flashcards interativos** | Flip 3D com contador de viradas e reset |
| **Roadmap visual** | Trilha de aprendizado do curso |
| **Conceitos-chave** | Glossário rápido por área |
| **FAQ** | Perguntas frequentes sobre ADS |
| **Certificado digital (imagem)** | Gerado como imagem PNG num `<canvas>` — mesmo modelo usado no Pessoas em Braile: fundo branco formal, logo, faixa de status colorida por aproveitamento, código de validação único e dados institucionais (UNIGRANDE). Baixa como arquivo, ou compartilha direto via Web Share API |
| **Tutorial guiado** | Modal "Como usar" com passo a passo, abre na primeira visita e pode ser reaberto pelo botão "?" |
| **Instalável (PWA)** | Botão "Instalar App" no menu lateral (desktop) ou no menu ☰ (celular), ícone próprio, funciona offline após a primeira visita |
| **Menu lateral (desktop)** | Sidebar fixa com navegação, ícones em SVG (sem depender de emoji, que renderiza diferente entre sistemas) |
| **Scroll Spy** | Nav fixa com destaque de seção ativa |
| **Toasts de engajamento** | Notificações ao ler módulos e visualizar seções |

---

## Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white)
![LocalStorage](https://img.shields.io/badge/localStorage-Persistencia-lightgrey?style=flat-square)

- Fontes: `Syne`, `IBM Plex Mono`, `Lora` via Google Fonts
- Persistencia: `localStorage` (certificado, progresso, tutorial visto, idioma escolhido)
- i18n: dicionário próprio (`i18n.js`/`i18n-apply.js`), sem biblioteca externa - PT vem do snapshot do próprio HTML, EN/ES de um dicionário à parte
- Hospedagem: Vercel, domínio próprio via Cloudflare DNS
- Zero dependências externas além de Google Fonts

---

## Estrutura

```
index.html        ← marcação HTML
style.css         ← estilos
script.js         ← lógica (quiz, flashcards, certificado, tema, PWA, etc.)
i18n.js           ← dicionários de tradução EN/ES (PT vem do próprio HTML)
i18n-apply.js     ← mecanismo que aplica/restaura a tradução na página
manifest.json     ← metadados do app instalável (PWA)
sw.js             ← service worker (cache offline, network-first)
vercel.json       ← cabeçalhos de segurança e cache
logo.jpg          ← logo do Grupo A (usada no site e nos ícones)
icon-192.png / icon-512.png / icon-180.png / favicon-32.png  ← ícones do app
avatar-1.jpg .. avatar-4.jpg  ← fotos dos integrantes (seção Sobre)
INSTALAR.md       ← guia de instalação como app
README.md
```

---

## Como usar

Acesse direto: **https://odaads.lumvix.com.br/**

Ou rode localmente:

```bash
# Clone o repositório
git clone https://github.com/sethudsondev/ODAADS.git
cd ODAADS

# Abra direto no navegador, sem servidor necessario
open index.html
```

Pra instalar como app no celular ou desktop, veja **[INSTALAR.md](INSTALAR.md)**.

---

## Atalhos do Quiz

| Tecla | Ação |
|---|---|
| `1` `2` `3` `4` | Selecionar alternativa |
| `Enter` / `Espaço` | Próxima questão |

---

## Contexto Acadêmico

Desenvolvido como parte do **Projeto de Extensão** do curso de ADS no Centro Universitário UNIGRANDE.

**Módulos cobertos:**
- Engenharia de Software (SDLC, UML, metodologias ágeis)
- Banco de Dados (modelagem relacional, SQL, normalização)
- Programação Web (HTML/CSS/JS, responsividade, APIs)
- Redes de Computadores (OSI/TCP-IP, IPv4/IPv6, protocolos)
- Algoritmos e Estruturas de Dados
- Segurança da Informação (CIA Triad, criptografia, ameaças)
- Fundamentos de ADS

---

## Histórico de correções e melhorias

**Conteúdo e quiz**
- **Quiz corrigido**: sorteava só 2 perguntas por categoria (até 14 no total); agora usa as 34 perguntas do banco, como sempre foi anunciado (site, meta description e textos da seção ajustados pra bater com o número real).
- **Certificado corrigido**: ao refazer o quiz e passar de novo, a tela ficava travada no certificado anterior em vez de pedir o nome de novo (função duplicada com IDs de elemento errados).

**Multilíngue PT/EN/ES**
- Seletor de idioma com bandeiras (🇧🇷/🇺🇸/🇪🇸) no menu, mesmo padrão usado no site da NovArte's Tech.
- Tradução completa: os 34 itens do quiz, os 7 módulos detalhados, flashcards, FAQ, roadmap, cards de módulo, bios da equipe, tutorial e certificado - não só a interface.
- Mecanismo próprio sem biblioteca externa: a primeira carga da página tira um "retrato" do português já existente no HTML, e usa esse retrato pra restaurar o PT ao trocar de volta - assim não foi preciso reescrever o português em lugar nenhum, só traduzir pra EN/ES.
- Referências bibliográficas (ABNT) permanecem no idioma original de publicação, por convenção acadêmica.
- Corrigido: o site não detecta mais o idioma do navegador automaticamente - abre sempre em português, só muda se a pessoa clicar numa bandeira (evita confusão de quem tem o navegador em inglês por outro motivo).

**Certificado (imagem)**
- O certificado deixou de ser um card HTML no estilo escuro do site e passou a ser desenhado num `<canvas>`, virando uma imagem PNG de verdade - mesmo modelo usado no projeto Pessoas em Braile (fundo branco formal, cabeçalho com gradiente, logo circular, nome em destaque, faixa de status colorida conforme o aproveitamento).
- Mantém o que o ODA-ADS já tinha de diferente: código de validação único e dados institucionais (UNIGRANDE, curso, grupo, data), ambos desenhados no canvas.
- Botão "Baixar Certificado" (salva o PNG) e "Compartilhar" (Web Share API, com alternativa de copiar texto quando o navegador não suporta).
- Blindado contra travamento: se a imagem do logo demorar ou falhar pra carregar, o certificado desenha do mesmo jeito após 1,2s, em vez de ficar com a tela em branco pra sempre.

**Menu e navegação**
- Ícones trocados de emoji (que renderizava como glifo genérico em alguns sistemas) para um sprite de SVG próprio.
- Menu lateral fixo no desktop (≥1100px), substituindo os links horizontais do topo nessa largura; no celular continua o menu ☰.
- Botão "Instalar App" saiu do topo (que estava ficando apertado com bandeiras + ajuda + tema) e foi pro rodapé do menu lateral, junto com "Como usar"; no celular continua dentro do menu ☰.
- Corrigido: itens do topo (bandeiras, ajuda, tema) ficavam empilhados em vez de alinhados numa linha só (faltava CSS na `.nav-actions` depois que o seletor de idioma foi adicionado).

**PWA e cache**
- `manifest.json`, `sw.js`, ícones e botão "Instalar App" - o site se instala como aplicativo e funciona offline.
- Corrigido um bug sério do service worker: a versão inicial usava cache-first pra tudo, então quem já tinha visitado o site ficava preso pra sempre na primeira versão que carregou, mesmo depois de novos deploys. Trocado pra network-first (sempre busca a versão mais nova quando online; o cache só entra como reserva se a rede falhar), e a página agora se recarrega sozinha quando detecta uma atualização.
- Corrigido: os arquivos principais (`index.html`, `script.js`, `style.css`, `i18n.js`) tinham `Cache-Control` de 4 horas por padrão da Vercel, fazendo qualquer correção demorar até 4h pra chegar em quem já tinha visitado o site. Agora esses arquivos sempre revalidam com o servidor antes de usar qualquer cópia salva.

**Performance e SEO**
- Logo e avatares que estavam embutidos em base64 (repetidos 3x no caso da logo) foram extraídos para arquivos de imagem reais - o HTML caiu de ~392KB para ~107KB.
- Favicon, `canonical`, tags Open Graph e Twitter Card adicionadas.
- Pontuação padronizada: travessões (—) trocados por vírgula, dois-pontos, ponto final ou middot conforme o contexto.

**Qualidade de código**
- `style.css`/`script.js` separados do `index.html` (antes tudo inline num arquivo só, o que fazia o GitHub contar o repositório como 100% HTML).
- Auditoria geral: removida função duplicada (`shareResult`, não usada em lugar nenhum), ~100 linhas de CSS mortas do certificado antigo, e chaves de tradução sem uso.
- Domínio próprio: publicado em `odaads.lumvix.com.br` (antes só a URL gerada pela Vercel).

---

## Grupo A - Desenvolvedores

| Nome | Papel | Polo |
|---|---|---|
| **Set Hudson Leite Costa** | Desenvolvedor Principal | Polo Amaralina, Bom Jesus da Lapa, BA |
| **George Alexandre Galeno** | Conteúdo & Pesquisa | Polo Centro, Parnaíba, PI |
| **Joana D'Arc** | Documentação & QA | Polo Cambolo, Porto Seguro, BA |
| **Gabrielly Moitinho Viana Souza** | Desenvolvedora Front-End / Power BI | Polo Vitória da Conquista, BA |

ADS · Centro Universitário UNIGRANDE · 4º Semestre 2026

---

## Licenca

![License](https://img.shields.io/badge/Licenca-MIT-green?style=flat&logo=opensourceinitiative&logoColor=white)

MIT, livre para uso educacional.
