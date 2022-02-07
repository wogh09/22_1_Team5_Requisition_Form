import * as S from './Nav_Style';

export default function Nav() {
  return (
    <S.Wrapper>
      <S.Nav>
        <S.NavList>
          <S.NavItem>
            <S.Logo />
          </S.NavItem>
          <S.NavItem>
            <S.CompanyIcon />
            <S.MenuList>가공업체</S.MenuList>
            <S.DividerIcon />
            <S.MenuList>로그아웃</S.MenuList>
          </S.NavItem>
        </S.NavList>
      </S.Nav>
    </S.Wrapper>
  );
}
