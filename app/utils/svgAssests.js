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


//Microphone icon
export const MicrophoneIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path fill="none" d="M0 0h16v16H0z" />
      <Path
        d="M14.562 6.612a6.463 6.463 0 01-1.455 4.1 6.567 6.567 0 01-3.835 2.116V15.6c0 .132 0 .132-.132.264a.462.462 0 01-.264.136H7.554c-.132 0-.132 0-.264-.132a.183.183 0 010-.264v-2.778a6.567 6.567 0 01-3.835-2.116A6.463 6.463 0 012 6.612a1.01 1.01 0 01.264-.662 1.01 1.01 0 01.661-.264 1.01 1.01 0 01.661.264.727.727 0 01.4.661 3.829 3.829 0 001.32 3.042 4.3 4.3 0 003.041 1.322 3.829 3.829 0 003.041-1.322 4.189 4.189 0 001.19-3.041.935.935 0 011.587-.661.727.727 0 01.397.661zm-9.256 0v-3.7A2.631 2.631 0 016.231.793 2.792 2.792 0 018.347 0a2.466 2.466 0 012.116.926 2.691 2.691 0 01.793 1.983v3.7a2.631 2.631 0 01-.926 2.116 2.691 2.691 0 01-1.983.793 2.792 2.792 0 01-2.116-.793 2.631 2.631 0 01-.925-2.113z"
        fill={color}
      />
    </Svg>
  );
};


//Voice Search Icon
export const VoiceSearchIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G transform="translate(-110 -128)">
        <Circle
          cx={78}
          cy={78}
          r={78}
          transform="translate(110 128)"
          opacity={0.1}
          fill="#6e59a0"
        />
        <Circle
          cx={65}
          cy={65}
          r={65}
          transform="translate(123 141)"
          opacity={0.2}
          fill="#6e59a0"
        />
        <Circle
          cx={52}
          cy={52}
          r={52}
          transform="translate(136 154)"
          opacity={0.3}
          fill="#6e59a0"
        />
        <Circle
          cx={40}
          cy={40}
          r={40}
          transform="translate(148 166)"
          fill="#6e59a0"
        />
        <Path fill="none" d="M173 188h20v20h-20z" />
        <Path
          d="M201.149 201.763a13.453 13.453 0 01-3.028 8.537 13.669 13.669 0 01-7.982 4.4v5.78c0 .275 0 .275-.275.55a.961.961 0 01-.551.275h-2.752c-.275 0-.275 0-.55-.275a.381.381 0 010-.55v-5.78a13.669 13.669 0 01-7.982-4.4 13.453 13.453 0 01-3.029-8.537 2.1 2.1 0 01.551-1.376 2.1 2.1 0 011.376-.551 2.1 2.1 0 011.376.551 1.514 1.514 0 01.826 1.376 7.971 7.971 0 002.753 6.331 8.96 8.96 0 006.331 2.753 7.971 7.971 0 006.331-2.753 8.72 8.72 0 002.477-6.331 1.947 1.947 0 013.3-1.376 1.514 1.514 0 01.828 1.376zm-19.268 0v-7.707a5.477 5.477 0 011.927-4.4 5.811 5.811 0 014.404-1.656 5.133 5.133 0 014.4 1.927 5.6 5.6 0 011.652 4.129v7.707a5.477 5.477 0 01-1.927 4.4 5.6 5.6 0 01-4.129 1.652 5.811 5.811 0 01-4.4-1.652 5.477 5.477 0 01-1.927-4.4z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};


//Close Icon

export const CloseIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path
        d="M19.026.417a1.342 1.342 0 00-1.944 0l-7.36 7.36-7.36-7.36a1.342 1.342 0 00-1.944 0 1.342 1.342 0 000 1.944l7.36 7.36-7.36 7.36a1.342 1.342 0 000 1.944 1.261 1.261 0 00.972.417 1.261 1.261 0 00.972-.417l7.36-7.36 7.36 7.36a1.342 1.342 0 001.944 0 1.342 1.342 0 000-1.944l-7.36-7.36 7.36-7.36a1.342 1.342 0 000-1.944z"
        fill={color}
      />
    </Svg>
  );
};


//Notification icon
export const NotificationIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M8.001 19.784a2.2 2.2 0 002.112-2.89H5.866a2.208 2.208 0 00-.111.667 2.263 2.263 0 002.246 2.223zM3.265 4.201a6.165 6.165 0 00-1.712 4.29v3.512h12.893V8.491a6.166 6.166 0 00-1.712-4.29 6.508 6.508 0 00-2.669-1.688 2.447 2.447 0 00.044-.4 2.112 2.112 0 10-4.223 0 2.451 2.451 0 00.044.4 5.959 5.959 0 00-2.665 1.688zm3.512-2.09a1.223 1.223 0 012.445 0 .615.615 0 01-.022.2 7.609 7.609 0 00-1.023-.089h-.756c-.222.022-.445.044-.645.067z"
        fill={color}
      />
      <Path
        d="M14.448 12.893H1.555a1.556 1.556 0 100 3.112h12.893a1.556 1.556 0 100-3.112z"
        fill={color}
      />
      <G transform="translate(10.612 2)" fill="#e8581c" stroke="#fff">
        <Circle cx={4} cy={4} r={4} stroke="none" />
        <Circle cx={4} cy={4} r={3.5} fill="none" />
      </G>
    </Svg>
  );
};


//Hamburger icon
export const HamburgerIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M16.186 0H12.14a2.024 2.024 0 00-2.024 2.024V6.07a2.024 2.024 0 002.024 2.024h4.046A2.024 2.024 0 0018.21 6.07V2.024A2.024 2.024 0 0016.186 0zm-.319 6.07h-3.408a.319.319 0 01-.319-.319V2.343a.319.319 0 01.319-.319h3.408a.319.319 0 01.319.319v3.408a.319.319 0 01-.319.319z"
        fill="#6d599f" />
      <Path
        className="prefix__b"
        d="M16.186 10.118H12.14a2.024 2.024 0 00-2.024 2.023v4.047a2.023 2.023 0 002.024 2.023h4.046a2.023 2.023 0 002.024-2.023v-4.047a2.024 2.024 0 00-2.024-2.023zm-.319 6.07h-3.408a.319.319 0 01-.319-.32v-3.407a.32.32 0 01.319-.32h3.408a.32.32 0 01.319.32v3.407a.319.319 0 01-.319.319zM6.07 0H2.023A2.023 2.023 0 000 2.024V6.07a2.023 2.023 0 002.023 2.024H6.07A2.024 2.024 0 008.093 6.07V2.024A2.024 2.024 0 006.07 0zm-.32 6.07H2.023V2.343a.319.319 0 01.32-.319H5.75a.32.32 0 01.32.319v3.408a.32.32 0 01-.32.319z"
        fill="#512e6f" />
      <Path
        className="prefix__a"
        d="M6.07 10.118H2.023A2.023 2.023 0 000 12.141v4.047a2.022 2.022 0 002.023 2.023H6.07a2.023 2.023 0 002.023-2.023v-4.047a2.023 2.023 0 00-2.023-2.023zm-.32 6.07H2.343a.32.32 0 01-.32-.32v-3.407a.32.32 0 01.32-.32H5.75a.321.321 0 01.32.32v3.407a.32.32 0 01-.32.319z"
        fill="#6d599f" />
    </Svg>
  );
};

//Dashboard icon
export const DashboardIcon = ({ width, height, color, opacity, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path
        d="M5.714 7.429v8a.572.572 0 01-.571.571H1.714A1.714 1.714 0 010 14.286V7.429a.572.572 0 01.571-.571h4.572a.572.572 0 01.571.571zM14.286 0H1.714A1.714 1.714 0 000 1.714v3.429a.572.572 0 00.571.571h14.858A.572.572 0 0016 5.143V1.714A1.714 1.714 0 0014.286 0zm1.143 6.857h-8a.572.572 0 00-.571.571v8a.572.572 0 00.571.572h6.857A1.714 1.714 0 0016 14.286V7.429a.572.572 0 00-.571-.572z"
        fill={color}
        opacity={opacity}
      />
    </Svg>
  );
};


//Profile icon
export const ProfileIcon = ({ width, height, color, opacity, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path
        d="M0 16v-2c0-2.2 3.6-4 8-4s8 1.8 8 4v2zM4 4a4 4 0 114 4 4 4 0 01-4-4z"
        fill={color}
        opacity={opacity}
      />
    </Svg>
  );
};

//Catalogue icon
export const CatalogueIcon = ({ width, height, color, opacity, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <G transform="translate(-1368 -549)">
        <Path
          className="prefix__a"
          d="M1377 549h5.875a1.125 1.125 0 011.125 1.125V556h-7v-7zM1369.125 549H1375v7h-7v-5.875a1.125 1.125 0 011.125-1.125zM1368 558h7v7h-5.875a1.125 1.125 0 01-1.125-1.125V558z"
          fill={color}
          opacity={opacity} />
        <Rect
          className="prefix__a"
          width={7}
          height={7}
          rx={3.5}
          transform="translate(1377 558)"
          fill={color}
          opacity={opacity}
        />
      </G>
    </Svg>
  );
};

//Home icon
export const HomeIcon = ({ width, height, color, opacity, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path
        d="M8.055 0L0 6.041v10.068h5.437v-4.228a2.618 2.618 0 015.235 0v4.229h5.437V6.041z"
        fill={color}
        opacity={opacity}
      />
    </Svg>
  );
};


//My performance icon
export const MyPerformanceIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M.499 0a.5.5 0 00-.432.743l4.735 8.185h.805l3.24-5.4L6.873.241A.5.5 0 006.448 0zM12.401 0a.5.5 0 00-.424.241L6.761 8.927h7.27L18.783.742a.5.5 0 00-.432-.743zM5.457 9.92v2.378a8.711 8.711 0 017.935-.021V9.92z"
        fill={color} />
      <Path
        d="M9.435 16.672l-.851 2.037a.5.5 0 01-.419.3l-2.21.179 1.683 1.437a.494.494 0 01.161.49l-.51 2.149 1.893-1.148a.5.5 0 01.515 0l1.9 1.148-.513-2.149a.494.494 0 01.161-.49l1.681-1.44-2.21-.18a.5.5 0 01-.42-.3z"
        fill="#e8581c"
      />
      <Path
        className="prefix__a"
        d="M9.446 12.323a7.726 7.726 0 107.783 7.726 7.763 7.763 0 00-7.783-7.726zm5.027 6.844l-2.358 2.016.721 3.008a.5.5 0 01-.742.539l-2.656-1.609-2.65 1.612a.5.5 0 01-.742-.539l.715-3.008-2.358-2.016a.494.494 0 01-.05-.7.5.5 0 01.333-.169l3.1-.254 1.193-2.854a.5.5 0 01.919 0l1.2 2.854 3.1.249a.494.494 0 01.286.869z"
        fill={color} />
    </Svg>
  );
};


//Payer details  icon
export const PayerDetailsIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M9.582 18.007H7.626v-4.3h-4.3v-1.953H.478c.984 5.718 4 8.972 9.107 11.394zM16.107 11.749v1.953h-4.3v4.3H9.851v5.136c5.188-2.46 8.135-5.752 9.106-11.394zM9.848 5.226h1.956v4.3h4.3v1.953h2.894a55.631 55.631 0 00.429-8.543l-3.015-1.445A15.194 15.194 0 009.845-.001zM7.626 5.226h1.956V.004a15.194 15.194 0 00-6.567 1.492L0 2.941a55.94 55.94 0 00.43 8.543h2.894V9.526h4.3z"
        fill={color} />
      <Path
        d="M4.593 12.927v-2.634h3.805v-3.8h2.633v3.8h3.805v2.634h-3.805v3.8H8.398v-3.8z"
        fill="#e8581c"
        fillRule="evenodd"
      />

    </Svg>
  );
};


//Education Center icon
export const EducationCenterIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        d="M21.2 2.868v13.84a1.242 1.242 0 01-1.24 1.24h-4.449a4.62 4.62 0 00-2.834.962 3.372 3.372 0 01-4.2 0 4.567 4.567 0 00-2.834-.962H1.24A1.242 1.242 0 010 16.708V2.868a1.242 1.242 0 011.24-1.24h.835v12.2a.8.8 0 00.86.886H5.01a9.579 9.579 0 013.163.455 4.767 4.767 0 011.9 1.164.714.714 0 001.063.025 5.417 5.417 0 013.138-1.468 23.378 23.378 0 013.517-.152h.531a.782.782 0 00.86-.886V1.679h.81A1.163 1.163 0 0121.2 2.868z"
        fill={color}
      />
      <Path
        className="prefix__b"
        d="M3.543.037v13.18s4.048-.329 6.275 1.037V1.072C7.591-.295 3.543.037 3.543.037zM11.361 1.072v13.183c2.227-1.366 6.275-1.037 6.275-1.037V.037s-4.048-.332-6.275 1.035z"
        fill="#6ab3e3" />
    </Svg>
  );
};


//Opioid icon
export const OpioidIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        d="M22.117 17.611a11.692 11.692 0 017.821-2.964 12.118 12.118 0 015.02 1.115l1.923-1.75c2.53-2.668 2.133-7.419-1.029-10.813C32.71-.236 27.99-.994 25.118 1.362L14.256 11.408a14.925 14.925 0 014.568 2.708 17.6 17.6 0 013.293 3.495z"
        //opacity={0.5}
        fill={color}
      />
      <Path
        d="M20.966 18.749a18.888 18.888 0 00-3.157-3.458 13.919 13.919 0 00-4.8-2.682L1.894 22.883c-2.8 2.59-2.48 7.555.831 11.046 3.217 3.488 8.113 4.216 10.895 1.616l5.126-4.759a12.552 12.552 0 01-.726-4.143 11.8 11.8 0 012.946-7.894z"
        fill={color}
      />
      <Path
        className="prefix__c"
        d="M39.97 23.581l-19.414 7.692A10.477 10.477 0 0039.97 23.58zM26.105 16.861a10.468 10.468 0 00-6.211 12.768l19.426-7.692a10.453 10.453 0 00-13.215-5.076z"
        fill={'#6ab3e3'}
      />
    </Svg>
  );
};


//Clinical Analytics icon
export const ClinicalAnalyticsIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G fillRule="evenodd">
        <Path
          d="M19.894.711A17.015 17.015 0 0015.2 0a12.26 12.26 0 00-3.979.568 13.464 13.464 0 00-3.553 1.563 16.745 16.745 0 00-3.126 2.416 26.139 26.139 0 00-2.416 3.126 16.976 16.976 0 00-1.563 3.695A14.669 14.669 0 000 15.631a13.139 13.139 0 00.568 4.121 16.976 16.976 0 001.563 3.695 13.125 13.125 0 002.416 3.126 16.745 16.745 0 003.126 2.416 16.976 16.976 0 003.695 1.563 10.354 10.354 0 004.263.711V15.631l8.526-12.647A15.355 15.355 0 0019.894.711z"
          fill="#5e4199"
        />
        <Path
          d="M18.474 19.894v14.21a14.669 14.669 0 004.263-.568 16.976 16.976 0 003.695-1.563 18.22 18.22 0 003.126-2.416 16.744 16.744 0 002.416-3.126 16.976 16.976 0 001.563-3.695c.284-.995.568-2.842.568-2.842z"
          fill="#5e4199"
        />
        <Path
          d="M34.105 17.052a15.849 15.849 0 00-.426-3.837A17.815 17.815 0 0032.4 9.663a23.367 23.367 0 00-1.989-3.126 11.127 11.127 0 00-2.842-2.274l-9.095 12.789z"
          fill="#6ab3e3"
        />
      </G>
    </Svg>
  );
};


//Center Performance icon
export const CenterPerformanceIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path
        d="M24.4 12.2A12.2 12.2 0 1112.2 0h.006A12.2 12.2 0 0124.4 12.2z"
        fill="#5e4199"
      />
      <Path
        d="M16.159 6.517h1.725v1.725l-3.331 3.332a2.482 2.482 0 11-1.726-1.725z"
        fill="#6ab3e3"
      />
      <Path
        d="M7.496 4.494a8.86 8.86 0 00-3.966 6.322 8.654 8.654 0 002.177 6.923 8.463 8.463 0 006.493 2.753 8.218 8.218 0 01-6.117-3.075 7.909 7.909 0 01-1.574-6.446 7.614 7.614 0 013.763-5.208 7.477 7.477 0 014.583-.9l1.633-1.633a9.17 9.17 0 00-6.992 1.264z"
        fill="#fff"
      />
    </Svg>
  );
};


//SalesMarketing icon
export const SalesMarketingIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M15.877 0a2.2 2.2 0 102.2 2.2 2.2 2.2 0 00-2.2-2.2zm0 2.931a.733.733 0 11.735-.731.733.733 0 01-.735.731zM21.248 5.373a2.2 2.2 0 102.2 2.2 2.2 2.2 0 00-2.2-2.2zm0 2.931a.733.733 0 11.733-.733.733.733 0 01-.733.733z"
        fill="#6ab3e3" />
      <Path
        d="M11.725 11.724V.759a.735.735 0 00-.733-.736h-.045A11.724 11.724 0 1023.423 12.5a.735.735 0 00-.689-.777H11.725z"
        fill="#5e4199"
      />
      <Path
        d="M14.197 8.212l7.7-7.7a.733.733 0 011.036 0 .733.733 0 010 1.036l-7.7 7.7a.734.734 0 01-1.037 0 .734.734 0 01.001-1.036z"
        fill="#6ab3e3"
      />
    </Svg>
  );
};


//Training Videos icon
export const TrainingVideosIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path
        d="M19.429 2.74H11.7V1.004a1.004 1.004 0 00-2.008 0V2.74H1.958A1.96 1.96 0 000 4.698v11.773a1.96 1.96 0 001.958 1.958H5.7l-2.209 4.117a1.017 1.017 0 00.4 1.355 1.031 1.031 0 00.477.126 1.011 1.011 0 00.879-.527l2.711-5.07H9.69v5.044a1.004 1.004 0 002.008 0v-5.02h1.7l2.711 5.07a1.011 1.011 0 00.879.527 1.121 1.121 0 00.477-.126 1 1 0 00.4-1.355l-2.2-4.116h3.737a1.96 1.96 0 001.958-1.958V4.723a1.928 1.928 0 00-1.874-1.982zM19.4 16.448H2.008v-11.7z"
        fill="#aca1c8"
      />
      <Path
        d="M13.08 10.493L9.822 7.309a.577.577 0 00-.981.413v6.368a.577.577 0 00.981.413l3.258-3.184a.578.578 0 00.01-.816z"
        fill="#522360"
      />
    </Svg>
  );
};


//Pharmacology Pearls icon
export const PharmacologyPearlsIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M28.455 14.603H21.77a.751.751 0 010-1.5h6.685a.751.751 0 010 1.5zM28.455 18.525h-9.688a.751.751 0 01-.078-1.5.5.5 0 01.078 0h9.688a.751.751 0 11.077 1.5.989.989 0 01-.077 0z"
        fill="#aca1c8" />
      <Path
        d="M20.782 1.671a5.707 5.707 0 00-8.07 0L1.668 12.716a5.703 5.703 0 108.07 8.06L20.782 9.741a5.714 5.714 0 000-8.07zM8.462 19.509a3.905 3.905 0 11-5.517-5.527l4.889-4.879 5.518 5.517zM19.506 8.465l-4.889 4.889L9.1 7.827l4.889-4.879a3.901 3.901 0 015.517 5.517z"
        fill="#6e59a0"
      />
      <Path
        className="prefix__a"
        d="M28.455 22.449h-12.69a.751.751 0 11-.078-1.5.5.5 0 01.078 0h12.69a.751.751 0 11.077 1.5zM7.834 9.103l5.518 5.517-4.89 4.889a3.905 3.905 0 11-5.517-5.527l4.889-4.879"
        fill="#aca1c8" />
    </Svg>
  );
};


//Training Articles icon
export const TrainingArticlesIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M20.667 26.448H5.787a1.658 1.658 0 01-1.653-1.653V6.612a1.657 1.657 0 011.653-1.653h14.88a1.658 1.658 0 011.653 1.653v18.183a1.659 1.659 0 01-1.653 1.653zM5.79 6.612v18.183h14.877V6.612z"
        fill="#aca1c8" />
      <Path
        className="prefix__b"
        d="M12.399 11.571h-2.48a.827.827 0 010-1.653h2.48a.827.827 0 010 1.653zM16.532 14.054H9.92a.827.827 0 010-1.653h6.612a.827.827 0 11.057 1.653z"
        fill="#aca1c8" />
      <Path
        className="prefix__c"
        d="M16.532 17.354H9.92a.827.827 0 11-.058-1.653h6.67a.827.827 0 010 1.653zM16.532 20.663H9.92a.827.827 0 010-1.653h6.612a.827.827 0 010 1.653z"
        fill="#6e59a0" />
      <Path
        className="prefix__a"
        d="M4.538 21.489H1.654a1.618 1.618 0 01-1.653-1.583V1.654A1.657 1.657 0 011.654.001h14.877a1.658 1.658 0 011.653 1.653v4.133l-13.417.067v15z"
        fill="#aca1c8" />
    </Svg>
  );
};


//Encounter Metrics icon
export const EncounterMetricsIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        d="M23.787 19.941l-11-9.8-9.061 6.007-1.08-1.629L12.962 7.68l10.567 9.413L34.82 2.582l1.543 1.2z"
        fill="#6ab3e3"
      />
      <Circle
        className="prefix__b"
        cx={3.184}
        cy={3.184}
        transform="translate(0 12.151)"
        r={3.184}
        fill="#5e4199"
      />
      <Circle
        className="prefix__c"
        cx={3.184}
        cy={3.184}
        transform="translate(9.689 5.728)"
        r={3.184}
        fill="#5e4199"
      />
      <Circle
        className="prefix__b"
        cx={3.184}
        cy={3.184}
        transform="translate(20.473 15.335)"
        r={3.184}
        fill="#5e4199"
      />
      <Circle
        className="prefix__c"
        cx={3.184}
        cy={3.184}
        transform="translate(32.406)"
        r={3.184}
        fill="#5e4199"
      />
    </Svg>
  );
};


//Charges & Payments icon
export const ChargesPaymentsIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G transform="translate(-.172 -.039)">
        <Rect
          width={29}
          height={19}
          rx={2}
          transform="translate(.172 .039)"
          fill="#5e4199"
        />
        <Path
          d="M13.687 4.423h1.842v.921a2.777 2.777 0 012.763 2.763H16.45a.907.907 0 00-.921-.921h-1.842a.921.921 0 000 1.842h1.842a2.763 2.763 0 110 5.525v.921h-1.842v-.921a2.777 2.777 0 01-2.762-2.763h1.842a.907.907 0 00.921.921h1.842a.921.921 0 000-1.842h-1.842a2.763 2.763 0 010-5.525z"
          fill="#FFFFFF"
        />
      </G>
    </Svg>
  );
};


// Ancilliary icon
export const AncilliaryIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        d="M13.228 0a1.47 1.47 0 011.47 1.47v8.4l5.374 8.6a3.3 3.3 0 01-2.8 5.055H3.304a3.3 3.3 0 01-2.8-5.054l5.373-8.6v-8.4a1.471 1.471 0 011.47-1.47"
        fill="#5e4199"
      />
      <Path
        d="M14.699 2.941h-8.82a1.47 1.47 0 110-2.941h8.822a1.47 1.47 0 110 2.941z"
        fill="#5e4199"
      />
      <G>
        <Path
          className="prefix__c"
          d="M17.63 15.737a5.866 5.866 0 115.866-5.866 5.876 5.876 0 01-5.866 5.866zM23.063 13.596a.4.4 0 01.576 0l3.231 3.252a1.457 1.457 0 01.432 1.111 1.578 1.578 0 01-.514 1.153 1.678 1.678 0 01-1.132.453 1.561 1.561 0 01-1.111-.473l-3.252-3.252a.4.4 0 010-.576z"
          fill="#6ab3e3" />
      </G>
    </Svg>
  );
};


// Days in clinic icon
export const DaysInClinicIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <G transform="translate(-868.739 -216.509)">
        <Path
          d="M890.3 220.04h-1.176v2.744a1.568 1.568 0 01-3.136 0v-2.744h-10.977v2.744a1.568 1.568 0 01-3.136 0v-2.744H870.7a1.96 1.96 0 00-1.96 1.96v16.071a1.96 1.96 0 001.96 1.96h19.6a1.96 1.96 0 001.96-1.96v-16.074a1.96 1.96 0 00-1.96-1.957z"
          fill="#5e4199"
        />
        <Rect
          className="prefix__b"
          width={1.588}
          height={7.055}
          rx={0.794}
          transform="translate(872.614 216.509)"
          fill="#5e4199"
        />
        <Rect
          className="prefix__b"
          width={1.588}
          height={7.055}
          rx={0.794}
          transform="translate(886.759 216.509)"
          fill="#5e4199"
        />
        <Path
          d="M878.819 234.947a.728.728 0 01-.516-.214l-2.378-2.378a.73.73 0 011.033-1.033l1.861 1.861 5.219-5.219a.73.73 0 011.033 1.033l-5.731 5.737a.729.729 0 01-.521.213z"
          fill="#6ab3e3"
          stroke="#6ab3e3"
          strokeWidth={0.5}
        />
      </G>
    </Svg>
  );
};


