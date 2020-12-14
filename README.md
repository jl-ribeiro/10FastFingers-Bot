Para executar o teste será necessário a instalação do node.js, cypress, cypress-cucumber-preprocessor e cypress-wait-until, nessa ordem.

Para instalar o node.js, será necessário baixá-lo em https://nodejs.org.

Ao instalar, instale o cypress via linha de comando na pasta raiz do repositório:
```bash
npm install cypress
```

Feito essa etapa, instale o cypress-cucumber-preprocessor:
```bash
npm install --save-dev cypress-cucumber-preprocessor
```

Em seguida, faça a instalação da dependência cypress-wait-until:
```bash
npm i -D cypress-wait-until
```

Os módulos e dependências já estão configuradas no projeto, então não é necessário fazê-lo.

Para executar o projeto, execute na raiz do diretório o seguinte comando:
```bash
npx cypress open
```

Ele irá executar a interface do Cypress, onde aparecerá o arquivo TypingTest.feature. Ao clicar nele irá executar o teste.