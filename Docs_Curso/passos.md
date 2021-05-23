## Passo a passo ao montar um componente

## 1 - Primeiro faça a tipagem da api

*src/index*
export type BannerProps = {
  img: string;
  ...codigo
};

## E logo depois eu faço o banner receber isso

*src/index*
const Banner = ({
  img,
  ...codigo
}: BannerProps) => (


##  2 - Vá para o styles e crie a estrutura

*src/styles*
import styled from 'styled-components';

export const Wrapper = styled.main``;

export const Image = styled.div``;

export const Caption = styled.div``;

export const Title = styled.h2``;

export const Subtitle = styled.h3``;

##  3 - Passe os argumentos para o story

*src/story*
import { Story, Meta } from '@storybook/react/types-6-0';
import Banner, { BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    ...codigo
  },
} as Meta;

export const Default: Story<BannerProps> = (args) => <Banner {...args} />;


## 4 - agora vou construir a estrutura no index

*src/index*
 <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
    </S.Caption>
    <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
    <Button as="a" href={buttonLink} size="large">
      {buttonLabel}
    </Button>
  </S.Wrapper>

## 5 - Depois eu vou estilizar

*src/styles*
import media from 'styled-media-query';
import * as RibbonStyles from 'components/Ribbon/styles';

export const Wrapper = styled.main`
  position: relative;
  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}

  ${media.lessThan('large')`
    ${RibbonStyles.Wrapper} {
      right: 0;
      &::before {
        display: none;
      }
    }
  `}
`;

type ImageProps = {
  src: string;
};

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 23rem;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `}
`;

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: ${theme.spacings.small};
    ${media.greaterThan('medium')`
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
      padding: ${theme.spacings.large};
      position: absolute;
      bottom: 0;
      left: 0;
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};
    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`;
