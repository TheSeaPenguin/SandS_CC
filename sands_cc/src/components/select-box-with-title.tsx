import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import { InfoTooltip } from './info-tooltip';

export interface SelectBoxWithTitleProps {
  id: string;
  colour?: string;
  title: string;
  options: { id: number; displayValue: string }[];
  vertical?: boolean;
  width?: number | string;
  height?: number | string;
  information: string;
  changeHandler?: (event: SelectChangeEvent) => void;
}

export function SelectBoxWithTitle(props: SelectBoxWithTitleProps) {
  const {
    id,
    colour,
    title,
    options,
    vertical,
    width,
    height,
    information,
    changeHandler
  } = props;

  const [selectedValue, setSelectedValue] = useState<string>(
    String(options[0].id)
  );

  function handleSelectChange(event: SelectChangeEvent) {
    const value = String(event.target.value);
    setSelectedValue(value);

    changeHandler && changeHandler(event);
  }

  return (
    <>
      <InfoTooltip information={information} direction={'right'}>
        <Typography
          align="center"
          sx={{
            height: height,
            paddingRight: '0.2em',
            fontSize: '1rem',
            ...(vertical && { backgroundColor: [colour] })
          }}
        >
          {title}
        </Typography>
      </InfoTooltip>
      <Select
        id={id}
        value={selectedValue}
        onChange={handleSelectChange}
        MenuProps={{ MenuListProps: { sx: { backgroundColor: 'white' } } }}
      >
        {options.map((option, index) => (
          <MenuItem key={option.id} value={option.id}>
            {option.displayValue}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
