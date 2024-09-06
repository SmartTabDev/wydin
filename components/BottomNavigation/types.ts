import { ReactNode } from 'react';

export type BottomNavigationProps = {
  children: ReactNode;
  isOpened: boolean;
  onClose(): void;
};
