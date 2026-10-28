/* =============================================================================
   CONTEÚDO DO SITE  —  edite APENAS este arquivo para atualizar o site.
   Cada campo tem versão { pt: "...", en: "..." } para o site bilíngue.

   >>> CONFIRA / COMPLETE os itens marcados com  // TODO
       (co-autores, DOIs, datas, locais de eventos, links de PDF).
   ============================================================================= */

const CONTEUDO = {

  /* ---------- PERFIL ---------- */
  perfil: {
    nome: "Arthur Donato",
    foto: "assets/foto.jpg",            // coloque sua foto aqui (quadrada funciona melhor)

    titulo: {
      pt: "Economista · Mestrando em Economia Aplicada (PPGE/FURG)",
      en: "Economist · MSc student in Applied Economics (PPGE/FURG)"
    },

    afiliacao: {
      pt: "Programa de Pós-Graduação em Economia — Universidade Federal do Rio Grande (FURG)",
      en: "Graduate Program in Economics — Federal University of Rio Grande (FURG), Brazil"
    },

    bio: {
      pt: "Mestrando em Economia Aplicada no PPGE/FURG. Minha pesquisa combina inferência causal e microeconometria aplicada para avaliar o impacto de choques e políticas públicas sobre o mercado de trabalho formal brasileiro, com ênfase em desastres climáticos, seguro-desemprego e o uso de dados administrativos (CAGED/RAIS).",
      en: "Master's student in Applied Economics at PPGE/FURG. My research blends causal inference and applied microeconometrics to evaluate how shocks and public policies affect the Brazilian formal labor market, with a focus on climate disasters, unemployment insurance, and administrative microdata (CAGED/RAIS)."
    },

    interesses: {
      pt: ["Economia aplicada", "Inferência causal", "Difference-in-Differences",
           "Controle sintético (SDiD)", "Economia do trabalho", "Desastres climáticos",
           "Séries temporais", "Avaliação de políticas públicas"],
      en: ["Applied economics", "Causal inference", "Difference-in-Differences",
           "Synthetic control (SDiD)", "Labor economics", "Climate & disaster economics",
           "Time series", "Policy evaluation"]
    },

    // Deixe "" para ocultar um link.
    links: {
      email:    "arthurdonato19@gmail.com",
      lattes:   "",                                  // TODO: URL do Currículo Lattes
      scholar:  "",                                  // TODO: Google Scholar
      orcid:    "",                                  // TODO: ORCID
      github:   "https://github.com/ArthurPDonato",
      linkedin: "",                                  // TODO: LinkedIn
      cv_pt:    "assets/cv-arthur-donato-pt.pdf",     // coloque o PDF em assets/ (ou deixe "")
      cv_en:    "assets/cv-arthur-donato-en.pdf"
    }
  },

  /* ---------- PUBLICAÇÕES (artigos aceitos / publicados) ---------- */
  publicacoes: [
    {
      titulo: {
        pt: "Emprego Formal e Desastres Climáticos: evidências das enchentes de 2024 no Rio Grande do Sul",
        en: "Formal Employment and Climate Disasters: evidence from the 2024 floods in Rio Grande do Sul"
      },
      autores: "Donato, A.",                          // TODO: adicionar co-autores
      veiculo: { pt: "Revista Análise Econômica (UFRGS)", en: "Revista Análise Econômica (UFRGS)" },
      ano: "2026",                                    // TODO: confirmar ano
      statusTipo: "aceito",
      status: { pt: "Aceito para publicação", en: "Accepted for publication" },
      resumo: {
        pt: "Estima o efeito causal das enchentes de maio de 2024 sobre o emprego formal nos municípios gaúchos, usando Synthetic Difference-in-Differences (SDiD) com dados do CAGED.",
        en: "Estimates the causal effect of the May 2024 floods on formal employment across Rio Grande do Sul municipalities using Synthetic Difference-in-Differences (SDiD) on CAGED data."
      },
      links: { pdf: "", doi: "", codigo: "", slides: "" }   // TODO
    }
  ],

  /* ---------- WORKING PAPERS ---------- */
  workingPapers: [
    {
      titulo: {
        pt: "Reforma de 2015 e o Seguro-Desemprego no Brasil: uma avaliação por séries temporais interrompidas",
        en: "The 2015 Reform and Unemployment Insurance in Brazil: an interrupted time-series assessment"
      },
      autores: "Donato, A.",                          // TODO
      veiculo: { pt: "Working paper", en: "Working paper" },
      ano: "2026",
      statusTipo: "working",
      status: { pt: "Working paper", en: "Working paper" },
      resumo: {
        pt: "Avalia o efeito da Lei nº 13.134/2015 sobre a concessão do seguro-desemprego com modelos ARIMA (séries temporais interrompidas) e CausalImpact, a partir de dados mensais do MTE (2000–2025). Estimativa preliminar: redução de ~16%.",
        en: "Evaluates the effect of Law 13.134/2015 on unemployment-insurance claims using ARIMA interrupted time-series models and CausalImpact on monthly MTE data (2000–2025). Preliminary estimate: a ~16% reduction."
      },
      links: { pdf: "", doi: "", codigo: "", slides: "" }
    },
    {
      titulo: {
        pt: "Critérios de triagem para resposta a desastres: targeting de municípios após as enchentes de 2024",
        en: "Triage criteria for disaster response: municipality targeting after the 2024 floods"
      },
      autores: "Donato, A.",                          // TODO
      veiculo: { pt: "Em preparação", en: "In preparation" },
      ano: "2026",
      statusTipo: "preparo",
      status: { pt: "Em preparação", en: "In preparation" },
      resumo: {
        pt: "Investiga qual critério de dano identifica com maior precisão os municípios mais afetados pelas enchentes, comparando triagem por critérios produtivos e por critérios populacionais.",
        en: "Investigates which damage criterion most precisely identifies the municipalities hardest hit by the floods, comparing productive versus population-based triage."
      },
      links: { pdf: "", doi: "", codigo: "", slides: "" }
    }
  ],

  /* ---------- APRESENTAÇÕES EM EVENTOS ---------- */
  apresentacoes: [
    {
      titulo: {
        pt: "Emprego formal e as enchentes de 2024 no Rio Grande do Sul",
        en: "Formal employment and the 2024 floods in Rio Grande do Sul"
      },
      evento: {
        pt: "ENABER 2026 — Encontro Nacional da Associação Brasileira de Estudos Regionais e Urbanos",
        en: "ENABER 2026 — National Meeting of the Brazilian Association for Regional and Urban Studies"
      },
      local: "Brasil",                                // TODO: cidade/UF
      ano: "2026",
      links: { slides: "", pdf: "" }                  // TODO
    },
    {
      titulo: {
        pt: "Targeting de municípios na resposta às enchentes de 2024",
        en: "Municipality targeting in the response to the 2024 floods"
      },
      evento: {
        pt: "25ª Mostra de Produção Universitária (MPU) — FURG",
        en: "25th University Research Fair (MPU) — FURG"
      },
      local: "Rio Grande, RS",
      ano: "2026",
      links: { slides: "", pdf: "" }
    }
  ],

  /* ---------- TEXTOS DA INTERFACE (navegação, títulos de seção, botões) ---------- */
  ui: {
    nav: {
      sobre:         { pt: "Sobre",          en: "About" },
      publicacoes:   { pt: "Publicações",    en: "Publications" },
      working:       { pt: "Working Papers", en: "Working Papers" },
      apresentacoes: { pt: "Apresentações",  en: "Talks" },
      contato:       { pt: "Contato",        en: "Contact" }
    },
    secoes: {
      publicacoes:   { pt: "Publicações",            en: "Publications" },
      working:       { pt: "Working Papers",         en: "Working Papers" },
      apresentacoes: { pt: "Apresentações em eventos", en: "Conference talks" },
      contato:       { pt: "Contato",                en: "Contact" },
      interesses:    { pt: "Áreas de interesse",     en: "Research interests" }
    },
    botoes: {
      resumo:  { pt: "Resumo",     en: "Abstract" },
      pdf:     { pt: "PDF",        en: "PDF" },
      doi:     { pt: "DOI",        en: "DOI" },
      codigo:  { pt: "Código",     en: "Code" },
      slides:  { pt: "Slides",     en: "Slides" },
      cv_pt:   { pt: "Currículo (PT)", en: "CV (PT)" },
      cv_en:   { pt: "CV (EN)",    en: "CV (EN)" }
    },
    contatoTexto: {
      pt: "Entre em contato por e-mail ou pelas redes abaixo.",
      en: "Feel free to reach out by email or through the links below."
    },
    rodape: {
      pt: "Atualizado em 2026 · Construído com HTML, CSS e JavaScript.",
      en: "Last updated 2026 · Built with plain HTML, CSS and JavaScript."
    }
  }
};
