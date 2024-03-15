import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Grid } from '@mui/material';
import { InfoBox } from '../../components';

export interface RacesTabProps {}

export function RacesTab(props: RacesTabProps) {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!'
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!'
    }
  ];

  return (
    <Grid>
      <Carousel autoPlay={false}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Grid>
  );
}

function Item(props: {
  item: {
    name:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    description:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  };
}) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
