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
        main: '#eeeeee',
        dark: '#595959'
      },
      stats: {
        hp: '#f3cccc',
        energy: '#cadaf7',
        destiny: '#fbe5ce',
        earth: '#da7f6d',
        water: '#a6c3f2',
        fire: '#dd6767',
        air: '#fdd870'
      }
    },
    typography: {
      fontFamily: [
        'Trade Winds',
        'IM Fell English SC',
        'Arial',
        'sans-serif'
      ].join(',')
    }
  })
);
