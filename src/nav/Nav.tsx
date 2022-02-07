import * as S from './Nav_Style';
import MobileNav from './MobileNav';
import { ReactComponent as CompanyIcon } from 'assets/icon/companyIcon.svg';

export default function Nav() {
  return (
    <>
      <S.Nav>
        <S.MobileMenu />
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
      <MobileNav />
    </>
  );
}
