import { fetchSheetData } from './googleSheetsApi';

describe('fetchSheetData', () => {
  it('should fetch data from the specified sheet and range', async () => {
    const sheetName = 'test';
    const range = 'A1:A1';

    const data = await fetchSheetData(sheetName, range);

    expect(data).toEqual([['success']]);
  });
});