### Explicação de cada arquivo padrão presente no /pages

## _App.tsx
É um arquivo especifico da propria estrutura do next, em que a gente utiliza para poder encapsular todas as paginas que a gente for criar, isso a nivel do *client-side*, e no *runtime* quando estiver criando site estatico.

Normalmente é utlizado para definir a parte de TAG, de SEO, persistencia de estilos globais, tema, autenticação

## _document.tsx
É um arquivo que roda via server-side, ou seja, estatico ja passa por cima dele.

Ele é usado no boiler para configurar ja o styled-component, para que assim que ele renderize, ele renderize tudo carregado 

## index
É aonde vai renderizar os templates, dando as props que eles tem que receber

## /templates

