import { Tabs, Tab } from "@mui/material";
import { useState } from "react";

export interface TabbedBoxProps {}

function handleChange() {}
export function TabbedBox(props: TabbedBoxProps) {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <Tabs value={currentTab} onChange={handleChange}>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  );
}
