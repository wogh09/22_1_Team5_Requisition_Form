import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  ${media.lessThan('medium')`
  grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan('small')`
  grid-template-columns: repeat(1, 1fr);
  `}
`;

export const Empty = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1130px;
  height: 100px;
  background-color: #fff;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  color: #939fa5;
  font-size: 14px;
  font-family: 'Noto Sans KR Reagular';
`;
