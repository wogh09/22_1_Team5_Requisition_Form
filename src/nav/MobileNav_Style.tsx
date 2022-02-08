import styled from 'styled-components';
import media from 'styled-media-query';
import menulogo from '../assets/icon/CAPA_partners_colorlogo 1.png';

export const Background = styled.div`
  background: rgba(76, 76, 76, 0.7);
  width: 100vw;
  height: 100vh;
  /* display: ${({ isClickedMenu }: { isClickedMenu: boolean }) =>
    isClickedMenu ? 'block' : 'none'}; */
`;

export const MobileBox = styled.div`
  width: 280px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: ${({ isClickedMenu }: { isClickedMenu: boolean }) =>
    isClickedMenu ? '0' : '-300px'};
  background-color: #fff;
  transition: 0.5s;
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
