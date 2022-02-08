import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  ${media.lessThan('small')`
  grid-template-columns: repeat(1, 1fr);
  `}
`;
