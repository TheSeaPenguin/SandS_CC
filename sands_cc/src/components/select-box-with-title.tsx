import {
  Button,
  ButtonGroup,
  MenuItem,
  MenuList,
  Select,
  SelectChangeEvent,
  Stack,
  Typography
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useStore } from '../hooks/useStore';
import { InfoOutlined } from '@mui/icons-material';
import { InfoTooltip } from './info-tooltip';
import { TextBoxWithTitle } from './text-box-with-title';

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
  information: string;
  improvementPointSetter: (changeToMake: string) => void;
  spentImprovementPoints: number;
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
    height,
    information,
    improvementPointSetter,
    spentImprovementPoints
  } = props;

  const [selectedValue, setSelectedValue] = useState<string>('-1');
  const [modValue, setModValue] = useState<number>(0);

  const updateAttributeState = useStore((state) => state.updateAttribute);
  const lowerCaseSelectBoxId = id.split('StatBox')[0].toLowerCase();
  let totalValue = 0;
  const selectedValueOption = Number(
    options.at(Number(selectedValue) + 1)?.displayValue
  );

  if (selectedValue !== '-1') {
    totalValue = selectedValueOption + modValue;
  } else {
    totalValue = modValue;
  }

  useEffect(() => {
    updateAttributeState(lowerCaseSelectBoxId, totalValue);
  }, [selectedValue, modValue]);

  const improvementPoints = useStore((state) => state.improvementPoints);

  function handleSelectChange(event: SelectChangeEvent) {
    const value = String(event.target.value);

    const numValue = Number(value);
    const prevValue = Number(selectedValue);

    setSelectedValue(value);

    if (optionsAlreadySelected.includes(prevValue)) {
      const index = optionsAlreadySelected.indexOf(prevValue);
      const copyToSplice = [...optionsAlreadySelected];
      if (numValue !== -1) {
        copyToSplice.splice(index, 1, numValue);
      } else {
        copyToSplice.splice(index, 1);
      }
      optionSelectedSetter(copyToSplice);
    } else if (numValue !== -1) {
      optionSelectedSetter([...optionsAlreadySelected, numValue]);
    }
  }

  function handleIncrement() {
    if (spentImprovementPoints < improvementPoints) {
      improvementPointSetter('increment');
      setModValue(modValue + 1);
    }
  }

  function handleDecrement() {
    if (spentImprovementPoints > 0 && modValue > 0) {
      improvementPointSetter('decrement');
      setModValue(modValue - 1);
    }
  }

  const alteredRemovalArray = optionsAlreadySelected.filter(
    (x) => x !== Number(selectedValue)
  );

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
      <InfoTooltip information={information} direction="right">
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
      </InfoTooltip>
      <Select
        id={id}
        value={selectedValue}
        onChange={handleSelectChange}
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
      <ButtonGroup
        variant="contained"
        size="small"
        disableElevation={true}
        fullWidth={true}
        sx={{
          '& .MuiButtonBase-root': {
            borderRadius: '0px'
          }
        }}
      >
        <Button onClick={handleDecrement}>-</Button>
        <Button onClick={handleIncrement}>+</Button>
      </ButtonGroup>
      {/* Box displaying modifiers */}
      <TextBoxWithTitle
        id={id + 'Modifer'}
        title="Modifier:"
        value={'+ ' + modValue}
        vertical={true}
        borderThickness={0}
      />
      {/* Box displaying total */}
      <TextBoxWithTitle
        id={id + 'Total'}
        title="Total:"
        value={totalValue}
        vertical={true}
        borderThickness={0}
      />
    </Stack>
  );
}
