// src/utils/api.js
export const fetchData = async () => {
    const sheetId = '1hB_LjBT9ezZigXnC-MblT2PXZledkZqBnvV23ssfSuE';
    const apiKey = 'YOUR_API_KEY';
    const sheetName = 'Sheet1'; // ou o nome da sua aba
  
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`
      );
      const data = await response.json();
      return data.values;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return [];
    }
  };
  