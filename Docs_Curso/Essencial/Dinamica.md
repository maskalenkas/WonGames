## Antes de tudo

# Criar client
**Arquivo graphql/client.ts**
import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('http://localhost:1337/graphql')
export default client

# Depois eu vou criar uma Query
**Arquivo queries/getLandingPage.ts**
const GET_LANDING_PAGE = /* GraphQl */ `
query GET_LANDING_PAGE {
  landingPage {
    logo {
      alternativeText
      url
    }
  }
}
`
export default GET_LANDING_PAGE

# Depois eu vou buscar isso no index
**Arquivo pages/index.jsx**
export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage
    }
  }
}

### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ###

### A partir daqui chega a seguinte dinamica:

# Cria query no playground
# COpia e cola no arquivo de queries
# vai no types/api e tipa os novos dados
# vai no index, passa o dado abaixo
# vai no componente e usa os dados dinamico

### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ### ###

# Logo depois eu vou tipar as informações que chegam nas props(tanto no index. quanto nos componentes dele)
**Arquivo types/api.ts**
export type LogoProps = {
  alternativeText: string
  url: string
}

export type LandingPageProps = {
  logo: LogoProps
}

**Detalhe que ele recebe todas as props, pois ele quem vai distribuir**
# Logo depois eu vou tipar no idnex.jsx as props que chegam do getStaticProps
**Arquivo pages/index.jsx**
const Index = ({ logo }: *LandingPageProps*) =>


### A partir daqui, eu vou apresentar jeitos de tipar o que chega nos componentes.

# Tipo 1
**(mais de uma prop)(arquivo pages/index)**
<SectionHero logo={logo} header={header} />

**sectinohero/index**
*Tipando as 2 informações que chegam, direto das props de types*
type **Props** = {
  logo: LogoProps
  header: HeaderProps
}

const SectionHero = ({ logo, header }: **Props**) => (
  <S.Wrapper>
    <Container>
    <!-- Logo foi desestruturado, logo dentro dele, ele vai receber logoProps, e não uma props criada dentro do objeto -->
    <!-- Exemplo de logoProps: const Logo = ({ alternativeText, url }: ---> LogoProps <---) => -->
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
