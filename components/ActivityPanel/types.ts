import { Dispatch, SetStateAction } from 'react';

export type IActivity = {
  name: string;
  divisions: IDivision[];
};

type IDivision = {
  name: string;
  classes: string[];
};

export type ActivityPanelProps = {
  value: string[];
  onChange: Dispatch<SetStateAction<string[]>>;
  className?: string;
};
