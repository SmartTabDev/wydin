export type IListItem = {
  label: string;
  selected: boolean;
  subList?: IListItem[];
};

export type ListProps = {
  title?: string;
  items: IListItem[];
  showCheckbox?: boolean;
  onClickRow?(row: IListItem): void;
  onChangeActivityClass?(rows: IListItem[]): void;
  className?: string;
  hideSubList?: boolean;
};
