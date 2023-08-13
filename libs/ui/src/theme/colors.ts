export const tokens = {
  colors: {
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
      50: '#fef2f2',
      100: '#fde6e7',
      200: '#fad1d4',
      300: '#f6abb1',
      400: '#ed6673', // main
      500: '#e54e61',
      600: '#d12d49',
      700: '#b0203c',
      800: '#931e38',
      900: '#7e1d36',
      950: '#460b19',
    },
    yellow: {
      50: 'hsl(37, 89%, 96%)',
      100: 'hsl(36, 90%, 92%)',
      200: 'hsl(35, 88%, 83%)',
      300: 'hsl(33, 88%, 70%)',
      400: 'hsl(29, 87%, 61%)',
      500: 'hsl(27, 87%, 53%)',
      600: 'hsl(23, 82%, 48%)',
      700: 'hsl(20, 81%, 40%)',
      800: 'hsl(17, 72%, 34%)',
      900: 'hsl(18, 68%, 28%)',
      950: 'hsl(16, 73%, 15%)',
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
    pampas: {
      50: 'hsl(15, 22%, 96%)',
      100: 'hsl(26, 21%, 94%)', // main
      200: 'hsl(23, 21%, 83%)',
      300: 'hsl(23, 21%, 72%)',
      400: 'hsl(18, 21%, 61%)',
      500: 'hsl(16, 21%, 53%)',
      600: 'hsl(12, 20%, 48%)',
      700: 'hsl(9, 18%, 40%)',
      800: 'hsl(6, 16%, 34%)',
      900: 'hsl(5, 15%, 28%)',
      950: 'hsl(0, 16%, 15%)',
    },
    shipgray: {
      50: 'hsl(255, 25%, 97%)',
      100: 'hsl(257, 19%, 93%)',
      200: 'hsl(254, 20%, 87%)',
      300: 'hsl(255, 22%, 78%)',
      400: 'hsl(256, 21%, 68%)',
      500: 'hsl(259, 20%, 60%)',
      600: 'hsl(263, 18%, 53%)',
      700: 'hsl(266, 17%, 48%)',
      800: 'hsl(267, 16%, 40%)',
      900: 'hsl(268, 14%, 33%)',
      950: 'hsl(268, 13%, 23%)', // main
    },
    akaroa: {
      50: 'hsl(30, 44%, 96%)',
      100: 'hsl(33, 43%, 92%)',
      200: 'hsl(32, 40%, 83%)',
      300: 'hsl(31, 40%, 76%)', // main
      400: 'hsl(28, 40%, 61%)',
      500: 'hsl(25, 40%, 53%)',
      600: 'hsl(21, 37%, 48%)',
      700: 'hsl(18, 37%, 40%)',
      800: 'hsl(16, 33%, 34%)',
      900: 'hsl(15, 31%, 28%)',
      950: 'hsl(12, 32%, 15%)',
    },
    diserria: {
      50: 'hsl(35, 67%, 96%)',
      100: 'hsl(37, 62%, 92%)',
      200: 'hsl(33, 63%, 83%)',
      300: 'hsl(32, 62%, 72%)',
      400: 'hsl(28, 62%, 60%)', // main
      500: 'hsl(26, 61%, 53%)',
      600: 'hsl(22, 58%, 48%)',
      700: 'hsl(19, 56%, 40%)',
      800: 'hsl(16, 51%, 34%)',
      900: 'hsl(16, 48%, 28%)',
      950: 'hsl(14, 51%, 15%)',
    },
    twine: {
      50: 'hsl(30, 50%, 96%)',
      100: 'hsl(29, 44%, 89%)',
      200: 'hsl(27, 45%, 77%)',
      300: 'hsl(25, 45%, 65%)',
      400: 'hsl(23, 45%, 54%)', // main
      500: 'hsl(17, 43%, 50%)',
      600: 'hsl(12, 43%, 44%)',
      700: 'hsl(5, 42%, 37%)',
      800: 'hsl(3, 39%, 31%)',
      900: 'hsl(1, 36%, 26%)',
      950: 'hsl(0, 42%, 14%)',
    },
    auchico: {
      50: 'hsl(20, 33%, 96%)',
      100: 'hsl(30, 29%, 92%)',
      200: 'hsl(25, 28%, 83%)',
      300: 'hsl(23, 29%, 72%)',
      400: 'hsl(20, 29%, 61%)',
      500: 'hsl(17, 28%, 53%)',
      600: 'hsl(14, 27%, 48%)',
      700: 'hsl(10, 26%, 44%)', // main
      800: 'hsl(7, 23%, 34%)',
      900: 'hsl(8, 23%, 28%)',
      950: 'hsl(7, 24%, 15%)',
    },
  },

}

