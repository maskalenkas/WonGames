import Link from 'next/link';

import Heading from 'components/Heading';
import Logo from 'components/Logo';
import * as S from './styles';

// Primeiro monta a estrutura (sem estilização)
// Depois eu coloco as props

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    {/* Banner */}
    <S.BannerBlock>
      {/* Vai ser usado para quebrar o overlay */}
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <S.BannerSubtitle>
            <strong>WON</strong> is the best and most complete gaming platform.
          </S.BannerSubtitle>
        </div>

        <S.BannerFooter>
          Won games 2020 Todos os direitos Reservados
        </S.BannerFooter>
      </S.BannerContent>
    </S.BannerBlock>
    {/* / Bannerr */}

    {/* Content */}
    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <a>
            <Logo color="black" size="large" id="form" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
    {/* / Content */}
  </S.Wrapper>
);

export default Auth;
