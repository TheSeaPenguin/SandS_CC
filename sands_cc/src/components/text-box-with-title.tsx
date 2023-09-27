import { Stack, Typography } from '@mui/material';

export interface TextBoxWithTitleProps {
  id: string;
  colour?: string;
  title: string;
  value: string | number;
  vertical?: boolean;
  width?: number | string;
  height?: number | string;
}

export function TextBoxWithTitle(props: TextBoxWithTitleProps) {
  const { id, colour, title, value, vertical, width, height } = props;
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
      <Typography
        id={id}
        align="center"
        sx={{ height: height, fontSize: '1rem' }}
      >
        {value}
      </Typography>
    </Stack>
  );
}
