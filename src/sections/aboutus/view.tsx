'use client';

// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import {
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

// ----------------------------------------------------------------------

export default function AboutUsView() {
  const settings = useSettingsContext();
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  return (
    <Stack alignItems="center" p={1}>
      <Stack
        width="100%"
        maxWidth={1200}
        mx="auto"
        bgcolor="white"
        mt={2}
        boxShadow={theme.customShadows.z4}
        sx={{
          p: { xs: 1, lg: 3 },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack>
            <Typography variant="h6">THE WINNING EDGE IN SPORTS BETTING</Typography>
            <Typography variant="h4">Say Hello to SPREDD</Typography>
          </Stack>
          <Stack component="img" src="/assets/logo.png" width={80} />
        </Stack>
        <Typography variant="subtitle1" mt={3}>
          At SPREDD, we believe that accurate sports betting is more about the information you have
          than it is about luck. That’s why our
          <Typography component="span" variant="subtitle1" color="primary" mx={0.3}>
            sports prediction platform
          </Typography>
          caters to bettors who enjoy having all the facts first, before placing a wager. Our
          <Typography component="span" variant="subtitle1" color="primary" mx={0.3}>
            AI sports betting tool
          </Typography>
          uses advanced algorithms and thorough statistical analysis to help you make the most
          precise and well-considered betting decisions.
        </Typography>
        <Typography variant="subtitle1" mt={2} fontWeight={700}>
          We sift through vast amounts of data – from player performance trends to game-day dynamics
          – to ensure that every bet you place is backed by solid, data-driven insights.
        </Typography>

        <Typography variant="h4" mt={3} mb={0.5}>
          OUR
          <Typography component="span" variant="h4" mx={0.5} color="primary">
            AI Sports Betting Tools
          </Typography>
          Offer You:
        </Typography>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Iconify icon="ic:round-check-box" color="primary.main" width={20} />
          <Typography variant="subtitle1" fontWeight={700}>
            Precision Analytics
          </Typography>
        </Stack>
        <Typography variant="subtitle1">
          With advanced probabilistic models and quantitative analysis techniques, you gain insights
          that both seasoned bettors and data enthusiasts can't resist.
        </Typography>

        <Stack direction="row" spacing={0.5} alignItems="center" mt={1}>
          <Iconify icon="ic:round-check-box" color="primary.main" width={20} />
          <Typography variant="subtitle1" fontWeight={700}>
            Automated Trend Recognition
          </Typography>
        </Stack>
        <Typography variant="subtitle1">
          Spot promising patterns in historical performance data to discover the inside scoop on
          where players and teams are headed next.
        </Typography>

        <Stack direction="row" spacing={0.5} alignItems="center" mt={1}>
          <Iconify icon="ic:round-check-box" color="primary.main" width={20} />
          <Typography variant="subtitle1" fontWeight={700}>
            Ranked Statistics and Matchday Analysis
          </Typography>
        </Stack>
        <Typography variant="subtitle1">
          Enjoy a comprehensive look at team performances, player stats, match dynamics, and more –
          empowering you to make winning bets
        </Typography>
        <Typography variant="subtitle1" mt={3}>
          While other
          <Typography component="span" color="primary.main" mx={1}>
            sports prediction platforms
          </Typography>
          might focus on just one sport, we've got you covered across the board. Whether you're a
          fan of basketball, football, baseball, or UFC, SPREDD brings you winning insights for all
          your favorite sports.
        </Typography>

        <Typography variant="h5" mt={3} mb={0.5} textAlign="center">
          Start Your SPREDD 3-Day FREE Trial Today
        </Typography>
        <Typography variant="subtitle2" mt={1} mb={0.5} textAlign="center">
          With an 80%+ win rate over the past few months, SPREDD is your ticket to success in the
          world of sports betting. Activate your FREE 3-day trial now and discover why so many
          sports enthusiasts trust us to help them come out on top!
        </Typography>
        <Stack p={2} mt={2} bgcolor="#fff0e6" borderRadius={1} alignItems="center">
          <Typography variant="h6" mt={1} mb={0.5} textAlign="center">
            Winning Big Is Just One Smart Choice Away!
          </Typography>
          <Button color="primary" variant="contained" sx={{ width: 'fit-content' }}>
            START YOUR 3-DAY FREE TRIAL
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
