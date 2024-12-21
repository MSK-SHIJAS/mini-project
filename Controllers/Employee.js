import Employee from "../Models/Employee.js";

export const addEmployee = async (req, res) => {
  try {
    const { firstName, lastName, department, designation, dateOfJoining, salary } = req.body;
    const image = req.file ? req.file.filename : null;

    if (!firstName || !lastName || !department || !designation || !dateOfJoining || !salary) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const employee = await Employee.create({
      firstName,
      lastName,
      department,
      designation,
      dateOfJoining,
      salary,
      image: req.file.path.replace(/\\/g, '/'),
    });

    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchEmployees = async (req, res) => {
  try {
    const searchTerm = req.query.search || '';
    const employees = await Employee.find({
      $or: [
        { firstName: { $regex: searchTerm, $options: 'i' } },
        { lastName: { $regex: searchTerm, $options: 'i' } },
        { department: { $regex: searchTerm, $options: 'i' } },
      ]
    });
    res.json(employees);
  } catch (error) {
    console.error('Error during employee search:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updateEmployee =  async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  if (req.file) {
    updatedData.image = req.file.path;
  }

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    return res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error('Error updating employee:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json({ message: 'Employee removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
