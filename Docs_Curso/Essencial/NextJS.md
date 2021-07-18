### Funções Next:
*Renderização no servidor (server side rendering - SSR)*
*Geração de estaticos (Static Site Generation - SSG)*
*CSS-in-JS(Styled-jsx, Styled components, emotion, etc...)*
*Zero configuration(rotas, hot reloaindg, code splitting...)*
*Otimizado para produção*

**NEXT FAZ SSG,SSR,SPA**

### Tipos de uma aplicação ###
**Static site (HTML,CSS,JS) - GatsbyJS, Hexo**
1 - o servidor faz apenas uma chamada para a API e joga tudo na CDN(servidor simples que serve arquivos estaticos)
o cliente requisita algo > A CDN koga o que foi requisitado para o cliente, conforme ele vai requisitando. O arquivo ja foi mandado para a CDN antes do cliente pedir, e por isso não é usado nada do servidor ou da API.

# Vantagens
*Uso quase nulo do servidor*
*Melhor performace*
*Flexibilidade para usar qualquer servidor*

# Desvantagens
*Tempo de build muito alto*
*Dificuldade para escalar em aplicações grandes*
*Dificuldade para realizar atualizações constantes*

# Usos
*Site simples sem muita interação do usuario*
*Conteudo muda pouco*
*Site simples, não tem muita pagina*
*Performace importante*
**Blogs, Landing Pages, Portfólios**

**Client Side Rendering (Single page aplicattion - SPA) - Create React App**
o cliente abre a pagina > a cdn devolve os arquivos js, html e etc... para o navegador > o navegador vai em busca de data na API dai em diante para popular esses arquivos com data. Todo o processo em diante é feito através da API, ja que o app.js ja foi buscado. 

# Vantagens
*Permite paginas ricas em interações sem recarregar (pois depois que baixar o app.js, tudo vai ser feito no browser)*
*Site rapido após o load inicial*
*Ótimo para aplicações web*
*Possui diversas bibliotecas*

# Desvantagens
*Load inicial pode ser muito grande*
*Performance imprevisivel*
*Dificuldades no SEO*

# Usos
*Quando não tem necessidade de indexar informações no google*
*Quando o usuario faz interações na pagina e não quer refreshes*
*Quando as informações vão ser diferentes para cada usuario( autenticação, ou a pagina do twitter, aonde cada usuario tem uma timeline diferente, sem indexação )*
**Twitter Web, Facebook Web, SPotify Web**


**Server side Rendering (SSR) - NextJs**
O cliente requisita uma pagina > servidor vai para a api > pega os dados > renderiza > retorna para o cliente. Evita paginas de loading, e essa chamada é feita inumeras vezes. Toda vez que vc bater na pagina, ele vai pegar o dado.

# Vantagens
*Ótimo em SEO*
*meta tags com previiews mais adequadas*
*Melhor performance para o usuario(Conteudo é visto mais rapido)*
*Codigo compartilhado com o backend em node*
*Menor processamento do lado do usuario*

# Desvantagens
*TTFB(Time to firt byte) o servidor vai preparar todo oconteudo para entregar*
*HTML maior*
*Reload completo nas mudanças de rotas*
*Toda mudança tem que bater no servidor*

# Usos
*Quando tem necessiade de um SPA, mas precisa de um loading mais rapido*
*Quando o conteudo muda muito, ou trabalha com muitas paginas*
**Ecommerce, sites de Noticias**
