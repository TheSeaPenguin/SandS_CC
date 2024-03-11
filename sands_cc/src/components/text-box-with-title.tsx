import { Stack, Typography } from '@mui/material';
import { InfoTooltip } from './info-tooltip';

export interface TextBoxWithTitleProps {
  id: string;
  colour?: string;
  title: string;
  value: string | number;
  vertical?: boolean;
  width?: number | string;
  height?: number | string;
  borderThickness?: number;
}

export function TextBoxWithTitle(props: TextBoxWithTitleProps) {
  const { id, colour, title, value, vertical, width, height, borderThickness } =
    props;
  return (
    <Stack
      direction={vertical ? 'column' : 'row'}
      justifyContent={'center'}
      sx={{
        width: width,
        borderColor: 'secondary.dark',
        ...(borderThickness !== undefined
          ? { border: borderThickness }
          : { border: 1 }),
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
      <Typography
        id={id}
        data-testid={id + 'Value'}
        align="center"
        sx={{
          height: height,
          fontSize: '1rem'
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}
