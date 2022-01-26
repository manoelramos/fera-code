import 'styled-components';

type IPalette = {
  main: string;
  contrast: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    palette: {
      common: {
        black: string;
        white: string;
        danger: string;
        lightGray: string;
        gray: string;
        textGray: string;
        darkGray: string;
      };
      primary: IPalette;
      secondary: IPalette;
      buttonColor: IPalette;
    };
  }
}
