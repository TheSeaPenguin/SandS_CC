import {
  Cambion,
  Dragonkin_2,
  Human,
  Spriggan,
  Clockwork,
  Denizen,
  Deva,
  Elfbood
} from '../../assets/images/race_400x600';
import Grid from '@mui/material/Unstable_Grid2';
import { ObjectCarousel } from '../../components/object-carousel';
import { useJSONData } from '../../hooks/useJSONData';
import { useState } from 'react';
import { TextBoxWithTitle } from '../../components';

export function RacesTab() {
  const [currentRace, setRaceData] = useState('Human');
  const races = [
    {
      title: 'Human',
      image: Human
    },
    {
      title: 'Cambion',
      image: Cambion
    },
    {
      title: 'Dragonkin',
      image: Dragonkin_2
    },
    {
      title: 'Spriggan',
      image: Spriggan
    },
    {
      title: 'Clockwork',
      image: Clockwork
    },
    {
      title: 'Denizen',
      image: Denizen
    },
    {
      title: 'Deva',
      image: Deva
    },
    {
      title: 'Elfblood',
      image: Elfbood
    }
  ];

  const allFetchedData: object[] = useJSONData('races');
  // const raceDetails = allFetchedData.find(
  //   (value) => value.name === currentRace
  // );
  console.log(allFetchedData);
  // console.log(raceDetails);

  function handleCarouselChange(currentValue?: number) {
    console.log(currentValue);
    const race = currentValue ? races[currentValue].title : 'Human';
    setRaceData(race);
    console.log(currentRace);
  }

  return (
    <Grid container spacing={2}>
      <Grid xs={4}>
        <ObjectCarousel
          objects={races}
          onChangeFunction={handleCarouselChange}
        />
      </Grid>
      <Grid xs={4}>
        <TextBoxWithTitle
          title="Information"
          vertical={true}
          value=""
          id={'Test'}
        />
      </Grid>
    </Grid>
  );
}
