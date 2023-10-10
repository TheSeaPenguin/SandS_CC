import { Stack, TextField } from '@mui/material';
import * as React from 'react';
import { useStore } from '../hooks/useStore';

export interface NameCpProps {}

export function NameCp(props: NameCpProps) {
  const name = useStore((state) => state.name);
  const updateName = useStore((state) => state.updateName);

  const cp = useStore((state) => state.cp);
  const updateCp = useStore((state) => state.updateCp);

  const updateImprovementPoints = useStore(
    (state) => state.updateImprovementPoints
  );

  const updateSkillBonus = useStore((state) => state.updateSkillBonus);

  function nameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const regex = new RegExp(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/);
    if (value.length <= 25 && !regex.test(value)) {
      updateName(value);
    }
  }

  function cpChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const numCp = Number(value);
    if (value.length < 4 && value != '' && !isNaN(numCp)) {
      updateCp(numCp);
      updateImprovementPoints(calculateImprovementPoints(numCp));
      updateSkillBonus(Number(value[0]));
    }
  }
  return (
    <Stack direction={'row'}>
      <TextField
        id="text-name"
        variant="filled"
        label="Name"
        value={name}
        onChange={nameChange}
        sx={{ backgroundColor: 'primary.light' }}
      />
      <TextField
        id="text-cp"
        variant="filled"
        label="CP"
        value={cp}
        onChange={cpChange}
        sx={{ backgroundColor: 'primary.light' }}
      />
    </Stack>
  );

  function calculateImprovementPoints(cpValue: number): number {
    if (cpValue < 5) {
      return 0;
    } else {
      const remaining = cpValue - 5;
      const improvementPoints = Math.floor(remaining / 10) + 1;
      return improvementPoints;
    }
  }
}
