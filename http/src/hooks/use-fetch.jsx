import { useState, useCallback } from "react";

const useFetch = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, dataProcessor) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url,
                {
                  method: requestConfig.method || 'GET',
                  body: JSON.stringify(requestConfig.body) || null,
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
    
          dataProcessor(data)
    
        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
      }, []);

      return {
        isLoading,
        error,
        sendRequest
      }

}

export default useFetch;