// wRVU icon
export const WRVUIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        d="M18.31 9.745v-.118l.332-5.008v-.06a.819.819 0 011.629.03l.3 4.555a.557.557 0 00.151.362l2.021 2.414.03.03a.864.864 0 01-.06 1.086.8.8 0 01-1.116.03l-2.806-2.353c-.06-.03-.091-.09-.151-.121a1.185 1.185 0 01-.332-.845z"
        fill="#6ab3e3"
      />
      <Path
        d="M19.549 0a9.626 9.626 0 00-9.081 6.486 11.039 11.039 0 012.444.543 7.117 7.117 0 117.754 9.594 10.843 10.843 0 01.091 1.418c0 .362-.03.724-.06 1.086A9.6 9.6 0 0019.55 0z"
        fill="#6ab3e3"
      />
      <Path
        d="M9.141 8.9a9.126 9.126 0 109.111 9.111A9.129 9.129 0 009.141 8.9z"
        fill="#5e4199"
      />
      <Path
        className="prefix__d"
        d="M9.185 22.328a2.782 2.782 0 01-1.587-.822.835.835 0 01-.151-.284.522.522 0 01-.024-.16.566.566 0 01.148-.342 1.788 1.788 0 01.834-.482 5.289 5.289 0 01-.845-.279 1.649 1.649 0 00-.572.544 1.116 1.116 0 00-.165.537 1.183 1.183 0 00.164.628 1.659 1.659 0 00.171.247 3.45 3.45 0 001.9 1c.531.117.77.355.772.54a.362.362 0 01-.122.245.966.966 0 01-.257.18l-.023.01v-.515a1.276 1.276 0 00-.435-.167c-.057-.013-.11-.028-.165-.042v.721c-.271-.131-.4-.3-.4-.432a.445.445 0 01.238-.328 4.757 4.757 0 01-.632-.229.908.908 0 00-.206.552c0 .375.263.837 1 1.085.076.026.155.05.241.07h.124a2.63 2.63 0 00.235-.068 2.055 2.055 0 00.439-.2 1.494 1.494 0 00.238-.183.967.967 0 00.325-.7c-.005-.419-.334-.926-1.245-1.126z"
        fill="#f1f3f6" />
      <Path
        className="prefix__d"
        d="M9.426 21.915V20.43a4.877 4.877 0 00-.378-.07l-.222-.037v1.59c.1.033.2.062.307.089l.065-.017a3.44 3.44 0 00.228-.07zM15.573 15.259v-.6a11.248 11.248 0 01-4.267-1.148l-.253-.129-.143.246a2.058 2.058 0 01-3.568 0l-.143-.246-.253.129a11.252 11.252 0 01-4.267 1.148v.6a11.279 11.279 0 004.3-1.1 2.656 2.656 0 00.309.353 4.883 4.883 0 01-2.293.754v.6a5.668 5.668 0 002.809-.967 2.664 2.664 0 001.025.339v3.855c.135.031.269.057.4.076.069.01.135.021.2.033v-3.964a2.659 2.659 0 001.025-.339 5.667 5.667 0 002.809.967v-.6a4.874 4.874 0 01-2.292-.754 2.7 2.7 0 00.309-.353 11.286 11.286 0 004.293 1.1z"
        fill="#f1f3f6" />
      <Path
        className="prefix__d"
        d="M11.174 16.189a1.206 1.206 0 00-.922.033.766.766 0 00-.367.559l.592.1c.019-.108.06-.133.076-.142a.619.619 0 01.407.008.972.972 0 01.618 1.036c-.063.537-.561 1.168-1.724 1.513a3.918 3.918 0 01.857.32 2.312 2.312 0 001.462-1.763 1.58 1.58 0 00-.999-1.664z"
        fill="#f1f3f6" />
      <Path
        className="prefix__d"
        d="M9.182 19.469c-1.728-.259-2.426-1.04-2.5-1.684a.967.967 0 01.606-1.032.864.864 0 01.262-.044.318.318 0 01.156.032c.016.009.057.034.076.142l.592-.1a.765.765 0 00-.367-.559.907.907 0 00-.458-.112 1.47 1.47 0 00-.474.083 1.577 1.577 0 00-.99 1.663c.049.42.413 1.819 3.009 2.208 1.265.189 1.729.638 1.741.994s-.387.8-1.175 1.1a1.976 1.976 0 01.632.374 1.761 1.761 0 001.143-1.49c-.013-.38-.259-1.277-2.253-1.575z"
        fill="#f1f3f6" />
    </Svg>
  );
};


// Comparitive Analytics icon
export const ComparitiveAnalyticsIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G transform="translate(-.255 .284)">
        <Path d="M19.255-.284l7 13h-14z" fill="#6e59a0" />
        <Circle
          cx={7}
          cy={7}
          r={7}
          transform="translate(6.255 4.716)"
          fill="#522360"
        />
        <Path fill="#aca1c8" d="M.255 10.716h10v11h-10z" />
      </G>
    </Svg>
  );
};


// Current Rolling icon
export const CurrentRollingIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        d="M16.2 23.918v-6.252h3.387l-7.627-9.28-7.627 9.28H7.72v6.252z"
        fill="#5e4199"
      />
      <Path
        className="prefix__b"
        d="M13.97 4.078h2.209V0h5.531v4.078h2.209l-4.975 6.052zM4.974 0L0 6.053h2.209v4.077H7.74V6.053h2.209z"
        fill="#6ab3e3" />
    </Svg>
  );
};


// Variance icon
export const VarianceIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G transform="translate(-223.35 -145.125)">
        <Circle
          cx={11.575}
          cy={11.575}
          r={11.575}
          transform="translate(226.134 145.125)"
          fill="#6ab3e3"
        />
        <Path
          d="M224.497 155.553a1.147 1.147 0 000 2.293h8.845a1.123 1.123 0 001.01-.628l.956-1.856 2.921 5.651a1.126 1.126 0 002.02 0l1.638-3.194h1.638a1.147 1.147 0 000-2.293h-2.321a1.123 1.123 0 00-1.01.628l-.955 1.859-2.921-5.624a1.177 1.177 0 00-2.02 0l-1.638 3.194h-4.232l-2.293-.03z"
          fill="#5e4199"
        />
      </G>
    </Svg>
  );
};


// Location icon
export const LocationIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path
        d="M5.767 8.376A2.452 2.452 0 008.223 5.92a2.527 2.527 0 00-2.456-2.543 2.452 2.452 0 00-2.456 2.456 2.589 2.589 0 002.456 2.543zM1.645 1.71a5.83 5.83 0 018.244 8.245l-4.122 4.123-4.122-4.123a5.989 5.989 0 010-8.245z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  );
};


// Payer details Small icon
export const PayerDetailsSmallIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G data-name="Group 346" fillRule="evenodd">
        <Path
          data-name="Path 326"
          d="M6.909 12.984h-1.41v-3.1h-3.1V8.476H.345c.71 4.123 2.886 6.47 6.566 8.215z"
          fill="#5e4199"
        />
        <Path
          data-name="Path 327"
          d="M11.614 8.472V9.88h-3.1v3.1h-1.41v3.7c3.741-1.774 5.865-4.147 6.566-8.215z"
          fill="#5e4199"
        />
        <Path
          data-name="Path 328"
          d="M7.101 3.765h1.41v3.1h3.1v1.409h2.087a40.11 40.11 0 00.31-6.16l-2.174-1.042A10.956 10.956 0 007.099-.004z"
          fill="#5e4199"
        />
        <Path
          data-name="Path 329"
          d="M5.499 3.765h1.41V0a10.956 10.956 0 00-4.735 1.076L0 2.118a40.326 40.326 0 00.31 6.16h2.087V6.869h3.1z"
          fill="#5e4199"
        />
        <Path
          data-name="Path 330"
          d="M3.312 9.324v-1.9h2.744V4.682h1.9v2.742H10.7v1.9H7.956v2.742h-1.9V9.324z"
          fill="#6ab3e3"
        />
      </G>
    </Svg>
  );
};


// Education Center Small icon
export const EducationCenterSmallIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G data-name="Group 336">
        <Path
          data-name="Path 331"
          d="M16.2 2.191v10.577a.949.949 0 01-.947.947h-3.4a3.53 3.53 0 00-2.166.735 2.577 2.577 0 01-3.21 0 3.49 3.49 0 00-2.166-.735H.947A.949.949 0 010 12.768V2.191a.949.949 0 01.947-.947h.638v9.32a.614.614 0 00.657.677h1.586a7.32 7.32 0 012.417.348 3.643 3.643 0 011.45.889.546.546 0 00.812.019 4.14 4.14 0 012.4-1.121 17.865 17.865 0 012.688-.116H14a.6.6 0 00.657-.677v-9.3h.619a.888.888 0 01.924.908z"
          fill="#5e4199"
        />
        <Path
          data-name="Path 332"
          d="M2.707.026V10.1s3.094-.251 4.8.793V.819c-1.706-1.044-4.8-.793-4.8-.793z"
          fill="#6ab3e3"
        />
        <Path
          data-name="Path 333"
          d="M8.682.819v10.074c1.7-1.044 4.8-.793 4.8-.793V.026s-3.1-.251-4.8.793z"
          fill="#6ab3e3"
        />
      </G>
    </Svg>
  );
};


// Coding Newsletter icon
export const CodingNewsletterIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G data-name="Group 478">
        <G data-name="Path 416" fill="#afa5ca">
          <Path data-name="Path 436" d="M12.725 0H0v26h20.025V7.578z" />
          <Path data-name="Path 437" d="M0 0h12.728l7.3 7.578v18.419H.001z" />
        </G>
        <G data-name="Group 387">
          <Path
            data-name="Path 422"
            d="M7.862 11.475L5.71 13.64l2.151 2.164-.713.713-2.875-2.877 2.876-2.876z"
            fill="#522360"
          />
          <Path
            data-name="Path 423"
            d="M12.164 15.802l2.151-2.162-2.151-2.164.713-.713 2.876 2.877-2.876 2.876z"
            fill="#522360"
          />
          <Path
            data-name="Rectangle 1623"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0.25}
            d="M11.107 10.398l-2.188 6.785"
          />
        </G>
      </G>
    </Svg>
  );
};


// Credentialing icon
export const CredentialingIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path
        d="M13.171 0H0v26.9h20.723V7.841zM2.18 24.723V2.182h9.708v6.659h6.654v15.882z"
        fill="#6ab3e3"
      />
      <Path
        d="M14.466 17.423a3.35 3.35 0 00-1.818 6.158v8.512l1.587-2.123 1.92 2.407V23.65a3.343 3.343 0 00-1.692-6.232z"
        fill="#5e4199"
      />
    </Svg>
  );
};


// Payer Guidelines icon
export const PayerGuidelinesIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M29.469 0H14.064a3.277 3.277 0 00-3.283 3.283v20.208a3.277 3.277 0 003.283 3.283h15.405a3.277 3.277 0 003.283-3.283v-20.2A3.277 3.277 0 0029.469 0zm1.768 23.491a1.757 1.757 0 01-1.768 1.768H14.064a1.757 1.757 0 01-1.77-1.768v-20.2a1.757 1.757 0 011.768-1.768h15.405a1.757 1.757 0 011.768 1.768z"
        fill="#6ab3e3" />
      <Path
        className="prefix__a"
        d="M15.832 13.132a.758.758 0 100 1.515h11.365a.758.758 0 100-1.515zM15.832 16.921a.758.758 0 100 1.515h11.365a.758.758 0 100-1.515zM15.832 20.709a.758.758 0 000 1.515h5.177a.758.758 0 100-1.515z"
        fill="#6ab3e3" />
      <Path className="prefix__b" d="M6.36 10.805h9.602v9.602H6.36z"
        fill="#ffffff" />
      <Path
        d="M20.847 9.759a.809.809 0 00-.421-.683l-8.852-4.824a.809.809 0 00-.774 0L1.948 9.076a.808.808 0 00-.421.683c-.316 10.86 5.71 15.226 9.329 16.858l.331.154.331-.149c3.618-1.637 9.644-5.999 9.329-16.863zm-5.631 6.462h-3.22v3.225h-1.615v-3.225h-3.22v-1.609h3.22v-3.22h1.611v3.22h3.224z"
        fill="#5e4199"
      />
      <G>
        <Path
          className="prefix__b"
          d="M11.187 4.077a.808.808 0 01.387.1L20.426 9a.808.808 0 01.421.683c.316 10.865-5.71 15.226-9.329 16.863l-.331.149-.331-.154c-3.619-1.631-9.645-6-9.329-16.858A.809.809 0 011.948 9l8.853-4.824a.808.808 0 01.387-.1m0-1.515a2.329 2.329 0 00-1.112.283L1.223 7.669a2.333 2.333 0 00-1.21 1.965c-.149 5.12 1.021 9.433 3.476 12.827a16.916 16.916 0 006.737 5.458l.322.15.629.293.633-.285.331-.149a16.96 16.96 0 006.746-5.464c2.455-3.394 3.625-7.708 3.476-12.824a2.335 2.335 0 00-1.211-1.97l-8.851-4.825a2.33 2.33 0 00-1.112-.283z"
          fill="#ffffff"
        />
      </G>
    </Svg>
  );
};


// Back  icon
export const BackwardIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
      <G data-name="Backward arrow" clipPath="url(#prefix__a)">
        <Path
          data-name="Path 10"
          d="M8 16l1.455-1.455-5.506-5.506H16V6.961H3.948l5.507-5.506L8 0 0 8z"
          fill="#6e59a0"
        />
      </G>
    </Svg>
  );
};


// Up Arrowicon
export const UpArrowIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G data-name="Group 461" transform="translate(-305 -153)">
        <Circle
          data-name="Ellipse 112"
          cx={14}
          cy={14}
          r={14}
          transform="rotate(180 166.5 90.5)"
          fill="#f1f3f6"
        />
        <G data-name="Group 314">
          <Path
            data-name="Path 337"
            d="M323.845 168.119l-4.657-4.662a.516.516 0 00-.73 0l-4.662 4.662a.516.516 0 000 .727.516.516 0 00.733 0l3.929-3.929a.516.516 0 01.73 0l3.931 3.932a.516.516 0 00.733 0 .516.516 0 00-.007-.73z"
            fill="#707070"
          />
        </G>
      </G>
    </Svg>
  );
};


// Down Arrow icon
export const DownArrowIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G data-name="Group 354" transform="translate(-305 -212)">
        <Circle
          data-name="Ellipse 113"
          cx={14}
          cy={14}
          r={14}
          transform="translate(305 212)"
          fill="#f1f3f6"
        />
        <G data-name="Group 350">
          <Path
            data-name="Path 337"
            d="M314.155 224.881l4.657 4.662a.516.516 0 00.73 0l4.662-4.662a.516.516 0 000-.727.516.516 0 00-.733 0l-3.929 3.929a.516.516 0 01-.73 0l-3.931-3.932a.516.516 0 00-.733 0 .516.516 0 00.007.73z"
            fill="#707070"
          />
        </G>
      </G>
    </Svg>
  );
};

// Forward Arrow icon
export const FrontArrowIcon = ({ width, height, viewbox, color }) => {
  return (
    <Svg
      width={11.459}
      height={11.459}
      viewBox="0 0 11.459 11.459"
    >
      <Path
        d="M5.729 0L4.688 1.042l3.943 3.943H0v1.489h8.631l-3.943 3.943 1.042 1.042 5.729-5.729z"
        fill={color}
      />
    </Svg>
  );
};

// Location grey icon
export const LocationGreyIcon = ({ width, height, viewbox, color }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewbox}
    >
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M2.952 3.04a7.806 7.806 0 0111.039 11.039L8.472 19.6l-5.52-5.52a8.019 8.019 0 010-11.04z"
        fill={'none'}
        stoke={color}

      />
      <Path
        className="prefix__a"
        d="M8.472 11.965a3.283 3.283 0 003.288-3.288 3.384 3.384 0 00-3.288-3.406A3.283 3.283 0 005.183 8.56a3.466 3.466 0 003.289 3.405z"
        fill={'none'}
        stoke={color}
      />
    </Svg>
  )
};


// My Performance sub icon
export const MyPerformanceSubIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M.371 0A.369.369 0 00.05.552l3.519 6.083h.6l2.408-4.013L5.11.179A.369.369 0 004.794 0zM9.217 0a.369.369 0 00-.315.179L5.025 6.635h5.4L13.957.552A.369.369 0 0013.636 0zM4.056 7.373v1.768a6.474 6.474 0 015.9-.016V7.373z"
        fill="#aca1c8" />
      <Path
        d="M7.013 12.392l-.633 1.514a.369.369 0 01-.312.225l-1.642.133 1.251 1.068a.367.367 0 01.12.364l-.379 1.6 1.407-.853a.371.371 0 01.383 0l1.409.853-.382-1.6a.367.367 0 01.12-.364l1.249-1.07-1.642-.134a.369.369 0 01-.312-.225z"
        fill="#e8581c"
      />
      <Path
        className="prefix__a"
        d="M7.025 9.159a5.743 5.743 0 105.785 5.743 5.77 5.77 0 00-5.785-5.743zm3.737 5.087l-1.752 1.5.536 2.236a.369.369 0 01-.552.4l-1.974-1.2-1.97 1.2a.369.369 0 01-.551-.4l.531-2.236-1.752-1.5a.368.368 0 01.21-.644l2.3-.189.887-2.121a.371.371 0 01.683 0l.889 2.121 2.3.185a.367.367 0 01.212.646z"
        fill="#aca1c8" />
    </Svg>
  );
};


// Payer Details sub icon
export const PayerDetailsSubIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M6.909 12.983h-1.41v-3.1h-3.1V8.475H.345c.71 4.123 2.886 6.47 6.566 8.215zM11.614 8.471v1.408h-3.1v3.1h-1.41v3.7c3.741-1.774 5.865-4.147 6.566-8.215zM7.101 3.765h1.41v3.1h3.1v1.409h2.087a40.11 40.11 0 00.31-6.16l-2.174-1.042A10.956 10.956 0 007.099-.004zM5.499 3.765h1.41V0a10.956 10.956 0 00-4.735 1.076L0 2.118a40.326 40.326 0 00.31 6.16h2.087V6.869h3.1z"
        fill="#aca1c8" />
      <Path
        d="M3.312 9.324v-1.9h2.744V4.682h1.9v2.742H10.7v1.9H7.956v2.742h-1.9V9.324z"
        fill="#e8581c"
        fillRule="evenodd"
      />
    </Svg>
  );
};

// Education Center sub icon
export const EducationCenterSubIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        d="M16.2 2.192v10.577a.949.949 0 01-.947.947h-3.4a3.53 3.53 0 00-2.166.735 2.577 2.577 0 01-3.21 0 3.49 3.49 0 00-2.166-.735H.947A.949.949 0 010 12.769V2.192a.949.949 0 01.947-.947h.638v9.32a.614.614 0 00.657.677h1.586a7.32 7.32 0 012.417.348 3.643 3.643 0 011.45.889.546.546 0 00.812.019 4.14 4.14 0 012.4-1.121 17.865 17.865 0 012.688-.116H14a.6.6 0 00.657-.677v-9.3h.619a.888.888 0 01.924.908z"
        fill="#aca1c8"
      />
      <Path
        className="prefix__b"
        d="M2.707.026V10.1s3.094-.251 4.8.793V.819c-1.706-1.044-4.8-.793-4.8-.793zM8.682.819v10.074c1.7-1.044 4.8-.793 4.8-.793V.026s-3.1-.251-4.8.793z"
        fill="#e8581c" />
    </Svg>
  );
};

// Places icon
export const PlacesIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path className="prefix__a" d="M0 0h16v16H0z"
            fill="#ffffff" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)">
        <Path className="prefix__a" d="M0 0h16v16H0z"
          fill="#ffffff" />
        <Path
          d="M7.555 9.52a2.786 2.786 0 002.791-2.791 2.872 2.872 0 00-2.791-2.891 2.786 2.786 0 00-2.792 2.791A2.942 2.942 0 007.555 9.52zM2.869 1.944a6.626 6.626 0 019.371 9.371L7.555 16l-4.686-4.685a6.807 6.807 0 010-9.371z"
          fill="#f7943c"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  );
};

// Forward icon
export const ForwardIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path className="prefix__a" d="M0 0h10v10H0z"
          />
        </ClipPath>
      </Defs>
      <G clipPath="url(#prefix__a)">
        <Path
          d="M8.1 4.701l-4.7 4.7-1.4-1.4 3.3-3.3-3.3-3.3 1.4-1.4z"
          fill={color}
        />

      </G>
    </Svg>
  );
};

// Top 10 icon
export const TopTenIcon = ({ width, height, textColor, backgroundColor, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G transform="translate(-43 -202)">
        <Rect
          width={40}
          height={40}
          rx={10}
          transform="translate(43 202)"
          fill={backgroundColor}
        />
        <Text
          transform="translate(63 233.22)"
          fill={textColor}
          fontSize={14}
          fontFamily="Roboto-Medium,Roboto"
          fontWeight={500}
          letterSpacing=".014em"
        >
          <TSpan x={-8.055} y={0}>
            {"10"}
          </TSpan>
        </Text>
        <Path
          d="M58.5 215.76l4.59-4.59a.58.58 0 01.82 0l4.59 4.59"
          fill="none"
          stroke={textColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  );
};

// Bottom 10 icon
export const BottomTenIcon = ({ width, height, textColor, backgroundColor, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G transform="translate(-93 -202)">
        <Rect
          width={40}
          height={40}
          rx={10}
          transform="translate(93 202)"
          fill={backgroundColor}
        />
        <Text
          transform="translate(113 233.22)"
          fill={textColor}
          fontSize={14}
          fontFamily="Roboto-Medium,Roboto"
          fontWeight={500}
          letterSpacing=".014em"
        >
          <TSpan x={-8.055} y={0}>
            {"10"}
          </TSpan>
        </Text>
        <Path
          d="M108.5 211l4.59 4.59a.58.58 0 00.82 0l4.59-4.59"
          fill="none"
          stroke={textColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  );
};


// Increasing Selected icon
export const IncreasingSelectedIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G transform="translate(-43 -202)">
        <Rect
          width={40}
          height={40}
          rx={10}
          transform="translate(43 202)"
          fill="#609f59"
        />
        <Path
          d="M58.5 224.26l4.59-4.59a.58.58 0 01.82 0l4.59 4.59"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  );
};


// Increasing icon
export const IncreasingIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G stroke="#609f59" fill="none">
        <G>
          <Rect width={40} height={40} rx={10} stroke="none" />
          <Rect x={0.5} y={0.5} width={39} height={39} rx={9.5} />
        </G>
        <Path
          d="M15.5 22.26l4.59-4.59a.58.58 0 01.82 0l4.59 4.59"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  );
};


// Stable Selected icon
export const StableSelectedIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G fill="#6e59a0" stroke="#6e59a0">
        <Rect width={40} height={40} rx={10} stroke="none" />
        <Rect x={0.5} y={0.5} width={39} height={39} rx={9.5} fill="none" />
      </G>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={1.5}
        fill="none"
        d="M14.5 20.5h12"
      />
    </Svg>
  );
};

// Stable  icon
export const StableIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G stroke="#6e59a0">
        <G fill="#f1f3f6">
          <Rect width={40} height={40} rx={10} stroke="none" />
          <Rect x={0.5} y={0.5} width={39} height={39} rx={9.5} fill="none" />
        </G>
        <Path
          strokeLinecap="round"
          strokeWidth={1.5}
          fill="none"
          d="M14.5 20.5h12"
        />
      </G>
    </Svg>
  );
};

// Decreasing Selected icon
export const DecreasingSelectedIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G fill="#e35555" stroke="#e35555">
        <Rect width={40} height={40} rx={10} stroke="none" />
        <Rect x={0.5} y={0.5} width={39} height={39} rx={9.5} fill="none" />
      </G>
      <Path
        d="M15.5 17.5l4.59 4.59a.58.58 0 00.82 0l4.59-4.59"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        fill="none"
      />
    </Svg>
  );
};


// Decreasing icon
export const DecreasingIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G stroke="#e35555">
        <G fill="#f1f3f6">
          <Rect width={40} height={40} rx={10} stroke="none" />
          <Rect x={0.5} y={0.5} width={39} height={39} rx={9.5} fill="none" />
        </G>
        <Path
          d="M15.5 17.5l4.59 4.59a.58.58 0 00.82 0l4.59-4.59"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          fill="none"
        />
      </G>
    </Svg>
  );
};


// Info icon
export const InfoIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G transform="translate(-329 -158)">
        <Circle
          cx={18.5}
          cy={18.5}
          r={18.5}
          transform="translate(329 158)"
          fill="#fff"
        />
        <Path
          d="M348.417 184a8.584 8.584 0 118.584-8.584 8.609 8.609 0 01-8.584 8.584zm0-15.737a7.153 7.153 0 107.153 7.153 7.174 7.174 0 00-7.153-7.152zm0 12.16a.676.676 0 01-.715-.715v-5.007a.716.716 0 011.431 0v5.007a.717.717 0 01-.716.716zm0-9.514a.787.787 0 11-.787.787.794.794 0 01.787-.787z"
          fill="#97979a"
        />
      </G>
    </Svg>
  );
};

