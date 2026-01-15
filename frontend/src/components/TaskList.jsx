import { useEffect, useState } from "react";
import api from "../services/api";

const TaskList = ({ refresh }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      alert("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;

    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      alert("Failed to delete task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  if (loading) return <p>Loading tasks...</p>;

  return (
    <ul>
      {tasks.length === 0 && <p>No tasks found</p>}

      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center border p-2 mb-2"
        >
          <span>
            {task.title}
            <span className="ml-2 text-sm text-gray-500">
              ({task.status})
            </span>
          </span>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
