'use client';

// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Paper, Stack } from '@mui/material';
import Iconify from 'src/components/iconify';
import SportsList from 'src/components/sports-list/sports-list';
import { useTheme } from '@mui/material/styles';
import TopPredictions from 'src/components/top-predictions';
import UpcomingGames from 'src/components/upcoming-games';
import SelectionSlip from 'src/components/selection-slip';
import Membership from 'src/components/membership';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function HomeView() {
  const settings = useSettingsContext();
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  return (
    <Box bgcolor="white">
      {!lgUp && <Stack component="img" src="/assets/images/home/slide.png" />}

      {lgUp && (
        <SportsList
          bgcolor="white"
          sx={{
            boxShadow: theme.customShadows.card,
            position: { xs: 'relative', md: 'fixed' },
            width: { xs: '100vw', md: '56px' },
            justifyContent: 'space-evenly',
            flexDirection: { xs: 'row', md: 'column' },
          }}
        />
      )}
      <Stack
        bgcolor="#f9fafb"
        sx={{
          ml: { xs: 0, md: '56px' },
        }}
        p={2}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} lg={3}>
            <Stack spacing={{ xs: 1, sm: 2, md: 3 }}>
              <TopPredictions />
              <Typography
                align="center"
                display="block"
                variant="subtitle1"
                sx={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  lineHeight: '28px',
                }}
              >
                Upcoming Games
              </Typography>
              <UpcomingGames />
            </Stack>
          </Grid>

          <Grid item xs={12} lg={7} borderRadius={2}>
            {lgUp && <Stack component="img" borderRadius={2} src="/assets/images/home/slide.png" />}
            <Stack spacing={4} mt={2} px={{ xs: 2, md: 8 }} sx={{xs:1, lg:4}}>
              <Stack alignItems="center" spacing={2}>
                <Typography variant="subtitle2">
                  SPORTS BETTING SUCCESS THROUGH AI-DRIVEN PREDICTIONS
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Typography variant="h5">STATE-OF-THE-ART</Typography>
                  <Typography variant="h5" color="primary">
                    AI SPORTS BETTING TOOLS
                  </Typography>
                </Stack>
                <Typography variant="body1" align="center">
                  At SPREDD, we know better than anyone that making accurate predictions is key to
                  the success of sports betting outcomes. That's why we've designed our advanced{' '}
                  <Typography component="span" variant="body1" color="primary">
                    AI sports betting tools
                  </Typography>
                  , to help you make smarter, more informed decisions that give you the winning
                  edge.
                </Typography>
              </Stack>
              <Membership />
              <Stack spacing={2} justifyContent="center" alignItems="center">
                <Paper
                  sx={{
                    bgcolor: '#FFF0E6',
                    px: 4,
                    py: 1,
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="body2">
                    From NBA and NFL, to MBL and UFC, SPREDD equips you with data-backed insights
                    that help you make accurate,{' '}
                    <Typography color="primary" variant="button">
                      AI-driven sports predictions
                    </Typography>{' '}
                    and stay ahead of the game.
                  </Typography>
                </Paper>
                <Typography variant="button">START YOUR WINNING STREAK TODAY!</Typography>
                <Stack direction="row" spacing={1}>
                  <Typography variant="h4">INTRODUCING SPREDD'S</Typography>
                  <Typography variant="h4" color="primary">
                    PARLAY WIZARD
                  </Typography>
                  <Typography variant="h4">TOOL</Typography>
                </Stack>
                <Typography align="center" variant="body2">
                  Our
                  <Typography color="primary" display="inline" variant="caption">
                    Parlay Wizard is the first-ever parlay odds calculator in the sports betting
                    market.
                  </Typography>
                  This advanced
                  <Typography color="primary" display="inline" variant="caption">
                    AI sports betting tool
                  </Typography>
                  swiftly calculates the probability of your
                  <Typography color="primary" display="inline" variant="caption">
                    parlay hitting in percentage
                  </Typography>
                  , giving you a preview of the potential payoff before placing your bet. Acting as
                  a crystal ball for your parlays, Our Parlay pricer ensures you're able to maximize
                  your winnings by making better decisions.
                </Typography>
                <Typography align="center" color="primary" variant="button">
                  LEARN MORE
                </Typography>
                <Stack
                  component="img"
                  src="/assets/images/home/ball.png"
                  alignItems="center"
                  mb={2}
                  sx={{ maxWidth: '640' }}
                />
              </Stack>
              <Stack spacing={2} justifyContent="center" alignItems="center">
                <Stack direction="row" spacing={1}>
                  <Typography variant="button">EXPERIENCE</Typography>
                  <Typography variant="button" color="primary">
                    AI-DRIVEN SPORTS PREDICTIONS
                  </Typography>
                  <Typography variant="button">AT YOUR FINGERTIPS</Typography>
                </Stack>
                <Typography variant="h4">START YOUR SPREDD 3-DAY FREE TRIAL TODAY</Typography>
                <Typography align="center" variant="body1">
                  If you're tired of dropping the ball on your sports bets, SPREDD is here to help
                  you turn the game around and score big. Activate your 3-day free trial now and
                  unlock access to our exclusive{' '}
                  <Typography variant="caption" color="primary">
                    AI sports betting tools
                  </Typography>{' '}
                  immediately.
                </Typography>
                <Stack
                  spacing={2}
                  alignItems="center"
                  sx={{ bgcolor: '#FFF0E6', borderRadius: 1, px: 8, py: 2 }}
                >
                  <Typography variant="h5">Winning Big Is Just One Smart Choice Away!</Typography>
                  <Button color="primary" variant="contained">
                    START YOUR 3-DAY FREE TRIAL!
                  </Button>
                </Stack>
                <Stack component="img" src="/assets/images/home/bot.png" my={3} />
                <Typography variant="h5">VIRTUAL COACH COMING SOON!</Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={2}>
            <SelectionSlip />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
