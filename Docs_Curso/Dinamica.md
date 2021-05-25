## ================= ##
## ================= ##
## COMPONENTE BANNER ##
## ================= ##
## ================= ##

## 1 - Primeiro faça a tipagem da api do componente banner
*src/index*
export type BannerProps = {
  size: string;
  ...codigo
};

## E logo depois eu faço o banner receber isso
*src/index*
const Banner = ({
  size,
  ...codigo
}: BannerProps) => (

##  2 - Vá para o styles e crie a estrutura
*src/styles*
export const Wrapper = styled.main``;

## 3 - Passe os argumentos para os storys
*src/stories*
**...CODIGO...**

## 4 - agora vou construir a estrutura no index
*src/index*
<S.Wrapper size="small">
  ...
</S.Wrapper>

## 5 - Depois eu vou estilizar
*src/styles*
**...CODIGO...**

## =========== ##  
## =========== ##  
## PAGINA HOME ##  
## =========== ##  
## =========== ##  

## 6 - Agora eu vou tipar a api da home
*templates/Home*
**Fazendo com que eu receba uma lista de banners**
export type HomeTemplateProps = {
  banners: BannerProps[];
};

## 7 - Agora vou fazer Home receber isso
*templates/Home*
const Home = ({
  banners,
  ...
}: HomeTemplateProps) => (

## 8 - Agora vou utilizar o componente e passar o dado recebido
*templates/Home*
: HomeTemplateProps) => (
    <Container>
      <BannerSlider items={banners} />
    </Container>

## ============= ##
## ============= ##
## ARQUIVO INDEX ##
## ============= ##
## ============= ##

## 9 - Agora eu vou tipar o arquivo index e ja passar para Home as props recebidas do NEXT
export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

## 10 - Agora eu vou passar as informações através do next
export function getStaticProps() {
  return {
    props: {
      banners: bannersMock,
    },
  };
}


## ====== ##
## ====== ##
## RESUMO ##
## ====== ##
## ====== ##

index passa para a pagina as props > pagina passa para os componentes > os componentes recebem e podem passar para os styles.


