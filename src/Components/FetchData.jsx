/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Papa from 'papaparse';

const FetchData = ({ onDataFetched }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://docs.google.com/spreadsheets/d/1hB_LjBT9ezZigXnC-MblT2PXZledkZqBnvV23ssfSuE/export?format=csv');
        
        // Use PapaParse to parse CSV
        const result = Papa.parse(response.data, {
          header: true,  // Parse the header row to generate keys
          skipEmptyLines: true,
          complete: function(results) {
            onDataFetched(results.data); // Pass parsed data to parent
          }
        });

      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [onDataFetched]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return null;
};

FetchData.propTypes = {
  onDataFetched: PropTypes.func.isRequired
};

export default FetchData;
