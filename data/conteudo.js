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
      lattes:   "http://lattes.cnpq.br/6945022173220258",
      scholar:  "",                                  // TODO: Google Scholar
      orcid:    "https://orcid.org/0009-0003-0267-3444",
      github:   "https://github.com/ArthurPDonato",
      linkedin: "https://www.linkedin.com/in/arthur-pereira-donato-924734202/",
      cv_pt:    "assets/cv-arthur-donato-pt.pdf",     // coloque o PDF em assets/ (ou deixe "")
      cv_en:    "assets/cv-arthur-donato-en.pdf"
    }
  },

  /* ---------- PUBLICAÇÕES (artigos aceitos / publicados) ---------- */
  publicacoes: [
    {
      titulo: {
        pt: "Emprego Formal e Desastres Climáticos: Evidências Causais das Enchentes de 2024 no Rio Grande do Sul",
        en: "Formal Employment and Climate Disasters: Causal Evidence from the 2024 Floods in Rio Grande do Sul"
      },
      autores: "Donato, A. P.; Fiorentin, A. T. G.; Teixeira, G. S.; Santos, M. V. B.; Brito, T. M.", // confira a autoria da versão aceita
      veiculo: { pt: "Revista Análise Econômica (UFRGS)", en: "Revista Análise Econômica (UFRGS)" },
      ano: "2026",                                    // TODO: confirmar ano
      statusTipo: "aceito",
      status: { pt: "Aceito para publicação", en: "Accepted for publication" },
      resumo: {
        pt: "Estima os efeitos causais das enchentes de maio de 2024 sobre as admissões em empregos formais nos seis municípios do RS mais severamente atingidos, usando Synthetic Difference-in-Differences (SDiD) como estratégia principal, complementado por TWFE-DiD e Controle Sintético. Os resultados apontam déficit acumulado superior a 2.390 vagas formais ao longo de onze meses, com a heterogeneidade entre municípios mais bem explicada pelo dano produtivo do que pelo residencial.",
        en: "Estimates the causal effects of the May 2024 floods on formal job admissions in the six hardest-hit municipalities of Rio Grande do Sul, using Synthetic Difference-in-Differences (SDiD) as the main strategy, complemented by TWFE-DiD and Synthetic Control. Results show an accumulated deficit of over 2,390 formal jobs across eleven months, with cross-municipality heterogeneity best explained by productive rather than residential damage."
      },
      links: { pdf: "", doi: "", codigo: "", slides: "" }   // versão em anais listada em Apresentações (ENABER 2026)
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
        pt: "Emprego Formal e Desastres Climáticos: Evidências Causais das Enchentes de 2024 no Rio Grande do Sul",
        en: "Formal Employment and Climate Disasters: Causal Evidence from the 2024 Floods in Rio Grande do Sul"
      },
      autores: "Donato, A. P.; Fiorentin, A. T. G.; Teixeira, G. S.; Santos, M. V. B.; Brito, T. M.",
      evento: {
        pt: "XXIV ENABER 2026 — Encontro Nacional da Associação Brasileira de Estudos Regionais e Urbanos",
        en: "XXIV ENABER 2026 — National Meeting of the Brazilian Association for Regional and Urban Studies"
      },
      local: "Porto Alegre, RS",
      ano: "21–23/10/2026",
      links: { slides: "", pdf: "https://brsa.org.br/wp-content/uploads/Anais/2026/550561.pdf" }
    },
    {
      titulo: {
        pt: "Emprego Formal e Desastres Climáticos: Evidências Causais das Enchentes de 2024 em Eldorado do Sul e Roca Sales",
        en: "Formal Employment and Climate Disasters: Causal Evidence from the 2024 Floods in Eldorado do Sul and Roca Sales"
      },
      autores: "Donato, A. P.; Teixeira, G. S.; Santos, M. V.; Ávila, R.",
      evento: {
        pt: "XXVIII ANPEC Sul 2025 — Encontro de Economia da Região Sul",
        en: "XXVIII ANPEC Sul 2025 — Southern Brazil Economics Meeting"
      },
      local: "Porto Alegre, RS",
      ano: "25–26/09/2025",
      links: { slides: "", pdf: "https://www.anpec.org.br/sul/2025/submissao/files_I/i8-c275f27063e7fd2e94148983ec0e3069.pdf" }
    },
    {
      titulo: {
        pt: "Royalties do Petróleo e Crescimento Econômico Municipal: o Papel Relativo da Intensidade Fiscal e da Adjacência Costeira",
        en: "Oil Royalties and Municipal Economic Growth: The Relative Role of Fiscal Intensity and Coastal Adjacency"
      },
      autores: "Brito, T. M.; Teixeira, G. S.; Donato, A. P.",
      evento: {
        pt: "XXIV ENABER 2026 — Encontro Nacional da Associação Brasileira de Estudos Regionais e Urbanos",
        en: "XXIV ENABER 2026 — National Meeting of the Brazilian Association for Regional and Urban Studies"
      },
      local: "Porto Alegre, RS",
      ano: "21–23/10/2026",
      links: { slides: "", pdf: "https://brsa.org.br/wp-content/uploads/Anais/2026/550584.pdf" }
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
