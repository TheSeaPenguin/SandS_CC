import { InfoOutlined } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import * as React from 'react';

export interface InfoBoxProps {
  information: string;
}

export function InfoBox(props: InfoBoxProps) {
  const { information } = props;
  return (
    <Stack
      direction={'row'}
      sx={{
        padding: '0.5em',
        marginBottom: '1em',
        border: 2,
        borderColor: 'primary.dark',
        backgroundColor: 'primary.light'
      }}
    >
      <InfoOutlined color="primary" sx={{ paddingRight: '0.3em' }} />
      <Typography fontFamily={'arial'} fontSize={'1em'}>
        {information}
      </Typography>
    </Stack>
  );
}
