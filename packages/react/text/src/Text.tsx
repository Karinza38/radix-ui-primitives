import * as React from 'react';
import { cssReset } from '@interop-ui/utils';
import { forwardRef, createStyleObj } from '@interop-ui/react-utils';

const NAME = 'Text';
const DEFAULT_TAG = 'span';

type TextDOMProps = React.ComponentPropsWithoutRef<typeof DEFAULT_TAG>;
type TextOwnProps = {};
type TextProps = TextDOMProps & TextOwnProps;

const Text = forwardRef<typeof DEFAULT_TAG, TextProps>(function Text(props, forwardedRef) {
  const { as: Comp = DEFAULT_TAG, ...textProps } = props;
  return <Comp {...interopDataAttrObj('root')} ref={forwardedRef} {...textProps} />;
});

Text.displayName = NAME;

const [styles, interopDataAttrObj] = createStyleObj(NAME, {
  root: {
    ...cssReset(DEFAULT_TAG),
  },
});

export { Text, styles };
export type { TextProps };
