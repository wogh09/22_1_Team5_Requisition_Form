import * as S from './Cardbox_Style';

export default function Cardbox({ requestsList }) {
  console.log('test>>', requestsList);
  return (
    <S.Wrap>
      <S.TextBox>
        <S.Consulting>
          <S.Header>{requestsList.title}</S.Header>
          <S.ConsultingButton>{requestsList.status}</S.ConsultingButton>
        </S.Consulting>
        <S.Client>{requestsList.client}</S.Client>
        <S.DueDate>{requestsList.due}까지 납기</S.DueDate>
        <S.CenterLine />
        <S.RequestDetails>
          <S.RequestType>
            <S.Drawing>도면개수</S.Drawing>
            <S.TotalCount>총 수량</S.TotalCount>
            <S.Process>가공방식</S.Process>
            <S.Material>재료</S.Material>
          </S.RequestType>
          <S.Details>
            <S.Number>{requestsList.count}개</S.Number>
            <S.TotalNumber>{requestsList.amount}개</S.TotalNumber>
            <S.ProcessType>{requestsList.method.toString()}</S.ProcessType>
            <S.MaterialType>{requestsList.material.toString()}</S.MaterialType>
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
