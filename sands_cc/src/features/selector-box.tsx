import { TabbedBox } from '../components/tabbed-box';
import { AttributesTab } from './tabs';
import { RacesTab } from './tabs/races-tab';

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
    },
    {
      title: 'Race',
      content: <RacesTab />,
      colour: '#9EA1D4'
    }
    // {
    //   title: 'Archetype',
    //   content: <div>Activate tab in Selector-Box</div>,
    //   colour: '#CEEDC7'
    // },
    // {
    //   title: 'Background',
    //   content: <div>Activate tab in Selector-Box</div>,
    //   colour: '#86C8BC'
    // },
    // {
    //   title: 'Skills',
    //   content: <div>Activate tab in Selector-Box</div>,
    //   colour: '#FFD4B2'
    // },
    // {
    //   title: 'Talents',
    //   content: <div>Activate tab in Selector-Box</div>,
    //   colour: '#F1F7B5'
    // },
    // {
    //   title: 'Equipment',
    //   content: <div>Activate tab in Selector-Box</div>,
    //   colour: '#FFF6BD'
    // }
  ];

  return <TabbedBox tabs={tabs} />;
}
