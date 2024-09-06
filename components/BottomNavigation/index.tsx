import React, { FC } from 'react';

import { BottomNavigationProps } from './types';
import { Button } from '../Button';

export const BottomNavigation: FC<BottomNavigationProps> = (props) => {
  const { isOpened, onClose, children } = props;

  return (
    <div className={'sm:hidden fixed w-screen h-screen left-0 top-0 bg-[#00000080]' + (isOpened ? ' z-50' : ' -z-50')}>
      <div className={'absolute left-0 bottom-0 rounded-t-[10px] w-full bg-white px-[16px] pt-[25px] pb-[27px] z-10 transition duration-500 ease-in-out transition-all' + (isOpened ? ' translate-y-0 opacity-100' : ' translate-y-full opacity-0')}>
        {children}
        <Button className={'w-full mt-[19px]'} label={'Continuer'} onClick={onClose} />
      </div>
    </div>
  );
};
