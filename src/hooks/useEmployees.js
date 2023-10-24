import { useEffect, useState } from 'react';

export const useEmployees = (url) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Cant get employees');
        }
        const employeesJson = await response.json();
        setEmployees(employeesJson);
        setLoading(false);
      } catch {
        setError(error);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [url]);

  return { employees, loading, error };
};