// Up and Down icon
export const UpDownIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M4.7 15.1L0 10.4 1.4 9l3.3 3.3L8 9l1.4 1.4zM9.4 4.7L8 6.1 4.7 2.8 1.4 6.1 0 4.7 4.7 0z"
        fill={color}
      />
    </Svg>
  );
};


// Rank icon
export const RankIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <G transform="translate(-337 -466.5)">
        <Circle
          cx={5}
          cy={5}
          r={5}
          transform="translate(339 468)"
          fill="#e0dfe9"
        />
        <Path
          className="prefix__b"
          d="M350.469 472.945l-.822-.571a.885.885 0 01-.284-1.06l.425-.907a.468.468 0 00-.41-.711l-1-.086a.885.885 0 01-.776-.776l-.086-1a.469.469 0 00-.711-.411l-.907.425a.885.885 0 01-1.06-.284l-.572-.822a.468.468 0 00-.821 0l-.573.822a.885.885 0 01-1.06.284l-.907-.425a.468.468 0 00-.711.411l-.086 1a.885.885 0 01-.776.776l-1 .086a.469.469 0 00-.414.708l.425.908a.886.886 0 01-.279 1.062l-.822.574a.468.468 0 000 .821l.822.573a.886.886 0 01.284 1.06l-.425.908a.468.468 0 00.41.71l1 .086a.885.885 0 01.776.776l.086 1a.469.469 0 00.711.411l.908-.425a.885.885 0 011.06.284l.573.822a.469.469 0 00.821 0l.573-.822a.885.885 0 011.06-.284l.908.425a.468.468 0 00.709-.419l.086-1a.885.885 0 01.776-.776l1-.086a.469.469 0 00.411-.711l-.425-.908a.886.886 0 01.284-1.06l.822-.573a.469.469 0 00-.003-.815zm-6.613 4.534a4.124 4.124 0 114.124-4.124 4.124 4.124 0 01-4.124 4.125z"
          fill={color} />
        <Path
          className="prefix__b"
          d="M347.065 480.426a1.674 1.674 0 01-.714-.163l-.737-.345-.465.667a1.54 1.54 0 01-2.585 0l-.465-.667-.737.345a1.676 1.676 0 01-.714.163 1.52 1.52 0 01-.467-.079v5.8c0 .2.129.261.286.142l3.1-2.347a.5.5 0 01.572 0l3.1 2.347c.157.119.286.055.286-.142v-5.8a1.516 1.516 0 01-.467.079z"
          fill={color} />
      </G>
    </Svg>
  );
};


// My Rank icon
export const MyRankIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G transform="translate(-337 -466.5)">
        <Circle
          cx={7.356}
          cy={7.356}
          r={7.356}
          transform="translate(339.277 468.353)"
          fill="#e0dfe9"
        />
        <Path
          d="M355.931 475.559l-1.155-.807a1.244 1.244 0 01-.4-1.489l.6-1.275a.658.658 0 00-.577-1l-1.4-.12a1.244 1.244 0 01-1.095-1.094l-.12-1.4a.659.659 0 00-1-.577l-1.275.6a1.244 1.244 0 01-1.49-.4l-.806-1.157a.658.658 0 00-1.154 0l-.806 1.155a1.244 1.244 0 01-1.49.4l-1.275-.6a.658.658 0 00-1 .577l-.12 1.4a1.243 1.243 0 01-1.091 1.09l-1.4.12a.658.658 0 00-.577 1l.6 1.276a1.245 1.245 0 01-.4 1.49l-1.155.806a.658.658 0 000 1.154l1.155.806a1.245 1.245 0 01.4 1.49l-.6 1.276a.658.658 0 00.577 1l1.4.12a1.244 1.244 0 011.091 1.09l.12 1.4a.659.659 0 001 .577l1.276-.6a1.244 1.244 0 011.49.4l.806 1.155a.659.659 0 001.154 0l.804-1.148a1.244 1.244 0 011.49-.4l1.276.6a.658.658 0 001-.577l.12-1.4a1.243 1.243 0 011.091-1.09l1.4-.12a.658.658 0 00.577-1l-.6-1.276a1.245 1.245 0 01.4-1.49l1.155-.805a.659.659 0 00.004-1.157zm-9.3 6.373a5.8 5.8 0 115.8-5.8 5.8 5.8 0 01-5.795 5.8z"
          fill="#6e59a0"
        />
        <Path
          d="M351.146 486.073a2.353 2.353 0 01-1-.229l-1.036-.485-.654.938a2.165 2.165 0 01-3.634 0l-.654-.938-1.036.485a2.355 2.355 0 01-1 .229 2.136 2.136 0 01-.657-.11v8.154c0 .277.181.367.4.2l4.362-3.3a.707.707 0 01.8 0l4.362 3.3c.221.167.4.077.4-.2v-8.15a2.131 2.131 0 01-.656.11z"
          fill="#97979a"
        />
      </G>
    </Svg>
  );
};


// Percentile Rank icon
export const PercentileRankIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        d="M16.514 5.475l.971.971L18.633.883 13.07 2.031l.971.883L2.472 14.483l-.971-.971-1.148 5.651 5.652-1.148-.971-.971z"
        fill="#6e59a0"
      />
      <Path
        className="prefix__b"
        d="M4.416 8.919a4.523 4.523 0 004.5-4.5 4.46 4.46 0 10-4.5 4.5zm0-3.179A1.207 1.207 0 013.179 4.5a1.207 1.207 0 011.237-1.233A1.207 1.207 0 015.652 4.5a1.207 1.207 0 01-1.236 1.24zM15.013 10.597a4.46 4.46 0 000 8.919 4.46 4.46 0 100-8.919zm0 3.267a1.236 1.236 0 11-1.237 1.233 1.207 1.207 0 011.237-1.233z"
        fill="#97979a" />
    </Svg>
  );
};

// Categories  icon
export const CategoriesIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <G transform="translate(1232 -84)">
        <Path
          className="prefix__a"
          d="M-1223 84h5.875a1.125 1.125 0 011.125 1.125V91h-7v-7zM-1230.875 84h5.875v7h-7v-5.875a1.125 1.125 0 011.125-1.125zM-1232 93h7v7h-5.875a1.125 1.125 0 01-1.125-1.125V93z"
          fill={color}
        />
        <Rect
          width={7}
          height={7}
          rx={3.5}
          transform="translate(-1223 93)"
          fill="#6ab3e3"
        />
      </G>
    </Svg>
  );
};


// No Data Message  icon
export const NoDataIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <G transform="translate(23.407 14.003)">
        <Path
          className="prefix__a"
          d="M6.1 0H.678A.729.729 0 000 .678v2.035a79.036 79.036 0 00.848 11.868l.339 1.611a2.841 2.841 0 001.526 2.119 1.8 1.8 0 001.526 0 2.841 2.841 0 001.526-2.119l.254-1.611a79.036 79.036 0 00.848-11.868V.678A.8.8 0 006.1 0z"
          fill="#6e59a0" />
        <Circle
          className="prefix__a"
          cx={2.543}
          cy={2.543}
          transform="translate(.848 20.516)"
          r={2.543}
        />
      </G>
      <Path
        d="M34.31 45.321l-1.207.469a19.5 19.5 0 01-12.598-.128A19.754 19.754 0 018.338 20.586 19.281 19.281 0 0118.422 9.265a19.341 19.341 0 0115.103-.896h0a19.781 19.781 0 016.722 33.336l-.813.796.07 1.1a17.873 17.873 0 001.03 4.3 9 9 0 00.504 1.14 18.044 18.044 0 01-3.61-1.493 17.179 17.179 0 01-2.264-1.497zm9.823 7.495z"
        fill="none"
        stroke="#aca1c8"
        strokeMiterlimit={10}
        strokeWidth={3}
      />
    </Svg>
  );
};

// Edit  icon
export const EditIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <G transform="translate(-318 -23)">
        <Circle
          cx={16}
          cy={16}
          r={16}
          transform="translate(318 23)"
          fill="#f1f3f6"
        />
        <Path
          className="prefix__b"
          d="M328.927 41.12l3.689 3.581 7.106-7.319-3.689-3.58zM331.663 45.68l-3.689-3.581-1.558 5.05zM337.588 32.2l-.6.615 3.689 3.581.6-.615a2.571 2.571 0 00-.054-3.635 2.57 2.57 0 00-3.635.054z"
        />
      </G>
    </Svg>
  );
};

// Percentile  icon
export const PercentileIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G data-name="Group 235">
        <G data-name="Group 225" fill="#6e59a0">
          <Path
            data-name="Path 348"
            d="M15.906 5.351h-5.074a1.452 1.452 0 00-1.5 1.529v6.931a1.514 1.514 0 001.1 1.478c.127.025.255.051.408.076v4.867a1.438 1.438 0 001.529 1.554h2.089a1.38 1.38 0 001.019-.382 1.468 1.468 0 00.484-1.121V15.39c1.019-.229 1.5-.688 1.5-1.529q.038-3.478 0-6.956a1.528 1.528 0 00-1.555-1.554z"
          />
          <Path
            data-name="Path 349"
            d="M13.358 4.867a2.447 2.447 0 002.446-2.446 2.433 2.433 0 10-2.446 2.446z"
          />
        </G>
        <Path
          data-name="Path 348"
          d="M25.132 7.558h-4.391a1.257 1.257 0 00-1.3 1.324v6a1.311 1.311 0 00.949 1.279c.11.022.221.044.353.066v4.213a1.245 1.245 0 001.324 1.346h1.809a1.2 1.2 0 00.882-.331 1.271 1.271 0 00.419-.971v-4.235c.882-.2 1.3-.6 1.3-1.324q.033-3.011 0-6.022a1.323 1.323 0 00-1.345-1.345z"
          fill="#9d8fbf"
        />
        <Path
          data-name="Path 349"
          d="M22.931 7.138a2.118 2.118 0 002.113-2.113 2.107 2.107 0 10-2.113 2.113z"
          fill="#9d8fbf"
        />
        <Path
          data-name="Path 348"
          d="M5.691 7.558H1.3A1.257 1.257 0 000 8.882v6a1.311 1.311 0 00.949 1.279c.11.022.221.044.353.066v4.213a1.245 1.245 0 001.324 1.346h1.809a1.2 1.2 0 00.882-.331 1.271 1.271 0 00.419-.971v-4.235c.882-.2 1.3-.6 1.3-1.324q.033-3.011 0-6.022a1.323 1.323 0 00-1.345-1.345z"
          fill="#9d8fbf"
        />
        <Path
          data-name="Path 349"
          d="M3.489 7.138a2.118 2.118 0 002.113-2.113 2.107 2.107 0 10-2.113 2.113z"
          fill="#9d8fbf"
        />
      </G>
    </Svg>
  );
};

// CheckBox icon
export const CheckBoxIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G transform="translate(-77 -549)">
        <Rect
          width={20}
          height={20}
          rx={6}
          transform="translate(77 549)"
          fill={color}
        />
        <Path fill="none" d="M82 554h10v10H82z" />
        <Path
          d="M85.897 562.356l-4.23-4.23.858-.858 3.372 3.311L91.475 555l.858.858z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};

// My Percentile icon with circle
export const MyPercentileIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <G transform="translate(-323 -198)">
        <Circle
          cx={17}
          cy={17}
          r={17}
          transform="translate(323 198)"
          fill="#f1f3f6"
        />
        <G transform="translate(-4 -261.5)">
          <Circle
            cx={5}
            cy={5}
            r={5}
            transform="translate(339 468)"
            fill="#e0dfe9"
          />
          <Path
            className="prefix__c"
            d="M350.469 472.945l-.822-.571a.885.885 0 01-.284-1.06l.425-.907a.468.468 0 00-.41-.711l-1-.086a.885.885 0 01-.776-.776l-.086-1a.469.469 0 00-.711-.411l-.907.425a.885.885 0 01-1.06-.284l-.572-.822a.468.468 0 00-.821 0l-.573.822a.885.885 0 01-1.06.284l-.907-.425a.468.468 0 00-.711.411l-.086 1a.885.885 0 01-.776.776l-1 .086a.469.469 0 00-.414.708l.425.908a.886.886 0 01-.279 1.062l-.822.574a.468.468 0 000 .821l.822.573a.886.886 0 01.284 1.06l-.425.908a.468.468 0 00.41.71l1 .086a.885.885 0 01.776.776l.086 1a.469.469 0 00.711.411l.908-.425a.885.885 0 011.06.284l.573.822a.469.469 0 00.821 0l.573-.822a.885.885 0 011.06-.284l.908.425a.468.468 0 00.709-.419l.086-1a.885.885 0 01.776-.776l1-.086a.469.469 0 00.411-.711l-.425-.908a.886.886 0 01.284-1.06l.822-.573a.469.469 0 00-.003-.815zm-6.613 4.534a4.124 4.124 0 114.124-4.124 4.124 4.124 0 01-4.124 4.125z"
            fill="#6e59a0" />
          <Path
            className="prefix__c"
            d="M347.065 480.426a1.674 1.674 0 01-.714-.163l-.737-.345-.465.667a1.54 1.54 0 01-2.585 0l-.465-.667-.737.345a1.676 1.676 0 01-.714.163 1.52 1.52 0 01-.467-.079v5.8c0 .2.129.261.286.142l3.1-2.347a.5.5 0 01.572 0l3.1 2.347c.157.119.286.055.286-.142v-5.8a1.516 1.516 0 01-.467.079z"
            fill="#6e59a0" />
        </G>
      </G>
    </Svg>
  );
};

//My Data Icon
export const MyDataIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G
        data-name="Group 716"
        transform="translate(-243.149 -24.237)"
        fill={color}
      >
        <Path
          data-name="Path 1158"
          d="M249.793 29.664a.175.175 0 00-.211 0 3.534 3.534 0 01-4.164 0 .175.175 0 00-.211 0 5.288 5.288 0 00-2.058 4.632c0 1.38 8.726 1.38 8.726 0a5.389 5.389 0 00-2.082-4.632z"
        />
        <Circle
          data-name="Ellipse 148"
          cx={2.597}
          cy={2.597}
          r={2.597}
          transform="translate(244.903 24.237)"
        />
      </G>
    </Svg>
  );
};

//Midlevel Data Icon
export const MidlevelDataIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G data-name="Group 715">
        <G data-name="Group 714" fill={color}>
          <Path
            data-name="Path 1155"
            d="M7.814 6.597a3.982 3.982 0 00-1.17-1.17.175.175 0 00-.211 0 3.534 3.534 0 01-4.164 0 .175.175 0 00-.211 0A5.288 5.288 0 000 10.059c0 .842 3.322 1.17 5.849.983a6.231 6.231 0 011.965-4.445z"
          />
          <Circle
            data-name="Ellipse 145"
            cx={2.597}
            cy={2.597}
            r={2.597}
            transform="translate(1.755)"
          />
          <Path
            data-name="Path 1156"
            d="M20.166 5.427a.175.175 0 00-.211 0 3.534 3.534 0 01-4.164 0 .175.175 0 00-.211 0 4.282 4.282 0 00-1.17 1.17 6.231 6.231 0 011.966 4.445c2.55.187 5.849-.117 5.849-.983a5.288 5.288 0 00-2.059-4.632z"
          />
          <Circle
            data-name="Ellipse 146"
            cx={2.597}
            cy={2.597}
            r={2.597}
            transform="translate(15.276)"
          />
          <Path
            data-name="Path 1157"
            d="M13.405 6.971a.175.175 0 00-.211 0 3.534 3.534 0 01-4.164 0 .175.175 0 00-.211 0 5.288 5.288 0 00-2.058 4.632c0 1.38 8.726 1.38 8.726 0a5.389 5.389 0 00-2.082-4.632z"
          />
          <Circle
            data-name="Ellipse 147"
            cx={2.597}
            cy={2.597}
            r={2.597}
            transform="translate(8.516 1.544)"
          />
        </G>
      </G>
    </Svg>
  );
};

// NSPC Average icon 
export const NspcAvgIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G data-name="Group 768" stroke="#7754f8" strokeWidth={2}>
        <Path
          data-name="Line 157"
          fill="none"
          strokeLinecap="round"
          d="M1 5.5h30"
        />
        <G data-name="Ellipse 150" transform="translate(11.5)" fill="#fff">
          <Circle cx={5} cy={5} r={5} stroke="none" />
          <Circle cx={5} cy={5} r={4} fill="none" />
        </G>
      </G>
    </Svg>
  );
};

// Regional Average icon 
export const RegionalAvgIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path
        className="prefix__st0"
        d="M30 5.5c0-.6.5-1 1-1s1 .4 1 1c0 .5-.5 1-1 1s-1-.5-1-1zM26 5.5c0-.6.5-1 1-1s1 .4 1 1c0 .5-.5 1-1 1s-1-.5-1-1zM22 5.5c0-.6.5-1 1-1s1 .4 1 1c0 .5-.5 1-1 1s-1-.5-1-1zM8 5.5c0-.6.4-1 1-1 .5 0 1 .4 1 1 0 .5-.5 1-1 1-.6 0-1-.5-1-1zM4 5.5c0-.6.4-1 1-1 .5 0 1 .4 1 1 0 .5-.5 1-1 1-.6 0-1-.5-1-1zM0 5.5c0-.6.4-1 1-1 .5 0 1 .4 1 1 0 .5-.5 1-1 1-.6 0-1-.5-1-1z"
        fill='#22B3EB' />
      <G id="prefix__Ellipse_143">
        <Circle
          cx={-15}
          cy={-518}
          r={5}
          fill="#fff"
          transform="translate(31 523)"
        />
        <Path
          className="prefix__st0"
          d="M-15-513c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"
          transform="translate(31 523)"
          fill='#22B3EB'
        />
      </G>
    </Svg>
  );
};

// My Info icon
export const MyInfoIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G transform="translate(-137.709 -78.709)">
        <Circle
          cx={0.808}
          cy={0.808}
          r={0.808}
          transform="translate(142.721 81.354)"
        />
        <Path d="M144.201 84.377v2.664a.673.673 0 01-1.345 0v-2.664a.673.673 0 111.345 0z" />
        <Path
          d="M143.529 78.709a5.82 5.82 0 105.82 5.82 5.82 5.82 0 00-5.82-5.82zm3.38 9.2a4.785 4.785 0 01-6.821-6.706l.058-.058a4.785 4.785 0 116.824 6.71z"
          opacity={0.3}
        />
      </G>
    </Svg>
  );
};

// Close Small icon
export const CloseSmallIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path className="prefix__a" d="M.707.707l7 7M7.707.707l-7 7"
        stroke={'#000000'} />
    </Svg>
  );
};

// Percentile Charges Payments Small icon
export const PercentileChargesPaymentsIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G data-name="Group 752" transform="translate(-337 -466.5)">
        <Circle
          data-name="Ellipse 111"
          cx={5}
          cy={5}
          r={5}
          transform="translate(339 468)"
          fill="#e0dfe9"
        />
        <Path
          data-name="Path 391"
          d="M350.469 472.945l-.822-.571a.885.885 0 01-.284-1.06l.425-.907a.468.468 0 00-.41-.711l-1-.086a.885.885 0 01-.776-.776l-.086-1a.469.469 0 00-.711-.411l-.907.425a.885.885 0 01-1.06-.284l-.572-.822a.468.468 0 00-.821 0l-.573.822a.885.885 0 01-1.06.284l-.907-.425a.468.468 0 00-.711.411l-.086 1a.885.885 0 01-.776.776l-1 .086a.469.469 0 00-.414.708l.425.908a.886.886 0 01-.279 1.062l-.822.574a.468.468 0 000 .821l.822.573a.886.886 0 01.284 1.06l-.425.908a.468.468 0 00.41.71l1 .086a.885.885 0 01.776.776l.086 1a.469.469 0 00.711.411l.908-.425a.885.885 0 011.06.284l.573.822a.469.469 0 00.821 0l.573-.822a.885.885 0 011.06-.284l.908.425a.468.468 0 00.709-.419l.086-1a.885.885 0 01.776-.776l1-.086a.469.469 0 00.411-.711l-.425-.908a.886.886 0 01.284-1.06l.822-.573a.469.469 0 00-.003-.815zm-6.613 4.534a4.124 4.124 0 114.124-4.124 4.124 4.124 0 01-4.124 4.125z"
          fill="#6e59a0"
        />
        <Path
          data-name="Path 393"
          d="M347.065 480.426a1.674 1.674 0 01-.714-.163l-.737-.345-.465.667a1.54 1.54 0 01-2.585 0l-.465-.667-.737.345a1.676 1.676 0 01-.714.163 1.52 1.52 0 01-.467-.079v5.8c0 .2.129.261.286.142l3.1-2.347a.5.5 0 01.572 0l3.1 2.347c.157.119.286.055.286-.142v-5.8a1.516 1.516 0 01-.467.079z"
          fill="#6e59a0"
        />
      </G>
    </Svg>
  );
};


// No Internet icon
export const NoInternetIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G data-name="Group 571">
        <G data-name="Group 569" fill="#fff">
          <Path
            data-name="Path 1140"
            d="M10.032 6.254v5.901a.962.962 0 001.273.846.974.974 0 00.648-.96V4.105z"
            opacity={0.3}
          />
          <Path
            data-name="Path 1141"
            d="M6.688 8.178v-3.88A.962.962 0 018.61 4.21v7.822a.97.97 0 01-.391.824.908.908 0 01-.967.107.932.932 0 01-.564-.8 1.6 1.6 0 010-.178z"
            opacity={0.3}
          />
          <Path
            data-name="Path 1142"
            d="M5.27 9.486v2.583a.962.962 0 01-1.922.086v-.1-5.147a.952.952 0 01.368-.788.905.905 0 011-.119.924.924 0 01.558.848c.01.241 0 .482 0 .723z"
            opacity={0.3}
          />
          <Path
            data-name="Path 1143"
            d="M1.925 10.779c0 .442.007.884 0 1.325a.957.957 0 01-1.44.819.914.914 0 01-.478-.813q-.012-1.329 0-2.66a.96.96 0 011.921-.005v.028q-.003.654-.003 1.306z"
            opacity={0.3}
          />
        </G>
        <G
          data-name="Group 570"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit={10}
        >
          <Path data-name="Line 116" d="M10.167.707l3.577 3.577" />
          <Path data-name="Line 117" d="M13.744.707l-3.577 3.577" />
        </G>
      </G>
    </Svg>
  );
};

// Error info icon
export const ErrorInfoIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <G transform="translate(-137.709 -78.709)">
        <Circle
          className="prefix__a"
          cx={0.808}
          cy={0.808}
          r={0.808}
          transform="translate(142.721 81.354)"
          fill="#fff"
        />
        <Path
          className="prefix__a"
          d="M144.201 84.377v2.664a.673.673 0 01-1.345 0v-2.664a.673.673 0 111.345 0z"
          fill="#fff"
        />
        <Path
          d="M143.529 78.709a5.82 5.82 0 105.82 5.82 5.82 5.82 0 00-5.82-5.82zm3.38 9.2a4.785 4.785 0 01-6.821-6.706l.058-.058a4.785 4.785 0 116.824 6.71z"
          opacity={0.3}
          fill="#fff"
        />
      </G>
    </Svg>
  );
};

// Page Not Found icon
export const PageNotFoundIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M16.502 30.013H1.134L0 23.464l16.089-23h9.282v22.329h4.074v7.219h-4.074v6.755h-8.87zm.051-7.168V12.17L9.23 22.845zM32.382 19.132v-.774C32.382 7.632 38.054 0 47.182 0c9.076 0 14.7 7.529 14.7 18.306v.774c0 10.727-5.672 18.359-14.8 18.359s-14.7-7.529-14.7-18.307zm20.163 0v-.722c0-6.6-2.217-10.108-5.466-10.108s-5.363 3.4-5.363 10v.722c0 6.6 2.166 10.108 5.466 10.108 3.249.004 5.363-3.451 5.363-10zM80.802 30.013H65.434L64.3 23.464l16.09-23h9.282v22.329h4.074v7.219h-4.074v6.755h-8.87zm.051-7.168V12.17L73.53 22.845z"
        fill="#aca1c8" />
    </Svg>
  );
};


// Help center icon
export const HelpCenterIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path
        d="M7.259 0a7.259 7.259 0 107.259 7.259A7.258 7.258 0 007.259 0zm-.185 11.39A.887.887 0 118 10.5a.9.9 0 01-.926.89zM8.8 7.221c-.749.435-1 .753-1 1.3v.34H6.309l-.013-.37A1.791 1.791 0 017.311 6.6c.727-.434 1.032-.71 1.032-1.243a1.044 1.044 0 00-1.157-.925A1.088 1.088 0 006.033 5.49H4.506c.03-1.385 1.054-2.366 2.783-2.366 1.613 0 2.723.895 2.723 2.181A2.106 2.106 0 018.8 7.221z"
        fill={color}
      />
    </Svg>
  );
};

// Expand icon
export const ExpandIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path d="M.151.881l4.661 4.661a.516.516 0 00.73 0L10.203.881a.516.516 0 000-.727.516.516 0 00-.733 0L5.539 4.085a.516.516 0 01-.73 0L.885.151a.516.516 0 00-.733 0 .516.516 0 00-.001.73z" />
    </Svg>
  );
};

