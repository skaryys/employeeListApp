import { useEmployees } from '../hooks/useEmployees';

export const AppContainer = () => {
  const { employees, loading, error } = useEmployees('/employees.json');

  console.log(employees);

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
