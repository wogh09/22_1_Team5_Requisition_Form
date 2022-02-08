import * as S from './Toggle_style';
import { FilterPropsType } from '../filter/Types';

export function ToggleButton(props: FilterPropsType) {
  const { changeCounseling, toggleState } = props;
  return (
    <S.CheckBoxWrapper>
      <S.CheckBox
        id="filterToggle"
        type="checkbox"
        onChange={changeCounseling}
        checked={toggleState}
      />
      <S.CheckBoxLabel htmlFor="filterToggle" />
    </S.CheckBoxWrapper>
  );
}
