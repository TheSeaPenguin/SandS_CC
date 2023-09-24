import { TabbedBox } from '../components/tabbed-box';
import { AttributesTab } from './tabs';

export interface SelectorBoxTab {
  title: string;
  content: JSX.Element;
  colour: string;
}

export function SelectorBox() {
  const titles = [
    'Attribute Assignment',
    'Race',
    'Archetype',
    'Background',
    'Skills',
    'Talents',
    'Equipment'
  ];

  const tabColors = [
    '#FD8A8A',
    '#9EA1D4',
    '#CEEDC7',
    '#86C8BC',
    '#FFD4B2',
    '#F1F7B5',
    '#FFF6BD'
  ];

  const tabs: SelectorBoxTab[] = [
    {
      title: 'Attribute Assignment',
      content: <AttributesTab />,
      colour: '#FD8A8A'
    }
    // {
    //   title: 'Race',
    //   content: <div>This is a random div tag</div>,
    //   colour: '#9EA1D4'
    // },
    // {
    //   title: 'Archetype',
    //   content: <div>This is a random div tag</div>,
    //   colour: '#CEEDC7'
    // },
    // {
    //   title: 'Background',
    //   content: <div>This is a random div tag</div>,
    //   colour: '#86C8BC'
    // },
    // {
    //   title: 'Skills',
    //   content: <div>This is a random div tag</div>,
    //   colour: '#FFD4B2'
    // },
    // {
    //   title: 'Talents',
    //   content: <div>This is a random div tag</div>,
    //   colour: '#F1F7B5'
    // },
    // {
    //   title: 'Equipment',
    //   content: <div>This is a random div tag</div>,
    //   colour: '#FFF6BD'
    // }
  ];

  return <TabbedBox tabs={tabs} />;
}
