import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// components
import SvgColor from 'src/components/svg-color';
import { useAuthContext } from 'src/auth/hooks';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { user } = useAuthContext();
  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: 'main',
        items: [
          { title: 'SUBSCRIPTIONS', path: paths.dashboard.subscriptions },
          { title: 'ABOUT US', path: paths.dashboard.aboutus },
          {
            title: 'STRATEGY',
            path: paths.dashboard.strategy,
          },
          {
            title: 'FAQ',
            path: paths.dashboard.faq,
          },
          ...(user
            ? [
                {
                  title: 'MY ACCOUNT',
                  path: paths.dashboard.my_account,
                },
              ]
            : [
                {
                  title: 'LOGIN',
                  path: paths.dashboard.login,
                },
                {
                  title: 'SIGN UP',
                  path: paths.dashboard.signup,
                },
              ]),
        ],
      },
    ],
    [user]
  );

  return data;
}
