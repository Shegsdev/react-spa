import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = React.useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(url, options);
          const data = await response.data;
          setResponse(data);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, []);
    return { response, error };
  };

  export default useFetch;
