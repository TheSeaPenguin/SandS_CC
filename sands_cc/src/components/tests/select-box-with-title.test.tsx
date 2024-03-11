import { cleanup, render, screen } from '@testing-library/react';
import { SelectBoxWithTitle } from '../select-box-with-title';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Select-box-with-title', () => {
  const user = userEvent.setup();

  const mockChangeHandler = jest.fn();

  const mockProps = {
    id: 'mockSelect',
    colour: undefined,
    title: 'Mock Select',
    options: [
      { id: 1, displayValue: 'One' },
      { id: 2, displayValue: 'Two' }
    ],
    vetical: undefined,
    width: undefined,
    height: undefined,
    information: 'Testing',
    changeHandler: mockChangeHandler
  };

  beforeEach(() => {
    render(<SelectBoxWithTitle {...mockProps} />);
  });

  afterEach(() => {
    cleanup();
  });
  it('Should render', () => {
    const title = screen.getByText(/Mock Select/i);
    const selectBox = screen.getByRole('button');

    expect(title).toBeVisible();
    expect(selectBox).toBeVisible();
  });

  it('Should display given values', async () => {
    const dropDown = screen.getByLabelText(/One/i);
    await user.click(dropDown);

    const options = screen.getAllByRole('option');
    expect(options.length).toEqual(2);

    expect(dropDown).toBeVisible();
    expect(screen.queryByText('Two')).toBeVisible();
  });

  it('Should handle change event', async () => {
    const dropDown = screen.getByLabelText(/One/i);
    await user.click(dropDown);
    await user.click(screen.getByText('Two'));

    expect(mockChangeHandler).toHaveBeenCalled();
  });
});
