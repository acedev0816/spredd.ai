import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
// routes
import { RouterLink } from 'src/routes/components';
import { Button, IconButton, Paper, Stack, StackProps, Typography } from '@mui/material';
import Iconify from '../iconify';
import { ThemeContext } from '@emotion/react';

// ----------------------------------------------------------------------

export interface Props extends StackProps {}

const SelectionSlip = forwardRef<HTMLDivElement, Props>(({ direction, sx, ...other }, ref) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        borderRadius: 1,
        bgcolor: '#F3F1EB',
        p: 2,
        gap: { xs: 1, md: 3 },
        ...sx,
      }}
      {...other}
    >
      <Stack spacing={2}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
          }}
        >
          <Stack>
            <Typography>Multi/Parlay Chance</Typography>
            <Typography>0.0%</Typography>
          </Stack>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            p: 2,
          }}
        >
          <Stack>
            <Typography>Selections</Typography>
            <Typography>0/25</Typography>
          </Stack>
        </Paper>
        <Button color="primary" variant="contained">
          Clear All
        </Button>
      </Stack>
      <Stack spacing={1} justifyContent="center" alignItems="center">
        <Stack component="img" src="/assets/logo.png" width={134}></Stack>
        <Typography variant="subtitle1">Your selection slip is Empty.</Typography>
        <Typography variant="subtitle2">Check Out Today's Sports.</Typography>
      </Stack>
    </Stack>
  );
});

export default SelectionSlip;
