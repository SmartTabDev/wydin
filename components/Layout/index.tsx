import React, { FC } from 'react';

import { LayoutProps } from './types';
import { Header } from './Header';

export const Layout: FC<LayoutProps> = (props) => {
  const { children, title } = props;

  return (
    <div className={'w-screen h-screen pt-[50px] sm:pt-[90px] bg-white sm:bg-transparent'}>
      <Header />
      <div className={`h-[calc(100vh-50px)] sm:h-[calc(100vh-90px)] overflow-y-auto px-[16px] py-[20px] md:px-[30px] lg:px-[60px] sm:py-[30px]`}>
        {!!title && (
          <h1 className={'title text-[28px] sm:text-[40px]'}>{title}</h1>
        )}
        <div className={'mt-[30px] max-w-[84rem] sm:px-[20px] lg:px-[40px] sm:py-[40px] sm:bg-white sm:border border-[#CCCCCC4D] rounded-[10px] sm:drop-shadow-sm'}>
          {children}
        </div>
      </div>
    </div>
  );
};
