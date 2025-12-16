import { useState } from "react";

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Student Registered:", formData);
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        password: ""
      });
    }
  };

  return (
    <div style={styles.container}>
      <h2>Student Registration</h2>

      {submitted && (
        <p style={{ color: "green" }}>Registration Successful!</p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div style={styles.field}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>

        {/* Email */}
        <div style={styles.field}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        </div>

        {/* Password */}
        <div style={styles.field}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span style={styles.error}>{errors.password}</span>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

// Simple styling
const styles = {
  container: {
    width: "300px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px"
  },
  field: {
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column"
  },
  error: {
    color: "red",
    fontSize: "12px"
  }
};

export default StudentRegistration;
