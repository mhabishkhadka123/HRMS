import { FaUser, FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function EmployeeCard({employees, setEditEmployee, setModelForm, handleDelete}) {
  return (
    <div className="mt-5">
      <table className="w-full text-sm text-center text-gray-700">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Employee</th>
            <th>Department</th>
            <th>Position</th>
            <th>Status</th>
            <th>Join Date</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        {employees.map((employee)=>(
                <tbody key={employee.id}>
          <tr className="hover:bg-gray-50 divide-y divide-gray-100">
            <td className="flex items-center gap-3 px-4 py-2 text-left">
              <FaUser className="text-gray-400" />
              <div>
                <div className="font-medium text-gray-900">{employee.name}</div>
                <div className="text-gray-500 text-xs">{employee.email}</div>
              </div>
            </td>
            <td>{employee.department}</td>
            <td>Frontend Developer</td>
            <td>
              <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                Active
              </span>
            </td>
            <td>{employee.date}</td>
            <td>{employee.salary}</td>
            <td className="flex justify-center gap-3 text-gray-600">
              <FaEye className="cursor-pointer hover:text-blue-500" />
              <FaEdit className="cursor-pointer hover:text-green-500" onClick={()=>{
                setEditEmployee(employee);
                setModelForm(true);
              }}/>
              <FaTrash 
              onClick={() =>
                handleDelete(employee.id)
              } 
              className="cursor-pointer hover:text-red-500" />
            </td>
          </tr>
        </tbody>
        ))}
     
      </table>
    </div>
  );
}