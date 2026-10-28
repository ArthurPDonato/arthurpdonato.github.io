# Site acadêmico — Arthur Donato

Site pessoal estático (HTML/CSS/JS), bilíngue PT/EN, para reunir **publicações, working papers e apresentações em eventos**. Sem build, sem dependências — abre direto no navegador.

```
site-academico/
├── index.html            ← estrutura + renderização (não precisa mexer)
├── style.css             ← aparência (cores, fontes)
├── data/
│   └── conteudo.js       ← 📝 VOCÊ EDITA AQUI (todo o conteúdo)
└── assets/
    ├── foto.jpg                     ← sua foto
    ├── cv-arthur-donato-pt.pdf      ← currículo PT
    └── cv-arthur-donato-en.pdf      ← currículo EN
```

## Como atualizar o conteúdo

Abra **`data/conteudo.js`** e edite. Cada texto tem versão `{ pt: "...", en: "..." }`.

- **Adicionar um artigo/working paper/apresentação:** copie um bloco existente dentro da lista correspondente (`publicacoes`, `workingPapers`, `apresentacoes`) e preencha.
- **Links:** deixe `""` para esconder o botão. Preencha `pdf`, `doi`, `codigo`, `slides` conforme tiver.
- **Status** (badge colorido): use `statusTipo` = `"aceito"`, `"publicado"`, `"working"`, `"preparo"` ou `"revisao"`.
- **Foto e CVs:** coloque os arquivos em `assets/` com os nomes indicados em `conteudo.js` (ou ajuste os caminhos lá).

> ⚠️ **Confira os itens marcados com `// TODO`** em `conteudo.js`: co-autores, DOIs, datas, locais dos eventos e links de PDF foram pré-preenchidos como rascunho a partir dos seus trabalhos conhecidos.

## Ver localmente

Dê duplo-clique em `index.html`. (Tudo funciona abrindo o arquivo direto; não precisa de servidor.)

## Publicar no GitHub Pages (URL: `arthurpdonato.github.io`)

Como é um **site de usuário**, o repositório precisa ter exatamente esse nome.

1. No GitHub, crie um repositório **público** chamado **`arthurpdonato.github.io`** (vazio, sem README).
2. Neste diretório, rode:

   ```bash
   git init
   git add .
   git commit -m "Site acadêmico inicial"
   git branch -M main
   git remote add origin https://github.com/ArthurPDonato/arthurpdonato.github.io.git
   git push -u origin main
   ```

3. No repositório → **Settings → Pages** → em *Build and deployment*, *Source* = **Deploy from a branch**, *Branch* = **main** / **/ (root)** → **Save**.
4. Em 1–2 minutos o site estará em **https://arthurpdonato.github.io**.

Para atualizar depois: edite `conteudo.js`, depois `git add . && git commit -m "atualiza" && git push`.

### Domínio próprio (opcional, mais tarde)
Compre um domínio (ex.: `arthurdonato.com`), aponte o DNS para o GitHub Pages e adicione-o em Settings → Pages → *Custom domain*.
