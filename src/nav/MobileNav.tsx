import { useState, useRef, useEffect } from 'react';
import * as S from './MobileNav_Style';
import { ReactComponent as CompanyIcon } from 'assets/icon/companyIcon.svg';
import useOnClickOutside from 'hooks/useOnClickOutside';
import useLockBodyScroll from 'hooks/useLockBodyScroll';
import useWindowSize from 'hooks/useWindowSize';

interface Props {
  isClickedMenu: boolean;
  setIsClickedMenu: (state: boolean) => void;
}

export default function MobileNav({ isClickedMenu, setIsClickedMenu }: Props) {
  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef, () => {
    setIsClickedMenu(false);
  });
  useLockBodyScroll();

  const windowSize = useWindowSize();

  useEffect(() => {
    windowSize >= 500 && setIsClickedMenu(false);
  }, [windowSize]);

  useEffect(() => {
    return () => setIsClickedMenu(false);
  }, [isClickedMenu]);

  return (
    <>
      <S.MobileBox isClickedMenu={isClickedMenu} ref={menuRef}>
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
      <S.Background />
    </>
  );
}
