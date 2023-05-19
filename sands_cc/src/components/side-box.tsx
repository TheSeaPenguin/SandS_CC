import { Box, Paper, Typography } from '@mui/material';
import { ReactNode } from 'react';

export interface SideBoxProps {
  boxTitle: string;
  children?: ReactNode;
}

export function SideBox(props: SideBoxProps) {
  const { boxTitle, children } = props;
  return (
    <Paper>
      <Box sx={{ bgcolor: 'primary.main' }}>
        <Typography
          variant="h6"
          sx={{ paddingY: '0.2em', paddingLeft: '0.5em' }}
        >
          {boxTitle}
        </Typography>
      </Box>
      {children}
    </Paper>
  );
}
