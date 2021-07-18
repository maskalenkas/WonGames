### O que é 
O Strapi é um headless CMS open-source feito 100% em JavaScript, totalmente customizável e orientado para desenvolvedores preocupados em agilidade.


**O que é CMS**
Um CMS (Content Management System - Sistema de Gerenciamento de conteúdo) é um software responsável por gerenciar o conteúdo, ou seja, permitir criação, edição e organização de um determinado conteúdo.
É basicamente um painel que insere informações no site.


### CMS TRADICIONAL VS HEADLESS CMS
A principal diferença entre um CMS tradicional e um HEADLESS CMS é que o CMS tradicional entrega um conteudo ja com todo o template pronto, no HEADLESS CMS entrega o dado puro com a API e o dado é tratado via codigo.
Ou seja, eu posso ter um site feito em React, outro em vue, outro em angular, e todos eles utilizando o mesmo dado da mesma API*


**Vantagens do Headless CMS**
*Mesma entrega para diferentes tipos de dispositivos*
*Agnóstico de frameworks (mesma base funciona em React, Vue, Angular, etc)*
*Mais fácil na manutenção*
*Mais ágil para criação de protótipos*


**Vantagens do Strapi**
*100% open-source*
*Altamente customizável (API e painel)*
*Funciona com Rest API ou GraphQL ao apertar de um botão*
*Self Hosted (você controla seus dados e onde colocá-los)*
*Roadmap bem definido e grande investimento*


**Features do nativas STRAPI**
*Suporte a multiplos bancos de dados (SQLite, MongoDB, Postgres, MariaDB)*
*Documentação automática com plugin de one-click*
*Integração a Webhooks*
*Autenticações e Permissões por padrão*
*Integração com diferentes serviços (Cloudinary, SendGrid, Algolia, Redis, etc)*
*Sistema de emails*
*Sistema de assets que otimiza imagens e cria em diferentes tamanhos!*


**O que podemos fazer com o Strapi**
*Sites estáticos*
*Sites Institucionais para empresas*
*Sites de notícias*
*Ecommerce*
*O que você quiser!*


**Por que usar o Strapi ao invés de criar algo próprio ou Wordpress, Contentful, DatoCMS?**
*Mais agilidade*
*Codebase toda em JavaScript (mais fácil em manutenção)*
*Sem mensalidades e controle do próprio dado (Contentful, DatoCMS)*

### Adicionando CKEDITOR no Strapi
**instale**
npm i strapi-pugin-ckeditor5

**rode o build**
yarn build --clean

**Caso de problema no sharp modules**
rm -rf node_modules
yarn


### Colocando dados de postgre no Strapi

**Primeiro verifica se o post esta ligado**
sudo service postgresql status

**Se ativo, eu vou jogar o .sql no servidor**
*Strapi[1] se refere ao usuario*
*Strapi[2] se refere ao servidor*
*Passar porta é opcional*
*O endereço que eu aponto nada mais é que o local*
psql -h 127.0.0.1 -U strapi -d strapi -W < strapi.sql 


### Transformando uma API em graphql
**Simplesmente va no marketplace e coloque graphql**

**Logo depois, va na rota graphql**
localhost:1337/admin/graphql


### Customizando o Strapi
https://strapi.io/documentation/developer-docs/latest/development/admin-customization.html#customization-options