// Collapse icon
export const CollapseIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path d="M10.204 4.813L5.543.152a.516.516 0 00-.73 0L.152 4.813a.516.516 0 000 .727.516.516 0 00.733 0l3.931-3.931a.516.516 0 01.73 0L9.47 5.543a.516.516 0 00.733 0 .516.516 0 00.001-.73z" />
    </Svg>
  );
};


// Monthly Trends icon
export const MonthlyTrendsIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <G data-name="Group 927">
        <Path
          data-name="Path 1205"
          d="M21.714.061a2.159 2.159 0 00-2.179 2.129 2.118 2.118 0 00.4 1.249L16.12 7.333a2.176 2.176 0 00-.72-.127 2.172 2.172 0 00-.806.155l-4.143-4.3A2.126 2.126 0 0010.029.64 2.167 2.167 0 008.503.004H8.49a2.164 2.164 0 00-1.526.618 2.126 2.126 0 00-.254 2.764L2.91 7.28a2.19 2.19 0 00-.72-.127h-.012a2.166 2.166 0 00-1.526.618 2.131 2.131 0 00-.056 3.013l.038.038a2.167 2.167 0 001.526.636h.013a2.164 2.164 0 001.526-.618 2.126 2.126 0 00.074-2.978l3.713-3.794a2.177 2.177 0 00.989.254h.013a2.163 2.163 0 001.315-.443l3.947 4.082a2.121 2.121 0 00-.537 1.383 2.159 2.159 0 002.157 2.159 2.159 2.159 0 002.169-2.134 2.123 2.123 0 00-.572-1.46l3.713-3.8a2.17 2.17 0 00.987.254 2.147 2.147 0 100-4.293z"
          fill="#e12f6c"
        />
      </G>
    </Svg>
  );
};


// Location midlevel
export const LocationMidlevelIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <G transform="translate(-316 -133)">
        <Circle
          cx={15}
          cy={15}
          r={15}
          transform="translate(316 133)"
          fill="#f7943c"
        />
        <Path fill="none" d="M323 140h16v16h-16z" />
        <Path
          d="M330.555 149.52a2.786 2.786 0 002.791-2.791 2.872 2.872 0 00-2.791-2.891 2.786 2.786 0 00-2.792 2.791 2.942 2.942 0 002.792 2.891zm-4.686-7.576a6.626 6.626 0 019.371 9.371L330.555 156l-4.686-4.685a6.807 6.807 0 010-9.371z"
          fill="#fff"
          fillRule="evenodd"
        />
      </G>
    </Svg>
  );
};

// Percentile Popup icon
export const PercentilePopupIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <G transform="translate(-337 -466.5)">
        <Circle
          cx={8.933}
          cy={8.933}
          r={8.933}
          transform="translate(340.573 469.18)"
          fill="#e0dfe9"
        />
        <Path
          className="prefix__b"
          d="M361.065 478.016l-1.468-1.026a1.581 1.581 0 01-.507-1.893l.758-1.623a.837.837 0 00-.73-1.268l-1.784-.153a1.581 1.581 0 01-1.386-1.386l-.153-1.783a.837.837 0 00-1.27-.734l-1.621.759a1.581 1.581 0 01-1.894-.507l-1.028-1.469a.837.837 0 00-1.467 0l-1.024 1.468a1.581 1.581 0 01-1.894.507l-1.621-.759a.837.837 0 00-1.27.734l-.153 1.784a1.581 1.581 0 01-1.386 1.386l-1.784.153a.837.837 0 00-.734 1.27l.76 1.622a1.583 1.583 0 01-.507 1.894l-1.469 1.024a.837.837 0 000 1.467l1.468 1.024a1.583 1.583 0 01.507 1.894l-.76 1.622a.836.836 0 00.733 1.269l1.784.153a1.581 1.581 0 011.386 1.386l.153 1.784a.837.837 0 001.27.734l1.622-.76a1.582 1.582 0 011.894.507l1.028 1.469a.837.837 0 001.467 0l1.024-1.468a1.581 1.581 0 011.894-.507l1.622.759a.837.837 0 001.27-.734l.153-1.784a1.581 1.581 0 011.386-1.386l1.784-.153a.837.837 0 00.734-1.27l-.759-1.622a1.583 1.583 0 01.507-1.894l1.468-1.024a.837.837 0 00-.003-1.466zm-11.816 8.1a7.368 7.368 0 117.369-7.367 7.368 7.368 0 01-7.369 7.368z"
          fill='#6e59a0' />
        <Path
          className="prefix__b"
          d="M354.982 491.381a2.991 2.991 0 01-1.275-.292l-1.317-.616-.832 1.192a2.752 2.752 0 01-4.619 0l-.832-1.192-1.317.616a2.993 2.993 0 01-1.275.292 2.715 2.715 0 01-.835-.14v10.36c0 .352.23.467.511.254l5.545-4.193a.9.9 0 011.023 0l5.545 4.193c.281.213.511.1.511-.254v-10.36a2.708 2.708 0 01-.834.14z"
          fill='#6e59a0' />
      </G>
    </Svg>
  );
};

// Administrative Education icon
export const AdministrativeEducationIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M18.063 4.5v3.082h-.028a5.169 5.169 0 00-1.3.25 6.853 6.853 0 00-1.36.666 6.153 6.153 0 00-1.222 1.027 6.687 6.687 0 00-.805 1H8.985V2.332A14.682 14.682 0 012.1 5.053v5.5h6.885v7.913a4.606 4.606 0 01.444-.167c.472-.222.944-.444 1.416-.639a11.764 11.764 0 001.638-1.03 5.045 5.045 0 00.722 1.555 3.516 3.516 0 00.167.5l-.25.167c-.278.167-.555.333-.861.528a2.775 2.775 0 01-.389.222 9.738 9.738 0 01-1.555.722l-.639.25a1.448 1.448 0 01-.639.139 4.113 4.113 0 01-.528-.083 15.91 15.91 0 01-5.969-3.665 8.374 8.374 0 01-2.36-4.081 5.915 5.915 0 01-.167-1.8V4.553a1.473 1.473 0 011.5-1.61A12.857 12.857 0 008.039.389a1.729 1.729 0 011-.389 1.66 1.66 0 011.027.444 13.39 13.39 0 004.886 2.3c.444.083.916.167 1.388.222l.333.056a1.392 1.392 0 011.39 1.478z"
        fill="#5e4199"
      />
      <Path
        d="M21.09 11.022a2.381 2.381 0 00-.944-.888 3.216 3.216 0 00-1.945-.417 2.409 2.409 0 00-.777.139 3.62 3.62 0 00-.861.444 4.246 4.246 0 00-.861.722 3.509 3.509 0 00-.944 1.666 3.2 3.2 0 00.083 1.832c-.305-.028-.666.139-.333 1.36.25.888.472 1.138.666 1.138a5.062 5.062 0 00.527 1.584v1.166a.153.153 0 01-.083.139 26.371 26.371 0 00-4.192 2.61 2.672 2.672 0 00-1.025 2.081v1.222a.5.5 0 00.5.5h14.825a.5.5 0 00.5-.5v-1.222a2.59 2.59 0 00-1.025-2.082 25.349 25.349 0 00-4.164-2.61.153.153 0 01-.083-.139v-1.332a4.607 4.607 0 00.389-1.249c.167.111.472.056.805-1.111.278-.944.111-1.277-.139-1.333.774-3.609-.919-3.72-.919-3.72z"
        fill="#6ab3e3"
      />
    </Svg>
  );
};

// Clinical Education icon
export const ClinicalEducationIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M27.818 7.759L14.387.084a.638.638 0 00-.634 0L.322 7.759A.638.638 0 000 8.314v2.558a.639.639 0 00.957.555L14.07 3.934l13.113 7.493a.639.639 0 00.957-.555V8.314a.638.638 0 00-.322-.555z"
        fill="#6ab3e3"
      />
      <Path
        d="M2.558 11.985v12.957a.639.639 0 00.639.64h21.745a.639.639 0 00.64-.639V11.985L14.07 5.407zm15.349 3.364v2.558h-2.558v2.558h-2.558v-2.558h-2.558v-2.558h2.558v-2.558h2.558v2.558z"
        fill="#5e4199"
      />
    </Svg>
  );
};

// Play Small icon
export const PlaySmallIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
    <G data-name="Group 1232">
      <Path
        data-name="Path 398"
        d="M11.431 8.129 7.258 5.347a.535.535 0 0 0-.831.452v5.564a.538.538 0 0 0 .831.452l4.173-2.783a.54.54 0 0 0 0-.903Z"
        fill="#532e6e"
      />
      <Path
        data-name="Path 399"
        d="M8.581 0a8.581 8.581 0 1 0 8.581 8.581A8.588 8.588 0 0 0 8.581 0Zm0 15.824a7.244 7.244 0 1 1 7.244-7.244 7.255 7.255 0 0 1-7.244 7.244Z"
        fill="#6ab3e3"
      />
    </G>
    </Svg>
  );
};

// Article Small icon
export const ArticleSmallIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        d="M13.725 17.843H1.373A1.377 1.377 0 010 16.47V1.37A1.376 1.376 0 011.373-.003h12.353a1.377 1.377 0 011.373 1.373v15.1a1.378 1.378 0 01-1.374 1.373zM1.372 1.373v15.1h12.353v-15.1z"
        fill="#6ab3e3"
      />
      <Path
        className="prefix__b"
        d="M6.863 5.491H4.804a.687.687 0 010-1.372h2.059a.687.687 0 010 1.372zM10.294 7.549h-5.49a.687.687 0 010-1.372h5.49a.687.687 0 11.047 1.372z"
        fill="#532e6e" />
      <Path
        className="prefix__c"
        d="M10.296 10.294h-5.49a.687.687 0 11-.048-1.373h5.538a.687.687 0 010 1.373zM10.294 13.039h-5.49a.687.687 0 010-1.372h5.49a.687.687 0 010 1.372z"
        fill="#532e6e" />
    </Svg>
  );
};

// Arrow icon
export const ArrowIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M.881 10.204l4.661-4.661a.516.516 0 000-.73L.881.152a.516.516 0 00-.727 0 .516.516 0 000 .733l3.931 3.931a.516.516 0 010 .73L.151 9.47a.516.516 0 000 .733.516.516 0 00.73.001z"
        fill={color}
      />
    </Svg>
  );
};

// Radio Button icon
export const RadioButtonIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G transform="translate(-290 -762)">
        <Rect
          width={20}
          height={20}
          rx={10}
          transform="translate(290 762)"
          fill={color}
        />
        <Rect
          width={6}
          height={6}
          rx={3}
          transform="translate(297 769)"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};

// Filter icon
export const FilterIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <G transform="translate(-321 -11)">
        <Circle
          cx={17.5}
          cy={17.5}
          r={17.5}
          transform="translate(321 11)"
          fill="#f1f3f6"
        />
        <Path
          d="M347.441 23.732a1.249 1.249 0 00-1.147-.732h-15.031a1.249 1.249 0 00-1.147.732 1.236 1.236 0 00.188 1.335l5.967 6.943v5.411a.627.627 0 00.975.522l3.758-2.508a.627.627 0 00.279-.522v-2.9l5.968-6.944a1.236 1.236 0 00.19-1.337z"
          fill="#6e59a0"
        />
        <G transform="translate(340.613 18)" fill="#e8581c" stroke="#fff">
          <Circle cx={4} cy={4} r={4} stroke="none" />
          <Circle cx={4} cy={4} r={3.5} fill="none" />
        </G>
      </G>
    </Svg>
  );
};

// Education icon
export const EducationIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <G transform="translate(-29 -144)">
        <Circle
          cx={15}
          cy={15}
          r={15}
          transform="translate(29 144)"
          fill="#e0dfe9"
        />
        <Path
          d="M52.2 153.191v10.577a.949.949 0 01-.947.947h-3.4a3.53 3.53 0 00-2.166.735 2.577 2.577 0 01-3.21 0 3.49 3.49 0 00-2.166-.735h-3.364a.949.949 0 01-.947-.947v-10.577a.949.949 0 01.947-.947h.638v9.32a.614.614 0 00.657.677h1.586a7.32 7.32 0 012.417.348 3.643 3.643 0 011.45.889.546.546 0 00.812.019 4.14 4.14 0 012.4-1.121 17.865 17.865 0 012.688-.116H50a.6.6 0 00.657-.677v-9.3h.619a.888.888 0 01.924.908z"
          fill="#522360"
        />
        <Path
          className="prefix__c"
          d="M38.707 151.026V161.1s3.094-.251 4.8.793v-10.074c-1.706-1.044-4.8-.793-4.8-.793zM44.682 151.819v10.074c1.7-1.044 4.8-.793 4.8-.793v-10.074s-3.1-.251-4.8.793z"
          fill="#6e59a0"
        />
      </G>
    </Svg>
  );
};

// Advanced Intervention icon
export const AdvancedInterventionIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <G data-name="Group 1255">
        <Path
          data-name="Path 1210"
          d="M14.888 6.833a24.433 24.433 0 00-6.51-1.329C7.064 4.215 6.407 4.182 5.132 5.05a2.779 2.779 0 01-.9.479 2 2 0 01-.726-.022 1.834 1.834 0 00-2 .7 1.906 1.906 0 00-.022 2.374 1.242 1.242 0 001.565.363c.49-.247 1.765-.784 2.244-.984l.29.211-.294 1.583a.806.806 0 00.617.933 30.554 30.554 0 007.686 1.539 1.227 1.227 0 00.919-.341 1.2 1.2 0 00.363-.893 4.1 4.1 0 01.358-2.22 7.529 7.529 0 00.247-.726 1 1 0 00-.591-1.213z"
          fill="#5e4199"
        />
        <Path
          data-name="Path 1211"
          d="M2.213 16.588c.447-.32 1.623-1.046 2.066-1.318l.32.163-.047 1.612a.8.8 0 00.752.828 35.178 35.178 0 005.446.465 23.723 23.723 0 002.393-.116 1.246 1.246 0 00.857-.483c.519-.686.044-1.256.069-2.066.022-.646.236-1.282.3-1.877a1.009 1.009 0 00-.781-1.089 25.666 25.666 0 00-6.637-.316 2.934 2.934 0 00-1.932-.755c-.988.149-1.452 1.118-2.178 1.412-.668.269-1.775-.33-2.581 1.089a1.906 1.906 0 00.341 2.349 1.245 1.245 0 001.612.102z"
          fill="#5e4199"
        />
        <Path
          data-name="Path 1212"
          d="M14.463 19.388a1 1 0 00-1.02-.886 24.817 24.817 0 00-6.536 1.256 3 3 0 00-2.055-.283 2.607 2.607 0 00-1.118 1.089c-.537.821-.7.879-1.318 1.031a1.8 1.8 0 00-1.583 1.409c-.5 1.746 1.452 3.115 2.473 1.95.363-.418 1.332-1.4 1.7-1.768l.363.084.33 1.576a.806.806 0 00.781.654.922.922 0 00.142 0 30.83 30.83 0 007.692-1.527 1.232 1.232 0 00.726-.668c.341-.791-.254-1.234-.421-2.026-.123-.631-.079-1.296-.156-1.891z"
          fill="#5e4199"
        />
        <G data-name="Symbol 62 \u2013 70">
          <Path data-name="Rectangle 176" fill="none" d="M7 0h16v16H7z" />
          <Path
            data-name="Path 99"
            d="M22.9 14.5l-3.3-3.3A6.847 6.847 0 0021 7a6.957 6.957 0 00-7-7 6.957 6.957 0 00-7 7 6.957 6.957 0 007 7 6.847 6.847 0 004.2-1.4l3.3 3.3zM9 7a4.951 4.951 0 015-5 4.951 4.951 0 015 5 4.951 4.951 0 01-5 5 4.951 4.951 0 01-5-5z"
            fill="#6ab3e3"
          />
        </G>
      </G>
    </Svg>
  );
};

// Monthly Trends icon
export const MonthlyTrendIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <G data-name="Group 1048" transform="translate(-51 -750)">
        <Circle
          data-name="Ellipse 183"
          cx={20}
          cy={20}
          r={20}
          transform="translate(51 750)"
          fill="#f1f3f6"
        />
        <G data-name="Group 1047">
          <Path
            data-name="Path 1205"
            d="M80.714 764.061a2.159 2.159 0 00-2.179 2.129 2.118 2.118 0 00.4 1.249l-3.815 3.894a2.176 2.176 0 00-.72-.127 2.172 2.172 0 00-.806.155l-4.143-4.3a2.126 2.126 0 00-.422-2.421 2.167 2.167 0 00-1.526-.636h-.013a2.164 2.164 0 00-1.526.618 2.126 2.126 0 00-.254 2.764l-3.8 3.894a2.19 2.19 0 00-.72-.127h-.012a2.166 2.166 0 00-1.526.618 2.131 2.131 0 00-.056 3.013l.038.038a2.167 2.167 0 001.526.636h.013a2.164 2.164 0 001.526-.618 2.126 2.126 0 00.074-2.978l3.713-3.794a2.177 2.177 0 00.989.254h.013a2.163 2.163 0 001.315-.443l3.947 4.082a2.121 2.121 0 00-.537 1.383 2.159 2.159 0 002.157 2.159 2.159 2.159 0 002.169-2.134 2.123 2.123 0 00-.572-1.46l3.713-3.8a2.17 2.17 0 00.987.254 2.147 2.147 0 100-4.293z"
            fill="#e12f6c"
          />
        </G>
      </G>
    </Svg>
  );
};


// Play  icon
export const PlayIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M48.799 34.691L30.991 22.819a2.283 2.283 0 00-3.546 1.928v23.744a2.3 2.3 0 003.546 1.927l17.808-11.872a2.3 2.3 0 000-3.855z"
        fill="#e0dfe9"
      />
      <Path
        d="M36.619 0a36.619 36.619 0 1036.618 36.619A36.652 36.652 0 0036.619 0zm0 67.533a30.914 30.914 0 1130.914-30.914 30.96 30.96 0 01-30.914 30.914z"
        opacity={0.5}
        fill="#e0dfe9"
      />
    </Svg>
  );
};

// AIPercentile  icon
export const AIPercentileIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <G data-name="Group 752" transform="translate(-337 -466.5)">
        <Circle
          data-name="Ellipse 111"
          cx={5}
          cy={5}
          r={5}
          transform="translate(339 468)"
          fill="#e0dfe9"
        />
        <Path
          data-name="Path 391"
          d="M350.469 472.945l-.822-.571a.885.885 0 01-.284-1.06l.425-.907a.468.468 0 00-.41-.711l-1-.086a.885.885 0 01-.776-.776l-.086-1a.469.469 0 00-.711-.411l-.907.425a.885.885 0 01-1.06-.284l-.572-.822a.468.468 0 00-.821 0l-.573.822a.885.885 0 01-1.06.284l-.907-.425a.468.468 0 00-.711.411l-.086 1a.885.885 0 01-.776.776l-1 .086a.469.469 0 00-.414.708l.425.908a.886.886 0 01-.279 1.062l-.822.574a.468.468 0 000 .821l.822.573a.886.886 0 01.284 1.06l-.425.908a.468.468 0 00.41.71l1 .086a.885.885 0 01.776.776l.086 1a.469.469 0 00.711.411l.908-.425a.885.885 0 011.06.284l.573.822a.469.469 0 00.821 0l.573-.822a.885.885 0 011.06-.284l.908.425a.468.468 0 00.709-.419l.086-1a.885.885 0 01.776-.776l1-.086a.469.469 0 00.411-.711l-.425-.908a.886.886 0 01.284-1.06l.822-.573a.469.469 0 00-.003-.815zm-6.613 4.534a4.124 4.124 0 114.124-4.124 4.124 4.124 0 01-4.124 4.125z"
          fill="#6e59a0"
        />
        <Path
          data-name="Path 393"
          d="M347.065 480.426a1.674 1.674 0 01-.714-.163l-.737-.345-.465.667a1.54 1.54 0 01-2.585 0l-.465-.667-.737.345a1.676 1.676 0 01-.714.163 1.52 1.52 0 01-.467-.079v5.8c0 .2.129.261.286.142l3.1-2.347a.5.5 0 01.572 0l3.1 2.347c.157.119.286.055.286-.142v-5.8a1.516 1.516 0 01-.467.079z"
          fill="#6e59a0"
        />
      </G>
    </Svg>
  );
};

// External Link icon
export const ExternalLinkIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <G data-name="Group 1355">
        <Path
          data-name="Path 1250"
          d="M11.226 12.511a1.98 1.98 0 001.153-.972 1.95 1.95 0 00.172-.482 4.511 4.511 0 00.045-.74V7.988a.759.759 0 00-1.3-.537.81.81 0 00-.218.54v2.563h.021l-.015.119.015.006-.033.12-.053.085-.008.009-.076.075-.008.007-.076.047-.012.008-.121.032-.006-.015-.118.015v-.021h-.133l-8.648-.007-.011-.008-.076-.047-.01-.009-.076-.076-.007-.008-.054-.086-.033-.12.015-.006-.015-.118h.021v-.134l-.023-8.518.033-.121.05-.081.008-.011.076-.077.01-.008.082-.052h.005l.121-.033.008.016.117-.016v.021q.212-.007.421 0h5a.759.759 0 00.545-1.3.787.787 0 00-.539-.221H2.168a2.436 2.436 0 00-.317.006 1.934 1.934 0 00-.984.34 2.619 2.619 0 00-.279.227 2.524 2.524 0 00-.16.193 2.133 2.133 0 00-.154.214 2.792 2.792 0 00-.15.332 1.942 1.942 0 00-.115.71v8.117a4.675 4.675 0 00.058.966 1.975 1.975 0 00.892 1.207.868.868 0 00.124.063 2.673 2.673 0 00.36.147 2.455 2.455 0 00.612.072h8.142a3.154 3.154 0 001.029-.104z"
          fill='#532E6E'
          style={{
            isolation: "isolate",
          }}
        />
        <Path
          data-name="Path 1251"
          d="M14.958.76a.764.764 0 00-.76-.76h-3.3a.759.759 0 00-.537 1.3.789.789 0 00.54.223h1.461l-5.553 5.55c-.211.211-.421.418-.629.631a.791.791 0 00-.237.553.762.762 0 00.76.757.8.8 0 00.539-.224l6.191-6.192v1.464a.759.759 0 001.3.536.78.78 0 00.221-.538l.007-3.3h.189-.191z"
          fill="#6ab3e3"
        />
      </G>
    </Svg>
  );
};

//Leadership section start

// Leadership Profile icon
export const LeadershipProfileIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        d="M28.897 3.221l-2.769-.4L24.85.23a.235.235 0 00-.422 0l-1.285 2.588-2.773.4a.278.278 0 00-.154.474l2.011 1.96-.477 2.809a.255.255 0 00.369.268L24.635 7.4l2.522 1.326a.255.255 0 00.364-.268l-.477-2.809 2.007-1.956a.278.278 0 00-.154-.473z"
        fill="#6AB3E3"
      />
      <Path
        className="prefix__b"
        d="M11.969 0a6.078 6.078 0 00-5.9 5.332 6.637 6.637 0 00-.068.953 7.265 7.265 0 00.068.954c0 .057.009.112.014.168.376 4.261 2.869 7.553 5.888 7.553s5.512-3.292 5.888-7.553l.014-.168a7.262 7.262 0 00.068-.954 6.715 6.715 0 00-.068-.953A6.078 6.078 0 0011.969 0z"
        fill="#522360" />
      <Path
        className="prefix__b"
        d="M14.753 13.95a37.463 37.463 0 00-5.6-.03 4.337 4.337 0 005.6.03z"
        fill="#522360" />
      <Path
        className="prefix__b"
        d="M18.969 14.747a5.984 5.984 0 00-1.308-.4 6.947 6.947 0 01-11.394-.011 8.017 8.017 0 00-1.112.343A7.9 7.9 0 000 22.087c0 4.363 3.537 4.353 7.9 4.353h8.137c4.363 0 7.9.01 7.9-4.353a7.9 7.9 0 00-4.968-7.34z"
        fill="#522360" />
    </Svg>
  );
};

