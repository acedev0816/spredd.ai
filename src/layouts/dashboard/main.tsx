// @mui
import Box, { BoxProps } from '@mui/material/Box';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// components
import { useSettingsContext } from 'src/components/settings';
//
import { HEADER, NAV } from '../config-layout';

// ----------------------------------------------------------------------

const SPACING = 8;

export default function Main({ children, sx, ...other }: BoxProps) {
  const settings = useSettingsContext();

  const lgUp = useResponsive('up', 'lg');

  return (
    <Box
      component="main"
      bgcolor="#f9fafb"
      sx={{
        minHeight: 'calc(100% - 40px)', //40px: footer
        display: 'flex',
        flexDirection: 'column',
        pt: `${HEADER.H_MOBILE}px`,
        pb: 10,
        ...(lgUp && {
          pb: 15,
        }),
      }}
    >
      {children}
    </Box>
  );
}
