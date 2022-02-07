import * as S from './Cardbox_Style';

export default function Cardbox() {
  return (
    <S.Wrap>
      <S.TextBox>
        <S.Consulting>
          <S.Header>자동차 시제품 제작</S.Header>
          <S.ConsultingButton>상담중</S.ConsultingButton>
        </S.Consulting>
        <S.Client>A 고객사</S.Client>
        <S.DueDate>2020.12.14까지 납기</S.DueDate>
        <S.CenterLine />
        <S.RequestDetails>
          <S.RequestType>
            <S.Drawing>도면개수</S.Drawing>
            <S.TotalCount>총 수량</S.TotalCount>
            <S.Process>가공방식</S.Process>
            <S.Material>재료</S.Material>
          </S.RequestType>
          <S.Details>
            <S.Number>2개</S.Number>
            <S.TotalNumber>100개</S.TotalNumber>
            <S.ProcessType>밀링, 선반</S.ProcessType>
            <S.MaterialType>알루미늄</S.MaterialType>
          </S.Details>
        </S.RequestDetails>
        <S.Buttons>
          <S.RequestButton>요청 내역 보기</S.RequestButton>
          <S.ChatButton>채팅하기</S.ChatButton>
        </S.Buttons>
      </S.TextBox>
    </S.Wrap>
  );
}
