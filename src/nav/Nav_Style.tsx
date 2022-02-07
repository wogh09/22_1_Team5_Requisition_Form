import styled from 'styled-components';
import logo from '../assets/icon/capa_logo.png';
import companyIcon from '../assets/icon/company.png';
import divider from '../assets/icon/divider.png';

export const Nav = styled.nav`
  width: 1155px;
  padding: 25px 40px;
  background-color: blue;
  color: #fff;
`;

export const NavList = styled.ul`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.li`
  display: flex;
  width: 200px;
  justify-content: space-between;
  align-items: center;
`;

export const MenuList = styled.span``;

export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 153px;
`;

export const CompanyIcon = styled.img.attrs({
  src: `${companyIcon}`,
})`
  width: 17px;
`;

export const DividerIcon = styled.img.attrs({
  src: `${divider}`,
})`
  width: 2px;
`;
