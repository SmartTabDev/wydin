import React, { FC } from 'react';

import { CheckboxProps } from './types';

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { checked, onChange } = props;

  return (
    <div className={'h-[14px] w-[14px] sm:w-[19px] sm:h-[19px]'}>
      <input
        className="relative !text-red float-left m-0 h-[14px] w-[14px] sm:w-[19px] sm:h-[19px] appearance-none rounded-[4px] border-[0.125rem] border-solid border-[#7070704D] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id="checkboxDefault"
      />
    </div>
  );
};
