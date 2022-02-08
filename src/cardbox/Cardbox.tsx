import * as S from './Cardbox_Style';

export default function Cardbox(props) {
  const { List } = props;
  return (
    <S.Wrap>
      <S.TextBox>
        <S.Consulting>
          <S.Header>{List.title}</S.Header>
          <S.ConsultingButton>{List.status}</S.ConsultingButton>
        </S.Consulting>
        <S.Client>{List.client}</S.Client>
        <S.DueDate>{List.due}까지 납기</S.DueDate>
        <S.CenterLine />
        <S.RequestDetails>
          <S.RequestType>
            <S.Drawing>도면개수</S.Drawing>
            <S.TotalCount>총 수량</S.TotalCount>
            <S.Process>가공방식</S.Process>
            <S.Material>재료</S.Material>
          </S.RequestType>
          <S.Details>
            <S.Number>{List.count}개</S.Number>
            <S.TotalNumber>{List.amount}개</S.TotalNumber>
            <S.ProcessType>{List.method.toString()}</S.ProcessType>
            <S.MaterialType>{List.material.toString()}</S.MaterialType>
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
