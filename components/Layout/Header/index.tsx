import React, { FC } from 'react';
import Image from 'next/image';

export const Header: FC = () => (
  <div className={`fixed z-40 flex items-center justify-center sm:justify-start w-full left-0 top-0 h-[50px] sm:h-[90px] bg-[#051C2C] px-[60px]`}>
    <Image className={'w-[62.5px] h-[21.5px] sm:w-[108px] sm:h-[39px] mt-0 sm:mt-[5px]'} src={'/assets/images/logo.svg'} width={108} height={39} alt={'logo'} />
  </div>
);
