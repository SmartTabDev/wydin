import React, { FC, useState, Fragment } from 'react';
import Image from 'next/image';

import { IListItem, ListProps } from './types';
import { Checkbox } from '../Checkbox';
import { BottomNavigation } from '../BottomNavigation';

export const List: FC<ListProps> = (props) => {
  const { title, items, onClickRow, onChangeActivityClass, showCheckbox, className, hideSubList } = props;

  const [openedRow, setOpenedRow] = useState('');
  const [openedClasses, setOpenedClasses] = useState<IListItem[]>([]);

  const handleClickRow = (row: IListItem) => {
    onClickRow && onClickRow(row);
    row.label === openedRow ? setOpenedRow('') : setOpenedRow(row.label);
  };

  const handleOpenClassModal = (row: IListItem) => {
    setOpenedClasses(row.subList || []);
  };

  const handleCloseClassModal = () => {
    onChangeActivityClass && onChangeActivityClass(openedClasses);
    setOpenedClasses([]);
  };

  const handleAddClass = (updatedRow: IListItem) => {
    setOpenedClasses(prev => prev.map((row) => row.label === updatedRow.label ? ({
      ...row,
      selected: !row.selected,
    }) : row));
  };

  const renderRow = (row: IListItem, onClick: (row: IListItem) => void, renderCheckbox?: boolean) => (
    <div
      onClick={() => onClick(row)}
      className={'flex items-center justify-between py-[5px] sm:py-[6px] mb-[3px] hover:bg-[#71DE361A] cursor-pointer' + (openedRow === row.label ? ' bg-[#71DE361A]' : '')}
    >
      <p className={'text-[12px] leading-[14px] sm:text-[16px] sm:leading-[19px] font-normal flex-1 mr-2 break-all'}>
        {row.label}
      </p>
      {row.selected && !renderCheckbox && (
        <Image className={'w-[12px] h-[9px] sm:w-[15px] sm:h-[11.25px]'} width={15} height={11.25} src={'/assets/images/check-icon.svg'} alt={'check icon'} />
      )}
      {renderCheckbox && (
        <Checkbox checked={row.selected} onChange={() => {}} />
      )}
    </div>
  );

  return (
    <div className={'flex-1 ' + className}>
      {!!title && (
        <div className={'pb-[10px] border-b-[0.5px] mb-[11px] border-[#101010]'}>
          <p className={'title text-[16px] sm:text-[24px]'}>{title}</p>
        </div>
      )}
      <div className={'sm:pt-[9px] sm:pb-[2px]'}>
        {items.map((row, index) => (
          <div key={`${title}-list-item-${index}`}>
            {renderRow(row, handleClickRow, showCheckbox)}
            {!!row.subList && !hideSubList && (
              <List
                className={'block sm:hidden transition duration-150 ease-in-out transition-all pl-[20px]' + (openedRow === row.label ? ' max-h-[400px]' : ' overflow-hidden max-h-0')}
                items={row.subList}
                hideSubList
                onClickRow={handleOpenClassModal}
              />
            )}
          </div>
        ))}
        {!items.length && (
          <p>{'Nessun oggetto'}</p>
        )}
      </div>
      <BottomNavigation isOpened={!!openedClasses.length} onClose={handleCloseClassModal}>
        {openedClasses.map((row, index) => (
          <Fragment key={`modal-list-item-${index}`}>
            {renderRow(row, handleAddClass, true)}
          </Fragment>
        ))}
      </BottomNavigation>
    </div>
  );
};
