import { Grid } from '@mui/material';
import { Header, Footer } from './components';
import { SelectorBox } from './features/selector-box';
import { CharacterSummary } from './features/character-summary';

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container spacing={2} sx={{ marginY: '0.5em' }}>
        <Grid item xs={3} sx={{ marginLeft: '0.5em' }}>
          <CharacterSummary />
        </Grid>
        <Grid item xs={6}>
          <SelectorBox />
        </Grid>
        <Grid item xs={3} sx={{ marginRight: '0.5em' }}></Grid>
      </Grid>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
