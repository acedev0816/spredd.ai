'use client';

// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Icon,
  Paper,
  Stack,
} from '@mui/material';
import Iconify from 'src/components/iconify';
import SportsList from 'src/components/sports-list/sports-list';
import { useTheme } from '@mui/material/styles';
import TopPredictions from 'src/components/top-predictions';
import UpcomingGames from 'src/components/upcoming-games';
import SelectionSlip from 'src/components/selection-slip';
import Membership from 'src/components/membership';
import { useResponsive } from 'src/hooks/use-responsive';
import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

export default function MyAccountView() {
  const settings = useSettingsContext();
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  return (
    <Stack alignItems="center" p={1}>
      <Stack
        width="100%"
        maxWidth={1000}
        mx="auto"
        mt={2}
        sx={{
          p: { xs: 1, lg: 3 },
          flexDirection: { xs: 'column', lg: 'row' },
        }}
        spacing={2}
      >
        <Stack
          bgcolor="white"
          sx={{
            width: { xs: '100%', lg: 330 },
            height: 'fit-content'
          }}
        >
          <Stack bgcolor="#f3f1eb" alignItems="center" py={1}>
            <Logo />
          </Stack>
          <Avatar
            src="https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg"
            alt="Boskto"
            sx={{
              width: 60,
              height: 60,
              mx: 'auto',
              mt: 2,
            }}
          />
          <Stack p={2} mt={2}>
            <Typography variant="h6" mb={1.5}>
              Bosko Jeftic
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Iconify icon="mdi:email" width={16} />
              <Typography variant="subtitle2"> ilovesoftware312@gmail.com</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Iconify icon="mdi:phone" width={16} />
              <Typography variant="subtitle2">3811915785322</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Iconify icon="mdi:location" width={16} />
              <Typography variant="subtitle2">Serbia</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack bgcolor="white" p={2} boxShadow={theme.customShadows.z4} flexGrow={1}>
          <Typography variant="h6">My Account</Typography>
          <Typography fontWeight={700} variant="subtitle2">
            Membership
          </Typography>
          <Stack direction="row" spacing={1}>
            <Typography width={120} variant="subtitle2" color="#666">
              Member since
            </Typography>
            <Typography variant="subtitle2">:Mar 2024</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography width={120} variant="subtitle2" color="#666">
              Email
            </Typography>
            <Typography variant="subtitle2">:random@gmail.com</Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography width={120} variant="subtitle2" color="#666">
              Password
            </Typography>
            <Typography variant="subtitle2" p={0}>
              :*********
            </Typography>
          </Stack>
          <Button variant="contained" sx={{ width: 'fit-content' }}>
            Change password
          </Button>

          <Typography fontWeight={700} variant="subtitle2" mt={2}>
            Billing
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography width={120} variant="subtitle2" color="#666">
              Payment Method
            </Typography>
            <Typography variant="subtitle2" p={0}>
              :Stripe
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography width={120} variant="subtitle2" color="#666">
              Last Billed
            </Typography>
            <Typography variant="subtitle2" p={0}>
              :random@outlook.com
            </Typography>
          </Stack>

          <Typography fontWeight={700} variant="subtitle2">
            Payment
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography width={120} variant="subtitle2" color="#666">
              Payment Info
            </Typography>
            <Typography variant="subtitle2" p={0}>
              :Check Here
            </Typography>
          </Stack>

          <Typography fontWeight={700} variant="subtitle2">
            My Plan
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography width={120} variant="subtitle2" color="#666">
              My Plan
            </Typography>
            <Typography variant="subtitle2" p={0}>
              :Expert
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
