import theme from 'styles/theme';

// inferência de tipos, ao invés de declarar cada tipo
type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
