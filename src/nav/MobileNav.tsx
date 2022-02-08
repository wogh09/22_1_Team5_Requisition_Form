import { useEffect } from 'react';
import * as S from './MobileNav_Style';
import { ReactComponent as CompanyIcon } from 'assets/icon/companyIcon.svg';
import useLockBodyScroll from 'hooks/useLockBodyScroll';
import useWindowSize from 'hooks/useWindowSize';

interface Props {
  isClickedMenu: boolean;
  setIsClickedMenu: (state: boolean) => void;
  showMenu: (boolean) => void;
}

export default function MobileNav({
  showMenu,
  isClickedMenu,
  setIsClickedMenu,
}: Props) {
  const windowSize = useWindowSize();
  useLockBodyScroll();

  useEffect(() => {
    windowSize > 768 && setIsClickedMenu(false);
  }, [setIsClickedMenu, windowSize]);

  return (
    <>
      <S.MobileBox isClickedMenu={isClickedMenu}>
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
      <S.Background onClick={showMenu} />
    </>
  );
}
