import { useState } from 'react';
import * as S from './Nav_Style';
import MobileNav from './MobileNav';
import { ReactComponent as CompanyIcon } from 'assets/icon/companyIcon.svg';
import useLockScroll from 'hooks/useLockScroll';

export default function Nav() {
  const [isClickedMenu, setIsClickedMenu] = useState<boolean>(false);

  const showMenu = (): void => {
    setIsClickedMenu(true);
    if (isClickedMenu) {
      document.body.style.background = 'rgba(0, 0, 0, 0.5)';
    }
  };

  console.log(isClickedMenu);

  useLockScroll();
  return (
    <>
      <S.Nav>
        <S.MobileMenu onClick={showMenu} />
        <S.NavList>
          <S.NavItem>
            <S.Logo />
          </S.NavItem>
          <S.NavItem>
            <S.MenuList>
              <CompanyIcon fill="#fff" />A 가공 업체
            </S.MenuList>
            <S.DividerIcon />
            <S.MenuList>로그아웃</S.MenuList>
          </S.NavItem>
        </S.NavList>
      </S.Nav>
      <MobileNav
        isClickedMenu={isClickedMenu}
        setIsClickedMenu={setIsClickedMenu}
      />
    </>
  );
}