// Provider Profile icon
export const ProviderProfileIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M18.982 14.769c.037.069.077.139.112.213a3.774 3.774 0 01.324 1.088 1.772 1.772 0 11-.827-.027 2.939 2.939 0 00-.957-1.674 8.615 8.615 0 00-.485-.085h-.041a7.21 7.21 0 00-.333-.037v.034a.389.389 0 01-.011.1 1.548 1.548 0 01-.162.534 39.514 39.514 0 01-3.569 5.81l-.231-3.278a1.9 1.9 0 00.779-.759 1.483 1.483 0 00.206-.735 4.717 4.717 0 01-1.668.366h-.288a4.734 4.734 0 01-1.668-.366 1.519 1.519 0 00.206.735 1.919 1.919 0 00.779.759l-.228 3.271a39.681 39.681 0 01-3.569-5.81 1.624 1.624 0 01-.162-.534c0-.034-.009-.066-.011-.1a.162.162 0 010-.034c-.112.011-.222.023-.333.037h-.041l-.173.021a2.944 2.944 0 00-1.167 1.654.982.982 0 01.429.5 4.093 4.093 0 011.882 2.088.567.567 0 010 .485 6.568 6.568 0 01.487 2.339c0 1.129-.048 1.837-1 2.026a.479.479 0 01-.338.139h-.726a.487.487 0 01-.487-.487v-.009a.492.492 0 01.487-.477h.729a.488.488 0 01.2.044c.178-.036.2-.085.217-.112a2.947 2.947 0 00.11-1.122 5.745 5.745 0 00-.436-2.054.558.558 0 01-.284-.276c-.479-1-1.124-1.618-1.686-1.618s-1.245.671-1.725 1.706a.557.557 0 01-.331.3 5.671 5.671 0 00-.393 1.94 3.072 3.072 0 00.119 1.124c.016.027.05.08.245.115a.5.5 0 01.219-.052h.727a.491.491 0 01.487.459v.029a.486.486 0 01-.487.487h-.72a.482.482 0 01-.325-.126 1.128 1.128 0 01-.824-.489 3 3 0 01-.24-1.549 6.521 6.521 0 01.469-2.289.572.572 0 01.018-.43 5.385 5.385 0 011.1-1.617 2.909 2.909 0 01.779-.548 1 1 0 01.491-.558 3.139 3.139 0 01.495-1.245 7.913 7.913 0 00-5.158 7.416c0 4.368 3.541 4.357 7.909 4.357h8.147c4.368 0 7.909.011 7.909-4.357a7.912 7.912 0 00-4.977-7.322z"
        fill="#522360" />
      <Path
        className="prefix__a"
        d="M6.063 7.251c0 .057.009.112.014.169.377 4.268 2.872 7.562 5.9 7.562s5.513-3.3 5.9-7.562c0-.055.009-.112.014-.169.027-.178.045-.372.055-.562 0-.13.013-.26.013-.393a6.362 6.362 0 00-.068-.955 5.94 5.94 0 00-11.82 0 6.893 6.893 0 00-.068.955c0 .132 0 .263.012.393.003.19.025.377.048.562z"
        fill="#522360" />
      <Circle
        className="prefix__a"
        cx={0.88}
        cy={0.88}
        transform="translate(18.061 16.884)"
        r={0.88}
      />
    </Svg>
  );
};


// Leadership Consolidated icon
export const LeadershipConsolidated = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <G transform="translate(28.951)">
        <Circle
          className="prefix__a"
          cx={4.168}
          cy={4.168}
          transform="translate(5.756 5.767)"
          r={4.168}
          fill="#FFFFFF"
        />
        <Path
          className="prefix__b"
          d="M9.802 13.918a3.871 3.871 0 003.877-3.864v-.014a3.99 3.99 0 00-3.877-4.016 3.871 3.871 0 00-3.88 3.863v.014a4.09 4.09 0 003.88 4.017zM3.291 3.392a9.207 9.207 0 0113.02 13.02L9.803 22.92l-6.511-6.508a9.458 9.458 0 01-.005-13.021z"
          fill="#FFFFFF" />
        <Path
          className="prefix__c"
          d="M9.803 23.898l-7-7a10.152 10.152 0 01-.012-13.989l.012-.014a9.9 9.9 0 1114 14zM3.79 3.871a8.76 8.76 0 000 12.057l6.008 6 6.017-6.017A8.512 8.512 0 003.785 3.866zm6.021 10.735h-.044a4.8 4.8 0 01-4.539-4.7 4.565 4.565 0 014.566-4.583h.01a4.716 4.716 0 014.572 4.716 4.574 4.574 0 01-4.566 4.572zm-.035-7.894a3.176 3.176 0 00-3.158 3.169 3.4 3.4 0 003.2 3.336 3.18 3.18 0 003.163-3.171 3.316 3.316 0 00-3.2-3.334z"
          fill="#522360" />
      </G>
      <G>
        <Circle
          className="prefix__a"
          cx={4.168}
          cy={4.168}
          transform="translate(5.756 5.767)"
          r={4.168}
          fill="#FFFFFF" />
        <Path
          className="prefix__b"
          d="M9.802 13.918a3.871 3.871 0 003.877-3.864v-.014a3.989 3.989 0 00-3.877-4.016 3.871 3.871 0 00-3.879 3.863v.014a4.088 4.088 0 003.879 4.017zM3.29 3.392a9.207 9.207 0 0113.021 13.02l-6.51 6.508-6.512-6.508A9.459 9.459 0 013.29 3.391z"
          fill="#FFFFFF" />
        <Path
          className="prefix__c"
          d="M9.803 23.898l-7-7A10.152 10.152 0 012.79 2.909l.013-.014a9.9 9.9 0 1114 14zM3.79 3.871a8.76 8.76 0 00.006 12.057l6.006 6 6.017-6.017A8.512 8.512 0 003.789 3.866zm6.021 10.735h-.043a4.8 4.8 0 01-4.539-4.7 4.562 4.562 0 014.564-4.583h.011a4.715 4.715 0 014.571 4.716 4.573 4.573 0 01-4.564 4.572zm-.033-7.894a3.176 3.176 0 00-3.16 3.169 3.4 3.4 0 003.2 3.336 3.181 3.181 0 003.165-3.171 3.318 3.318 0 00-3.2-3.334z"
          fill="#522360" />
      </G>
      <G transform="translate(13.102 6.248)">
        <Circle
          className="prefix__a"
          cx={4.749}
          cy={4.749}
          transform="translate(6.559 6.572)"
          r={4.749}
          fill="#FFFFFF" />
        <Path
          className="prefix__b"
          d="M11.168 15.859a4.412 4.412 0 004.418-4.4v-.016a4.546 4.546 0 00-4.418-4.577 4.409 4.409 0 00-4.42 4.4v.017a4.659 4.659 0 004.42 4.576zM3.749 3.865a10.49 10.49 0 0114.836 14.836l-7.417 7.417-7.419-7.417A10.778 10.778 0 013.75 3.865z"
          fill="#FFFFFF" />
        <Path
          className="prefix__c"
          d="M11.169 27.236l-7.977-7.977a11.57 11.57 0 01-.016-15.941l.016-.014a11.281 11.281 0 0115.951 15.955zM4.317 4.415a9.983 9.983 0 00.008 13.739l6.844 6.844 6.857-6.858A9.7 9.7 0 004.317 4.416zm6.862 12.234h-.049a5.462 5.462 0 01-5.172-5.356 5.2 5.2 0 015.2-5.221h.012a5.372 5.372 0 015.209 5.373 5.21 5.21 0 01-5.2 5.206zm-.038-9a3.619 3.619 0 00-3.6 3.611 3.878 3.878 0 003.651 3.8 3.624 3.624 0 003.6-3.614 3.778 3.778 0 00-3.649-3.8z"
          fill="#522360" />
      </G>
    </Svg>
  );
};


// Leadership Regional icon
export const LeadershipRegionalIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Circle
        cx={4.747}
        cy={4.747}
        transform="translate(6.555 6.568)"
        fill="#fff"
        r={4.747}
        fill="#FFFFFF" />
      <Path
        d="M11.164 15.851a4.41 4.41 0 004.416-4.4v-.016a4.544 4.544 0 00-4.416-4.575 4.407 4.407 0 00-4.418 4.4v.017a4.657 4.657 0 004.418 4.574zM3.749 3.863a10.486 10.486 0 1114.829 14.829l-7.413 7.414-7.415-7.414a10.772 10.772 0 01-.001-14.83z"
        fillRule="evenodd"
        fill="#FFFFFF"
      />
      <Path
        d="M11.164 27.223L3.19 19.249a11.564 11.564 0 01-.016-15.933l.016-.014a11.276 11.276 0 0115.946 15.947zM4.315 4.413a9.978 9.978 0 00.008 13.732l6.841 6.841 6.853-6.855a9.694 9.694 0 00-13.7-13.718zm6.858 12.229h-.049a5.459 5.459 0 01-5.17-5.353 5.2 5.2 0 015.2-5.219h.013a5.369 5.369 0 015.206 5.371 5.208 5.208 0 01-5.2 5.201zm-.038-8.991a3.617 3.617 0 00-3.6 3.609 3.876 3.876 0 003.649 3.8 3.623 3.623 0 003.6-3.613 3.777 3.777 0 00-3.647-3.8z"
        fill="#522360"
      />
    </Svg>
  );
};

// Other Provider icon
export const OtherProviderIcon = ({ width, height, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M12.018 0a6.1 6.1 0 00-5.927 5.354 6.669 6.669 0 00-.068.957 7.271 7.271 0 00.068.957c0 .057.009.113.014.169.378 4.278 2.881 7.584 5.912 7.584s5.537-3.306 5.913-7.586l.014-.169a7.3 7.3 0 00.068-.957 6.744 6.744 0 00-.068-.957A6.1 6.1 0 0012.018 0z"
        fill="#522360" />
      <Path
        className="prefix__a"
        d="M14.809 14.006a37.616 37.616 0 00-5.623-.03 4.355 4.355 0 005.623.03z"
        fill="#522360" />
      <Path
        className="prefix__a"
        d="M19.051 14.807a6.009 6.009 0 00-1.314-.4 6.975 6.975 0 01-11.44-.012 8.047 8.047 0 00-1.117.344 7.932 7.932 0 00-5.176 7.438c0 4.381 3.552 4.371 7.933 4.371h8.17c4.381 0 7.933.01 7.933-4.371a7.933 7.933 0 00-4.989-7.37z"
        fill="#522360" />
    </Svg>
  );
};

// Leadership Provider icon
export const LeadershipProviderIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <G transform="translate(-838.784 -498.579)">
        <Path
          className="prefix__a"
          d="M849.457 506.883c.021.039.043.078.063.12a2.119 2.119 0 01.182.612 1 1 0 11-.465-.015 1.653 1.653 0 00-.538-.941 4.86 4.86 0 00-.273-.048h-.026c-.062-.008-.124-.016-.187-.021v.019a.218.218 0 01-.006.055.872.872 0 01-.091.3 22.224 22.224 0 01-2.007 3.267l-.13-1.843a1.066 1.066 0 00.438-.427.832.832 0 00.116-.413 2.651 2.651 0 01-.938.206h-.162a2.661 2.661 0 01-.938-.206.853.853 0 00.116.413 1.078 1.078 0 00.438.427l-.128 1.839a22.313 22.313 0 01-2.007-3.267.916.916 0 01-.091-.3c0-.019-.005-.037-.006-.055a.09.09 0 010-.019 5.623 5.623 0 00-.187.021h-.023l-.1.012a1.655 1.655 0 00-.656.93.552.552 0 01.241.283 2.3 2.3 0 011.058 1.174.318.318 0 010 .273 3.69 3.69 0 01.274 1.315c0 .635-.027 1.033-.56 1.139a.27.27 0 01-.19.078h-.408a.274.274 0 01-.274-.274.277.277 0 01.274-.268h.41a.275.275 0 01.114.025c.1-.02.113-.048.122-.063a1.66 1.66 0 00.062-.631 3.233 3.233 0 00-.245-1.155.314.314 0 01-.16-.155c-.269-.561-.632-.91-.948-.91s-.7.377-.97.959a.313.313 0 01-.186.169 3.191 3.191 0 00-.221 1.091 1.728 1.728 0 00.067.632c.009.015.028.045.138.065a.281.281 0 01.123-.029h.409a.276.276 0 01.274.258v.016a.273.273 0 01-.274.274h-.405a.271.271 0 01-.183-.071.634.634 0 01-.463-.275 1.689 1.689 0 01-.135-.871 3.669 3.669 0 01.264-1.287.322.322 0 01.01-.242 3.028 3.028 0 01.617-.909 1.636 1.636 0 01.438-.308.561.561 0 01.276-.314 1.767 1.767 0 01.278-.7 4.449 4.449 0 00-2.9 4.17c0 2.456 1.991 2.45 4.447 2.45h4.581c2.456 0 4.447.006 4.447-2.45a4.449 4.449 0 00-2.796-4.125z"
          fill={color} />
        <Path
          className="prefix__a"
          d="M842.193 502.656c0 .032.005.063.008.1.212 2.4 1.615 4.252 3.315 4.252s3.1-1.853 3.315-4.252c0-.031.005-.063.008-.1.015-.1.025-.209.031-.316 0-.073.007-.146.007-.221a3.586 3.586 0 00-.038-.537 3.34 3.34 0 00-6.646 0 3.873 3.873 0 00-.038.537 3.635 3.635 0 00.038.537z"
          fill={color} />
        <Circle
          className="prefix__a"
          cx={0.495}
          cy={0.495}
          r={0.495}
          transform="translate(848.939 508.072)"
        />
        <Path
          className="prefix__a"
          d="M855 503.333h-1.333V502h-1.333v1.333H851v1.333h1.333V506h1.333v-1.333H855z"
          fill={color} />
      </G>
    </Svg>
  );
};


// Leadership midlevel icon
export const LeadershipMidlevelIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M6.715 0a3.409 3.409 0 00-3.311 2.991 3.722 3.722 0 00-.038.535 3.65 3.65 0 00.038.535c0 .032.005.063.008.094.211 2.39 1.609 4.237 3.3 4.237s3.092-1.847 3.3-4.237c0-.031.005-.062.008-.094a3.5 3.5 0 00.031-.315c0-.073.007-.146.007-.22a3.767 3.767 0 00-.038-.535A3.41 3.41 0 006.715 0z"
        fill={color} />
      <Path
        className="prefix__a"
        d="M8.273 7.826a21.016 21.016 0 00-3.137-.013 2.433 2.433 0 003.141.017z"
        fill={color} />
      <Path
        className="prefix__a"
        d="M10.642 8.273a3.357 3.357 0 00-.734-.226 3.9 3.9 0 01-6.392-.006 4.5 4.5 0 00-.624.192A4.432 4.432 0 000 12.389c0 2.448 1.984 2.442 4.432 2.442h4.565c2.448 0 4.432.006 4.432-2.442a4.432 4.432 0 00-2.787-4.116z"
        fill={color} />
    </Svg>
  );
};


// Sync icon
export const SyncIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M1.968 9.567A4.8 4.8 0 014.125.936V0l2.45 1.705-2.45 1.706V2.289a3.469 3.469 0 00-1.777 5.854c.052.052.106.1.161.151zM9.603 5.69a4.8 4.8 0 01-4.392 4.784v.907L2.76 9.676 5.211 7.97v1.164a3.468 3.468 0 002.042-5.9c-.052-.052-.106-.1-.161-.151l.542-1.274a4.8 4.8 0 011.969 3.877z"
        fill="#97979a"
      />
    </Svg>
  );
};


// Ancillary Data icon
export const AncillaryDataIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <G transform="translate(-73 -136)">
        <Path
          d="M97.717 158.842a2.3 2.3 0 00-1.211.347l-8.037-6.668a4.781 4.781 0 00.655-2.014l3.324-.228a2.266 2.266 0 10-.1-1.419l-3.324.228a4.912 4.912 0 00-.724-1.647l7.571-7.164a2.185 2.185 0 001.082.268 2.272 2.272 0 10-2.272-2.272 2.211 2.211 0 00.218.962l-7.581 7.165a4.695 4.695 0 00-5.884.089l-2.51-2.233a3.1 3.1 0 00.387-1.508 3.155 3.155 0 10-3.156 3.152 3.1 3.1 0 001.816-.585l2.51 2.233a4.685 4.685 0 00.109 5.259l-2.282 2.2a3.156 3.156 0 101.439 2.649 3.093 3.093 0 00-.447-1.617l2.282-2.2a4.7 4.7 0 005.973-.228l8.045 6.669a2.271 2.271 0 104.386.824 2.27 2.27 0 00-2.269-2.262zm-3.165-10.27a.843.843 0 11-.843.843.843.843 0 01.843-.843zm2.4-11.143a.843.843 0 11-.843.843.843.843 0 01.844-.843zm-22.523 5.318a1.722 1.722 0 111.717 1.727 1.728 1.728 0 01-1.717-1.727zm2.171 16.64a1.727 1.727 0 111.727-1.727 1.728 1.728 0 01-1.727 1.727zm7.829-6a3.274 3.274 0 113.274-3.274 3.278 3.278 0 01-3.272 3.271zm13.286 8.573a.843.843 0 11.843-.843.843.843 0 01-.841.84z"
          fill="#6d599f"
        />
        <Circle
          cx={4.773}
          cy={4.773}
          r={4.773}
          transform="translate(79.659 145.334)"
          fill="#e8581c"
        />
      </G>
    </Svg>
  );
};

// Sales & Marketing Leadership icon
export const SalesMarketingLeaderIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M15.877 0a2.2 2.2 0 102.2 2.2 2.2 2.2 0 00-2.2-2.2zm0 2.931a.733.733 0 11.735-.731.733.733 0 01-.735.731zM21.248 5.373a2.2 2.2 0 102.2 2.2 2.2 2.2 0 00-2.2-2.2zm0 2.931a.733.733 0 11.733-.733.733.733 0 01-.733.733z"
        fill="#e8581c" />
      <Path
        d="M11.725 11.724V.759a.735.735 0 00-.733-.736h-.045A11.724 11.724 0 1023.423 12.5a.735.735 0 00-.689-.777H11.725z"
        fill="#6d599f"
      />
      <Path
        className="prefix__a"
        d="M14.197 8.212l7.7-7.7a.733.733 0 011.036 0 .733.733 0 010 1.036l-7.7 7.7a.734.734 0 01-1.037 0 .734.734 0 01.001-1.036z"
        fill="#e8581c" />
    </Svg>
  );
};

// Advanced Intervention Leadership icon
export const AdvancedInterventionLeadershipIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M14.888 6.833a24.433 24.433 0 00-6.51-1.329C7.064 4.215 6.407 4.182 5.132 5.05a2.779 2.779 0 01-.9.479 2 2 0 01-.726-.022 1.834 1.834 0 00-2 .7 1.906 1.906 0 00-.022 2.374 1.242 1.242 0 001.565.363c.49-.247 1.765-.784 2.244-.984l.29.211-.294 1.583a.806.806 0 00.617.933 30.554 30.554 0 007.686 1.539 1.227 1.227 0 00.919-.341 1.2 1.2 0 00.363-.893 4.1 4.1 0 01.358-2.22 7.529 7.529 0 00.247-.726 1 1 0 00-.591-1.213zM2.213 16.588c.447-.32 1.623-1.046 2.066-1.318l.32.163-.047 1.612a.8.8 0 00.752.828 35.178 35.178 0 005.446.465 23.723 23.723 0 002.393-.116 1.246 1.246 0 00.857-.483c.519-.686.044-1.256.069-2.066.022-.646.236-1.282.3-1.877a1.009 1.009 0 00-.781-1.089 25.666 25.666 0 00-6.637-.316 2.934 2.934 0 00-1.932-.755c-.988.149-1.452 1.118-2.178 1.412-.668.269-1.775-.33-2.581 1.089a1.906 1.906 0 00.341 2.349 1.245 1.245 0 001.612.102zM14.462 19.387a1 1 0 00-1.02-.886 24.817 24.817 0 00-6.536 1.256 3 3 0 00-2.055-.283 2.607 2.607 0 00-1.118 1.089c-.537.821-.7.879-1.318 1.031a1.8 1.8 0 00-1.583 1.409c-.5 1.746 1.452 3.115 2.473 1.95.363-.418 1.332-1.4 1.7-1.768l.363.084.33 1.576a.806.806 0 00.781.654.922.922 0 00.142 0 30.83 30.83 0 007.692-1.527 1.232 1.232 0 00.726-.668c.341-.791-.254-1.234-.421-2.026-.123-.631-.079-1.296-.156-1.891z"
        fill="#6d599f" />
      <Path fill="none" d="M7 0h16v16H7z" />
      <Path
        d="M22.9 14.5l-3.3-3.3A6.847 6.847 0 0021 7a6.957 6.957 0 00-7-7 6.957 6.957 0 00-7 7 6.957 6.957 0 007 7 6.847 6.847 0 004.2-1.4l3.3 3.3zM9 7a4.951 4.951 0 015-5 4.951 4.951 0 015 5 4.951 4.951 0 01-5 5 4.951 4.951 0 01-5-5z"
        fill="#e8581c"
      />
    </Svg>
  );
};



// Meter0-10 icon
export const Meter0_10Icon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M23.793 17.431H1.047l-.187-.476A12.419 12.419 0 0112.414-.005h.005a12.423 12.423 0 0111.561 16.96zm-21.712-1.5h20.677a10.844 10.844 0 00.58-3.52A10.933 10.933 0 0012.419 1.496 10.921 10.921 0 002.081 15.931z"
        fill="#9b95c0"
      />
      <Path
        d="M12.25 10.431a2.1 2.1 0 00-1.638 1.314l-6.835-.06-.014 1.5 6.827.06a2.1 2.1 0 101.66-2.814z"
        fill="#524790"
      />
    </Svg>
  );
};

// Meter 10-20 icon
export const Meter10_20Icon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M9.087 12.415h-6a9.472 9.472 0 01.466-2.941l5.7 1.861a3.471 3.471 0 00-.166 1.08z"
        fill={color}
      />
      <Path
        d="M23.794 17.431H1.047l-.187-.476A12.419 12.419 0 0112.414-.005h.005a12.425 12.425 0 0111.562 16.96zm-21.712-1.5h20.677a10.843 10.843 0 00.579-3.52A10.932 10.932 0 0012.419 1.496 10.919 10.919 0 002.082 15.931z"
        fill="#9b95c0"
      />
      <Path
        d="M12.921 10.431a2.094 2.094 0 00-1.969.73L4.485 8.947l-.486 1.419 6.459 2.211a2.1 2.1 0 102.463-2.146z"
        fill="#524790"
      />
    </Svg>
  );
};

// Meter 20-30 icon
export const Meter20_30Icon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M9.754 10.368l-4.845-3.54a9.5 9.5 0 00-1.356 2.644 9.463 9.463 0 00-.466 2.941h6a3.448 3.448 0 01.667-2.047z"
        fill={color}
      />
      <Path
        d="M23.794 17.431H1.047l-.187-.476A12.419 12.419 0 0112.414-.005h.005a12.425 12.425 0 0111.562 16.96zm-21.712-1.5h20.676a10.844 10.844 0 00.58-3.52A10.931 10.931 0 0012.42 1.5 10.919 10.919 0 002.082 15.931z"
        fill="#9b95c0"
      />
      <Path
        d="M13.534 10.639a2.092 2.092 0 00-2.1.1L5.946 6.663l-.894 1.2 5.48 4.071a2.1 2.1 0 103-1.3z"
        fill="#524790"
      />
    </Svg>
  );
};

// Meter 30-40 icon
export const Meter30_40Icon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M7.018 4.731a9.5 9.5 0 00-2.108 2.1 9.44 9.44 0 00-1.823 5.588h6a3.432 3.432 0 01.666-2.045 3.507 3.507 0 01.776-.772z"
        fill={color}
      />
      <Path
        d="M23.794 17.431H1.047l-.187-.476A12.419 12.419 0 0112.414-.005a12.425 12.425 0 0111.562 16.96zm-21.712-1.5h20.676a10.844 10.844 0 00.58-3.52A10.931 10.931 0 0012.419 1.496 10.919 10.919 0 002.082 15.931z"
        fill="#9b95c0"
      />
      <Path
        d="M14.067 11.031a2.094 2.094 0 00-2.023-.563L8.102 4.884l-1.226.865 3.938 5.577a2.1 2.1 0 103.253-.3z"
        fill="#524790"
      />
    </Svg>
  );
};

// Meter 40-50 icon
export const Meter40_50Icon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M11.5 9.106L9.67 3.392a9.432 9.432 0 00-2.652 1.34 9.462 9.462 0 00-2.108 2.1 9.419 9.419 0 00-1.355 2.644 9.473 9.473 0 00-.467 2.943h6a3.45 3.45 0 01.17-1.078 3.455 3.455 0 01.495-.964 3.513 3.513 0 01.777-.772 3.468 3.468 0 01.97-.499z"
        fill={color}
      />
      <Path
        d="M23.794 17.431H1.044l-.187-.476A12.419 12.419 0 0112.411-.005h.005a12.425 12.425 0 0111.562 16.96zm-21.712-1.5h20.677a10.843 10.843 0 00.579-3.52A10.931 10.931 0 0012.419 1.496 10.919 10.919 0 002.082 15.931z"
        fill="#9b95c0"
      />
      <Path
        d="M14.444 11.56a2.094 2.094 0 00-1.759-1.148l-2.069-6.514-1.43.454 2.067 6.506a2.1 2.1 0 103.191.7z"
        fill="#524790"
      />
    </Svg>
  );
};

