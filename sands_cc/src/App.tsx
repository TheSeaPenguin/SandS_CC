import Grid from '@mui/material/Unstable_Grid2';
import { Header, Footer } from './components';
import { SelectorBox } from './features/selector-box';
import { CharacterSummary } from './features/character-summary';
import { NameCp } from './features/name-cp';

function App() {
  return (
    <div className="App">
      <Header />
      <Grid
        data-testid="Grid_Container"
        container
        disableEqualOverflow
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{ marginY: '0.5em' }}
      >
        <Grid
          data-testid="Grid_LeftColumn"
          container
          display={'block'}
          columns={{ xs: 3, md: 12 }}
          xs={3}
          // sx={{ marginLeft: '0.5em' }}
        >
          <Grid xs={12}>
            <NameCp />
          </Grid>
          <Grid xs={12}>
            <CharacterSummary />
          </Grid>
        </Grid>

        <Grid data-testid="Grid_CenterColumn" xs={12} md={6}>
          <SelectorBox />
        </Grid>

        <Grid
          data-testid="Grid_RightColumn"
          xs={3}
          sx={{ marginRight: '0.5em' }}
        ></Grid>
      </Grid>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
