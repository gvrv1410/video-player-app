import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const PlayIcon = ({...props}: SvgProps) => {
  return (
    <Svg height="32px" viewBox="0 0 32 32" width="32px" {...props}>
      <Path
        d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm-6 24V8l16.008 8L10 24z"
        fill="#4e4e50"
      />
    </Svg>
  );
};

export default PlayIcon;
