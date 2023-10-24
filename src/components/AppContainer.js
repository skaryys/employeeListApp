import { useEmployees } from '../hooks/useEmployees';
import { EmployeeCard } from './EmployeeCard';
import { EmployeesContainer } from './EmployeesContainer';

export const AppContainer = () => {
  const { employees, loading, error } = useEmployees(
    'https://run.mocky.io/v3/fa231fba-19d3-42d2-ad4e-70eb9970c2e3'
  );

  return (
    <div className="App">
      <h1>Employees</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <EmployeesContainer>
          {employees.map((employee) => {
            return (
              <EmployeeCard
                key={employee._id}
                name={`${employee.firstName} ${employee.lastName}`}
                imageUrl={employee.image}
                favoriteColor={employee.favoriteColor}
                position={employee.jobTitle}
                quote={employee.about}
              />
            );
          })}
        </EmployeesContainer>
      )}
    </div>
  );
};
