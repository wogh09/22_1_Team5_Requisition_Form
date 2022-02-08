import styled from 'styled-components';
import menulogo from '../assets/icon/CAPA_partners_colorlogo 1.png';

export const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(72, 72, 72, 0.7);
`;

export const MobileBox = styled.div`
  position: fixed;
  top: 0;
  width: 280px;
  height: 100vh;
  background-color: #fff;
  z-index: 1;
  @keyframes menuSlideIn {
    0% {
      transform: translate(-100%, 0);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes menuSlideOut {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(-100%, 0);
      display: none;
    }
  }

  animation: ${({ isClickedMenu }: { isClickedMenu: boolean }) =>
      isClickedMenu ? 'menuSlideIn' : 'menuSlideOut'}
    0.5s;
`;

export const MenuTop = styled.div`
  padding: 16px 20px;
`;

export const MenuLogo = styled.img.attrs({
  src: `${menulogo}`,
})`
  width: 91px;
`;

export const MenuBottom = styled.div`
  border-top: 1px solid rgba(229, 229, 229, 1);
`;

export const MenuList = styled.ul`
  padding: 32px 38px;
`;

export const MenuItems = styled.li`
  display: flex;
  margin-top: 24px;
`;

export const List = styled.a`
  margin-left: 8px;
`;