// Meter 50-60 icon
export const Meter50_60Icon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M9.671 3.391a9.406 9.406 0 00-2.649 1.34 9.488 9.488 0 00-2.109 2.1 9.445 9.445 0 00-1.355 2.644 9.443 9.443 0 00-.467 2.943h6a3.448 3.448 0 01.17-1.078 3.43 3.43 0 01.495-.964 3.529 3.529 0 01.776-.772 3.469 3.469 0 01.969-.49 3.469 3.469 0 011.061-.164v-6a9.477 9.477 0 00-2.891.441z"
        fill={color}
      />
      <Path
        d="M23.793 17.431H1.047l-.187-.476A12.419 12.419 0 0112.414-.005h.008a12.423 12.423 0 0111.561 16.96zm-21.712-1.5h20.677a10.844 10.844 0 00.58-3.52A10.933 10.933 0 0012.422 1.5 10.921 10.921 0 002.081 15.931z"
        fill="#9b95c0"
      />
      <Path
        d="M14.638 12.174a2.1 2.1 0 00-1.328-1.627V3.712h-1.5v6.827a2.1 2.1 0 102.828 1.635z"
        fill="#524790"
      />
    </Svg>
  );
};

// Meter 60-70 icon
export const Meter60_70Icon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M12.561 2.942a9.462 9.462 0 00-2.889.449 9.479 9.479 0 00-2.653 1.34 9.5 9.5 0 00-2.106 2.093 9.409 9.409 0 00-1.357 2.644 9.45 9.45 0 00-.466 2.939h6a3.476 3.476 0 01.17-1.078 3.44 3.44 0 01.495-.966 3.5 3.5 0 01.775-.772 3.469 3.469 0 01.971-.491 3.505 3.505 0 012.135.005l1.855-5.706a9.465 9.465 0 00-2.93-.457z"
        fill={color}
      />
      <Path
        d="M23.794 17.431H1.047l-.187-.476A12.419 12.419 0 0112.414-.005h.005a12.425 12.425 0 0111.562 16.96zm-21.712-1.5h20.677a10.845 10.845 0 00.579-3.52A10.932 10.932 0 0012.419 1.496 10.919 10.919 0 002.082 15.931z"
        fill="#9b95c0"
      />
      <Path
        d="M13.875 10.872l2.1-6.506-1.428-.46-2.095 6.5a2.118 2.118 0 101.425.469z"
        fill="#524790"
      />
    </Svg>
  );
};

// Meter 70-80 icon
export const Meter70_80Icon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M15.49 3.405a9.51 9.51 0 00-5.819-.014 9.406 9.406 0 00-2.652 1.34 9.5 9.5 0 00-2.108 2.1 9.447 9.447 0 00-1.355 2.644 9.472 9.472 0 00-.466 2.943h6a3.42 3.42 0 01.17-1.078 3.452 3.452 0 01.494-.964 3.484 3.484 0 01.776-.772 3.467 3.467 0 01.969-.49 3.509 3.509 0 012.136.005 3.42 3.42 0 01.957.488l3.525-4.855a9.429 9.429 0 00-2.627-1.347z"
        fill={color}
      />
      <Path
        d="M23.793 17.431H1.046l-.187-.476A12.421 12.421 0 0112.414-.005a12.425 12.425 0 0111.562 16.96zm-21.712-1.5h20.677a10.818 10.818 0 00.579-3.52A10.932 10.932 0 0012.418 1.496 10.921 10.921 0 002.084 15.932z"
        fill="#9b95c0"
      />
      <Path
        d="M18.273 5.78l-1.221-.871-3.962 5.559a2.119 2.119 0 101.216.878z"
        fill="#524790"
      />
    </Svg>
  );
};

// Meter80-90 icon
export const Meter80_90Icon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M18.118 4.744a9.487 9.487 0 00-8.447-1.353 9.406 9.406 0 00-2.652 1.34 9.485 9.485 0 00-2.109 2.1 9.447 9.447 0 00-1.355 2.644 9.441 9.441 0 00-.467 2.943h6a3.448 3.448 0 01.17-1.078 3.43 3.43 0 01.495-.964 3.531 3.531 0 01.776-.772 3.469 3.469 0 01.969-.49 3.467 3.467 0 013.094.493 3.5 3.5 0 01.78.78l4.852-3.53a9.5 9.5 0 00-2.106-2.113z"
        fill={color}
      />
      <Path
        d="M23.793 17.431H1.047l-.187-.476A12.419 12.419 0 0112.414-.005h.005a12.423 12.423 0 0111.561 16.96zm-21.712-1.5h20.677a10.842 10.842 0 00.58-3.52A10.933 10.933 0 0012.419 1.496 10.921 10.921 0 002.085 15.932z"
        fill="#9b95c0"
      />
      <Path
        d="M20.058 7.858l-.895-1.2-5.473 4.073a2.12 2.12 0 10.887 1.209z"
        fill="#524790"
      />
    </Svg>
  );
};

// Meter 90-100 icon
export const Meter90_100Icon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M21.576 9.502a9.448 9.448 0 00-1.345-2.647 9.5 9.5 0 00-2.11-2.107 9.487 9.487 0 00-8.447-1.353 9.406 9.406 0 00-2.652 1.34 9.485 9.485 0 00-2.109 2.1 9.447 9.447 0 00-1.355 2.644 9.441 9.441 0 00-.467 2.943h6a3.448 3.448 0 01.17-1.078 3.43 3.43 0 01.495-.964 3.531 3.531 0 01.776-.772 3.469 3.469 0 01.969-.49 3.467 3.467 0 013.094.493 3.481 3.481 0 01.778.778 3.429 3.429 0 01.493.97z"
        fill={color}
      />
      <Path
        d="M23.793 17.431H1.047l-.187-.476A12.419 12.419 0 0112.414-.005h.005a12.423 12.423 0 0111.561 16.96zm-21.712-1.5h20.677a10.842 10.842 0 00.58-3.52A10.933 10.933 0 0012.419 1.496 10.921 10.921 0 002.085 15.932z"
        fill="#9b95c0"
      />
      <Path
        d="M21.125 10.383l-.482-1.42-6.464 2.2a2.118 2.118 0 10.475 1.423z"
        fill="#524790"
      />
    </Svg>
  );
};

// Meter 100 icon
export const Meter100Icon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M21.577 9.504a9.438 9.438 0 00-1.346-2.65 9.462 9.462 0 00-2.113-2.11 9.491 9.491 0 00-8.446-1.351 9.446 9.446 0 00-2.654 1.341 9.505 9.505 0 00-2.106 2.093 9.409 9.409 0 00-1.357 2.644 9.451 9.451 0 00-.466 2.939h6a3.505 3.505 0 01.17-1.078 3.462 3.462 0 01.495-.966 3.508 3.508 0 01.776-.772 3.456 3.456 0 01.969-.49 3.463 3.463 0 013.095.495 3.494 3.494 0 011.27 1.744 3.458 3.458 0 01.167 1.068h6a9.464 9.464 0 00-.454-2.907z"
        fill={color}
      />
      <Path
        d="M23.794 17.431H1.047l-.187-.476A12.419 12.419 0 0112.415-.005a12.426 12.426 0 0111.562 16.96zm-21.712-1.5h20.677a10.841 10.841 0 00.579-3.52A10.931 10.931 0 0012.419 1.496 10.919 10.919 0 002.086 15.932z"
        fill="#9b95c0"
      />
      <Path
        d="M21.357 13.196l-.01-1.5-6.826.045a2.119 2.119 0 100 1.5z"
        fill="#524790"
      />
    </Svg>
  );
};
// Meter 100 + icon
export const Meter_above_100Icon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M21.577 9.504a9.441 9.441 0 00-1.346-2.65 9.464 9.464 0 00-2.113-2.11 9.489 9.489 0 00-8.445-1.351 9.432 9.432 0 00-2.658 1.338 9.505 9.505 0 00-2.106 2.093 9.412 9.412 0 00-1.357 2.644 9.451 9.451 0 00-.466 2.939h6a3.509 3.509 0 01.17-1.078 3.437 3.437 0 01.5-.966 3.525 3.525 0 01.775-.772 3.459 3.459 0 01.97-.49 3.464 3.464 0 013.1.495 3.483 3.483 0 011.269 1.744 3.425 3.425 0 01.167 1.068h6a9.463 9.463 0 00-.46-2.904z"
        fill={color} />
      <Path
        d="M23.794 17.431H1.047l-.187-.476A12.419 12.419 0 0112.414-.005h.005a12.425 12.425 0 0111.562 16.96zm-21.712-1.5h20.677a10.844 10.844 0 00.579-3.52A10.931 10.931 0 0012.419 1.496 10.919 10.919 0 002.086 15.932z"
        fill="#9b95c0"
      />
      <Path
        d="M21.357 13.196l-.01-1.5-6.826.045a2.119 2.119 0 100 1.5z"
        fill="#524790"
      />
      <Path
        className="prefix__a"
        d="M27.457 1.657H25.8V0h-1.16v1.657h-1.657v1.16h1.657v1.657h1.16V2.817h1.657z"
        fill={color} />
    </Svg>
  );
};


// Leadership Profile Small icon
export const LeadershipProfileSmallIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        d="M19.662 2.183l-1.884-.274-.87-1.761a.16.16 0 00-.287 0l-.87 1.761-1.887.271a.189.189 0 00-.1.322l1.368 1.333-.334 1.907a.173.173 0 00.251.182l1.713-.9 1.716.9a.173.173 0 00.248-.182l-.324-1.911L19.767 2.5a.189.189 0 00-.1-.322z"
        fill="#ff7f40"
      />
      <Path
        className="prefix__b"
        d="M8.149 0A4.138 4.138 0 004.13 3.63a4.524 4.524 0 00-.046.649c0 .09 0 .179.008.267.008.129.02.257.038.382 0 .039.006.077.01.114.256 2.9 1.953 5.143 4.009 5.143s3.753-2.241 4.009-5.142c0-.038.007-.076.01-.114a4.795 4.795 0 00.047-.649 4.573 4.573 0 00-.046-.649A4.138 4.138 0 008.149 0z"
        fill="#522360" />
      <Path
        className="prefix__b"
        d="M10.042 9.498a25.509 25.509 0 00-3.813-.02 2.953 2.953 0 003.813.02z"
        fill="#522360" />
      <Path
        className="prefix__b"
        d="M12.916 10.041a4.074 4.074 0 00-.891-.274 4.73 4.73 0 01-7.758-.008 5.457 5.457 0 00-.757.233A5.379 5.379 0 000 15.036C0 18.007 2.408 18 5.379 18h5.54c2.971 0 5.379.007 5.379-2.964a5.379 5.379 0 00-3.382-4.995z"
        fill="#522360" />
    </Svg>
  );
};


// Provider Profile Small icon
export const ProviderProfileSmallIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M12.916 10.049c.026.047.052.094.076.145a2.571 2.571 0 01.22.741 1.206 1.206 0 11-.563-.018 2 2 0 00-.651-1.139 5.983 5.983 0 00-.33-.058h-.028a4.219 4.219 0 00-.226-.025v.023a.263.263 0 01-.007.067 1.053 1.053 0 01-.11.363 26.882 26.882 0 01-2.429 3.956l-.157-2.23a1.291 1.291 0 00.53-.517 1.009 1.009 0 00.14-.5 3.21 3.21 0 01-1.135.249h-.2a3.22 3.22 0 01-1.135-.249 1.033 1.033 0 00.14.5 1.305 1.305 0 00.53.517l-.155 2.225a27 27 0 01-2.429-3.953 1.106 1.106 0 01-.11-.363c0-.023-.006-.045-.007-.067a.113.113 0 010-.023 8.215 8.215 0 00-.226.025h-.028l-.117.015a2 2 0 00-.794 1.125.669.669 0 01.292.342 2.785 2.785 0 011.28 1.421.386.386 0 010 .33 4.469 4.469 0 01.331 1.591c0 .768-.033 1.25-.678 1.378a.326.326 0 01-.23.094h-.494a.331.331 0 01-.332-.332v-.006a.335.335 0 01.332-.324h.5a.332.332 0 01.138.03c.121-.024.137-.058.148-.076a2.006 2.006 0 00.075-.764 3.91 3.91 0 00-.3-1.4.38.38 0 01-.194-.188c-.326-.679-.765-1.1-1.147-1.1s-.847.456-1.174 1.161a.379.379 0 01-.225.2 3.858 3.858 0 00-.268 1.32 2.09 2.09 0 00.081.765c.011.018.034.055.167.079a.341.341 0 01.149-.035h.495a.334.334 0 01.332.312v.019a.331.331 0 01-.332.332h-.49a.328.328 0 01-.221-.086.767.767 0 01-.56-.333 2.044 2.044 0 01-.163-1.054 4.437 4.437 0 01.319-1.557.389.389 0 01.012-.293 3.664 3.664 0 01.747-1.1 1.981 1.981 0 01.53-.373.679.679 0 01.334-.38 2.135 2.135 0 01.336-.847 5.384 5.384 0 00-3.51 5.046c0 2.972 2.41 2.965 5.382 2.965h5.544c2.972 0 5.381.007 5.381-2.965a5.384 5.384 0 00-3.386-4.981z"
        fill={'#522360'} />
      <Path
        className="prefix__a"
        d="M4.124 4.934c0 .039.006.076.01.115.257 2.9 1.954 5.146 4.012 5.146s3.751-2.242 4.012-5.146c0-.038.006-.076.01-.115.018-.121.03-.253.038-.382 0-.088.008-.177.008-.267a4.323 4.323 0 00-.046-.65 4.042 4.042 0 00-8.043 0 4.687 4.687 0 00-.046.65c0 .09 0 .179.008.267.008.129.02.256.037.382z"
        fill={'#522360'} />
      <Circle
        className="prefix__a"
        cx={0.599}
        cy={0.599}
        transform="translate(12.29 11.489)"
        r={0.599}
      />
    </Svg>
  );
};


// Leadership Regional Small icon
export const LeadershipRegionalSmallIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Circle
        cx={3.527}
        cy={3.527}
        transform="translate(4.87 4.88)"
        fill="#fff"
        r={3.527}
      />
      <Path
        d="M8.293 11.775a3.276 3.276 0 003.281-3.269v-.012a3.375 3.375 0 00-3.281-3.4 3.274 3.274 0 00-3.282 3.268v.013a3.459 3.459 0 003.282 3.4zM2.785 2.869a7.79 7.79 0 1111.016 11.016l-5.507 5.507-5.508-5.507A8 8 0 012.784 2.87z"
        fillRule="evenodd"
        fill="#fff"
      />
      <Path
        d="M8.293 20.223L2.37 14.3a8.591 8.591 0 01-.012-11.836l.012-.011A8.377 8.377 0 1114.216 14.3zM3.205 3.278a7.413 7.413 0 00.006 10.2l5.082 5.082 5.091-5.092A7.202 7.202 0 003.205 3.278zM8.3 12.362h-.036a4.055 4.055 0 01-3.84-3.977 3.861 3.861 0 013.862-3.877h.009a3.989 3.989 0 013.867 3.99A3.869 3.869 0 018.3 12.363zm-.028-6.679a2.687 2.687 0 00-2.673 2.681 2.879 2.879 0 002.711 2.822 2.691 2.691 0 002.677-2.684 2.806 2.806 0 00-2.71-2.82z"
        fill="#522360"
      />
    </Svg>
  );
};

// Provider Small icon
export const ProviderSmallIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M6.009 0a3.051 3.051 0 00-2.964 2.677 3.33 3.33 0 00-.034.479 3.496 3.496 0 00.034.482c0 .028 0 .056.007.084.189 2.139 1.44 3.792 2.956 3.792s2.767-1.653 2.956-3.792c0-.028 0-.056.007-.084.014-.093.022-.187.028-.282 0-.065.006-.13.006-.2a3.372 3.372 0 00-.034-.479A3.051 3.051 0 006.009 0z"
        fill={color} />
      <Path
        className="prefix__a"
        d="M7.405 7.004a18.809 18.809 0 00-2.811-.015 2.178 2.178 0 002.811.015z"
        fill={color} />
      <Path
        className="prefix__a"
        d="M9.524 7.404a3 3 0 00-.657-.2 3.488 3.488 0 01-5.72-.006 4.026 4.026 0 00-.559.172A3.966 3.966 0 000 11.089c0 2.191 1.776 2.185 3.967 2.185h4.084c2.191 0 3.967.005 3.967-2.185a3.966 3.966 0 00-2.494-3.685z"
        fill={color} />
    </Svg>
  );
};

// Warning icon
export const WarningIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M27.142 20.159l-10.508-18.5a3.28 3.28 0 00-5.7 0l-10.5 18.5a3.278 3.278 0 002.85 4.9h20.98a3.285 3.285 0 002.88-4.9zM13.814 5.099c1.11 0 1.67 1 1.67 3.052a31.042 31.042 0 01-.451 4.613 18.324 18.324 0 01-.728 3.573c-.139.277-.277.416-.485.416a.518.518 0 01-.52-.348 16.566 16.566 0 01-.728-3.337 36.741 36.741 0 01-.486-4.891c-.006-2.072.585-3.079 1.728-3.079zm1.215 16.163a1.641 1.641 0 11.556-1.213 1.721 1.721 0 01-.557 1.214z"
        fill={color}
      />
    </Svg>
  );
};


// Warning Small icon
export const WarningSmallIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M12.088 8.978L7.408.738a1.461 1.461 0 00-2.538 0L.192 8.978a1.46 1.46 0 001.27 2.183h9.344a1.463 1.463 0 001.283-2.183zM6.152 2.271c.494 0 .744.446.744 1.359a13.827 13.827 0 01-.2 2.055 8.167 8.167 0 01-.324 1.591c-.062.123-.123.185-.216.185a.231.231 0 01-.232-.155A7.371 7.371 0 015.6 5.82a16.371 16.371 0 01-.217-2.178c0-.923.261-1.371.769-1.371zm.541 7.2a.731.731 0 11.248-.54.766.766 0 01-.248.539z"
        fill={color}
      />
    </Svg>
  );
};


// Leadership Midlevel icon
export const LeadershipMidlevelFilterIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <G transform="translate(-327 -173)">
        <Circle
          cx={15}
          cy={15}
          r={15}
          transform="translate(327 173)"
          fill="#f1f3f6"
        />
        <Path
          className="prefix__b"
          d="M341.715 180a3.409 3.409 0 00-3.311 2.991 3.722 3.722 0 00-.038.535 3.65 3.65 0 00.038.535c0 .032.005.063.008.094.211 2.39 1.609 4.237 3.3 4.237s3.092-1.847 3.3-4.237c0-.031.005-.062.008-.094a3.5 3.5 0 00.031-.315c0-.073.007-.146.007-.22a3.767 3.767 0 00-.038-.535 3.41 3.41 0 00-3.305-2.991z"
          fill={color} />
        <Path
          className="prefix__b"
          d="M343.273 187.826a21.016 21.016 0 00-3.137-.013 2.433 2.433 0 003.141.017z"
          fill={color} />
        <Path
          className="prefix__b"
          d="M345.642 188.273a3.357 3.357 0 00-.734-.226 3.9 3.9 0 01-6.392-.006 4.5 4.5 0 00-.624.192 4.432 4.432 0 00-2.892 4.156c0 2.448 1.984 2.442 4.432 2.442h4.565c2.448 0 4.432.006 4.432-2.442a4.432 4.432 0 00-2.787-4.116z"
          fill={color} />
      </G>
    </Svg>
  );
};

// Leadership Provider  icon
export const LeadershipProviderlFilterIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <G transform="translate(-19 -223)">
        <Circle
          cx={15}
          cy={15}
          r={15}
          transform="translate(19 223)"
          fill="#f1f3f6"
        />
        <G transform="translate(-811.783 -268.579)">
          <Path
            className="prefix__b"
            d="M849.457 506.883c.021.039.043.078.063.12a2.119 2.119 0 01.182.612 1 1 0 11-.465-.015 1.653 1.653 0 00-.538-.941 4.86 4.86 0 00-.273-.048h-.026c-.062-.008-.124-.016-.187-.021v.019a.218.218 0 01-.006.055.872.872 0 01-.091.3 22.224 22.224 0 01-2.007 3.267l-.13-1.843a1.066 1.066 0 00.438-.427.832.832 0 00.116-.413 2.651 2.651 0 01-.938.206h-.162a2.661 2.661 0 01-.938-.206.853.853 0 00.116.413 1.078 1.078 0 00.438.427l-.128 1.839a22.313 22.313 0 01-2.007-3.267.916.916 0 01-.091-.3c0-.019-.005-.037-.006-.055a.09.09 0 010-.019 5.623 5.623 0 00-.187.021h-.023l-.1.012a1.655 1.655 0 00-.656.93.552.552 0 01.241.283 2.3 2.3 0 011.058 1.174.318.318 0 010 .273 3.69 3.69 0 01.274 1.315c0 .635-.027 1.033-.56 1.139a.27.27 0 01-.19.078h-.408a.274.274 0 01-.274-.274.277.277 0 01.274-.268h.41a.275.275 0 01.114.025c.1-.02.113-.048.122-.063a1.66 1.66 0 00.062-.631 3.233 3.233 0 00-.245-1.155.314.314 0 01-.16-.155c-.269-.561-.632-.91-.948-.91s-.7.377-.97.959a.313.313 0 01-.186.169 3.191 3.191 0 00-.221 1.091 1.728 1.728 0 00.067.632c.009.015.028.045.138.065a.281.281 0 01.123-.029h.409a.276.276 0 01.274.258v.016a.273.273 0 01-.274.274h-.405a.271.271 0 01-.183-.071.634.634 0 01-.463-.275 1.689 1.689 0 01-.135-.871 3.669 3.669 0 01.264-1.287.322.322 0 01.01-.242 3.028 3.028 0 01.617-.909 1.636 1.636 0 01.438-.308.561.561 0 01.276-.314 1.767 1.767 0 01.278-.7 4.449 4.449 0 00-2.9 4.17c0 2.456 1.991 2.45 4.447 2.45h4.581c2.456 0 4.447.006 4.447-2.45a4.449 4.449 0 00-2.796-4.125z"
            fill={color} />
          <Path
            className="prefix__b"
            d="M842.193 502.656c0 .032.005.063.008.1.212 2.4 1.615 4.252 3.315 4.252s3.1-1.853 3.315-4.252c0-.031.005-.063.008-.1.015-.1.025-.209.031-.316 0-.073.007-.146.007-.221a3.586 3.586 0 00-.038-.537 3.34 3.34 0 00-6.646 0 3.873 3.873 0 00-.038.537 3.635 3.635 0 00.038.537z"
            fill={color} />
          <Circle
            className="prefix__b"
            cx={0.495}
            cy={0.495}
            r={0.495}
            transform="translate(848.939 508.072)"
            fill={color} />
          <Path
            className="prefix__b"
            d="M855 503.333h-1.333V502h-1.333v1.333H851v1.333h1.333V506h1.333v-1.333H855z"
            fill={color} />
        </G>
      </G>
    </Svg>
  );
};



// Tick icon
export const TickIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M10.516 0l-5.58 5.582-3.371-3.311L0 3.836l4.936 4.936 7.14-7.209z"
        fill={color}
      />
    </Svg>
  );
};


// Region icon
export const RegionIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>

      <Path
        className="prefix__a"
        d="M15.813 12.171a4.613 4.613 0 016.524 6.524l-3.262 3.263-3.262-3.263a4.662 4.662 0 010-6.524z"
        fill='none'
        stroke={color}
        strokeWidth='1.5'
      />
      <Path
        className="prefix__a"
        d="M19.075 17.444a1.94 1.94 0 001.943-1.937v-.001a2 2 0 00-1.943-2.013 1.94 1.94 0 00-1.944 1.937v.008a2.047 2.047 0 001.944 2.006zM8.955 2.075A4.614 4.614 0 0115.48 8.6l-3.262 3.263-3.263-3.262a4.664 4.664 0 010-6.526z"
        fill='none'
        stroke={color}
        strokeWidth='1.5' />
      <Path
        className="prefix__a"
        d="M12.217 7.351a1.941 1.941 0 001.943-1.937v-.006a2 2 0 00-1.943-2.013 1.94 1.94 0 00-1.943 1.937v.007a2.048 2.048 0 001.943 2.012z"
        fill='none'
        stroke={color}
        strokeWidth='1.5' />
      <G>
        <Path
          className="prefix__a"
          d="M2.082 12.171a4.614 4.614 0 016.525 6.524l-3.262 3.263-3.262-3.263a4.662 4.662 0 01-.001-6.524z"
          fill='none'
          stroke={color}
          strokeWidth='1.5' />
        <Path
          className="prefix__a"
          d="M5.344 17.444a1.939 1.939 0 001.943-1.937v-.001a2 2 0 00-1.943-2.013A1.941 1.941 0 003.4 15.43v.008a2.048 2.048 0 001.944 2.006z"
          fill='none'
          stroke={color}
          strokeWidth='1.5' />
      </G>
    </Svg>
  );
};


//Mtd Ytd comparision

export const MtdYtdComparisionIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M6.053 14.785a7.126 7.126 0 118.732-8.732 7.126 7.126 0 00-8.732 8.732z"
        fill={'none'}
        stroke={color}
      />
      <Path
        className="prefix__a"
        d="M17.974 7.898a7.09 7.09 0 00-3.193-1.845 7.128 7.128 0 01-8.727 8.727 7.126 7.126 0 1011.921-6.882z"
        fill={'none'}
        stroke={color}
        strokeWidth='1.5'
      />
      <Path
        className="prefix__b"
        d="M6.306 10.568l4.175 4.175M7.305 8.568l4.9 4.9M8.645 6.909l5.028 5.028M10.645 5.909l4.188 4.188"
        fill={'none'}
        stroke={color}
      />
    </Svg>
  );
};


