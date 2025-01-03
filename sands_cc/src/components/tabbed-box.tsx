import { TabContext, TabPanel } from '@mui/lab';
import { Tabs, Tab, Paper } from '@mui/material';
import { useState } from 'react';
import { SelectorBoxTab } from '../features/selector-box';

export interface TabbedBoxProps {
  tabs: SelectorBoxTab[];
}

export function TabbedBox(props: TabbedBoxProps) {
  const { tabs } = props;
  const [currentTab, setCurrentTab] = useState(0);
  const tabScale = 1 / 7;
  return (
    <Paper>
      <TabContext value={tabs[currentTab].title}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          indicatorColor={'primary'}
          sx={{ border: 1 }}
        >
          {tabs.map((tab, index) => {
            return (
              <Tab
                label={tab.title}
                key={index}
                wrapped={true}
                sx={{
                  backgroundColor: tab.colour,
                  width: tabScale,
                  paddingX: '4vw'
                }}
              />
            );
          })}
        </Tabs>
        {tabs.map((tab, index) => {
          return (
            <TabPanel
              key={index}
              value={tab.title}
              sx={{
                backgroundColor: 'secondary.main',
                padding: '1vw'
              }}
            >
              {tab.content}
            </TabPanel>
          );
        })}
      </TabContext>
    </Paper>
  );

  function handleChange(event: React.SyntheticEvent, newTabNumber: number) {
    setCurrentTab(newTabNumber);
  }
}
