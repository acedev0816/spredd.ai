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

export default function StrategyView() {
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
            <Typography variant="h6">
              SPEED
              <Typography component="span" variant="h6" ml={0.5} color="primary">
                METHODOLOGY
              </Typography>
            </Typography>
            <Typography variant="h4">
              SUPER CHARING YOUR BETTING
              <Typography component="span" variant="h4" ml={0.5} color="primary">
                STRATEGIES
              </Typography>
            </Typography>
          </Stack>
          <Stack component="img" src="/assets/logo.png" width={80} />
        </Stack>
        <Typography variant="subtitle1" mt={3}>
          At SPREDD, we believe in the power of
          <Typography component="span" variant="subtitle1" color="primary" mx={0.3}>
            AI-driven sports predictions
          </Typography>
          to transform your betting experience. Our methodology is grounded in cutting-edge
          technology, advanced algorithms, and comprehensive statistical analysis, ensuring that
          every bet you place is backed by the most accurate and reliable information available.
        </Typography>
        <Typography variant="h5" mt={2} mb={0.5}>
          <Typography component="span" variant="h5" mr={0.5} color="primary">
            ADVANCED
          </Typography>
          ALGORITHMS
        </Typography>
        <Typography variant="subtitle1">
          We utilize the full potential of advanced algorithms to analyze extensive amounts of data
          that allow us to uncover patterns and insights that traditional methods may overlook. Our
          <Typography variant="subtitle1" color="primary" mx={0.3} component="span">
            AI sports betting tools
          </Typography>
          grant you a comprehensive competitive edge in your betting pursuits.
        </Typography>

        <Typography variant="h5" mt={2}>
          COMPREHENSIVE STATISTICAL
          <Typography component="span" variant="h5" ml={0.5} color="primary">
            ANALYSIS
          </Typography>
        </Typography>
        <Typography variant="subtitle1">
          We leave no stone unturned in our quest for precision betting. Our team of experts
          analyzes every aspect of the game, from historical performance data to current trends, to
          provide you with the most comprehensive betting landscape possible
        </Typography>

        <Typography variant="h5" mt={2} mb={0.5}>
          PREDICTION
          <Typography component="span" variant="h5" ml={0.5} color="primary">
            ANALYSIS
          </Typography>
        </Typography>
        <Typography variant="subtitle1">
          Our platform employs both probabilistic models and quantitative analysis to achieve the
          highest level of sports prediction accuracy. Whether you're a seasoned bettor or an
          ambitious rookie, our
          <Typography component="span" variant="subtitle1" color="primary" mx={0.3}>
            AI-driven sports predictions
          </Typography>
          ensures you have the information you need to make winning decisions.
        </Typography>

        <Typography variant="h5" mt={2} mb={0.5}>
          AUTOMATED
          <Typography component="span" variant="h5" mx={0.5} color="primary">
            TREND
          </Typography>
          RECOGNITION
        </Typography>
        <Typography variant="subtitle1">
          Our advanced algorithms excel at distilling patterns from historical performance data,
          offering invaluable insights into the trajectories of players and teams. By automating
          trend recognition, we empower you to stay ahead of the curve and capitalize on emerging
          opportunities.
        </Typography>

        <Typography variant="h5" mt={2} mb={0.5}>
          RANKED
          <Typography component="span" variant="h5" mx={0.5} color="primary">
            STATISTICS AND MATCH DAY
          </Typography>
          ANALYSIS
        </Typography>
        <Typography variant="subtitle1">
          Our
          <Typography component="span" variant="subtitle1" color="primary">
            AI sports betting tools
          </Typography>
          go beyond ordinary analysis, offering a comprehensive overview of the betting landscape.
          With SPREDD, you’re furnished with real-time data and insights that empower you to place
          bets with the best chances of winning big.
        </Typography>
      </Stack>
    </Stack>
  );
}
