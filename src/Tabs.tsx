import * as React from 'react';
import type { ViewStyle } from 'react-native';
import { withTheme } from 'react-native-paper';
import Swiper from './Swiper';
import type { Theme } from 'react-native-paper/lib/typescript/types';

import type { IconPosition, Mode } from './utils';

function Tabs({
  children,
  theme,
  dark,
  style,
  mode = 'fixed',
  uppercase = true,
  iconPosition = 'leading',
  showTextLabel = true,
  showLeadingSpace = true,
  disableSwipe = false,
}: {
  children: any;
  theme: Theme;
  dark?: boolean;
  style?: ViewStyle;
  iconPosition?: IconPosition;
  showTextLabel?: boolean;
  showLeadingSpace?: boolean;
  uppercase?: boolean;
  mode?: Mode;
  disableSwipe?: boolean;
}) {
  return (
    <Swiper
      style={style}
      dark={dark}
      theme={theme}
      uppercase={uppercase}
      iconPosition={iconPosition}
      showTextLabel={showTextLabel}
      showLeadingSpace={showLeadingSpace}
      mode={mode}
      disableSwipe={disableSwipe}
    >
      {children}
    </Swiper>
  );
}

export default withTheme(Tabs);
