// sections

import { JwtLoginView } from "src/sections/auth/jwt";



// ----------------------------------------------------------------------

export const metadata = {
  title: 'Log In',
};

export default function Page() {
  return <JwtLoginView />;
}
