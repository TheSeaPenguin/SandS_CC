import { render, renderHook, screen } from '@testing-library/react';
import { Attributes } from '../stats';
import '@testing-library/jest-dom';
import { useStore } from '../../hooks/useStore';

describe('Attributes', () => {
  const mockProps = {
    vertical: false,
    spacing: 2
  };

  const initialStoreState = useStore.getState();

  beforeEach(() => {
    useStore.setState(initialStoreState, true);
    render(<Attributes {...mockProps} />);
  });
  it('Should render', () => {
    expect(screen.getByText(/Earth/i)).toBeVisible();
    expect(screen.getByText(/Water/i)).toBeVisible();
    expect(screen.getByText(/Fire/i)).toBeVisible();
    expect(screen.getByText(/Air/i)).toBeVisible();

    expect(screen.getAllByText('0').length).toEqual(4);
  });

  it('Should display correct store values', async () => {
    const getInitialState = () => {
      const { result } = renderHook(() =>
        useStore((state) => state.attributes.earth)
      );
      return result.current.toString();
    };
    let earthBox = screen.getByTestId('EarthStatBoxValue');
    expect(earthBox.textContent).toEqual(getInitialState());

    renderHook(() => useStore((state) => state.updateAttribute('earth', 25)));

    const getSecondState = () => {
      const { result } = renderHook(() =>
        useStore((state) => state.attributes.earth)
      );
      return result.current.toString();
    };

    earthBox = screen.getByTestId('EarthStatBoxValue');
    expect(earthBox.textContent).toEqual(getSecondState());
    expect(earthBox.textContent).toEqual('25');
  });
});
