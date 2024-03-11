import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TabbedBox } from '../tabbed-box';
describe('Tabbed-box', () => {
  const tabs = [
    {
      title: 'Tab 1',
      content: <button>Text content</button>,
      colour: '#FD8A8A'
    },
    {
      title: 'Tab 2',
      content: <button>Click</button>,
      colour: "#9EA1D4'"
    }
  ];

  beforeEach(() => {
    render(<TabbedBox tabs={tabs} />);
  });

  it('Should render', () => {
    const renderedTabs = screen.getAllByRole('tab');
    expect(renderedTabs.length).toEqual(tabs.length);
  });

  it.each(tabs)('Render $title title', (input) => {
    const tabTitle = screen.getByText(input.title);
    expect(tabTitle).toBeVisible();
  });
});
