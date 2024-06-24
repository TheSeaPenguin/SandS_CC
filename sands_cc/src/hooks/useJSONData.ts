import { useEffect, useState } from 'react';

export function useJSONData(fileName: string) {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await import(`../assets/rules_json/${fileName}.json`);
      const data = response[fileName];
      setFetchedData(data);
    };

    fetchData();
  }, []);

  return fetchedData;
}
