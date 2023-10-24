import { useEmployees } from '../hooks/useEmployees';

export const AppContainer = () => {
  const { employees, loading, error } = useEmployees(
    'https://run.mocky.io/v3/fa231fba-19d3-42d2-ad4e-70eb9970c2e3'
  );

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>{JSON.stringify(employees)}</div>
      )}
    </div>
  );
};
