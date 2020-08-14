# Web Scraping em JS

Este é um exemplo de web scraping, uma espécie de robo minerador de arquivos da web, usando o [Puppeteer](https://github.com/puppeteer/puppeteer) para baixar imagens de uma conta configurável do instagram.

## Como rodar?

Navegue para pasta do web-scraping:

```ssh
cd diretorio/do/web-scraping
```

Instale as depêndencias:

```ssh
npm i
```

Edite o arquivo .env com a conta do instagram que você quer minerar imagens:

```javascript
INSTAGRAM_ACCONT="conta_do_instagram"
```

Agora rode o comando para executar o arquivo `index.js` que vai minerar os links das imagens e salvar no arquivo `instagram.json`:

```ssh
node index.js
```

Pronto! Agora é só ver o resultado no `lite-server` do nodejs.

```ssh
npx lite-server
```

Existem muitos exemplos no repositório do  [Puppeteer](https://github.com/puppeteer/puppeteer), recomendo fortemente que você entre lá e confira. :tada:
