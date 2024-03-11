import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SideBox } from '../side-box';

describe('Side-box', () => {
  it('Should render', () => {
    render(
      <SideBox boxTitle={'The Title'}>
        <div>And the children</div>
      </SideBox>
    );

    const title = screen.getByText(/The Title/i);
    const content = screen.getByText(/And the children/i);

    expect(title).toBeVisible();
    expect(content).toBeVisible();
  });
});
