import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
// routes
import { RouterLink } from 'src/routes/components';
import { Button, IconButton, Stack, StackProps, Typography } from '@mui/material';
import Iconify from '../iconify';
import { ThemeContext } from '@emotion/react';

// ----------------------------------------------------------------------

export interface Props extends StackProps {}

const TopPredictions = forwardRef<HTMLDivElement, Props>(({ direction, sx, ...other }, ref) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        boxShadow: theme.customShadows.z8,
        borderRadius: 1,
        p: 2,
        ...sx,
      }}
      {...other}
    >
      <Typography align="center" variant="h6">
        TOP PREDICTIONS
      </Typography>
      <Stack bgcolor="#f6f6f6" p={1}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">NBA</Typography>
          <Iconify icon="mdi-circle" color="#FFC71D" width={10} />
          <Typography variant="body2">Piston vs Heat</Typography>
          <Iconify icon="mdi-circle" color="#FFC71D" width={10} />
          <Typography variant="body2">15 March 2024</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
          <Stack component="img" src="/assets/icons/basketball.png" />
          <Stack>
            <Typography variant="body1">Jimmy Butler</Typography>
            <Stack direction="row" alignItems="center">
              <Typography variant="body1" fontWeight={700}>
                4+ Rebounds
              </Typography>
              <Iconify icon="mdi:arrow-up-thick" />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-evenly">
          <Stack direction="row">
            <Typography variant="body2" mr={0.5}>
              Probability
            </Typography>
            <Typography variant="body1" fontWeight={700}>
              84%
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography variant="body2" mr={0.5}>
              Expected
            </Typography>
            <Typography variant="body1" fontWeight={700}>
              5.6
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack bgcolor="#fef7f2" p={1}>
        <Typography variant="body2">
          Nikola Vucevic's proficiency in playmaking on the road adds depth to the Bulls' offense,
          averaging 3.6 assists per game away from home. With a reliable track record and favorable
          odds, Vucevic's contribution in assists against the Jazz adds value to the Bulls' game
          plan.
        </Typography>
      </Stack>
      <Button variant="contained" color="primary" size="medium">
        SEE MORE TIPS
      </Button>
    </Stack>
  );
});

export default TopPredictions;
