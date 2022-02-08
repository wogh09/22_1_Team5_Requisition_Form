import styled from 'styled-components';

export const FilterConianier = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 110px;
`;
export const TitleContainer = styled.div`
  min-width: 1130px;
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #323d45;
`;
export const SubText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #323d45;
  margin-bottom: 32px;
`;
export const Select = styled.select`
  padding: 9px 12px;
  margin-right: 8px;
`;
export const ResetButton = styled.button`
  display: flex;
`;
export const ResetImg = styled.img`
  width: 16px;
  height: 16px;
  margin: 0 12px 0 16px;
`;
export const Reset = styled.div`
  color: #2196f3;
  font-size: 12px;
  font-weight: 400;
`;
export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1130px;
`;
export const Option = styled.option``;
export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ToggleContainer = styled.div``;
export const FirstFilter = styled.div`
  position: relative;
  margin-right: 8px;
`;
export const SecondFilter = styled.div`
  position: relative;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 8px 12px;
  position: relative;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 16px 12px;
  width: 130px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(0%, 100%);
`;
export const Li = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }
`;
