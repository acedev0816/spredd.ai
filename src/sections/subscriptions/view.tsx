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

export default function SubscriptionsView() {
  const settings = useSettingsContext();
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  return (
    <Box bgcolor="white" sx={{ px: { xs: 1, lg: 2 } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={10}>
          <Stack spacing={2} alignItems="center">
            <Stack
              component="img"
              width="100%"
              borderRadius={2}
              src="/assets/images/subscriptions/slide.png"
            />
            <Stack maxWidth={1000} spacing={1}>
              <Typography variant="subtitle2" textAlign="center">
                SPORTS BETTING SUCCESS THROUGH AI-DRIVEN PREDICTIONS
              </Typography>
              <Typography variant="h5" textAlign="center">
                STATE-OF-THE-ART
                <Typography component="span" variant="h5" color="primary">
                  AI SPORTS BETTING TOOLS
                </Typography>
              </Typography>
              <Membership />
              <Typography variant="h3" textAlign="center">
                SIGN UP TODAY AND RECEIVE
              </Typography>
              <Typography variant="h4" textAlign="center">
                1.PARLAY WIZARD
              </Typography>
              <Typography variant="subtitle1" textAlign="center">
                Make smarter betting decisions with our
                <Typography ml={0.5} variant="subtitle1" component="span" color="primary">
                  AI sports betting tool
                </Typography>
                . Calculate the odds of your pariary
                <Typography ml={0.5} variant="subtitle1" component="span" color="primary">
                  hitting in percentage.
                </Typography>
                ,giving you a clear picture of potential outcomes.
              </Typography>
              <Typography variant="h5" textAlign="center">
                KEY FEATURES
              </Typography>
              <Stack direction="row" spacing={0.5}>
                <Iconify icon="ic:round-check-box" color="primary.main" width={20} />
                <Typography variant="subtitle1">Instant Calculation</Typography>
              </Stack>
              <Typography variant="subtitle1">
                Input your pariary and let our
                <Typography component="span" color="primary.main" mx={1}>
                  Pariary Wizard
                </Typography>
                do the rest. Within seconds, you will recieve accurate adds for your pariary bets,
                empowering you to make informed decisions.
              </Typography>
              <Stack direction="row" spacing={0.5}>
                <Iconify icon="ic:round-check-box" color="primary.main" width={20} />
                <Typography variant="subtitle1">Customization Options</Typography>
              </Stack>
              <Typography variant="subtitle1">
                Whether you are combining game outcomes, player performances, or any other betting
                options, our
                <Typography component="span" color="primary.main" mx={1}>
                  Pariary Wizard
                </Typography>
                accommodates a wide range of selections, ensuring flexibility and versalibity in
                your betting strategy.
              </Typography>
              <Stack direction="row" spacing={0.5}>
                <Iconify icon="ic:round-check-box" color="primary.main" width={20} />
                <Typography variant="subtitle1">User-Friendly Interface</Typography>
              </Stack>
              <Typography variant="subtitle1">
                Our intuitive interace makes it easy to navigate
                <Typography component="span" color="primary.main" mx={1}>
                  Pariary Wizard
                </Typography>
                , allowing betters of all levels to make winning decisions with ease.
              </Typography>
              <Stack
                component="img"
                src="/assets/images/subscriptions/slide2.png"
                my={3}
                sx={{ width: '100%', maxWidth: 600, margin: 'auto' }}
              />

              <Typography variant="h5" textAlign="center" mt={2}>
                SMART PROBABLITY ASSESSMENT
              </Typography>
              <Typography variant="subtitle1" textAlign="center">
                Our system analyzes the probability of each selection through data-driven methods.
                Taking into account player performances, upcoming opponents, and various matchday
                factors, you receive a distinct advantage for making informed betting decisions.
              </Typography>
              <Stack spacing={2} width="100%" sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
                <Stack
                  component="img"
                  src="/assets/images/subscriptions/slide2.png"
                  my={3}
                  flexGrow={1}
                />
                <Stack
                  component="img"
                  src="/assets/images/subscriptions/slide2.png"
                  my={3}
                  flexGrow={1}
                />
              </Stack>
              <Typography variant="h5" textAlign="center">
                SUPERCHART PALAY SUCCESS
              </Typography>
              <Typography variant="subtitle1" textAlign="center">
                With Parlay Wizard, you can easily assess your parlay odds at a glance. Combine your
                selections to see the bigger picture of your potential winnings, and adjust your
                choices to make the most of your overall parlay strategy.{' '}
              </Typography>
              <Stack spacing={2} width="100%" sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
                <Stack
                  component="img"
                  src="/assets/images/subscriptions/slide2.png"
                  my={3}
                  flexGrow={1}
                />
                <Stack
                  component="img"
                  src="/assets/images/subscriptions/slide2.png"
                  my={3}
                  flexGrow={1}
                />
              </Stack>

              {/* 2. AI-POWERED GAME PREDICTIONS */}
              <Typography variant="h4" textAlign="center" color="black">
                2.
                <Typography variant="h4" color="primary" component="span" mr={0.5}>
                  AI-POWERED
                </Typography>
                GAME PREDICTIONS
              </Typography>
              <Typography variant="h5" textAlign="center">
                KEY FEATURES
              </Typography>
              <Typography textAlign="center" variant="subtitle1">
                Being with our
                <Typography component="span" color="primary.main" mx={1}>
                  AI-driven sports predictions
                </Typography>
                Our technology analyzes everything from player performance trends to team dynamics,
                to provide you with accurate and insightful predictions for every NBA matchup
              </Typography>
              <Stack direction="row" spacing={0.5}>
                <Iconify icon="ic:round-check-box" color="primary.main" width={20} />
                <Typography variant="subtitle1">Data-Driven Insights</Typography>
              </Stack>
              <Typography variant="subtitle1">
                Our
                <Typography component="span" color="primary.main" mx={1}>
                  AI-driven sports predictions
                </Typography>
                are rooted in comprehensive data analysis and advanced machine-learning technology,
                ensuring accuracy and reliability in every recommendation.
              </Typography>
              <Stack direction="row" spacing={0.5}>
                <Iconify icon="ic:round-check-box" color="primary.main" width={20} />
                <Typography variant="subtitle1">Expert Analysis</Typography>
              </Stack>
              <Typography variant="subtitle1">
                OOur team deeply understands the world of
                <Typography component="span" color="primary.main" mx={1}>
                  sports betting
                </Typography>
                providing you with actionable insights that give your bet the edge needed to succeed
                and win big.
              </Typography>
              <Stack direction="row" spacing={0.5}>
                <Iconify icon="ic:round-check-box" color="primary.main" width={20} />
                <Typography variant="subtitle1">Real-Time Updates</Typography>
              </Stack>
              <Typography variant="subtitle1">
                Stay informed with real-time updates on game predictions, player news, and more. Our
                platform keeps you ahead of the curve, allowing you to adjust your betting strategy
                as events unfold.
              </Typography>
              <Stack spacing={2} width="100%" sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
                <Stack
                  component="img"
                  src="/assets/images/subscriptions/slide2.png"
                  my={3}
                  flexGrow={1}
                />
                <Stack
                  component="img"
                  src="/assets/images/subscriptions/slide2.png"
                  my={3}
                  flexGrow={1}
                />
              </Stack>

              {/* 3. TOP PLAYER PROP PICKS */}
              <Typography variant="h4" textAlign="center" color="black">
                3.
                <Typography variant="h4" color="primary" component="span" mr={0.5}>
                  TOP PLAYER PROP PICKS
                </Typography>
              </Typography>
              <Typography variant="subtitle1" textAlign="center">
                With our advanced algorithm, discovering the best NBA and MLB prop bets is easier
                than ever. You get to crunch key metrics and game stats, considering the context of
                each matchup for smarter predictions, while also using player trends and real-time
                game knowledge to uncover highpotential bets.
              </Typography>
              <Stack
                component="img"
                src="/assets/images/subscriptions/slide2.png"
                my={3}
                sx={{ width: '100%', maxWidth: 600, margin: 'auto' }}
              />
              {/* 4. DATA-DRIVEN ANALYSIS */}
              <Typography variant="h4" textAlign="center" color="black">
                4.
                <Typography variant="h4" color="primary" component="span" mr={0.5}>
                  DATA-DRIVEN ANALYSIS
                </Typography>
              </Typography>
              <Typography variant="subtitle1" textAlign="center">
                At SPREDD, we’re all about smart sports betting using data. By analyzing the
                strengths and weaknesses of upcoming opponents, plus matchday factors, we help you
                predict outcomes based on past performances against similar teams. This detailed
                analysis allows you to spot the best bets every day, improving accuracy over time.
                By using advanced stats, detailed player reviews, and key match info, we’re
                committed to giving you the best shot at winning consistently.
              </Typography>
              <Stack
                component="img"
                src="/assets/images/subscriptions/slide2.png"
                my={3}
                sx={{ width: '100%', maxWidth: 600, margin: 'auto' }}
              />
              <Typography variant="h6" textAlign="center" mt={3}>
                WELCOME TO THE WINNER’S CIRCLE IN THE WORLD OF SPORTS BETTING
              </Typography>
              <Typography variant="h4" textAlign="center" >
                Sign Up For Our 3-Day FREE Trial today
              </Typography>
              <Typography variant="subtitle1" textAlign="center">
                Join SPREDD now and take your sport betting game to the next, best level. Combine
                the power of our Parlay Wizard with our data-backed NBA game predictions and write
                your name in the sports betting success hall of fame.
              </Typography>
            </Stack>
            <Button color="primary" variant="contained">
              START 3 DAY FREE TRIAL
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} lg={2}>
          <SelectionSlip />
        </Grid>
      </Grid>
    </Box>
  );
}