// Monthly Trends icon
export const MonthlyTrendsMainIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <G data-name="Group 927">
        <Path
          data-name="Path 1205"
          d="M21.714.061a2.159 2.159 0 00-2.179 2.129 2.118 2.118 0 00.4 1.249L16.12 7.333a2.176 2.176 0 00-.72-.127 2.172 2.172 0 00-.806.155l-4.143-4.3A2.126 2.126 0 0010.029.64 2.167 2.167 0 008.503.004H8.49a2.164 2.164 0 00-1.526.618 2.126 2.126 0 00-.254 2.764L2.91 7.28a2.19 2.19 0 00-.72-.127h-.012a2.166 2.166 0 00-1.526.618 2.131 2.131 0 00-.056 3.013l.038.038a2.167 2.167 0 001.526.636h.013a2.164 2.164 0 001.526-.618 2.126 2.126 0 00.074-2.978l3.713-3.794a2.177 2.177 0 00.989.254h.013a2.163 2.163 0 001.315-.443l3.947 4.082a2.121 2.121 0 00-.537 1.383 2.159 2.159 0 002.157 2.159 2.159 2.159 0 002.169-2.134 2.123 2.123 0 00-.572-1.46l3.713-3.8a2.17 2.17 0 00.987.254 2.147 2.147 0 100-4.293z"
          fill={color}
        />
      </G>
    </Svg>
  );
};


// Spline Indicator Icon icon 
export const SplineIndicatorIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G data-name="Group 768" stroke={color} strokeWidth={2}>
        <Path
          data-name="Line 157"
          fill="none"
          strokeLinecap="round"
          d="M1 5.5h30"
        />
        <G data-name="Ellipse 150" transform="translate(11.5)" fill="#fff">
          <Circle cx={5} cy={5} r={5} stroke="none" />
          <Circle cx={5} cy={5} r={4} fill={color} />
        </G>
      </G>
    </Svg>
  );
};

// Comparision icon
export const ComparisionIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <G className="prefix__a" transform="translate(10 10)" fill='#fff' stroke={color}>
        <Rect className="prefix__c" width={8} height={8} rx={4} stroke='none' />
        <Rect
          className="prefix__d"
          x={0.75}
          y={0.75}
          width={6.5}
          height={6.5}
          rx={3.25}
        />
      </G>
      <G className="prefix__a" transform="translate(10)" fill='#fff' stroke={color} strokeWidth='1.5'>
        <Rect className="prefix__c" width={8} height={8} rx={4} stroke='none' />
        <Rect
          className="prefix__d"
          fill='none'
          x={0.75}
          y={0.75}
          width={6.5}
          height={6.5}
          rx={3.25}
        />
      </G>
      <G className="prefix__a" fill='#fff' stroke={color} strokeWidth='1.5'>
        <Rect className="prefix__c" width={8} height={8} rx={4} stroke='none' />
        <Rect
          className="prefix__d"
          fill='none'
          x={0.75}
          y={0.75}
          width={6.5}
          height={6.5}
          rx={3.25}
        />
      </G>
      <G className="prefix__a" transform="translate(0 10)" fill='#fff' stroke={color} strokeWidth='1.5'>
        <Rect className="prefix__c" width={8} height={8} rx={4} stroke='none' />
        <Rect
          className="prefix__d"
          fill='none'
          x={0.75}
          y={0.75}
          width={6.5}
          height={6.5}
          rx={3.25}
        />
      </G>
      <Path className="prefix__b" d="M4 10.747v6.471M16.971 4.5H10.5" stroke={color} strokeWidth='1.5' fill='none' />
    </Svg>
  );
};


// Center icon
export const CenterIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >


      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M2.952 3.04a7.806 7.806 0 0111.039 11.039L8.472 19.6l-5.52-5.52a8.019 8.019 0 010-11.04z"
        stroke={color}
        strokeWidth={'1.5'}
        fill={'none'}
        fillRule={'evenodd'}
      />
      <Path
        className="prefix__a"
        d="M8.472 11.965a3.283 3.283 0 003.288-3.288 3.384 3.384 0 00-3.288-3.406A3.283 3.283 0 005.183 8.56a3.466 3.466 0 003.289 3.405z"
        stroke={color}
        strokeWidth={'1.5'}
        fill={'none'}
        fillRule={'evenodd'} />
    </Svg>
  );
};


// AlphabeticSort icon
export const AlphabeticSortIcon = ({ width, height, backgroudcolor, fontcolor, othercolor, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >

      <Defs></Defs>
      <G fill={backgroudcolor} stroke={othercolor}>
        <Rect width={36} height={36} rx={6} stroke="none" />
        <Rect x={0.5} y={0.5} width={35} height={35} rx={5.5} fill="none" />
      </G>
      <Path
        className="prefix__b"
        d="M12.586 8.302h1.5l3.586 8.27h-2.04l-.717-1.748h-3.2l-.695 1.748H9zm.714 2.4l-1.009 2.577h2.017zM10.098 25.066l4.191-4.976h-4.034v-1.613h6.253v1.614l-4.124 4.976h4.258v1.68h-6.544z"
        fill={fontcolor} />
      <Path
        d="M26.854 20.92h-1.86V9.243a.947.947 0 00-.942-.941h-1.008a.947.947 0 00-.941.941V20.92h-1.861c-.381 0-.538.247-.336.56l3.272 5.043a.408.408 0 00.74 0l3.272-5.043c.202-.313.045-.56-.336-.56z"
        fillRule="evenodd"
        fill={fontcolor}
        fillRule={'evenodd'}
      />

    </Svg>
  );
};


// Pattern Legends icon
export const PatternLegendsIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >

      <Defs></Defs>
      <G
        transform="translate(.03 .03)"
        stroke={color}
        strokeWidth={1.5}
        fill="#fff"
      >
        <Rect width={10} height={10} rx={2} stroke="none" />
        <Rect
          x={0.75}
          y={0.75}
          width={8.5}
          height={8.5}
          rx={1.25}
          fill="none"
        />
      </G>
      <Path className="prefix__b" d="M3.149 9.341l6.15-5.599M.53 6.53l6-6" stroke={color} strokeWidth={'1.5'} fill={'none'}/>

    </Svg>
  );
};


//Info Small icon
export const InfoSmallIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path fill="none" d="M0 0h16v16H0z" />
      <Path
        d="M8.584 17.167a8.584 8.584 0 118.584-8.584 8.609 8.609 0 01-8.584 8.584zm0-15.737a7.153 7.153 0 107.153 7.153 7.174 7.174 0 00-7.153-7.152zm0 12.16a.676.676 0 01-.715-.715V7.868a.715.715 0 011.431 0v5.007a.717.717 0 01-.716.716zm0-9.514a.787.787 0 11-.787.787.794.794 0 01.787-.787z"
        fill="#9a9b9f"
      />
    </Svg>
  );
};


//My Info icon
export const MyDataInfoIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
     <Defs></Defs>
      <G transform="translate(-838.784 -498.579)">
        <Path
          className="prefix__a"
          d="M849.457 506.883c.021.039.043.078.063.12a2.119 2.119 0 01.182.612 1 1 0 11-.465-.015 1.653 1.653 0 00-.538-.941 4.86 4.86 0 00-.273-.048h-.026c-.062-.008-.124-.016-.187-.021v.019a.218.218 0 01-.006.055.872.872 0 01-.091.3 22.224 22.224 0 01-2.007 3.267l-.13-1.843a1.066 1.066 0 00.438-.427.832.832 0 00.116-.413 2.651 2.651 0 01-.938.206h-.162a2.661 2.661 0 01-.938-.206.853.853 0 00.116.413 1.078 1.078 0 00.438.427l-.128 1.839a22.313 22.313 0 01-2.007-3.267.916.916 0 01-.091-.3c0-.019-.005-.037-.006-.055a.09.09 0 010-.019 5.623 5.623 0 00-.187.021h-.023l-.1.012a1.655 1.655 0 00-.656.93.552.552 0 01.241.283 2.3 2.3 0 011.058 1.174.318.318 0 010 .273 3.69 3.69 0 01.274 1.315c0 .635-.027 1.033-.56 1.139a.27.27 0 01-.19.078h-.408a.274.274 0 01-.274-.274.277.277 0 01.274-.268h.41a.275.275 0 01.114.025c.1-.02.113-.048.122-.063a1.66 1.66 0 00.062-.631 3.233 3.233 0 00-.245-1.155.314.314 0 01-.16-.155c-.269-.561-.632-.91-.948-.91s-.7.377-.97.959a.313.313 0 01-.186.169 3.191 3.191 0 00-.221 1.091 1.728 1.728 0 00.067.632c.009.015.028.045.138.065a.281.281 0 01.123-.029h.409a.276.276 0 01.274.258v.016a.273.273 0 01-.274.274h-.405a.271.271 0 01-.183-.071.634.634 0 01-.463-.275 1.689 1.689 0 01-.135-.871 3.669 3.669 0 01.264-1.287.322.322 0 01.01-.242 3.028 3.028 0 01.617-.909 1.636 1.636 0 01.438-.308.561.561 0 01.276-.314 1.767 1.767 0 01.278-.7 4.449 4.449 0 00-2.9 4.17c0 2.456 1.991 2.45 4.447 2.45h4.581c2.456 0 4.447.006 4.447-2.45a4.449 4.449 0 00-2.796-4.125z"
        fill={color}/>
        <Path
          className="prefix__a"
          d="M842.193 502.656c0 .032.005.063.008.1.212 2.4 1.615 4.252 3.315 4.252s3.1-1.853 3.315-4.252c0-.031.005-.063.008-.1.015-.1.025-.209.031-.316 0-.073.007-.146.007-.221a3.586 3.586 0 00-.038-.537 3.34 3.34 0 00-6.646 0 3.873 3.873 0 00-.038.537 3.635 3.635 0 00.038.537z"
          fill={color}/>
        <Circle
          className="prefix__a"
          cx={0.495}
          cy={0.495}
          r={0.495}
          transform="translate(848.939 508.072)"
        />
        <Path
          className="prefix__a"
          d="M855 503.333h-1.333V502h-1.333v1.333H851v1.333h1.333V506h1.333v-1.333H855z"
          fill={color}/>
      </G>
    </Svg>
  );
};

//My Info icon
export const MidlevelDataInfoIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
           <Defs></Defs>
      <Path
        className="prefix__a"
        d="M6.715 0a3.409 3.409 0 00-3.311 2.991 3.722 3.722 0 00-.038.535 3.65 3.65 0 00.038.535c0 .032.005.063.008.094.211 2.39 1.609 4.237 3.3 4.237s3.092-1.847 3.3-4.237c0-.031.005-.062.008-.094a3.5 3.5 0 00.031-.315c0-.073.007-.146.007-.22a3.767 3.767 0 00-.038-.535A3.41 3.41 0 006.715 0z"
        fill={color}/>
      <Path
        className="prefix__a"
        d="M8.273 7.826a21.016 21.016 0 00-3.137-.013 2.433 2.433 0 003.141.017z"
        fill={color}/>
      <Path
        className="prefix__a"
        d="M10.642 8.273a3.357 3.357 0 00-.734-.226 3.9 3.9 0 01-6.392-.006 4.5 4.5 0 00-.624.192A4.432 4.432 0 000 12.389c0 2.448 1.984 2.442 4.432 2.442h4.565c2.448 0 4.432.006 4.432-2.442a4.432 4.432 0 00-2.787-4.116z"
        fill={color}/>
    </Svg>
  );
};


//My Perforance New icon
export const MyPerforanceNewIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M5.436 21.876l1.015-1 .979-.979a1.224 1.224 0 00.116-1.633 1.19 1.19 0 00-1.672-.167 1.23 1.23 0 00-.085.077l-1.03 1.006a10.208 10.208 0 01-2.137-5.175h1.511a1.19 1.19 0 000-2.38h-1.5a10.2 10.2 0 012.126-5.174l1.015 1.016a1.19 1.19 0 001.683 0c.027-.027.052-.055.077-.085a1.224 1.224 0 00-.116-1.63l-.967-.979a10.205 10.205 0 015.175-2.137v1.433a1.19 1.19 0 002.38 0V2.633l.395.054A10.191 10.191 0 0120.013 5.6l.045.045a10.119 10.119 0 012.749 4.83l.014.062a1.286 1.286 0 001.455 1 1.314 1.314 0 001.046-1.536l-.014-.066A12.816 12.816 0 103.755 21.879a1.19 1.19 0 001.681-.003zm13.3-14.945a1.128 1.128 0 00-1.514-.082l-4 3.206a2.818 2.818 0 102.391 2.391l3.209-3.982a1.128 1.128 0 00-.085-1.523z"
        fill="#5e4199"
      />
      <Path
        d="M26.13 13.888a1.032 1.032 0 01.282.9l-.7 4.286a1.029 1.029 0 01-.846.846.991.991 0 01-.164 0 1.094 1.094 0 01-.767-.313l-.806-.806-5.4 5.409a1.353 1.353 0 01-1.914 0l-2.734-2.739L7.3 27.243a1.356 1.356 0 01-1.919-1.915l6.731-6.728a1.353 1.353 0 011.914 0l2.738 2.738 4.45-4.45-.815-.809a1.052 1.052 0 01-.319-.818 1.035 1.035 0 01.863-.95l4.286-.708a1 1 0 01.169-.014 1.034 1.034 0 01.732.299z"
        fill="#6ab3e3"
      />
    </Svg>
  );
};

//My Perforance New Small icon
export const MyPerforanceNewSmallIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Path
        d="M3.497 14.072l.653-.646.629-.629a.787.787 0 00.074-1.05.766.766 0 00-1.079-.106.85.85 0 00-.054.049l-.66.648a6.567 6.567 0 01-1.374-3.329h.972a.765.765 0 000-1.531h-.963A6.564 6.564 0 013.061 4.15l.653.653a.766.766 0 001.083 0 .824.824 0 00.049-.054.787.787 0 00-.072-1.051l-.624-.629a6.565 6.565 0 013.324-1.375v.925a.765.765 0 001.531 0v-.925l.254.034a6.556 6.556 0 013.615 1.874l.029.029a6.509 6.509 0 011.771 3.107l.009.04a.827.827 0 00.936.642.845.845 0 00.673-.988q0-.021-.009-.042a8.244 8.244 0 10-13.867 7.684.766.766 0 001.081-.002zm8.557-9.614a.726.726 0 00-.974-.053L8.503 6.468a1.813 1.813 0 101.538 1.538l2.064-2.561a.726.726 0 00-.054-.98z"
        fill="#5e4199"
      />
      <Path
        d="M16.809 8.933a.664.664 0 01.181.579l-.451 2.759a.662.662 0 01-.544.544.636.636 0 01-.105 0 .7.7 0 01-.493-.2l-.519-.519-3.475 3.475a.871.871 0 01-1.231 0l-1.76-1.76-3.719 3.713a.871.871 0 01-1.232-1.232l4.33-4.328a.871.871 0 011.231 0l1.761 1.761 2.862-2.862-.524-.521a.677.677 0 01-.2-.526.666.666 0 01.555-.611l2.757-.455a.644.644 0 01.109-.009.665.665 0 01.467.192z"
        fill="#6ab3e3"
      />
    </Svg>
  );
};


//No notification icon
export const NoNotificationIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M8.002 19.784a2.2 2.2 0 002.112-2.89H5.867a2.208 2.208 0 00-.111.667 2.263 2.263 0 002.246 2.223zM3.266 4.201a6.165 6.165 0 00-1.712 4.29v3.512h12.893V8.491a6.166 6.166 0 00-1.712-4.29 6.508 6.508 0 00-2.669-1.688 2.447 2.447 0 00.044-.4 2.112 2.112 0 10-4.223 0 2.451 2.451 0 00.044.4 5.959 5.959 0 00-2.665 1.688zm3.512-2.09a1.223 1.223 0 012.445 0 .615.615 0 01-.022.2 7.609 7.609 0 00-1.023-.089h-.756c-.222.022-.445.044-.645.067zM14.449 12.893H1.556a1.556 1.556 0 100 3.112h12.893a1.556 1.556 0 100-3.112z"
        fill={color}/>
    </Svg>
  );
};


//It helpdesk icon
export const ItHelpdeskIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
   <G data-name="Group 2392">
        <Path
          data-name="Path 1796"
          d="M15.871 17.522c-.025-.025-.033-.056-.055-.082a7 7 0 01-8.173 0c-.022.026-.03.057-.055.082l-3.283 3.275a11.714 11.714 0 0014.836 0z"
          fill="#5e4199"
        />
        <Path
          data-name="Path 1797"
          d="M7.588 5.924c.025.025.033.056.055.082a7 7 0 018.173 0c.022-.026.03-.057.055-.082l3.277-3.275a11.714 11.714 0 00-14.836 0z"
          fill="#5e4199"
        />
        <Path
          data-name="Path 1798"
          d="M20.804 4.306l-3.282 3.275c-.025.025-.056.033-.082.055a7 7 0 010 8.173c.026.022.057.03.082.055l3.282 3.275a11.714 11.714 0 000-14.833z"
          fill="#5e4199"
        />
        <Path
          data-name="Path 1799"
          d="M5.929 15.865c.025-.025.056-.033.082-.055a7 7 0 010-8.177c-.026-.022-.057-.03-.082-.055L2.647 4.306a11.714 11.714 0 000 14.834z"
          fill="#5e4199"
        />
        <G data-name="Group 2884" fill="#6ab3e3">
          <Path
            data-name="Path 1800"
            d="M9.273 9.932h-.78c-.047 0-.083 0-.081-.065a3.954 3.954 0 01.328-1.535 2.847 2.847 0 011.37-1.373 4.009 4.009 0 013.129-.153 2.563 2.563 0 011.611 1.5 2.987 2.987 0 01.178 1.408 2.356 2.356 0 01-.759 1.529c-.333.321-.688.621-1.04.923a1.957 1.957 0 00-.621.786 2.576 2.576 0 00-.139.76c0 .092-.014.183-.017.276a.061.061 0 01-.047.07h-1.396a.053.053 0 01-.065-.038.071.071 0 010-.023 5.765 5.765 0 01.138-1.335 2.489 2.489 0 01.75-1.178c.311-.283.612-.571.9-.871a1.763 1.763 0 00.481-.91.968.968 0 00-.647-1.209l-.016-.005a2.107 2.107 0 00-1.665.061 1.25 1.25 0 00-.679.888 2.842 2.842 0 00-.066.39.1.1 0 01-.076.104.092.092 0 01-.038 0h-.762z"
          />
          <Path
            data-name="Path 1801"
            d="M11.716 15.063a.883.883 0 01.91.854v.005a.564.564 0 010 .066.91.91 0 01-1.82-.029.883.883 0 01.868-.9.381.381 0 01.042.004z"
          />
        </G>
      </G>
    </Svg>
  );
};


// AIEducation Center  icon
export const AiEducationCenterIcon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G data-name="Group 336">
        <Path
          data-name="Path 331"
          d="M16.2 2.191v10.577a.949.949 0 01-.947.947h-3.4a3.53 3.53 0 00-2.166.735 2.577 2.577 0 01-3.21 0 3.49 3.49 0 00-2.166-.735H.947A.949.949 0 010 12.768V2.191a.949.949 0 01.947-.947h.638v9.32a.614.614 0 00.657.677h1.586a7.32 7.32 0 012.417.348 3.643 3.643 0 011.45.889.546.546 0 00.812.019 4.14 4.14 0 012.4-1.121 17.865 17.865 0 012.688-.116H14a.6.6 0 00.657-.677v-9.3h.619a.888.888 0 01.924.908z"
          fill="#6d599f"
        />
        <Path
          data-name="Path 332"
          d="M2.707.026V10.1s3.094-.251 4.8.793V.819c-1.706-1.044-4.8-.793-4.8-.793z"
          fill={color}
        />
        <Path
          data-name="Path 333"
          d="M8.682.819v10.074c1.7-1.044 4.8-.793 4.8-.793V.026s-3.1-.251-4.8.793z"
          fill={color}
        />
      </G>
    </Svg>
  );
};


// Up Down Toggle icon
export const UpDownToggleIcon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G
        data-name="Component 34 \u2013 1"
        fill="none"
        stroke="#989899"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <Path data-name="Line 2810" d="M12.904 1.061L1.061 13.067" />
        <Path data-name="Path 1839" d="M7.63 13.067H1.061V6.498" />
        <Path data-name="Line 2811" d="M7.768 20.342L19.774 8.499" />
        <Path data-name="Path 1840" d="M19.773 15.067V8.498h-6.569" />
      </G>
    </Svg>
  );
};

// Toxicology icon
export const ToxicologyIcon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Defs></Defs>
      <Path
        className="prefix__a"
        d="M7.414 8.826l-5.657 5.657a6 6 0 008.486 8.486l5.657-5.657zM22.971 1.755a6.007 6.007 0 00-8.486 0L8.828 7.412l8.486 8.486 5.657-5.657a6.04 6.04 0 000-8.486z"
        fill={'#5e4199'} />
      <Path
        className="prefix__b"
        d="M17.947 20.359C15.959 20.728 14 21.475 14 22.998c0 2.916 7.181 3 8 3 .2 0 .776-.006 1.531-.055zM22 19.998c-.2 0-.776.006-1.531.055l5.584 5.584C28.041 25.268 30 24.521 30 22.998c0-2.916-7.181-3-8-3z"
        fill={'#6ab3e3'}/>
      <Path
        className="prefix__b"
        d="M22 26.998c-1.615 0-6.016-.175-8-1.915v1.915c0 2.916 7.181 3 8 3s8-.084 8-3v-1.915c-1.984 1.74-6.385 1.915-8 1.915z"
        fill={'#6ab3e3'} />
    </Svg>
  );
};

// Down Arrow Small icon
export const DownArrowSmallIcon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
       <Path d="M4.7 6.1L0 1.4 1.4 0l3.3 3.3L8 0l1.4 1.4z" 
       fill={color} />
    </Svg>
  );
};

// Increase Arrow Small icon
export const IncreaseArrowIcon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path
        d="M0 4.979h2.112l.936-1.282v6.262h2.065V3.697l.937 1.282h2.112L4.525-.001h-.889z"
        fill="#18b854"
      />
    </Svg>
  );
};

// Decrease Arrow Small icon
export const DecreaseArrowIcon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
       <Path
        d="M0 4.98h2.112l.936 1.282V0h2.066v6.262L6.05 4.98h2.113L4.526 9.96h-.889z"
        fill="#df1616"
      />
    </Svg>
  );
};

// Clinic Warning icon
export const ClinicWarningIcon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
       <Defs></Defs>
      <Path
        d="M35.238 24.168L23.8 3.826C22.408 1.357 20.418 0 18.191 0s-4.218 1.357-5.606 3.826L1.142 24.168c-1.379 2.451-1.513 4.873-.377 6.816S4.08 34 6.9 34h22.585c2.816 0 4.993-1.07 6.13-3.016s1.003-4.364-.377-6.816zm-2.186 5.319c-.582 1-1.849 1.545-3.567 1.545H6.9c-1.718 0-2.985-.548-3.568-1.545s-.44-2.367.4-3.862L15.173 5.282c.486-.864 1.524-2.313 3.019-2.313s2.532 1.449 3.018 2.313l11.441 20.342c.84 1.495.983 2.867.401 3.863z"
        fill="#efeded"
      />
      <Path
        className="prefix__b"
        d="M18.192 23.839a2.426 2.426 0 102.425 2.428 2.429 2.429 0 00-2.425-2.428zM16.554 20.21l.018.3a1.618 1.618 0 003.236-.006v-.015c.174-2.617.613-9.287.624-9.51v-.053a2.242 2.242 0 00-4.484.035v.059c.009.105.222 3.359.606 9.19z"
        fill={color}/>
    </Svg>
  );
};


// User feedback icon
export const UserFeedbackIcon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
       <Path
        d="M9.291 0a9.291 9.291 0 015.446 16.818 5.744 5.744 0 002.452 2.394s-3.449 1.816-6.212-.783A9.292 9.292 0 119.291 0z"
        fill="#532e6e"
        fillRule="evenodd"
      />
      <Path
        d="M13.579 7.447l-2.363-.281a.121.121 0 01-.112-.113l-.957-2.138a.872.872 0 00-.844-.507 1.047 1.047 0 00-.844.507l-.956 2.138a.121.121 0 01-.112.113l-2.363.281a.916.916 0 00-.732.619 1.006 1.006 0 00.225.956l1.744 1.576a.206.206 0 01.056.168l-.45 2.307a.933.933 0 00.338.9.852.852 0 00.956.057l2.025-1.182c.056-.056.112 0 .169 0l2.025 1.182a1.057 1.057 0 00.45.112.784.784 0 00.507-.169.831.831 0 00.337-.9l-.45-2.307a.2.2 0 01.057-.168l1.744-1.576a.862.862 0 00.224-.956.719.719 0 00-.674-.619z"
        fill="#fff"
      />
    </Svg>
  );
};


