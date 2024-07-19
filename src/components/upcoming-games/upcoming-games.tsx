import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
// routes
import { RouterLink } from 'src/routes/components';
import { Button, IconButton, Paper, Stack, StackProps, Typography } from '@mui/material';
import Iconify from '../iconify';
import { ThemeContext } from '@emotion/react';
// components
import TeamVSPanel from './team-vs-panel';

// ----------------------------------------------------------------------

export interface Props extends StackProps {}

const UpcomingGames = forwardRef<HTMLDivElement, Props>(({ direction, sx, ...other }, ref) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        borderRadius: 1,
        boxShadow: theme.customShadows.z8,
        p: 2,
        gap: { xs: 1, md: 2 },
        ...sx,
      }}
      {...other}
    >
      <Typography align="center" color="primary" variant="subtitle2">
        BASKETBALL
      </Typography>
      <TeamVSPanel />
      <TeamVSPanel />
      <TeamVSPanel />
      <TeamVSPanel />
      <TeamVSPanel />
    </Stack>
  );
});

export default UpcomingGames;
