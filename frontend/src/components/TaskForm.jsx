import { useState } from "react";
import api from "../services/api";

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      setLoading(true);
      await api.post("/tasks", { title });
      setTitle("");
      onTaskAdded(); // refresh task list
    } catch (err) {
      alert("Failed to add task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={addTask} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter new task"
        className="border p-2 flex-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </form>
  );
};

export default TaskForm;
