// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// theme
import { bgBlur } from 'src/theme/css';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// components
import Logo from 'src/components/logo';
import SvgColor from 'src/components/svg-color';
import { useSettingsContext } from 'src/components/settings';
//
import { HEADER, NAV } from '../config-layout';
import {
  Searchbar,
  AccountPopover,
  SettingsButton,
  LanguagePopover,
  ContactsPopover,
  NotificationsPopover,
} from '../_common';
import NavHorizontal from './nav-horizontal';
import NavVertical from './nav-vertical';
import { useBoolean } from 'src/hooks/use-boolean';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';
import Iconify from 'src/components/iconify/iconify';

// ----------------------------------------------------------------------

type Props = {};

export default function Footer({}: Props) {
  const theme = useTheme();

  const settings = useSettingsContext();
  const nav = useBoolean();

  const lgUp = useResponsive('up', 'lg');

  const renderHorizontal = <NavHorizontal />;
  const renderNavVertical = <NavVertical openNav={nav.value} onCloseNav={nav.onFalse} />;

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        background: "#202020",
        px: { xs: 2, md: 4 },
        justifyContent: 'space-between',
        py: 1,
      }}
    >
      <Link component={RouterLink} href="/" sx={{ textDeration: 'none', color: 'white' }}>
        T&C AND PRIVACY POLICY
      </Link>
      <Stack direction="row" sx={{
        gap: {xs:1, md:2, lg:3}
      }}>
        <Iconify icon="skill-icons:discord" width={24} />
        <Iconify icon="skill-icons:instagram" width={24} />
        <Iconify icon="hugeicons:new-twitter" width={24} color="white"/>
        <Iconify icon="akar-icons:tiktok-fill" width={24} color="white"/>
      </Stack>
    </Stack>
  );
}
