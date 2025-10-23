"use client";
import { useState } from "react";

export default function FormPage() {
  const [data, setData] = useState({
    name: "",
    telephone: "",
    email: "",
    birthdate: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    telephone: "",
    email: "",
    birthdate: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
   switch (name) {
      case "name":
        if (!/^[A-Za-z]+ [A-Za-z]+$/.test(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, name: "Please enter your full name." }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
        }
        break;
      case "telephone":
        if (!/^\d+$/.test(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, telephone: "Please enter a valid telephone number." }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, telephone: "" }));
        }
        break;
        case "birthdate":
        const birthDate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age < 18) {
            setErrors((prevErrors) => ({ ...prevErrors, birthdate: "You must be at least 18 years old." }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, birthdate: "" }));
        }
        break;
        case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: "Please enter a valid email address." }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
        }
        

    }
  };
  return (
    <div>
      <h1>Form Page</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            required
            value={data.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <label>
          Telephone Number:
          <input
            type="tel"
            name="telephone"
            required
            value={data.telephone}
            onChange={handleChange}
          />
          {errors.telephone && <span>{errors.telephone}</span>}
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Birthdate:
          <input
            type="date"
            name="birthdate"
            required
            value={data.birthdate}
            onChange={handleChange}
          />
          {errors.birthdate && <span>{errors.birthdate}</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