// Star Rating Active icon
export const StarRatingActiveIcon = ({ width, height,color1,color2,color3, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
       <Defs>
        <RadialGradient
          id="prefix__a"
          cx={0.5}
          cy={0.5}
          r={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor={color1} />
          <Stop offset={0.996} stopColor={color2} />
          <Stop offset={1} stopColor={color3} />
        </RadialGradient>
      </Defs>
      <Path
        d="M930.329 546.287l-9.9-1.179a.507.507 0 01-.471-.474l-4.011-8.958a3.654 3.654 0 00-3.537-2.123 4.386 4.386 0 00-3.537 2.123l-4.007 8.958a.506.506 0 01-.47.474l-9.9 1.179a3.837 3.837 0 00-3.066 2.593 4.216 4.216 0 00.943 4.007l7.309 6.6a.862.862 0 01.235.7l-1.888 9.667a3.911 3.911 0 001.417 3.772 3.571 3.571 0 004.007.239l8.488-4.954c.235-.235.47 0 .709 0l8.488 4.954a4.431 4.431 0 001.884.47 3.285 3.285 0 002.123-.709 3.482 3.482 0 001.414-3.772l-1.888-9.667a.854.854 0 01.239-.7l7.309-6.6a3.611 3.611 0 00.941-4.007 3.013 3.013 0 00-2.831-2.593z"
        transform="translate(-891.243 -533.554)"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
};


// Star Rating InActive icon
export const StarRatingInActiveIcon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
        <Path
        d="M39.086 12.733l-9.9-1.179a.507.507 0 01-.471-.474l-4.011-8.958a3.654 3.654 0 00-3.537-2.123 4.386 4.386 0 00-3.537 2.123l-4.007 8.958a.506.506 0 01-.47.474l-9.9 1.179a3.837 3.837 0 00-3.066 2.593 4.216 4.216 0 00.943 4.007l7.309 6.6a.862.862 0 01.235.7L6.786 36.3a3.911 3.911 0 001.417 3.772 3.571 3.571 0 004.007.239l8.488-4.954c.235-.235.47 0 .709 0l8.488 4.954a4.431 4.431 0 001.884.47 3.285 3.285 0 002.123-.709 3.482 3.482 0 001.414-3.772l-1.888-9.667a.854.854 0 01.239-.7l7.309-6.6a3.611 3.611 0 00.941-4.007 3.013 3.013 0 00-2.831-2.593z"
        fill="#9f9f9f"
      />
    </Svg>
  );
};


//Disclaimer icon
export const DisclaimerIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <G transform="translate(-137.709 -78.709)">
        <Circle
          cx={1.111}
          cy={1.111}
          r={1.111}
          transform="translate(144.598 82.344)"
        />
        <Path d="M146.634 86.499v3.662a.924.924 0 11-1.849 0v-3.662a.924.924 0 111.849 0z" />
        <Path
          d="M145.709 78.709a8 8 0 108 8 8 8 0 00-8-8zm4.651 12.651a6.578 6.578 0 01-9.381-9.223l.079-.079a6.578 6.578 0 119.381 9.223z"
          opacity={0.3}
        />
      </G>
    </Svg>
  );
};


// Info Icon Small icon
export const InfoIconSmall = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
       <Path
        d="M7.033 14.067a7.033 7.033 0 117.033-7.033 7.054 7.054 0 01-7.033 7.033zm0-12.895a5.861 5.861 0 105.861 5.861 5.878 5.878 0 00-5.861-5.861zm0 9.964a.554.554 0 01-.586-.586v-4.1a.586.586 0 011.172 0v4.1a.587.587 0 01-.586.586zm0-7.8a.645.645 0 11-.645.645.65.65 0 01.645-.645z"
        fill={color}
      />
    </Svg>
  );
};


// Calendar icon
export const CalendarIcon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Path
        d="M17.878 3.3h-1.017v3.93H13.3V3.3H6.8v3.93H3.248V3.3H2.231A2.236 2.236 0 000 5.536v14.545a2.236 2.236 0 002.231 2.231h15.647a2.236 2.236 0 002.231-2.231V5.536A2.236 2.236 0 0017.878 3.3zm0 16.777H2.231V9.151h15.647zM4.01 5.277V.989A.982.982 0 015 0a.965.965 0 01.989.989v4.293a.989.989 0 01-1.977 0zm10.139 0V.989A.982.982 0 0115.138 0a.965.965 0 01.989.989v4.293a.989.989 0 01-1.977 0z"
        fill={color}
      />
    </Svg>
  );
};


// Speedometer 0 icon
export const Speedometer_0Icon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
  <G transform="translate(-1458.278 -402.342)">
        <Path
          d="M1512.4 430.131a26.309 26.309 0 10-50.8 9.63h48.982a26.256 26.256 0 001.818-9.63z"
          stroke="#e0dee9"
          strokeWidth={3}
          fill="none"
          strokeMiterlimit={10}
        />
        <Circle
          cx={4.744}
          cy={4.744}
          r={4.744}
          transform="translate(1481.343 425.674)"
          fill="#6e59a0"
        />
        <Path
          stroke="#6e59a0"
          strokeWidth={1.5}
          fill="none"
          strokeMiterlimit={10}
          d="M1486.088 430.131h-19.656"
        />
      </G>
    </Svg>
  );
};

// Speedometer 0-10 icon
export const Speedometer0_10Icon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
  <G transform="translate(-1336.518 -402.342)">
        <Path
          d="M1349.735 430.131a14.6 14.6 0 01.617-4.191"
          stroke={color}
          strokeWidth={10}
          fill="none"
          strokeMiterlimit={10}
        />
        <Path
          d="M1390.636 430.131a26.309 26.309 0 10-50.8 9.63h48.982a26.256 26.256 0 001.818-9.63z"
          stroke="#e0dee9"
          strokeWidth={3}
          fill="none"
          strokeMiterlimit={10}
        />
        <Circle
          cx={4.744}
          cy={4.744}
          r={4.744}
          transform="translate(1359.583 425.674)"
          fill="#6e59a0"
        />
        <Path
          stroke="#6e59a0"
          strokeWidth={1.5}
          fill="none"
          strokeMiterlimit={10}
          d="M1364.328 430.131l-18.824-5.659"
        />
      </G>
    </Svg>
  );
};

// Speedometer 10-20 icon
export const Speedometer10_20Icon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
  <G transform="translate(-1264.306 -402.342)">
        <Path
          d="M1277.523 430.131A14.674 14.674 0 011280 422"
          stroke={color}
          strokeWidth={10}
          fill="none"
          strokeMiterlimit={10}
        />
        <Path
          d="M1318.424 430.131a26.309 26.309 0 10-50.8 9.63h48.982a26.233 26.233 0 001.818-9.63z"
          stroke="#e0dee9"
          strokeWidth={3}
          fill="none"
          strokeMiterlimit={10}
        />
        <Circle
          cx={4.744}
          cy={4.744}
          r={4.744}
          transform="translate(1287.371 425.674)"
          fill="#6e59a0"
        />
        <Path
          stroke="#6e59a0"
          strokeWidth={1.5}
          fill="none"
          strokeMiterlimit={10}
          d="M1275.811 419.153l16.305 10.978"
        />
      </G>
    </Svg>
  );
};


// Speedometer 20-30 icon
export const Speedometer20_30Icon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
   <G transform="translate(-1192.095 -402.342)">
        <Path
          d="M1205.311 430.131a14.5 14.5 0 015.715-11.565"
          stroke={color}
          strokeWidth={10}
          fill="none"
          strokeMiterlimit={10}
        />
        <Path
          d="M1246.213 430.131a26.309 26.309 0 10-50.8 9.63h48.987a26.256 26.256 0 001.813-9.63z"
          stroke="#e0dee9"
          strokeWidth={3}
          fill="none"
          strokeMiterlimit={10}
        />
        <Circle
          cx={4.744}
          cy={4.744}
          r={4.744}
          transform="translate(1215.16 425.674)"
          fill="#6e59a0"
        />
        <Path
          stroke="#6e59a0"
          strokeWidth={1.5}
          fill="none"
          strokeMiterlimit={10}
          d="M1219.905 430.131l-11.963-15.597"
        />
      </G>
    </Svg>
  );
};

// Speedometer 30-40 icon
export const Speedometer30_40Icon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
  <G transform="translate(-1119.883 -402.342)">
        <Path
          d="M1133.1 430.131a14.641 14.641 0 019.986-13.841"
          stroke={color}
          strokeWidth={10}
          fill="none"
          strokeMiterlimit={10}
        />
        <Path
          d="M1174 430.131a26.309 26.309 0 10-50.8 9.63h48.982a26.256 26.256 0 001.818-9.63z"
          stroke="#e0dee9"
          strokeWidth={3}
          fill="none"
          strokeMiterlimit={10}
        />
        <Circle
          cx={4.744}
          cy={4.744}
          r={4.744}
          transform="translate(1142.948 425.674)"
          fill="#6e59a0"
        />
        <Path
          stroke="#6e59a0"
          strokeWidth={1.5}
          fill="none"
          strokeMiterlimit={10}
          d="M1141.453 411.491l6.24 18.64"
        />
      </G>
    </Svg>
  );
};


// Speedometer 40-50 icon
export const Speedometer40_50Icon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
  <G transform="translate(-1047.671 -402.342)">
        <Path
          d="M1075.481 415.536a14.608 14.608 0 00-14.593 14.6"
          stroke={color}
          strokeWidth={10}
          fill="none"
          strokeMiterlimit={10}
        />
        <Path
          d="M1101.789 430.131a26.309 26.309 0 10-50.8 9.63h48.982a26.213 26.213 0 001.818-9.63z"
          stroke="#e0dee9"
          strokeWidth={3}
          fill="none"
          strokeMiterlimit={10}
        />
        <Circle
          cx={4.744}
          cy={4.744}
          r={4.744}
          transform="translate(1070.736 425.674)"
          fill="#6e59a0"
        />
        <Path
          stroke="#6e59a0"
          strokeWidth={1.5}
          fill="none"
          strokeMiterlimit={10}
          d="M1075.481 430.13v-19.656"
        />
      </G>
    </Svg>
  );
};


// Speedometer 50-60 icon
export const Speedometer50_60Icon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
   <G transform="translate(-975.46 -402.342)">
        <Path
          d="M1007.877 416.29a14.594 14.594 0 00-19.2 13.841"
          stroke={color}
          strokeWidth={10}
          fill="none"
          strokeMiterlimit={10}
        />
        <Path
          d="M1029.578 430.131a26.309 26.309 0 10-50.8 9.63h48.982a26.256 26.256 0 001.818-9.63z"
          stroke="#e0dee9"
          strokeWidth={3}
          fill="none"
          strokeMiterlimit={10}
        />
        <Circle
          cx={4.744}
          cy={4.744}
          r={4.744}
          transform="translate(998.525 425.674)"
          fill="#6e59a0"
        />
        <Path
          stroke="#6e59a0"
          strokeWidth={1.5}
          fill="none"
          strokeMiterlimit={10}
          d="M1009.484 411.483l-6.214 18.648"
        />
      </G>
    </Svg>
  );
};


// Speedometer 60-70 icon
export const Speedometer60_70Icon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
   <G transform="translate(-903.248 -402.342)">
        <Path
          d="M939.936 418.566a14.588 14.588 0 00-23.471 11.565"
          stroke={color}
          strokeWidth={10}
          fill="none"
          strokeMiterlimit={10}
        />
        <Path
          d="M957.366 430.131a26.309 26.309 0 10-50.8 9.63h48.982a26.235 26.235 0 001.818-9.63z"
          stroke="#e0dee9"
          strokeWidth={3}
          fill="none"
          strokeMiterlimit={10}
        />
        <Circle
          cx={4.744}
          cy={4.744}
          r={4.744}
          transform="translate(926.313 425.674)"
          fill="#6e59a0"
        />
        <Path
          stroke="#6e59a0"
          strokeWidth={1.5}
          fill="none"
          strokeMiterlimit={10}
          d="M931.058 430.131l12.028-15.547"
        />
      </G>
    </Svg>
  );
};


// Speedometer 70-80 icon
export const Speedometer70_80Icon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
    <G transform="translate(-831.037 -402.342)">
        <Path
          d="M870.965 422a14.626 14.626 0 00-24.237 0 14.662 14.662 0 00-2.475 8.131"
          stroke={color}
          strokeWidth={10}
          fill="none"
          strokeMiterlimit={10}
        />
        <Path
          d="M885.155 430.131a26.309 26.309 0 10-50.8 9.63h48.982a26.256 26.256 0 001.818-9.63z"
          stroke="#e0dee9"
          strokeWidth={3}
          fill="none"
          strokeMiterlimit={10}
        />
        <Circle
          cx={4.744}
          cy={4.744}
          r={4.744}
          transform="translate(854.102 425.674)"
          fill="#6e59a0"
        />
        <Path
          stroke="#6e59a0"
          strokeWidth={1.5}
          fill="none"
          strokeMiterlimit={10}
          d="M858.847 430.131l16.291-10.998"
        />
      </G>
    </Svg>
  );
};


// Speedometer 80-90 icon
export const Speedometer80_90Icon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
   <G transform="translate(-758.825 -402.342)">
        <Path
          d="M772.042 430.131a14.59 14.59 0 0128.569-4.191"
          stroke={color}
          strokeWidth={10}
          fill="none"
          strokeMiterlimit={10}
        />
        <Path
          d="M812.943 430.131a26.309 26.309 0 10-50.8 9.63h48.982a26.255 26.255 0 001.818-9.63z"
          stroke="#e0dee9"
          strokeWidth={3}
          fill="none"
          strokeMiterlimit={10}
        />
        <Circle
          cx={4.744}
          cy={4.744}
          r={4.744}
          transform="translate(781.89 425.674)"
          fill="#6e59a0"
        />
        <Path
          stroke="#6e59a0"
          strokeWidth={1.5}
          fill="none"
          strokeMiterlimit={10}
          d="M805.354 424.135l-18.719 5.995"
        />
      </G>
    </Svg>
  );
};

// Speedometer 90-100 icon
export const Speedometer90_100Icon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
   <G transform="translate(-686.613 -402.342)">
        <Path
          d="M699.83 430.131a14.593 14.593 0 0129.186 0"
          stroke={color}
          strokeWidth={10}
          fill="none"
          strokeMiterlimit={10}
        />
        <Path
          d="M740.731 430.131a26.309 26.309 0 10-50.8 9.63h48.982a26.236 26.236 0 001.818-9.63z"
          stroke="#e0dee9"
          strokeWidth={3}
          fill="none"
          strokeMiterlimit={10}
        />
        <Circle
          cx={4.744}
          cy={4.744}
          r={4.744}
          transform="translate(709.678 425.674)"
          fill="#6e59a0"
        />
        <Path
          stroke="#6e59a0"
          strokeWidth={1.5}
          fill="none"
          strokeMiterlimit={10}
          d="M734.079 430.131h-19.656"
        />
      </G>
    </Svg>
  );
};


// Toolbar Consolidated icon
export const ToolbarConsolidatedIcon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
    <G data-name="Group 3571">
        <G data-name="Group 3569">
          <Path
            data-name="Path 2043"
            d="M28.81 5.097a6.866 6.866 0 00-7.34-1.574l.017.015a8.54 8.54 0 012.016 3.251 3.242 3.242 0 01.431-.045h.021a3.271 3.271 0 013.172 3.273 3.173 3.173 0 01-3.165 3.169h-.032a3.326 3.326 0 01-.7-.118 8.535 8.535 0 01-1.74 2.556l-.771.771 3.238 3.238 4.855-4.862a6.871 6.871 0 00-.002-9.674z"
            fill={color}
          />
        </G>
        <G data-name="Group 3570">
          <Path
            data-name="Path 2044"
            d="M1.992 5.097a6.867 6.867 0 017.341-1.574l-.018.015a8.538 8.538 0 00-2.013 3.253 3.274 3.274 0 00-.431-.045H6.85a3.271 3.271 0 00-3.172 3.273 3.174 3.174 0 003.165 3.169h.033a3.306 3.306 0 00.7-.118 8.538 8.538 0 001.741 2.556l.77.771-3.238 3.238-4.855-4.862a6.871 6.871 0 01-.002-9.676z"
            fill={color}
          />
        </G>
        <G data-name="Path 2045" fill={color}>
          <Path d="M15.424 22.407l-.354-.354-6.072-6.073-.005-.004-.004-.004a9.297 9.297 0 01-.013-12.817l.012-.012.013-.012.005-.005A9.027 9.027 0 0115.395.5c2.44 0 4.73.954 6.448 2.686a9.029 9.029 0 012.634 6.396 9.026 9.026 0 01-2.634 6.396l-6.066 6.075-.353.354zm-.02-9.262h.027a3.47 3.47 0 003.453-3.459 3.57 3.57 0 00-3.47-3.587h-.016a3.435 3.435 0 00-2.44 1.022 3.431 3.431 0 00-1.002 2.444 3.668 3.668 0 003.448 3.58z" />
          <Path
            d="M15.395 1c-2.185 0-4.37.828-6.044 2.488l-.012.011a8.802 8.802 0 00.012 12.128l6.073 6.072 6.064-6.073A8.583 8.583 0 0015.395 1m.036 12.645h-.04a4.155 4.155 0 01-3.935-4.074 3.955 3.955 0 013.94-3.972h.026a4.087 4.087 0 013.962 4.088 3.964 3.964 0 01-3.953 3.958M15.394 0v1-1A9.516 9.516 0 0122.2 2.834a9.526 9.526 0 012.778 6.748c0 2.545-.987 4.941-2.779 6.748l-6.774 6.784-6.797-6.798a9.797 9.797 0 01-.013-13.505l.047-.047A9.523 9.523 0 0115.394 0zm.012 6.599h-.01a2.936 2.936 0 00-2.083.874 2.935 2.935 0 00-.857 2.086 3.167 3.167 0 002.963 3.086h.01a2.97 2.97 0 002.955-2.96A3.072 3.072 0 0015.406 6.6z"
            fill="#efeded"
          />
        </G>
      </G>
    </Svg>
  );
};

// Toolbar Regional icon
export const ToolbarRegionalIcon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <G data-name="Group 3571">
        <G data-name="Path 2045" fill={color}>
          <Path d="M9.503 22.407l-.354-.354-6.072-6.073-.005-.004-.004-.004a9.297 9.297 0 01-.013-12.817l.012-.012.013-.012.005-.005A9.027 9.027 0 019.474.5c2.44 0 4.73.954 6.448 2.686a9.029 9.029 0 012.634 6.396 9.026 9.026 0 01-2.634 6.396l-6.066 6.075-.353.354zm-.02-9.262h.027a3.47 3.47 0 003.453-3.459A3.57 3.57 0 009.493 6.1h-.016a3.435 3.435 0 00-2.44 1.022 3.431 3.431 0 00-1.002 2.444 3.668 3.668 0 003.448 3.58z" />
          <Path
            d="M9.474 1c-2.185 0-4.37.828-6.044 2.488l-.012.011a8.802 8.802 0 00.012 12.128l6.073 6.072 6.064-6.073A8.583 8.583 0 009.474 1m.036 12.645h-.04a4.155 4.155 0 01-3.935-4.074 3.955 3.955 0 013.94-3.972H9.5a4.087 4.087 0 013.962 4.088 3.964 3.964 0 01-3.953 3.958M9.473 0v1-1a9.516 9.516 0 016.805 2.834 9.526 9.526 0 012.778 6.748c0 2.545-.987 4.941-2.779 6.748l-6.774 6.784-6.797-6.798a9.797 9.797 0 01-.013-13.505l.047-.047A9.523 9.523 0 019.473 0zm.012 6.599h-.01a2.936 2.936 0 00-2.083.874 2.935 2.935 0 00-.857 2.086 3.167 3.167 0 002.963 3.086h.01a2.97 2.97 0 002.955-2.96A3.072 3.072 0 009.485 6.6z"
            fill="#efeded"
          />
        </G>
      </G>
    </Svg>
  );
};

// Toolbar Provider Regional icon
export const ToolbarProviderRegionalIcon = ({ width, height,color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox}>
      <Circle
        cx={4.747}
        cy={4.747}
        transform="translate(6.555 6.568)"
        fill="#fff"
        r={4.747}
      />
      <Path
        d="M11.164 15.851a4.41 4.41 0 004.416-4.4v-.016a4.544 4.544 0 00-4.416-4.575 4.407 4.407 0 00-4.418 4.4v.017a4.657 4.657 0 004.418 4.574zM3.749 3.863a10.486 10.486 0 1114.829 14.829l-7.413 7.414-7.415-7.414a10.772 10.772 0 01-.001-14.83z"
        fillRule="evenodd"
        fill="#fff"
      />
      <Path
        d="M11.164 27.223L3.19 19.249a11.564 11.564 0 01-.016-15.933l.016-.014a11.276 11.276 0 0115.946 15.947zM4.315 4.413a9.978 9.978 0 00.008 13.732l6.841 6.841 6.853-6.855a9.694 9.694 0 00-13.7-13.718zm6.858 12.229h-.049a5.459 5.459 0 01-5.17-5.353 5.2 5.2 0 015.2-5.219h.013a5.369 5.369 0 015.206 5.371 5.208 5.208 0 01-5.2 5.201zm-.038-8.991a3.617 3.617 0 00-3.6 3.609 3.876 3.876 0 003.649 3.8 3.623 3.623 0 003.6-3.613 3.777 3.777 0 00-3.647-3.8z"
        fill={color}
      />
    </Svg>
  );
};

// Provider Regional Small icon
export const ProviderRegionalSmallIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <Circle
        cx={3.527}
        cy={3.527}
        transform="translate(4.87 4.88)"
        fill="#fff"
        r={3.527}
      />
      <Path
        d="M8.293 11.775a3.276 3.276 0 003.281-3.269v-.012a3.375 3.375 0 00-3.281-3.4 3.274 3.274 0 00-3.282 3.268v.013a3.459 3.459 0 003.282 3.4zM2.785 2.869a7.79 7.79 0 1111.016 11.016l-5.507 5.507-5.508-5.507A8 8 0 012.784 2.87z"
        fillRule="evenodd"
        fill={color}
      />
      <Path
        d="M8.293 20.223L2.37 14.3a8.591 8.591 0 01-.012-11.836l.012-.011A8.377 8.377 0 1114.216 14.3zM3.205 3.278a7.413 7.413 0 00.006 10.2l5.082 5.082 5.091-5.092A7.202 7.202 0 003.205 3.278zM8.3 12.362h-.036a4.055 4.055 0 01-3.84-3.977 3.861 3.861 0 013.862-3.877h.009a3.989 3.989 0 013.867 3.99A3.869 3.869 0 018.3 12.363zm-.028-6.679a2.687 2.687 0 00-2.673 2.681 2.879 2.879 0 002.711 2.822 2.691 2.691 0 002.677-2.684 2.806 2.806 0 00-2.71-2.82z"
        fill={color}
      />
    </Svg>
  );
};

// Advanced Filter icon
export const AdvancedFilterIcon = ({ width, height, color, viewbox }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <G transform="translate(-321 -11)">
        <Circle
          cx={17.5}
          cy={17.5}
          r={17.5}
          transform="translate(321 11)"
          fill="transparent"
        />
        <Path
          d="M347.441 23.732a1.249 1.249 0 00-1.147-.732h-15.031a1.249 1.249 0 00-1.147.732 1.236 1.236 0 00.188 1.335l5.967 6.943v5.411a.627.627 0 00.975.522l3.758-2.508a.627.627 0 00.279-.522v-2.9l5.968-6.944a1.236 1.236 0 00.19-1.337z"
          fill="#989899"
        />
        <G transform="translate(340.613 18)" fill="#DF1616" stroke="#fff">
          <Circle cx={4} cy={4} r={4} stroke="none" />
          <Circle cx={4} cy={4} r={3.5} fill="none" />
        </G>
      </G>
    </Svg>
  );
};


// Date Sort icon
export const DateSortIcon = ({ width, height, color, viewbox,fontcolor }) => {
  return (
    <Svg width={width} height={height} viewBox={viewbox} >
      <G data-name="Group 3617" fill={color}>
      <Path
        data-name="Path 2071"
        d="M20.928 3.868h-1.19v4.6h-4.166v-4.6h-7.6v4.6H3.8v-4.6H2.61A2.617 2.617 0 0 0 0 6.48v17.026a2.617 2.617 0 0 0 2.612 2.612h18.316a2.617 2.617 0 0 0 2.612-2.612V6.48a2.617 2.617 0 0 0-2.612-2.612Zm0 19.638H2.612V10.712h18.316ZM4.695 6.182V1.157A1.15 1.15 0 0 1 5.852 0a1.13 1.13 0 0 1 1.157 1.157v5.025a1.157 1.157 0 0 1-2.314 0Zm11.869 0V1.157A1.15 1.15 0 0 1 17.721 0a1.13 1.13 0 0 1 1.157 1.157v5.025a1.157 1.157 0 0 1-2.314 0Z"
      fill={fontcolor}/>
      <Path
        data-name="Path 2072"
        d="M15.036 16.449h-1.86v-3.886a.947.947 0 0 0-.941-.941h-1.009a.947.947 0 0 0-.941.941v3.886H8.424c-.381 0-.538.247-.336.56l3.272 5.043a.408.408 0 0 0 .74 0l3.272-5.043c.202-.313.045-.56-.336-.56Z"
        fill={fontcolor}/>
    </G>
    </Svg>
  );
};
