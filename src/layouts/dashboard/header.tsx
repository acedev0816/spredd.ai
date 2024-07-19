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
import Iconify from 'src/components/iconify/iconify';
import { Link, Typography } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { NavSectionHorizontal } from 'src/components/nav-section';
import { RouterLink } from 'src/routes/components';
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

type Props = {};

export default function Header({}: Props) {
  const theme = useTheme();
  const { user } = useAuthContext();

  const settings = useSettingsContext();
  const nav = useBoolean();

  const lgUp = useResponsive('up', 'lg');

  const renderHorizontal = <NavHorizontal />;
  const renderNavVertical = <NavVertical openNav={nav.value} onCloseNav={nav.onFalse} />;

  const renderContent = (
    <Stack direction="row" width="100%" alignItems="center" spacing={{ xs: 0.5, sm: 1 }}>
      <Stack flexGrow={1}>
        <Logo sx={{ mr: 1 }} long={lgUp} />
      </Stack>
      {lgUp ? renderHorizontal : renderNavVertical}

      {!lgUp && !user && (
        <>
          <Link
            component={RouterLink}
            href={'/'}
            mr={0.5}
            underline="none"
            sx={{ color: 'black', fontSize: 12 }}
          >
            LOGIN
          </Link>

          <Link
            component={RouterLink}
            href={'/'}
            mr={0.5}
            underline="none"
            sx={{ color: 'black', fontSize: 12 }}
          >
            SIGN UP
          </Link>
        </>
      )}

      {!lgUp && user && (
        <>
          <Link
            component={RouterLink}
            href={'/'}
            mr={0.5}
            underline="none"
            sx={{ color: 'black', fontSize: 12 }}
          >
            MY ACCOUNT
          </Link>
        </>
      )}

      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 0.5,
          position: 'relative',
        }}
      >
        <Stack
          bgcolor={theme.palette.primary.main}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '70%',
            zIndex: 1,
            borderRadius: 0.5,
          }}
        />
        <Iconify icon="noto:trophy" width={36} sx={{ zIndex: 2, ml: 0.5 }} />
        <Typography color="white" sx={{ zIndex: 2, fontSize: 14, mr: 0.5 }}>
          PICKS
        </Typography>
      </Stack>
      <Stack bgcolor="black" px={1} py={0.4} borderRadius={0.5}>
        <Typography color="white" variant="body1" fontSize={14}>
          SLIP:0
        </Typography>
      </Stack>
      {!lgUp && (
        <IconButton onClick={nav.onTrue}>
          <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
        </IconButton>
      )}
      {/* <LanguagePopover /> */}
      {/* <NotificationsPopover /> */}
      {/* <SettingsButton /> */}
      {/* <AccountPopover /> */}
    </Stack>
  );

  return (
    <AppBar
      sx={{
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          bgcolor: 'background.default',
          height: HEADER.H_DESKTOP_OFFSET,
          borderBottom: `dashed 1px ${theme.palette.divider}`,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { xs: 1, lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
