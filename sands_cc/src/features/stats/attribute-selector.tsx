import { Stack } from '@mui/material';
import {
  InfoTooltip,
  AttributeSelectModBox,
  TextBoxWithTitle
} from '../../components';
import { useState } from 'react';
import { useStore } from '../../hooks/useStore';

export interface AttributeSelectorProps {
  vertical: boolean;
  width?: number | string;
  height?: number | string;
  spacing: number;
}

export function AttributeSelector(props: AttributeSelectorProps) {
  const { vertical, width, height, spacing } = props;

  const improvementPoints = useStore((state) => state.improvementPoints);
  const [spentImprovementPoints, setSpentImprovementPoints] = useState(0);
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

  const earthDesc =
    'The Strength of Body. Earth determines your character’s muscle, stamina, and resilience. It is also used for fighting, and for calculating HP.';
  const waterDesc =
    'The Finesse of Body. Water determines your character’s agility, dexterity, and precision. It is also used for fighting and dodging.';
  const fireDesc =
    'The Strength of Mind. Fire determines your character’s willpower, confidence, and motivation. It is com used for social interaction. Some characters may use this to cast magic.';
  const airDesc =
    'The Finesse of Mind. Air determines your character’s wit, perceptiveness, and reflexes. It can also be used for social interaction, and it is used to determine Initiative. Some characters may use this to cast magic.';

  return (
    <>
      <TextBoxWithTitle
        id="text-improvementPoints"
        title="Improvement Points Spent:"
        value={spentImprovementPoints + '/' + improvementPoints}
        colour={'primary.light'}
      />
      <Stack
        direction={vertical ? 'column' : 'row'}
        spacing={spacing}
        sx={{ marginY: '1em' }}
      >
        <AttributeSelectModBox
          id="EarthStatBox"
          title="Earth:"
          options={attributeValues}
          optionsAlreadySelected={attributeValuesSelected}
          optionSelectedSetter={setAttributeValuesSelected}
          colour="stats.earth"
          vertical={true}
          width={width}
          height={height}
          information={earthDesc}
          improvementPointSetter={alterSpentImprovementPoints}
          spentImprovementPoints={spentImprovementPoints}
        />
        <AttributeSelectModBox
          id="WaterStatBox"
          title="Water:"
          options={attributeValues}
          optionsAlreadySelected={attributeValuesSelected}
          optionSelectedSetter={setAttributeValuesSelected}
          colour="stats.water"
          vertical={true}
          width={width}
          height={height}
          information={waterDesc}
          improvementPointSetter={alterSpentImprovementPoints}
          spentImprovementPoints={spentImprovementPoints}
        />
        <AttributeSelectModBox
          id="FireStatBox"
          title="Fire:"
          options={attributeValues}
          optionsAlreadySelected={attributeValuesSelected}
          optionSelectedSetter={setAttributeValuesSelected}
          colour="stats.fire"
          vertical={true}
          width={width}
          height={height}
          information={fireDesc}
          improvementPointSetter={alterSpentImprovementPoints}
          spentImprovementPoints={spentImprovementPoints}
        />
        <AttributeSelectModBox
          id="AirStatBox:"
          title="Air:"
          options={attributeValues}
          optionsAlreadySelected={attributeValuesSelected}
          optionSelectedSetter={setAttributeValuesSelected}
          colour="stats.air"
          vertical={true}
          width={width}
          height={height}
          information={airDesc}
          improvementPointSetter={alterSpentImprovementPoints}
          spentImprovementPoints={spentImprovementPoints}
        />
      </Stack>
    </>
  );

  function alterSpentImprovementPoints(changeToMake: string) {
    if (changeToMake === 'increment') {
      setSpentImprovementPoints(spentImprovementPoints + 1);
    } else if (changeToMake === 'decrement') {
      setSpentImprovementPoints(spentImprovementPoints - 1);
    }
  }
}
