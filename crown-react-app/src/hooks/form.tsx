import React, { useState } from "react";

export default function FormHook(initialValues: any) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return [values, handleChange];
};