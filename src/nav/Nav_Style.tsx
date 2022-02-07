import styled from 'styled-components';
import logo from '../assets/icon/capa_logo.png';
import companyIcon from '../assets/icon/company.png';
import divider from '../assets/icon/divider.png';

export const Nav = styled.nav`
  width: 100%;
  padding: 25px 10px;
  color: #fff;
  background-color: rgba(21, 101, 192, 1);
`;

export const NavList = styled.ul`
  display: flex;
  max-width: 1360px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const NavItem = styled.li`
  display: flex;
  width: 200px;
  justify-content: space-between;
  align-items: center;
`;

export const MenuList = styled.span`
  display: flex;
`;

export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 153px;
`;

export const CompanyIcon = styled.img.attrs({
  src: `${companyIcon}`,
})`
  width: 17px;
  margin-right: 8px;
`;

export const DividerIcon = styled.img.attrs({
  src: `${divider}`,
})`
  width: 3px;
`;
