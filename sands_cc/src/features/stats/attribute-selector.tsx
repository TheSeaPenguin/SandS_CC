import { Stack } from '@mui/material';
import { SelectBoxWithTitle } from '../../components';
import { useState } from 'react';

export interface AttributeSelectorProps {
  vertical: boolean;
  width?: number | string;
  height?: number | string;
  spacing: number;
}

export function AttributeSelector(props: AttributeSelectorProps) {
  const { vertical, width, height, spacing } = props;

  const [attributeValuesSelected, setAttributeValuesSelected] = useState<
    number[]
  >([]);
  const attributeValues = [
    { id: -1, displayValue: '-' },
    { id: 0, displayValue: '0' },
    { id: 1, displayValue: '1' },
    { id: 2, displayValue: '1' },
    { id: 3, displayValue: '2' }
  ];

  console.log(attributeValuesSelected);
  return (
    <Stack direction={vertical ? 'column' : 'row'} spacing={spacing}>
      <SelectBoxWithTitle
        id="EarthStatBox"
        title="Earth:"
        options={attributeValues}
        optionsAlreadySelected={attributeValuesSelected}
        optionSelectedSetter={setAttributeValuesSelected}
        colour="stats.earth"
        vertical={true}
        width={width}
        height={height}
      />
      <SelectBoxWithTitle
        id="WaterStatBox"
        title="Water:"
        options={attributeValues}
        optionsAlreadySelected={attributeValuesSelected}
        optionSelectedSetter={setAttributeValuesSelected}
        colour="stats.water"
        vertical={true}
        width={width}
        height={height}
      />
      <SelectBoxWithTitle
        id="FireStatBox"
        title="Fire:"
        options={attributeValues}
        optionsAlreadySelected={attributeValuesSelected}
        optionSelectedSetter={setAttributeValuesSelected}
        colour="stats.fire"
        vertical={true}
        width={width}
        height={height}
      />
      <SelectBoxWithTitle
        id="AirStatBox:"
        title="Air:"
        options={attributeValues}
        optionsAlreadySelected={attributeValuesSelected}
        optionSelectedSetter={setAttributeValuesSelected}
        colour="stats.air"
        vertical={true}
        width={width}
        height={height}
      />
    </Stack>
  );
}
