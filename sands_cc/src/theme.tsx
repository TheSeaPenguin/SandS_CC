// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#af2d5f',
        light: '#faebf0',
        dark: '#621935'
      },
      secondary: {
        main: '#eeeeee'
      },
      stats: {
        hp: '#f3cccc'
      }
    },
    typography: {
      fontFamily: ['Trade Winds', 'Arial', 'sans-serif'].join(',')
    }
  })
);
