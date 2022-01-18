import * as React from "react";

declare module 'react-usa-map' {
  export interface USAMapProps {
    onClick: (event: any) => void;
    width?: number;
    height?: number;
    title?: string;
    defaultFill?: string;
    customize?: any;
  }
  declare class USAMap extends React.Component<USAMapProps, any> {};
  export default USAMap;
}
