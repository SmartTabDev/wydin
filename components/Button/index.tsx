import React, { FC } from 'react';

import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = (props) => {
  const { label, onClick, className } = props;

  return (
    <button className={'h-[40px] text-[14px] leading-[17px] rounded-full border border-[#777777] font-medium outline-none focus:outline-none ' + className} onClick={onClick}>{label}</button>
  );
};
