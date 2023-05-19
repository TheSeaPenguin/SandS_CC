import { Tabs, Tab, Paper } from '@mui/material';
import { useState } from 'react';

export interface TabbedBoxProps {
  tabTitles: string[];
}

export function TabbedBox(props: TabbedBoxProps) {
  const { tabTitles } = props;
  const [currentTab, setCurrentTab] = useState(0);
  const tabScale = 1 / 7;
  const tabColors = [
    '#FD8A8A',
    '#9EA1D4',
    '#CEEDC7',
    '#86C8BC',
    '#FFD4B2',
    '#F1F7B5',
    '#FFF6BD'
  ];
  return (
    <Paper>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        indicatorColor={'primary'}
        sx={{ border: 1 }}
      >
        {tabTitles.map((title, index) => {
          return (
            <Tab
              label={title}
              wrapped={true}
              sx={{ backgroundColor: tabColors[index], width: tabScale }}
            />
          );
        })}
      </Tabs>
    </Paper>
  );

  function handleChange(event: React.SyntheticEvent, newTabNumber: number) {
    setCurrentTab(newTabNumber);
  }
}
