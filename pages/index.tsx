import React, { FC, useState } from 'react';

import { Layout } from '../components/Layout';
import { ActivityPanel } from '../components/ActivityPanel';

const HomePage: FC = () => {
  const [activities, setActivities] = useState<string[]>([]);

  return (
    <Layout title={'Création de compte'}>
      <h2 className={'font-bold text-[20px] leading-[22px] sm:text-[28px] sm:leading-[34px]'}>{'Sélectionnez la ou les activités principales de votre entreprise'}</h2>
      <ActivityPanel className={'mt-[20px] sm:mt-[30px]'} value={activities} onChange={setActivities} />
    </Layout>
  );
};

export default HomePage;
