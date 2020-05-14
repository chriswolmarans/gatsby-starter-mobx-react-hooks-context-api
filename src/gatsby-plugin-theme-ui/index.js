import { tailwind } from '@theme-ui/presets'

export default {
  ...tailwind,
  styles: {
    ...tailwind.styles,
    Layout: {
      color: 'text',
      backgroundColor: 'background',
      fontFamily: 'body',
      lineHeight: 'body',
    },
    Container: {
      maxWidth: 1160,
      padding: 3,
    },
  },
  initialColorMode: 'light',
  colors: {
    ...tailwind.colors,
    modes: {
      dark: {
        text: tailwind.colors.muted,
        background: tailwind.colors.grayDark,
        primary: tailwind.colors.indigo[5],
      },
    },
  },
  link: {
    heading: {
      color: 'primary'
    },
    menu: {
      color: 'text'
    }
  }
}
