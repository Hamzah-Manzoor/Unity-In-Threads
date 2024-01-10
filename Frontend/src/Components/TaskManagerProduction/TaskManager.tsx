import React, { useState } from 'react';

interface Employee {
    id: number;
    name: string;
    employeeId: string;
    hoursWorked: number;
}

interface Task {
  id: number;
  description: string;
  deadline: string;
  assignedTo: Employee[] | null;
  status: 'Pending' | 'Ongoing' | 'Completed';
  priority: number;
}


const TaskManager: React.FC = () => {

    const initialEmployees: Employee[] = [
        { id: 3, name: 'Ali Irtaza', employeeId: 'EMP003', hoursWorked: 40 },
        { id: 4, name: 'Junaid Ahmed', employeeId: 'EMP004', hoursWorked: 35 },
        // Add more employees here
      ];

      const initialTasks: Task[] = [
        {
          id: 1,
          description: 'Task 1 Description',
          deadline: '2024-01-31',
          assignedTo: [
            {
              id: 1,
              name: 'John Doe',
              employeeId: 'EMP001',
              hoursWorked: 34,
              // Other employee details if needed
            }
          ],
          status: 'Pending',
          priority: 2,
        },
        {
          id: 2,
          description: 'Task 2 Description',
          deadline: '2024-02-15',
          assignedTo: [
            {
              id: 2,
              name: 'Jane Smith',
              employeeId: 'EMP002',
              hoursWorked: 24,
              // Other employee details if needed
            }
          ],
          status: 'Ongoing',
          priority: 1,
        },
        // Add more sample tasks here
      ];
      
    const [changedRows, setChangedRows] = useState(new Set<number>());
    // const [confirmUpdate, setConfirmUpdate] = useState(false);
      
  const [editableTaskId, setEditableTaskId] = useState<number | null>(null);

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    description: '',
    deadline: '',
    assignedTo: null,
    status: 'Pending',
    priority: 1,
  });

  const [employees] = useState<Employee[]>(initialEmployees);
  const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);
  //const [selectedEmployeesEdit, setSelectedEmployeesEdit] = useState<Employee[]>([]);
  const [,setSelectedEmployeesEdit] = useState<Employee[]>([]);


  const handleTaskDeletion = (taskId: number) => {
    const confirmed = window.confirm('Are you sure you want to delete this task?');
    if (confirmed) {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    }
  };

  const handleAddTask = () => {
    if (selectedEmployees.length > 0) {
      setNewTask({ ...newTask, assignedTo: selectedEmployees });
      setSelectedEmployees([]);
    }
    setTasks(prevTasks => [...prevTasks, { ...newTask, id: prevTasks.length + 1 }]);
    setNewTask({ id: 0, description: '', deadline: '', assignedTo: null, status: 'Pending', priority: 1 });
  };
  

  const handleAddEmployee = (employee: Employee) => {
    setSelectedEmployees((prevSelectedEmployees) => [
      ...prevSelectedEmployees,
      employee,
    ]);

    setNewTask((prevNewTask) => ({
      ...prevNewTask,
      assignedTo: [...(prevNewTask.assignedTo || []), employee],
    }));
  };

  const handleRemoveEmployee = (employeeId: number) => {
    setSelectedEmployees((prevSelectedEmployees) =>
      prevSelectedEmployees.filter((emp) => emp.id !== employeeId)
    );

    setNewTask((prevNewTask) => ({
      ...prevNewTask,
      assignedTo: (prevNewTask.assignedTo || []).filter((emp) => emp.id !== employeeId),
    }));
  };


  const handleAddEmployeeEdit = (employee: Employee, taskId: number) => {
    // Update selected employees for display
    setSelectedEmployeesEdit((prevSelectedEmployees) => [
      ...prevSelectedEmployees,
      employee,
    ]);
  
    // Update the task being edited
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              assignedTo: [...(task.assignedTo || []), employee],
            }
          : task
      )
    );
  };
  
  const handleRemoveEmployeeEdit = (employeeId: number, taskId: number) => {
    // Update selected employees for display
    setSelectedEmployeesEdit((prevSelectedEmployees) =>
      prevSelectedEmployees.filter((emp) => emp.id !== employeeId)
    );
  
    // Update the task being edited
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              assignedTo: (task.assignedTo || []).filter((emp) => emp.id !== employeeId),
            }
          : task
      )
    );
  };
  

  const handleRowChange = (taskId: number) => {
    const updatedSet = new Set<number>(changedRows);
    updatedSet.add(taskId);
    setChangedRows(updatedSet);
  };
  
  const handleSaveChanges = (taskId: number) => {
    if (changedRows.has(taskId)) {
      if (confirm("Are you sure you want to update this task?")) {
        const updatedTasks = tasks.map((task) =>
          task.id === taskId ? { ...task, changed: false } : task
        );
        setTasks(updatedTasks);
  
        const updatedChangedRows = new Set(changedRows);
        updatedChangedRows.delete(taskId);
        setChangedRows(updatedChangedRows);
      }
    }
  };
  



  return (
    <div className="task-manager p-6">
      <h1 className="text-5xl font-bold mb-10 text-center">TASK MANAGER</h1>

      <table className="border-solid w-full">

        <thead className="bg-gray-500 text-white">

          <tr>
            <th className="text-xl border py-4 px-1.5">Task</th>
            <th className="text-xl border py-4 px-1.5">Deadline</th>
            <th className="text-xl border py-4 px-1.5">Assigned To</th>
            <th className="text-xl border py-4 px-1.5">Status</th>
            <th className="text-xl border py-4 px-1.5">Priority</th>
            <th className="text-xl border py-4 px-1.5">Action</th>
          </tr>

        </thead>

        <tbody>
            
          {tasks.map((task) => (
            <tr key={task.id} className={changedRows.has(task.id) ? 'bg-green-100' : ''}>

              <td className="border border-gray-800 py-2 px-1.5 text-center">
                {editableTaskId === task.id ? (
                  <input
                    type="text"
                    value={task.description}
                    className="h-full w-full text-center outline-none"
                    onChange={(e) => {
                      const updatedTasks = tasks.map((t) =>
                        t.id === task.id ? { ...t, description: e.target.value } : t
                      );
                      handleRowChange(task.id);
                      setTasks(updatedTasks);
                    }}
                    onBlur={() => setEditableTaskId(null)}
                  />
                ) : (
                  <span
                    onClick={() => setEditableTaskId(task.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {task.description}
                  </span>
                )}
              </td>

              <td className="border border-gray-800 py-2 px-1.5 text-center">
                {editableTaskId === task.id ? (
                  <input
                    type="date"
                    value={task.deadline}
                    onChange={(e) => {
                      const updatedTasks = tasks.map((t) =>
                        t.id === task.id ? { ...t, deadline: e.target.value } : t
                      );
                      handleRowChange(task.id);
                      setTasks(updatedTasks);
                    }}
                    onBlur={() => setEditableTaskId(null)}
                  />
                ) : (
                  <span
                    onClick={() => setEditableTaskId(task.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {new Intl.DateTimeFormat('en-US', {
                      month: 'short',
                      day: '2-digit',
                      year: 'numeric',
                    }).format(new Date(task.deadline))}
                  </span>
                )}
              </td>

              <td className="border border-gray-800 py-2 px-1.5">
                {editableTaskId === task.id ? (
                  <div className="flex items-center">
                    <div className="flex-1 px-0">
                      {task.assignedTo && task.assignedTo.length > 0 && (
                        <div className="flex flex-col items-center justify-end">
                          {task.assignedTo.map((employee) => (
                            <div
                              key={employee.id}
                              className="flex items-center bg-gray-300 rounded-xl px-2.5 py-1.5 my-0.5 text-xs"
                            >
                              <span>{`${employee.name} (${employee.employeeId})`}</span>
                              <button
                                onClick={() => handleRemoveEmployeeEdit(employee.id, task.id)}
                                className="ml-1.5"
                              >
                                &#x2715;
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="w-3.5">
                      <select
                        className="border-0 outline-none justify-start py-1 w-3.5 appearance-none"
                        onChange={(e) => {
                          const selectedId = parseInt(e.target.value);
                          const foundEmployee = employees.find(
                            (emp) =>
                              emp.id === selectedId &&
                              !task.assignedTo?.some((se) => se.id === emp.id)
                          );
                          if (foundEmployee) {
                            handleAddEmployeeEdit(foundEmployee, task.id);
                          }
                          handleRowChange(task.id);
                        }}
                        defaultValue=""
                      >
                        <option value="" disabled hidden>
                          &#9660;
                        </option>
                        {employees.map((employee) => (
                          <option key={employee.id} value={employee.id}>
                            &#9660;
                            {`${employee.name} (${employee.employeeId})`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ) : (
                  <span
                    onClick={() => setEditableTaskId(task.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {task.assignedTo && task.assignedTo.length > 0 ? (
                      <div className="flex flex-col">
                        {task.assignedTo.map((employee) => (
                          <div
                            key={employee.id}
                            className="flex max-w-fit bg-gray-300 rounded-xl px-2.5 py-1.5 my-0.5 mx-auto text-xs"
                          >
                            <span>{`${employee.name} (${employee.employeeId})`}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span>Not Assigned</span>
                    )}
                  </span>
                )}
              </td>

              <td className="border border-gray-800 py-2 px-1.5 text-center">
                {editableTaskId === task.id ? (
                  <select
                    value={task.status}
                    className="border-0 outline-none w-full py-1 rounded text-center text-gray-800"
                    onChange={(e) => {
                      const updatedStatus = e.target.value as 'Pending' | 'Ongoing' | 'Completed';
                      const updatedTasks = tasks.map((t) =>
                        t.id === task.id ? { ...t, status: updatedStatus } : t
                      );
                      handleRowChange(task.id);
                      setTasks(updatedTasks);
                    }}
                    onBlur={() => setEditableTaskId(null)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                  </select>
                ) : (
                  <span
                    onClick={() => setEditableTaskId(task.id)}
                    className="px-2 py-1 rounded-xl"
                    style={{
                      cursor: 'pointer',
                      background: task.status === 'Pending' ? 'lightcoral' : 
                            task.status === 'Ongoing' ? 'yellow' : 
                            task.status === 'Completed' ? 'lightgreen' : 'inherit'
                    }}
                  >
                    {task.status}
                  </span>
                )}
              </td>

              <td className="border border-gray-800 py-2 px-1.5 text-center">
                {editableTaskId === task.id ? (
                  <input
                    type="number"
                    value={task.priority}
                    className="h-full w-full text-center outline-none pl-4"
                    min="1"
                    max="4"
                    onChange={(e) => {
                      const priority = parseInt(e.target.value);
                      if (!isNaN(priority) && priority >= 1 && priority <= 4) {
                        const updatedTasks = tasks.map((t) =>
                          t.id === task.id ? { ...t, priority } : t
                        );
                        handleRowChange(task.id);
                        setTasks(updatedTasks);
                      }
                    }}
                    onBlur={() => setEditableTaskId(null)}
                  />
                ) : (
                  <span
                    onClick={() => setEditableTaskId(task.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {task.priority}
                  </span>
                )}
              </td>

              <td className="border border-gray-800 py-2 px-1.5 text-center">
                {changedRows.has(task.id) ? (
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleSaveChanges(task.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleTaskDeletion(task.id)}
                  >
                    Delete
                  </button>
                )}
              </td>

            </tr>
          ))}

          <tr>

            <td className="border border-gray-800 py-2 px-1.5 text-center">
              <input
                type="text"
                value={newTask.description}
                className="h-full w-full text-center outline-none"
                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
              />
            </td>

            <td className="border border-gray-800 py-2 px-1.5 text-center relative">
                <input
                    type="date"
                    value={newTask.deadline}
                    className={`h-full w-full text-center outline-none pl-5 ${
                    newTask.deadline ? 'text-gray-800' : 'text-gray-300'
                    }`}
                    onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
                />
            </td>
            
            <td className="border border-gray-800 py-2 px-1.5 relative">
              <div className="flex items-center">
                <div className="flex-1 px-0">
                  {selectedEmployees.length > 0 && (
                    <div className="flex flex-col items-center justify-end">
                      {selectedEmployees.map((employee) => (
                        <div
                          key={employee.id}
                          className="flex items-center bg-gray-300 rounded-xl px-2.5 py-1.5 my-0.5 text-xs"
                        >
                          <span>{`${employee.name} (${employee.employeeId})`}</span>
                          <button
                            onClick={() => handleRemoveEmployee(employee.id)}
                            className="ml-1.5"
                          >
                            &#x2715;
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="w-3.5">
                  <select
                    className="border-0 outline-none justify-start py-1 w-3.5 appearance-none"
                    onChange={(e) => {
                      const selectedId = parseInt(e.target.value);
                      const foundEmployee = employees.find(
                        (emp) => emp.id === selectedId && !selectedEmployees.some((se) => se.id === emp.id)
                      );
                      if (foundEmployee) {
                        handleAddEmployee(foundEmployee);
                      }
                    }}
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      &#9660;
                    </option>
                    {employees.map((employee) => (
                      <option key={employee.id} value={employee.id}>
                        &#9660;
                        {`${employee.name} (${employee.employeeId})`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </td>

            <td className="border border-gray-800 py-2 px-1.5 text-center">
              <select
                value={newTask.status}
                className="border-0 outline-none w-full py-1 rounded text-center text-gray-800"
                onChange={(e) => {
                  const updatedStatus = e.target.value as 'Pending' | 'Ongoing' | 'Completed';
                  setNewTask({ ...newTask, status: updatedStatus });
                }}
              >
                <option value="Pending">Pending</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
              </select>
            </td>
            
            <td className="border border-gray-800 py-2 px-1.5 text-center">
              <input
                type="number"
                value={newTask.priority}
                className="h-full w-full text-center outline-none pl-4"
                min="1"
                max="4"
                onChange={(e) => {
                  const priority = parseInt(e.target.value);
                  if (!isNaN(priority) && priority >= 1 && priority <= 4) {
                    setNewTask({ ...newTask, priority });
                  }
                }}
              />
            </td>

            <td className="border border-gray-800 py-2 px-1.5 text-center">
              <button
                className={`bg-${newTask.description && newTask.deadline && selectedEmployees.length > 0 ? 'green' : 'gray'}-500 hover:bg-${newTask.description && newTask.deadline && selectedEmployees.length > 0 ? 'green' : 'gray'}-700 text-white font-bold py-1 px-2 rounded`}
                onClick={handleAddTask}
                disabled={!newTask.description || !newTask.deadline || selectedEmployees.length === 0}
              >
                Add Task
              </button>

            </td>


          </tr>

        </tbody>

      </table>

    </div>

  );
};

export default TaskManager;
