import {
  MenuItem,
  MenuList,
  Select,
  SelectChangeEvent,
  Stack,
  Typography
} from '@mui/material';
import { useState } from 'react';

export interface SelectBoxWithTitleProps {
  id: string;
  colour?: string;
  title: string;
  options: { id: number; displayValue: string }[];
  optionsAlreadySelected: number[];
  optionSelectedSetter: React.Dispatch<React.SetStateAction<number[]>>;
  vertical?: boolean;
  width?: number | string;
  height?: number | string;
}

export function SelectBoxWithTitle(props: SelectBoxWithTitleProps) {
  const {
    id,
    colour,
    title,
    options,
    optionsAlreadySelected,
    optionSelectedSetter,
    vertical,
    width,
    height
  } = props;

  const [selectedValue, setSelectedValue] = useState('-1');

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setSelectedValue(value);
    optionSelectedSetter([...optionsAlreadySelected, Number(value)]);
  };

  const alteredRemovalArray = optionsAlreadySelected.filter(
    (x) => x !== Number(selectedValue)
  );
  console.log('selectedValue', selectedValue);
  console.log('alteredRemovalArray', alteredRemovalArray);

  return (
    <Stack
      direction={vertical ? 'column' : 'row'}
      justifyContent={'center'}
      sx={{
        width: width,
        border: 1,
        borderColor: 'secondary.dark',
        ...(!vertical && {
          padding: '0.3em',
          backgroundColor: [colour]
        })
      }}
    >
      <Typography
        align="center"
        sx={{
          height: height,
          paddingRight: '0.2em',
          fontSize: '1rem',
          ...(vertical && { backgroundColor: [colour] })
        }}
      >
        {title}
      </Typography>
      <Select
        id={id}
        value={selectedValue}
        onChange={handleChange}
        MenuProps={{ MenuListProps: { sx: { backgroundColor: 'white' } } }}
      >
        {options
          .filter((x) => !alteredRemovalArray.includes(x.id))
          .map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.displayValue}
            </MenuItem>
          ))}
      </Select>
    </Stack>
  );
}
