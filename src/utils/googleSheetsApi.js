// Accessing environment variables using import.meta.env
const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID;
const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

console.log(sheetId);
console.log(apiKey);

/**
 * Fetch all data from a specific sheet.
 * @param {string} sheetName - The name of the sheet/tab.
 * @returns {Promise<Array>} - Promise that resolves to an array of rows.
 */
export const fetchSheetData = async (sheetName) => {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.values.slice(1) || []; // Slice to remove header row if present
  } catch (error) {
    console.error(`Error fetching data from ${sheetName}:`, error);
    return [];
  }
};
