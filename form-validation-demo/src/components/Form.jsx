import { useState } from "react"; 

function Form() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 🔹 VALIDASI
  const validate = () => {
    let newErrors = {};

    // VALIDASI NAME
    if (!formData.name) {
      newErrors.name = "Nama wajib diisi";
    }

    // VALIDASI EMAIL
    if (!formData.email) {
      newErrors.email = "Email wajib diisi";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }

    // VALIDASI PASSWORD
    if (!formData.password) {
      newErrors.password = "Password wajib diisi";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimal 6 karakter";
    }

    return newErrors;
  };

  // 🔹 HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault(); 
    // mencegah reload halaman

    const validationErrors = validate();
    // jalankan validasi

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      // kalau ada error → tampilkan
    } else {
      setErrors({});
      setSuccess("Form berhasil dikirim!");
      // kalau valid → sukses

      setFormData({
        name: "",
        email: "",
        password: ""
      });
      // reset form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* NAME */}
      <div>
        <label>Nama:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Masukkan nama"
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      {/* EMAIL */}
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Masukkan email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      {/* PASSWORD */}
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Masukkan password"
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Submit</button>

      {/* SUCCESS */}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
}

export default Form;