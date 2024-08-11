import { fetchSheetData } from '../../../src/utils/googleSheetsApi';

// Use Vitest's `vi` to mock global fetch
global.fetch = vi.fn();

describe('fetchSheetData', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should fetch data from the specified sheet', async () => {
    const sheetName = 'test';
    const mockData = {
      values: [['header'], ['success']],
    };

    // Mock the fetch call and return a resolved promise
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await fetchSheetData(sheetName);

    expect(data).toEqual([['success']]);
    expect(fetch).toHaveBeenCalledWith(
      `https://sheets.googleapis.com/v4/spreadsheets/${process.env.VITE_GOOGLE_SHEET_ID}/values/${sheetName}?key=${process.env.VITE_GOOGLE_API_KEY}`
    );
  });

  it('should return an empty array on fetch error', async () => {
    const sheetName = 'test';

    // Mock a failed fetch call
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const data = await fetchSheetData(sheetName);

    expect(data).toEqual([]);
    expect(fetch).toHaveBeenCalledWith(
      `https://sheets.googleapis.com/v4/spreadsheets/${process.env.VITE_GOOGLE_SHEET_ID}/values/${sheetName}?key=${process.env.VITE_GOOGLE_API_KEY}`
    );
  });
});
