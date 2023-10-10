import { Stack } from '@mui/material';
import { TextBoxWithTitle } from '../../components';
import { useStore } from '../../hooks/useStore';

export interface ResourcesProps {}

export function Resources(props: ResourcesProps) {
  const { earth, water, fire, air } = useStore((state) => state.attributes);
  const characterImprovementpoints = useStore(
    (state) => state.improvementPoints
  );

  const hp = 14 + earth * 2 + characterImprovementpoints * 2;
  const energy = (fire > air ? fire : air) + 1 + characterImprovementpoints;
  const destiny = 1 + characterImprovementpoints;

  return (
    <Stack direction={'row'}>
      <TextBoxWithTitle
        id="text-hp"
        title="HP:"
        value={hp}
        colour="stats.hp"
        width={1 / 3}
      />
      <TextBoxWithTitle
        id="text-energy"
        title="Energy:"
        value={energy}
        colour="stats.energy"
        width={1 / 3}
      />
      <TextBoxWithTitle
        id="text-destiny"
        title="Destiny:"
        value={destiny}
        colour="stats.destiny"
        width={1 / 3}
      />
    </Stack>
  );
}
