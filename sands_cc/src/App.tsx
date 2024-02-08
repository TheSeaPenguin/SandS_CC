import { Grid } from '@mui/material';
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
        spacing={2}
        sx={{ marginY: '0.5em' }}
      >
        <Grid
          data-testid="Grid_LeftColumn"
          container
          item
          xs={3}
          spacing={2}
          sx={{ marginLeft: '0.5em' }}
        >
          <Grid item xs={12}>
            <NameCp />
          </Grid>
          <Grid item xs={12}>
            <CharacterSummary />
          </Grid>
        </Grid>

        <Grid data-testid="Grid_CenterColumn" item xs={6}>
          <SelectorBox />
        </Grid>

        <Grid
          data-testid="Grid_RightColumn"
          item
          xs={3}
          sx={{ marginRight: '0.5em' }}
        ></Grid>
      </Grid>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
