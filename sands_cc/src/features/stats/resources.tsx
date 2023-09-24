import { Stack } from '@mui/material';
import { TextBoxWithTitle } from '../../components';

export interface ResourcesProps {}

export function Resources(props: ResourcesProps) {
  return (
    <Stack direction={'row'}>
      <TextBoxWithTitle
        id="text-hp"
        title="HP:"
        value="0"
        colour="stats.hp"
        width={1 / 3}
      />
      <TextBoxWithTitle
        id="text-energy"
        title="Energy:"
        value="0"
        colour="stats.energy"
        width={1 / 3}
      />
      <TextBoxWithTitle
        id="text-destiny"
        title="Destiny:"
        value="0"
        colour="stats.destiny"
        width={1 / 3}
      />
    </Stack>
  );
}
