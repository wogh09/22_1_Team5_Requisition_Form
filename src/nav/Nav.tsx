import { useEffect, useState } from 'react';
import * as S from './Nav_Style';
import MobileNav from './MobileNav';
import { ReactComponent as CompanyIcon } from 'assets/icon/companyIcon.svg';

export default function Nav() {
  const [isClickedMenu, setIsClickedMenu] = useState<boolean>(false);

  const showMenu = (): void => {
    setIsClickedMenu(true);
  };

  return (
    <>
      <S.Nav>
        <S.MobileMenuIcon onClick={showMenu} />
        <S.NavList>
          <S.NavItem>
            <S.Logo />
          </S.NavItem>
          <S.NavItem>
            <S.MenuList>
              <CompanyIcon fill="#fff" />
            </S.MenuList>
            <S.MenuList>A 가공 업체</S.MenuList>
            <S.DividerIcon />
            <S.MenuList>로그아웃</S.MenuList>
          </S.NavItem>
        </S.NavList>
      </S.Nav>
      {isClickedMenu && (
        <MobileNav
          isClickedMenu={isClickedMenu}
          setIsClickedMenu={setIsClickedMenu}
        />
      )}
    </>
  );
}
