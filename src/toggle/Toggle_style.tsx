import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
  position: relative;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 34px;
  height: 14px;
  border-radius: 15px;
  background: #c2c2c2;
  cursor: pointer;
  &::after {
    position: absolute;
    top: -3px;
    content: '';
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background: #f5f5f5;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 15px;
  &:checked + ${CheckBoxLabel} {
    background: #bbdefb;
    &::after {
      position: absolute;
      top: -3px;
      content: '';
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      background: #2196f3;
      margin-left: 15px;
      transition: 0.2s;
    }
  }
`;
