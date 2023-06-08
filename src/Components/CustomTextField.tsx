import React, { useState, ChangeEvent } from "react";
//import "./styles.css";

interface CustomTextFieldProps {
  placeholder: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="custom-text-field">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomTextField;
