import { Tooltip, TooltipProps, styled, tooltipClasses } from '@mui/material';
import * as React from 'react';

export interface InfoTooltipProps {
  information: string;
  direction: TooltipProps['placement'];
  children: JSX.Element;
}

const StyledToolTip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.light,
    color: 'black',
    maxWidth: 220,
    fontSize: '0.8em',
    fontFamily: 'arial',
    border: '1px solid black'
  }
}));

export function InfoTooltip(props: InfoTooltipProps) {
  const { information, direction, children } = props;
  return (
    <StyledToolTip title={information} placement={direction} arrow>
      {children}
    </StyledToolTip>
  );
}
