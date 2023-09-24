import { Stack } from '@mui/material';
import { TextBoxWithTitle } from '../../components';

export interface AttributesProps {
  vertical: boolean;
  width?: number | string;
  height?: number | string;
  spacing: number;
}

export function Attributes(props: AttributesProps) {
  const { vertical, width, height, spacing } = props;
  return (
    <Stack direction={vertical ? 'column' : 'row'} spacing={spacing}>
      <TextBoxWithTitle
        id="EarthStatBox"
        title="Earth:"
        value="0"
        colour="stats.earth"
        vertical={true}
        width={width}
        height={height}
      />
      <TextBoxWithTitle
        id="WaterStatBox"
        title="Water:"
        value="0"
        colour="stats.water"
        vertical={true}
        width={width}
        height={height}
      />
      <TextBoxWithTitle
        id="FireStatBox"
        title="Fire:"
        value="0"
        colour="stats.fire"
        vertical={true}
        width={width}
        height={height}
      />
      <TextBoxWithTitle
        id="AirStatBox:"
        title="Air:"
        value="0"
        colour="stats.air"
        vertical={true}
        width={width}
        height={height}
      />
    </Stack>
  );
}
