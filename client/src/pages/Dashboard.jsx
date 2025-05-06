import { useAuth } from '../context/AuthContext';
import { useGetTasksQuery } from '../services/taskApi';
import LogoutButton from '../components/LogoutButton';

const Dashboard = () => {
  const { user } = useAuth();
  const { data: tasks, error, isLoading } = useGetTasksQuery();

  return (
    <div>
      <h2>Welcome to Your Dashboard</h2>
      {user ? (
        <div>
          <p>Hello, {user.name}!</p>
          <div>
            <h3>Your Tasks</h3>
            {isLoading && <p>Loading tasks...</p>}
            {error && <p>Error loading tasks.</p>}
            <ul>
              {tasks && tasks.length > 0 ? (
                tasks.map((task) => (
                  <li key={task.id}>
                    <p>{task.title}</p>
                    <p>{task.description}</p>
                    <p>Status: {task.status}</p>
                  </li>
                ))
              ) : (
                <p>No tasks found.</p>
              )}
            </ul>
          </div>
          <LogoutButton />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;