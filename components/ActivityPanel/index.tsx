import React, { FC, useMemo, useState } from 'react';

import { ActivityPanelProps } from './types';
import { activityListData } from './helpers';
import { List } from '../List';
import { IListItem } from '../List/types';

export const ActivityPanel: FC<ActivityPanelProps> = (props) => {
  const { value, onChange, className } = props;

  const [openedActivity, setOpenedActivity] = useState('');
  const [openedDivision, setOpenedDivision] = useState('');

  const activityListItems: IListItem[] = useMemo(() => activityListData.map(({ name, divisions }) => ({
    label: name,
    selected: !!divisions.find(({ classes }) => !!classes.find((classType) => value.includes(classType))),
    subList: divisions.map(({ name, classes }) => ({
      label: name,
      selected: !!classes.find((classType) => value.includes(classType)),
      subList: classes.map((className) => ({
        label: className,
        selected: value.includes(className),
      })),
    })),
  })), [value]);

  const divisionListItems: IListItem[] = useMemo(() => (activityListData.find(({ name }) => name === openedActivity)?.divisions || []).map(({ name, classes }) => ({
    label: name,
    selected: !!classes.find((classType) => value.includes(classType)),
  })), [openedActivity, value]);

  const classListItems: IListItem[] = useMemo(() => (activityListData.find(({ name }) => name === openedActivity)?.divisions?.find(({ name }) => name === openedDivision)?.classes || []).map((className) => ({
    label: className,
    selected: value.includes(className),
  })), [openedActivity, openedDivision, value]);

  const handleAddClass = (row: IListItem) => {
    const { label: className } = row;

    if (value.includes(className)) {
      onChange(prev => prev.filter((activityClass) => activityClass !== className));
    } else {
      onChange(prev => [...prev, className]);
    }
  };

  const handleAddClasses = (rows: IListItem[]) => {
    onChange(prev => {
      let classList = prev;

      rows.map(({ label, selected }) => {
        if (!classList.includes(label) && selected) {
          classList = [...classList, label];
        } else if (classList.includes(label) && !selected) {
          classList = classList.filter((className) => className !== label);
        }
      });

      return classList;
    });
  };

  return (
    <div className={'flex ' + className}>
      <List title={'Activité'} items={activityListItems} onClickRow={(row) => setOpenedActivity(row.label)} onChangeActivityClass={handleAddClasses} />
      <List title={'Division'} className={'hidden sm:block sm:ml-[20px]'} items={divisionListItems} onClickRow={(row) => setOpenedDivision(row.label)} />
      <List title={'Classe'} className={'hidden sm:block sm:ml-[20px]'} items={classListItems} onClickRow={handleAddClass} showCheckbox />
    </div>
  );
};
