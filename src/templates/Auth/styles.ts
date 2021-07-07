import styled, { css } from 'styled-components';

import * as HeadingStyles from 'components/Heading/styles';
import * as LogoStyles from 'components/Logo/styles';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
      grid-template-columns: 1fr 1fr;
  `}
`;

// Banner
export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    /* Overlay. Todo o conteudo dentro vai ter um z-index maior que o overlay */
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.black};
      opacity: 0.85;
    }

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
    color: ${theme.colors.white};
    position: relative;
    z-index: ${theme.layers.base};

    /* Fazendo com que o a tenha o espaçamento apenas do conteudo dentro dele*/
    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`;

export const BannerSubtitle = styled.h3``;

export const BannerFooter = styled.footer`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    align-self: end;
    justify-self: center;
  `}
`;
// / Banner

// Content
export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
        width: 36rem;
      `}

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;
// / Content
