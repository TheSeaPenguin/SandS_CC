import { Stack, TextField } from '@mui/material';
import * as React from 'react';

export interface NameCpProps {}

export function NameCp(props: NameCpProps) {
  return (
    <Stack direction={'row'}>
      <TextField
        id="CharacterName"
        variant="filled"
        label="Name"
        defaultValue={'Unnamed'}
        sx={{ backgroundColor: 'primary.light' }}
      />
      <TextField
        id="CharacterCP"
        variant="filled"
        label="CP"
        defaultValue={25}
        sx={{ backgroundColor: 'primary.light' }}
      />
    </Stack>
  );
}
