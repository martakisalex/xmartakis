import axios from 'axios';

// Accessing environment variables using import.meta.env
const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID;
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

console.log(sheetId)
console.log(apiKey)

/**
 * Fetch data from a specific sheet and range.
 * @param {string} sheetName - The name of the sheet/tab.
 * @param {string} range - The range of cells to fetch.
 * @returns {Promise<Array>} - Promise that resolves to an array of rows.
 */
export const fetchSheetData = async (sheetName, range) => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!${range}?key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data.values || [];
  } catch (error) {
    console.error(`Error fetching data from ${sheetName}:`, error);
    return [];
  }
};