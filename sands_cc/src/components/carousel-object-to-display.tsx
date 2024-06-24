import { Paper, Stack, Typography } from '@mui/material';

export interface CarouselObjectToDisplayProps {
  title: string;
  image: string;
}

export function CarouselObjectToDisplay(props: CarouselObjectToDisplayProps) {
  const { title, image } = props;
  return (
    <Stack direction={'column'}>
      <Paper>
        <Typography>{title}</Typography>
      </Paper>
      <img src={image} />
    </Stack>
  );
}
