import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Table } from './index';

const mockStore = configureStore([]);
const store = mockStore({
  data: {
    // Mock data for testing
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ],
  },
});

describe('TableComponent', () => {
  it('renders table header correctly', () => {
    render(
      // Provide the mock store to the component
      <Provider store={store}>
        <Table />
      </Provider>
    );

    // Assert that the table header is rendered correctly
    const headerText = screen.getByText('ID');
    expect(headerText).toBeInTheDocument();
  });

  it('renders table rows correctly', () => {
    render(
      // Provide the mock store to the component
      <Provider store={store}>
        <Table />
      </Provider>
    );

    // Assert that the table rows are rendered correctly
    const row1 = screen.getByText('1');
    const row2 = screen.getByText('Item 2');
    expect(row1).toBeInTheDocument();
    expect(row2).toBeInTheDocument();
  });

  it('displays correct number of rows', () => {
    render(
      // Provide the mock store to the component
      <Provider store={store}>
        <Table />
      </Provider>
    );

    // Assert that the correct number of rows is displayed
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(3); // Including the table header row
  });
});
