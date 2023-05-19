import { SideBox } from '../components';
import { Stack, TextField } from '@mui/material';

export interface CharacterSummaryProps {}

export function CharacterSummary(props: CharacterSummaryProps) {
  return (
    <SideBox boxTitle="Character Summary">
      <Stack>
        <TextField
          id="text-hp"
          variant="filled"
          sx={{ backgroundColor: 'secondary.main' }}
        />
      </Stack>
    </SideBox>
  );
}
