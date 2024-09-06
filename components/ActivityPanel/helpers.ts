import { IActivity } from './types';

export const activityListData: IActivity[] = [
  {
    name: 'Agriculture, sylviculture et pêche',
    divisions: [
      {
        name: 'divisione agricoltura 1',
        classes: [
          'classe divisione agricoltura 1-1',
          'classe divisione agricoltura 1-2',
          'classe divisione agricoltura 1-3',
        ],
      },
      {
        name: 'divisione agricoltura 2',
        classes: [
          'classe divisione agricoltura 2-1',
          'classe divisione agricoltura 2-2',
          'classe divisione agricoltura 2-3',
        ],
      },
    ],
  },
  {
    name: 'Produits des industries extractives',
    divisions: [
      {
        name: 'Divisione prodotti per l\'industria estrattiva 1',
        classes: [
          'classe divisione prodotti per l\'industria estrattiva 1-1',
          'classe divisione prodotti per l\'industria estrattiva 1-2',
          'classe divisione prodotti per l\'industria estrattiva 1-3',
        ],
      },
      {
        name: 'Divisione prodotti per l\'industria estrattiva 2',
        classes: [
          'classe divisione prodotti per l\'industria estrattiva 2-1',
        ],
      },
    ],
  },
  { name: 'Produits manufacturés', divisions: [] },
  { name: 'Électricité, gaz, eau et déchets', divisions: [] },
  { name: 'Constructions et travaux', divisions: [] },
  { name: 'Commerce, réparation auto et moto', divisions: [] },
  { name: 'Services de transports, hébergement et restauration', divisions: [] },
  { name: 'Services d\'information', divisions: [] },
  {
    name: 'Services informatiques et télécommunication',
    divisions: [
      {
        name: 'Programmation et conseil',
        classes: [
          'Services de programmation informatique',
          'Services de conseil en informatique',
          'Services de gestion d\'installations informatiques',
          'Design UX et autres services informatiques',
        ],
      },
      { name: 'Édition de logiciels', classes: [] },
      { name: 'Services de télécommunications', classes: [] },
      { name: 'Clouds et portails internet', classes: [] },
    ],
  },
  { name: 'Services financiers et assurances, services immobiliers', divisions: [] },
  { name: 'Services aux entreprises', divisions: [] },
  { name: 'Services spécialisés, techniques et opérationnels', divisions: [] },
  { name: 'Services de location et licences', divisions: [] },
  { name: 'Services de l\'enseignement, santé et publiques', divisions: [] },
  { name: 'Services artistiques, récréatifs, associatifs et autres', divisions: [] },
];
