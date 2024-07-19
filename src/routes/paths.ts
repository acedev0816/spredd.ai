// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    subscriptions: `${ROOTS.DASHBOARD}/subscriptions`,
    aboutus: `${ROOTS.DASHBOARD}/aboutus`,
    strategy: `${ROOTS.DASHBOARD}/strategy`,
    faq: `${ROOTS.DASHBOARD}/faq`,
    login: `${ROOTS.DASHBOARD}/login`,
    signup: `${ROOTS.DASHBOARD}/signup`,
    my_account: `${ROOTS.DASHBOARD}/my-account`,
    group: {
      root: `${ROOTS.DASHBOARD}/group`,
      five: `${ROOTS.DASHBOARD}/group/five`,
      six: `${ROOTS.DASHBOARD}/group/six`,
    },
  },
};