export const semanticTokens = {
  colors: {
    auchico: {
      default: tokens.colors.auchico[700],
      _dark: tokens.colors.auchico[700],
    },
    pampas: {
      default: tokens.colors.pampas[100],
      _dark: tokens.colors.neutral[900],
    },
    akaroa: {
      default: tokens.colors.akaroa[300],
      _dark: tokens.colors.neutral[900],
    },
    diserria: {
      default: tokens.colors.diserria[400],
      _dark: tokens.colors.neutral[900],
    },
    twine: {
      default: tokens.colors.twine[400],
      _dark: tokens.colors.neutral[900],
    },

    'bg-default': {
      default: tokens.colors.pampas[100],
      _dark: tokens.colors.neutral[900],
    },
    'fg-default': {
      default: tokens.colors.pampas[950],
      _dark: tokens.colors.neutral[50],
    },
    'btn-primary-bg': {
      default: tokens.colors.auchico[700],
      _dark: tokens.colors.auchico[900],
    },
    'btn-primary-fg': {
      default: tokens.colors.auchico[50],
      _dark: tokens.colors.auchico[200],
    },
    'btn-primary-fg-hover': {
      default: tokens.colors.auchico[50],
      _dark: tokens.colors.auchico[100],
    },
    'btn-primary-bg-hover': {
      default: tokens.colors.auchico[600],
      _dark: tokens.colors.auchico[800],
    },
    'btn-secondary-bg': {
      default: tokens.colors.diserria[400],
      _dark: tokens.colors.diserria[400],
    },
    'btn-secondary-fg': {
      default: tokens.colors.diserria[950],
      _dark: tokens.colors.diserria[950],
    },
    'btn-secondary-bg-hover': {
      default: tokens.colors.diserria[300],
      _dark: tokens.colors.diserria[300],
    },
    'btn-danger-bg': {
      default: tokens.colors.red[400],
      _dark: tokens.colors.red[700],
    },
    'btn-danger-fg': {
      default: tokens.colors.red[50],
      _dark: tokens.colors.red[100],
    },
    'btn-danger-bg-hover': {
      default: tokens.colors.red[500],
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
    'logo-fg': {
      default: tokens.colors.auchico[50],
      _dark: tokens.colors.auchico[50],
    },
    'logo-bg': {
      default: tokens.colors.auchico[700],
      _dark: tokens.colors.auchico[700],
    },
    'btn-link-logo-fg': {
      default: tokens.colors.auchico[700],
      _dark: tokens.colors.auchico[100],
    },
    'btn-link-logo-fg-hover': {
      default: tokens.colors.auchico[800],
      _dark: tokens.colors.auchico[200],
    },
    'btn-link-fg-hover': {
      default: tokens.colors.neutral[900],
      _dark: tokens.colors.neutral[50],
    },
    'btn-ghost-bg': {
      default: tokens.colors.akaroa[50],
      _dark: tokens.colors.neutral[900],
    },
    'btn-ghost-fg': {
      default: tokens.colors.akaroa[700],
      _dark: tokens.colors.neutral[500],
    },
    'btn-ghost-bg-hover': {
      default: tokens.colors.akaroa[100],
      _dark: tokens.colors.akaroa[900],
    },
    'btn-ghost-fg-hover': {
      default: tokens.colors.akaroa[700],
      _dark: tokens.colors.akaroa[50],
    },
    'input-search-bg': {
      default: tokens.colors.pampas[50],
      _dark: tokens.colors.pampas[950],
    },
    'input-search-fg': {
      default: tokens.colors.pampas[700],
      _dark: tokens.colors.pampas[500],
    },
    'input-search-placeholder': {
      default: tokens.colors.pampas[300],
      _dark: tokens.colors.pampas[800],
    },
    'input-search-bg-hover': {
      default: tokens.colors.pampas[50],
      _dark: tokens.colors.pampas[900],
    },
    'drawer-bg': {
      default: tokens.colors.pampas[100],
      _dark: tokens.colors.neutral[900],
    },
    'divider-default': {
      default: tokens.colors.pampas[200],
      _dark: tokens.colors.neutral[800],
    },
  },
}
