import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import BasszButton from '../components/BasszButton';
import BackButton from '../components/BackButton';

export default function RegistrationPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ p: isMobile ? 2 : 4, pt: 0, maxWidth: 800, margin: '0 auto' }}>
      <BackButton />

      <Typography variant="h4" component="h1" sx={{ mb: 3, textAlign: 'center' }}>
        Hattyú akarok lenni!
      </Typography>

      <Stack spacing={2} sx={{ mb: 4 }}>
        <BasszButton component="a" href="https://forms.gle/4usRy7ZJxums7S327" target="_blank" rel="noopener noreferrer">
          Form
        </BasszButton>
      </Stack>
    </Box>
  );
}
