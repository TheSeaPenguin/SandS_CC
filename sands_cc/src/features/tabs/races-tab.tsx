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
import { SideBox, TextBoxWithTitle } from '../../components';
import { Race } from '../../Types';

export function RacesTab() {
  const [currentRace, setCurrentRace] = useState('Human');
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

  const allFetchedData: Race[] = useJSONData('races');
  const raceDetails = allFetchedData.find(
    (value) => value.name === currentRace
  );

  function handleCarouselChange(currentValue?: number) {
    const race = currentValue ? races[currentValue].title : 'Human';
    setCurrentRace(race);
  }

  return (
    <Grid container spacing={2}>
      {/* The Picture carousel */}
      <Grid xs={4}>
        <ObjectCarousel
          objects={races}
          onChangeFunction={handleCarouselChange}
        />
      </Grid>
      {/* The central race information */}
      <Grid xs={5}>
        <TextBoxWithTitle
          title="Information"
          vertical={true}
          value=""
          id={'race-information'}
        />
        <TextBoxWithTitle
          id="text-raceDescription"
          title="Description"
          vertical={true}
          value={
            raceDetails ? raceDetails.description : 'Error reading description'
          }
        />
        <TextBoxWithTitle
          id="text-raceAppearance"
          title="Appearance"
          vertical={true}
          value={
            raceDetails ? raceDetails.appearance : 'Error reading appearance'
          }
        />
      </Grid>
      {/* Right hand-side race information */}
      <Grid xs={3}>
        <SideBox boxTitle="Benefits">
          {raceDetails ? (
            raceDetails.benefits.map((benefit) => (
              <TextBoxWithTitle
                id={'text-' + benefit.title}
                title={benefit.title}
                value={benefit.description}
                vertical={true}
              />
            ))
          ) : (
            <div></div>
          )}
        </SideBox>
      </Grid>
    </Grid>
  );
}
