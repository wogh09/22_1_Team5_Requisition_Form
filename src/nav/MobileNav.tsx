import * as S from './MobileNav_Style';
import { ReactComponent as CompanyIcon } from 'assets/icon/companyIcon.svg';

export default function MobileNav() {
  return (
    <S.MobileBox>
      <S.MenuTop>
        <S.MenuLogo />
      </S.MenuTop>
      <S.MenuBottom>
        <S.MenuList>
          <S.MenuItems>
            <CompanyIcon fill="#333" />
            <S.List>파트너정밀가공</S.List>
          </S.MenuItems>
          <S.MenuItems>로그아웃</S.MenuItems>
        </S.MenuList>
      </S.MenuBottom>
    </S.MobileBox>
  );
}
