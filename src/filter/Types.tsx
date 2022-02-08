export interface FilterPropsType {
  changeCounseling?(): void;
  toggleState?: boolean;
}
export interface FilterPropsType2 extends FilterPropsType {
  changeSelectState(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  changeFirestFilterState(e: React.ChangeEvent<HTMLInputElement>): void;
  changeSecondFilterState(
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ): void;
  resetFilter(): void;
  selectState: boolean[];
  firestFilterState: boolean[];
  secondFilterState: boolean[];
  firestFilterValue: string;
  secondFilterValue: string[];
}

export interface filterDataType {
  id: string;
  name: string;
}
