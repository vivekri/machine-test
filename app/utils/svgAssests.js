import React from 'react';
import Svg, { Path, G, Defs, Circle, Rect, ClipPath, Text, TSpan,RadialGradient,Stop } from 'react-native-svg';

//Search icon
export const SearchBarIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs>
        <ClipPath id="prefix__a">
          <Path className="prefix__a" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)">

        <Path
          d="M15.9 14.5l-3.3-3.3A6.847 6.847 0 0014 7a6.957 6.957 0 00-7-7 6.957 6.957 0 00-7 7 6.957 6.957 0 007 7 6.847 6.847 0 004.2-1.4l3.3 3.3zM2 7a4.951 4.951 0 015-5 4.951 4.951 0 015 5 4.951 4.951 0 01-5 5 4.951 4.951 0 01-5-5z"
          fill={color}
        />
      </G>
    </Svg>
  );
};
