import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { Close as CloseICon } from '@styled-icons/material-outlined/Close';

import Logo from 'components/Logo';

import * as S from './styles';
import { useState } from 'react';
import Button from 'components/Button';
import MediaWatch from 'components/MediaWatch';

export type MenuProps = {
  username?: string;
};

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaWatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open menu" />
        </S.IconWrapper>
      </MediaWatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaWatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaWatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="open shopping cart" />
        </S.IconWrapper>
        <MediaWatch greaterThan="medium">
          {!username && <Button>Sign in</Button>}
        </MediaWatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseICon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <S.CreateAccount href="#" title="Sign In">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
