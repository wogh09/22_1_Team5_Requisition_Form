import styled from 'styled-components';
import media from 'styled-media-query';
import menulogo from '../assets/icon/CAPA_partners_colorlogo 1.png';

export const MobileBox = styled.div`
  display: ${({ isClickedMenu }: { isClickedMenu: boolean }) =>
    isClickedMenu ? 'block' : 'none'};
  width: 280px;
  height: 100vh;
  position: fixed;
  animation-name: slide;
  animation-duration: 0.5s;
  top: 0;
  background-color: #fff;
`;

export const MenuTop = styled.div`
  padding: 16px 20px;
`;

export const MenuLogo = styled.img.attrs({
  src: `${menulogo}`,
})`
  width: 91px;

  ${media.lessThan('small')`
    display:block;
  `}
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
