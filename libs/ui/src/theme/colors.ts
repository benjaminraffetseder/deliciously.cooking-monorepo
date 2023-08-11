export const tokens = {
  colors: {
    brand: {
      50: 'hsl(94, 41%, 97%)',
      100: 'hsl(100, 47%, 93%)',
      200: 'hsl(101, 45%, 85%)',
      300: 'hsl(102, 43%, 73%)',
      400: 'hsl(102, 39%, 58%)',
      500: 'hsl(102, 39%, 45%)',
      600: 'hsl(103, 43%, 36%)',
      700: 'hsl(103, 41%, 29%)',
      800: 'hsl(103, 37%, 24%)',
      900: 'hsl(105, 34%, 20%)',
      950: 'hsl(107, 45%, 10%)',
    },
    secondary: {
      50: 'hsl(57, 100%, 96%)',
      100: 'hsl(55, 100%, 89%)',
      200: 'hsl(56, 100%, 76%)',
      300: 'hsl(53, 100%, 64%)',
      400: 'hsl(51, 100%, 55%)',
      500: 'hsl(44, 100%, 50%)',
      600: 'hsl(38, 100%, 44%)',
      700: 'hsl(32, 98%, 37%)',
      800: 'hsl(29, 90%, 31%)',
      900: 'hsl(28, 84%, 26%)',
      950: 'hsl(28, 100%, 14%)',
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
    red: {
      50: 'hsl(0, 86%, 97%)',
      100: 'hsl(0, 93%, 94%)',
      200: 'hsl(0, 96%, 89%)',
      300: 'hsl(0, 94%, 82%)',
      400: 'hsl(0, 91%, 71%)',
      500: 'hsl(0, 84%, 60%)',
      600: 'hsl(0, 72%, 51%)',
      700: 'hsl(0, 74%, 42%)',
      800: 'hsl(0, 70%, 35%)',
      900: 'hsl(0, 63%, 31%)',
      950: 'hsl(0, 75%, 15%)',
    },
    yellow: {
      50: 'hsl(48, 100%, 96%)',
      100: 'hsl(48, 96%, 89%)',
      200: 'hsl(48, 97%, 77%)',
      300: 'hsl(46, 97%, 65%)',
      400: 'hsl(43, 96%, 56%)',
      500: 'hsl(38, 92%, 50%)',
      600: 'hsl(32, 95%, 44%)',
      700: 'hsl(26, 90%, 37%)',
      800: 'hsl(23, 83%, 31%)',
      900: 'hsl(22, 78%, 26%)',
      950: 'hsl(21, 92%, 14%)',
    },
    green: {
      50: 'hsl(138, 76%, 97%)',
      100: 'hsl(141, 84%, 93%)',
      200: 'hsl(141, 79%, 85%)',
      300: 'hsl(142, 77%, 73%)',
      400: 'hsl(142, 69%, 58%)',
      500: 'hsl(142, 71%, 45%)',
      600: 'hsl(142, 76%, 36%)',
      700: 'hsl(142, 72%, 29%)',
      800: 'hsl(143, 64%, 24%)',
      900: 'hsl(144, 61%, 20%)',
      950: 'hsl(145, 80%, 10%)',
    },
  },
}

export const semanticTokens = {
  colors: {
    'bg-default': {
      default: tokens.colors.neutral[50],
      _dark: tokens.colors.neutral[900],
    },
    'fg-default': {
      default: tokens.colors.neutral[900],
      _dark: tokens.colors.neutral[50],
    },
    'btn-primary-bg': {
      default: tokens.colors.brand[500],
      _dark: tokens.colors.brand[700],
    },
    'btn-primary-fg': {
      default: tokens.colors.brand[50],
      _dark: tokens.colors.brand[100],
    },
    'btn-primary-bg-hover': {
      default: tokens.colors.brand[600],
      _dark: tokens.colors.brand[800],
    },
    'btn-secondary-bg': {
      default: tokens.colors.secondary[500],
      _dark: tokens.colors.secondary[500],
    },
    'btn-secondary-fg': {
      default: tokens.colors.secondary[900],
      _dark: tokens.colors.secondary[900],
    },
    'btn-secondary-bg-hover': {
      default: tokens.colors.secondary[400],
      _dark: tokens.colors.secondary[400],
    },
    'btn-danger-bg': {
      default: tokens.colors.red[500],
      _dark: tokens.colors.red[700],
    },
    'btn-danger-fg': {
      default: tokens.colors.red[50],
      _dark: tokens.colors.red[100],
    },
    'btn-danger-bg-hover': {
      default: tokens.colors.red[600],
      _dark: tokens.colors.red[800],
    },
    'btn-outline-bg': {
      default: tokens.colors.neutral[50],
      _dark: tokens.colors.neutral[900],
    },
    'btn-outline-fg': {
      default: tokens.colors.neutral[700],
      _dark: tokens.colors.neutral[500],
    },
    'btn-outline-bg-hover': {
      default: tokens.colors.neutral[200],
      _dark: tokens.colors.neutral[800],
    },
    'btn-outline-fg-hover': {
      default: tokens.colors.neutral[900],
      _dark: tokens.colors.neutral[50],
    },

    'btn-link-fg': {
      default: tokens.colors.neutral[700],
      _dark: tokens.colors.neutral[500],
    },
    'btn-link-fg-hover': {
      default: tokens.colors.neutral[900],
      _dark: tokens.colors.neutral[50],
    },
  },
}
