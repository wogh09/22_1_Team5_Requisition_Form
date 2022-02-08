import React from 'react';

export interface FilterPropsType11 {
  changeCounseling(): void;
  toggleState: boolean;
}
export interface FilterPropsType4 {
  firestFilterValue: string;
  secondFilterValue: string[];
}
export interface FilterPropsType extends FilterPropsType4 {
  changeCounseling(): void;
  toggleState: boolean;
}
export interface FilterPropsType3 extends FilterPropsType {
  setFirestFilterValue: React.Dispatch<React.SetStateAction<string>>;
  setSecondFilterValue: React.Dispatch<React.SetStateAction<string[]>>;
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
  // firestFilterValue: string;
  // secondFilterValue: string[];
}

export interface filterDataType {
  id: string;
  name: string;
}
