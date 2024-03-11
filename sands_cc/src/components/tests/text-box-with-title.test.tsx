import { render, screen } from '@testing-library/react';
import { TextBoxWithTitle } from '../text-box-with-title';
import '@testing-library/jest-dom';

describe('Text-box-with-title', () => {
  const mockProps = {
    id: 'mockBox',
    title: 'Mock',
    value: 'This is a value'
  };

  beforeEach(() => {
    render(<TextBoxWithTitle {...mockProps} />);
  });
  it('Should render', () => {
    const title = screen.getByText(/Mock/i);
    const value = screen.getByText(/This is a value/i);

    expect(title).toBeVisible();
    expect(value).toBeVisible();
  });
});
