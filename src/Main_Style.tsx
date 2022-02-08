import styled from 'styled-components';
import media from 'styled-media-query';

export const ContentsWrap = styled.section`
  width: 1130px;

  ${media.lessThan('large')`
  width:748px;
  `}
  ${media.lessThan('medium')`
  width:366px;
  `}
  ${media.lessThan('small')`
  width:322px;
  `}
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  ${media.lessThan('small')`
  justify-content: flex-start;
  `}
`;
