import * as React from 'react';
import { AttributeSelector } from '../stats';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import { InfoBox, TextBoxWithTitle } from '../../components';
import { useStore } from '../../hooks/useStore';
import { theme } from '../../theme';

export interface AttributesTabProps {}

export function AttributesTab(props: AttributesTabProps) {
  const screenMatchesMedium = useMediaQuery(theme.breakpoints.up('md'));
  const spacingSize = screenMatchesMedium ? 2 : 0.5;
  return (
    <>
      <InfoBox
        information="
          The attributes Earth, Water, Fire and Air represent what things your
          character is good and not so good at. Assign each of the following
          numbers: 0,1,1,2 to an attribute, with the higher numbers in the areas
          you want to be best at. You can then add to these numbers from your Character Improvements"
      />

      <AttributeSelector
        vertical={false}
        width={'25%'}
        height={'3vh'}
        spacing={spacingSize}
      />
    </>
  );
}
