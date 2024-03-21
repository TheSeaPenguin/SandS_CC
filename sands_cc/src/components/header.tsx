import { Box, Stack, Typography } from '@mui/material';
import SandSLogoSmall from '../assets/images/logo/SandSLogo_93x84.png';

export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <Box
      sx={{
        borderBottom: 5,
        borderColor: 'primary.dark',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Stack direction={'row'}>
        <img
          src={SandSLogoSmall}
          alt="Steel and Scale logo of a pink dragon head emerging from a city skyline"
        />
        <Stack sx={{ paddingY: '0.5em' }}>
          <Typography variant="h4">Steel & Scale</Typography>
          <Typography variant="h6">Character Creator</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
