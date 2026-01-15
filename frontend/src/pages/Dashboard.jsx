import { useNavigate } from "react-router-dom";
import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const refreshTasks = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1"
        >
          Logout
        </button>
      </div>

      <TaskForm onTaskAdded={refreshTasks} />
      <TaskList refresh={refresh} />
    </div>
  );
};

export default Dashboard;
