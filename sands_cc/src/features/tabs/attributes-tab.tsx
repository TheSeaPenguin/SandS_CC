import * as React from 'react';
import { AttributeSelector, Attributes } from '../stats';
import { Stack, Typography } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';

export interface IAttributesTabProps {}

export function AttributesTab(props: IAttributesTabProps) {
  return (
    <>
      <Stack
        direction={'row'}
        sx={{
          padding: '0.5em',
          marginBottom: '1em',
          border: 2,
          borderColor: 'primary.dark',
          backgroundColor: 'primary.light'
        }}
      >
        <InfoOutlined color="primary" sx={{ paddingRight: '0.3em' }} />
        <Typography fontFamily={'arial'} fontSize={'1em'}>
          The attributes Earth, Water, Fire and Air represent what things your
          character is good and not so good at. Assign each of the following
          numbers: 0,1,1,2 to an attribute, with the higher numbers in the areas
          you want to be best at.
        </Typography>
      </Stack>
      {/* <Attributes vertical={true} width={'25%'} height={'3vh'} spacing={2} /> */}
      <AttributeSelector
        vertical={true}
        width={'25%'}
        height={'3vh'}
        spacing={2}
      />
    </>
  );
}
