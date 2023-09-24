import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { ReactNode } from 'react';

export interface AccordionContainerProps {
  title: string;
  defaultOpen?: boolean;
  children?: ReactNode;
}

export function AccordionContainer(props: AccordionContainerProps) {
  const { title, defaultOpen, children } = props;
  return (
    <Accordion disableGutters={true} defaultExpanded={defaultOpen}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={{ backgroundColor: 'primary.light' }}
      >
        <Typography sx={{ fontSize: '0.8em' }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: '#edf2f4', padding: 0 }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}
