import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
// routes
import { RouterLink } from 'src/routes/components';
import { Button, Checkbox, FormControlLabel, FormGroup, IconButton, Stack, StackProps, Typography } from '@mui/material';
import Iconify from '../iconify';
import { ThemeContext } from '@emotion/react';

// ----------------------------------------------------------------------

export interface Props extends StackProps {}

const TopPredictions = forwardRef<HTMLDivElement, Props>(({ direction, sx, ...other }, ref) => {
  const theme = useTheme();

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="center">
      <Stack
        justifyContent="space-between"
        spacing={2}
        sx={{
          bgcolor: '#F2F2F2',
          borderRadius: 1,
          p: 2,
          mr: 3,
          mb: 2,
          width: {xs:'100%', lg:400}
        }}
      >
        <Typography align="center" variant="h6">
          3 Day Free Trial: Core
        </Typography>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="USE CODE 'TRIAL'" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="PARLAY WIZARD" />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="AI-POWERED GAME PREDICTIONS"
          />
          <FormControlLabel control={<Checkbox defaultChecked />} label="CANCEL ANYTIME" />
        </FormGroup>
        <Button color="primary" variant="contained">
          ACTIVATE TRIAL
        </Button>
      </Stack>
      <Stack
        justifyContent="space-between"
        spacing={2}
        sx={{
          bgcolor: '#FFF0E6',
          borderRadius: 1,
          p: 2,
          mb: 2,
          width: {xs:'100%', lg:400}
        }}
      >
        <Typography align="center" variant="h6">
          $10 PER MONTH
        </Typography>
        <Typography align="center" color="primary" variant="caption">
          Supreme Betting Mastery
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="FULL ACCESS TO ALL SPORTS"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="AI-POWERED PLAYER PROPS PREDICTIONS"
          />
          <FormControlLabel control={<Checkbox defaultChecked />} label="PARLAY WIZARD" />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="AI-POWERED GAME PREDICTIONS"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="DATA-DRIVEN RESEARCH INCLUDED"
          />
          <FormControlLabel control={<Checkbox defaultChecked />} label="CANCEL ANYTIME" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="VIP SUPPORT" />
        </FormGroup>
        <Button color="primary" variant="contained">
          BUY NOW
        </Button>
      </Stack>
    </Stack>
  );
});

export default TopPredictions;
