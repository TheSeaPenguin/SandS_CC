import { Stack } from '@mui/material';
import { TextBoxWithTitle } from '../../components';
import { useStore } from '../../hooks/useStore';

export interface AttributesProps {
  vertical: boolean;
  width?: number | string;
  height?: number | string;
  spacing: number;
}

export function Attributes(props: AttributesProps) {
  const { vertical, width, height, spacing } = props;
  const attributeValues = useStore((state) => state.attributes);
  return (
    <Stack direction={vertical ? 'column' : 'row'} spacing={spacing}>
      <TextBoxWithTitle
        id="EarthStatBox"
        title="Earth:"
        value={attributeValues.earth}
        colour="stats.earth"
        vertical={true}
        width={width}
        height={height}
      />
      <TextBoxWithTitle
        id="WaterStatBox"
        title="Water:"
        value={attributeValues.water}
        colour="stats.water"
        vertical={true}
        width={width}
        height={height}
      />
      <TextBoxWithTitle
        id="FireStatBox"
        title="Fire:"
        value={attributeValues.fire}
        colour="stats.fire"
        vertical={true}
        width={width}
        height={height}
      />
      <TextBoxWithTitle
        id="AirStatBox:"
        title="Air:"
        value={attributeValues.air}
        colour="stats.air"
        vertical={true}
        width={width}
        height={height}
      />
    </Stack>
  );
}
