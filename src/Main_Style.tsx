import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  ${media.lessThan('small')`
  justify-content: flex-start;
  margin-left:20px;
  `}
`;
