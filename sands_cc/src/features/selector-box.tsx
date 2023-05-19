import { TabbedBox } from '../components/tabbed-box';

export interface SelectorBoxProps {}

export function SelectorBox(props: SelectorBoxProps) {
  const titles = [
    'Attribute Assignment',
    'Race',
    'Archetype',
    'Background',
    'Skills',
    'Talents',
    'Equipment'
  ];
  return <TabbedBox tabTitles={titles} />;
}
