# ODA · Análise e Desenvolvimento de Sistemas

> Objeto Digital de Aprendizagem interativo desenvolvido como Projeto de Extensão, UNIGRANDE Grupo A, 4º Semestre 2026.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-Instalável-5A0FC8?style=flat&logo=pwa&logoColor=white)
![License](https://img.shields.io/badge/Licenca-MIT-green?style=flat)
![Status](https://img.shields.io/badge/Status-Concluido-blue?style=flat)

**Ao vivo em: [odaads.lumvix.com.br](https://odaads.lumvix.com.br/)**

---

## Sobre o Projeto

O **ODA·ADS** é uma plataforma educacional single-page construída em HTML/CSS/JS puro, sem frameworks ou dependências de build. Reúne conteúdo teórico, exercícios gamificados e recursos de revisão para os principais temas do curso de Análise e Desenvolvimento de Sistemas, instalável como app (PWA) e com suporte a uso offline.

---

## Funcionalidades

| Recurso | Descrição |
|---|---|
| **7 Módulos de Conteúdo** | Engenharia de Software, Banco de Dados, Programação Web, Redes de Computadores, Algoritmos e Estruturas, Segurança da Informação, Fundamentos de ADS |
| **Quiz com 34 questões** | Sorteia o banco completo (não uma amostra), timer por questão, feedback imediato, atalhos de teclado (1-4 / Enter) |
| **Flashcards interativos** | Flip 3D com contador de viradas e reset |
| **Roadmap visual** | Trilha de aprendizado do curso |
| **Conceitos-chave** | Glossário rápido por área |
| **FAQ** | Perguntas frequentes sobre ADS |
| **Certificado digital** | Gerado com nome, pontuação, data e código único (salvo em localStorage); reseta corretamente a cada nova tentativa |
| **Compartilhar resultado** | Via Web Share API ou clipboard |
| **Tutorial guiado** | Modal "Como usar" com passo a passo, abre na primeira visita e pode ser reaberto pelo botão "?" |
| **Instalável (PWA)** | Botão "Instalar App" na navegação, ícone próprio, funciona offline após a primeira visita |
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
- Persistencia: `localStorage` (certificado, progresso, tutorial visto)
- Hospedagem: Vercel, domínio próprio via Cloudflare DNS
- Zero dependências externas além de Google Fonts

---

## Estrutura

```
index.html        ← marcação HTML
style.css         ← estilos
script.js         ← lógica (quiz, flashcards, certificado, tema, PWA, etc.)
manifest.json     ← metadados do app instalável (PWA)
sw.js             ← service worker (cache offline)
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

- **Quiz corrigido**: sorteava só 2 perguntas por categoria (até 14 no total); agora usa as 34 perguntas do banco, como sempre foi anunciado.
- **Certificado corrigido**: ao refazer o quiz e passar de novo, a tela ficava travada no certificado anterior em vez de pedir o nome de novo (função duplicada com IDs de elemento errados).
- **CSS e JS separados** do `index.html` em `style.css`/`script.js` (antes tudo inline num arquivo só, o que fazia o GitHub contar o repositório como 100% HTML).
- **Performance**: logo e avatares que estavam embutidos em base64 (repetidos 3x no caso da logo) foram extraídos para arquivos de imagem reais - o HTML caiu de ~392KB para ~107KB.
- **SEO/compartilhamento**: favicon, `canonical`, tags Open Graph e Twitter Card adicionadas.
- **PWA**: `manifest.json`, `sw.js`, ícones e botão "Instalar App" - o site agora se instala como aplicativo e funciona offline.
- **Tutorial**: modal "Como usar" na primeira visita, mais `INSTALAR.md` com o passo a passo de instalação.
- **Pontuação padronizada**: travessões (—) trocados por vírgula, dois-pontos, ponto final ou middot conforme o contexto.
- **Domínio próprio**: publicado em `odaads.lumvix.com.br` (antes só a URL gerada pela Vercel).

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
