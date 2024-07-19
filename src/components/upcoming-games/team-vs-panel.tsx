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

const TeamVSPanel = forwardRef<HTMLDivElement, Props>(({ direction, sx, ...other }, ref) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      p={1}
      spacing={1}
      sx={{
        bgcolor: '#F6F6F6',
        borderRadius: 1,
      }}
    >
      <Stack
        component="img"
        src="/assets/icons/basketball2.png"
        sx={{ maxWidth: 60, maxHeight: 60 }}
      />
      <Stack justifyContent="center" alignItems="center">
        <Stack direction="row">
          <Typography variant="button">Rockets</Typography>
          &nbsp;vs&nbsp;
          <Typography variant="button">Cavallers</Typography>
        </Stack>
        <Typography variant="caption">Sat, 16th Mar</Typography>
        <Typography variant="caption">9:00 PM UTC</Typography>
      </Stack>
      <Stack
        component="img"
        src="/assets/icons/basketball.png"
        sx={{ maxWidth: 60, maxHeight: 60 }}
      />
    </Stack>
  );
});

export default TeamVSPanel;
