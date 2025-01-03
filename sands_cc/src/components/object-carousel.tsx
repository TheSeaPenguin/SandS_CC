import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { CarouselObjectToDisplay } from './carousel-object-to-display';
import { useState } from 'react';

export interface ObjectCarouselProps {
  objects: { title: string; image: string }[];
  onChangeFunction?: (arg?: number) => void;
}

export function ObjectCarousel(props: ObjectCarouselProps) {
  const { objects, onChangeFunction } = props;
  const [firstImgLoaded, setFirstImgLoaded] = useState(false);

  return (
    <>
      {/* Image is loadedd and hidden before the carousel loads, beacuse it was rendering before the images and not resizing*/}
      <img
        src={objects[0].image}
        onLoad={() => setFirstImgLoaded(true)}
        style={{ display: 'none' }}
      />
      <Paper>
        {firstImgLoaded && (
          <Carousel
            autoPlay={false}
            indicators={true}
            navButtonsAlwaysVisible={true}
            onChange={onChangeFunction}
            changeOnFirstRender={true}
            swipe={false}
          >
            {objects.map((object, key) => (
              <CarouselObjectToDisplay
                key={key}
                title={object.title}
                image={object.image}
              />
            ))}
          </Carousel>
        )}
      </Paper>
    </>
  );
}
