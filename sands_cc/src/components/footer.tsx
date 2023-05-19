import { Box } from '@mui/material';

export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <Box
      sx={{
        borderTop: 5,
        borderColor: 'primary.dark',
        display: 'flex',
        justifyContent: 'center'
      }}
    ></Box>
  );
}
