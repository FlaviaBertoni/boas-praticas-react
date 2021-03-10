/* eslint @typescript-eslint/no-empty-interface: "off" */
import 'styled-components';

import { ThemeType } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
