export interface dataType {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: 100;
  method: string[];
  material: string[];
  status: string;
}
export interface togglePropsType {
  changeCounseling: () => void;
  toggleState: boolean;
}
