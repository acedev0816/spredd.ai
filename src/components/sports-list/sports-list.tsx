import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
// routes
import { RouterLink } from 'src/routes/components';
import { Button, IconButton, Stack, StackProps } from '@mui/material';
import Iconify from '../iconify';
import { ThemeContext } from '@emotion/react';

// ----------------------------------------------------------------------

export interface Props extends StackProps {}

export interface SportsButtonProps {
  clicked?: boolean;
  icon: string;
}
const SportsButton = ({ icon, clicked }: SportsButtonProps) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: 1,
        minWidth: '36px',
        p: '4px',
        '&:hover': {
          bgcolor: '#fa9955',
        },
        bgcolor: clicked ? theme.palette.primary.main : '#f3f1eb',
      }}
    >
      <Iconify icon={icon} color={clicked ? 'white' : 'black'} width={32} />
    </Button>
  );
};

const SportsList = forwardRef<HTMLDivElement, Props>(({ direction, sx, ...other }, ref) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        p: 1,
        gap: {xs:1, md:3},
        ...sx,
      }}
      {...other}
    >
      <SportsButton icon="ph:basketball-fill" clicked />
      <SportsButton icon="ph:volleyball-fill"/>
      <SportsButton icon="ion:football"/>
      <SportsButton icon="solar:rugby-bold"/>
      <SportsButton icon="mingcute:coat-fill"/>
    </Stack>
  );
});

export default SportsList;
