/**
 * useAdmissionForm.js
 * Handles form state, validation, and submission for the admissions form.
 * Completely decoupled from UI — swap backend (Firebase / REST / email) here.
 */
import { useState, useCallback } from "react";

const INITIAL = {
  studentName:   "",
  dob:           "",
  gender:        "",
  applyingClass: "",
  parentName:    "",
  relation:      "Father",
  phone:         "",
  email:         "",
  address:       "",
  prevSchool:    "",
  message:       "",
};

function validate(data) {
  const errors = {};
  if (!data.studentName.trim())   errors.studentName   = "Student name is required";
  if (!data.dob)                  errors.dob           = "Date of birth is required";
  if (!data.gender)               errors.gender        = "Please select gender";
  if (!data.applyingClass)        errors.applyingClass = "Please select a class";
  if (!data.parentName.trim())    errors.parentName    = "Parent/Guardian name is required";
  if (!/^\d{10}$/.test(data.phone)) errors.phone       = "Enter a valid 10-digit mobile number";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email";
  if (!data.address.trim())       errors.address       = "Address is required";
  return errors;
}

export function useAdmissionForm({ onSuccess } = {}) {
  const [values,   setValues]   = useState(INITIAL);
  const [errors,   setErrors]   = useState({});
  const [touched,  setTouched]  = useState({});
  const [status,   setStatus]   = useState("idle"); // idle | submitting | success | error

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
    // clear error on change
    setErrors(err => ({ ...err, [name]: undefined }));
  }, []);

  const handleBlur = useCallback((e) => {
    setTouched(t => ({ ...t, [e.target.name]: true }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length) {
      setErrors(errs);
      // mark all as touched so errors show
      setTouched(Object.fromEntries(Object.keys(INITIAL).map(k => [k, true])));
      return;
    }
    setStatus("submitting");
    try {
      // ── Replace with your Firebase / API call ─────────────────────────────
      // await addDoc(collection(db, "admissions"), { ...values, createdAt: serverTimestamp() });
      await new Promise(r => setTimeout(r, 1800)); // simulate network
      // ─────────────────────────────────────────────────────────────────────
      setStatus("success");
      setValues(INITIAL);
      setTouched({});
      onSuccess?.();
    } catch {
      setStatus("error");
    }
  }, [values, onSuccess]);

  const reset = () => { setValues(INITIAL); setErrors({}); setTouched({}); setStatus("idle"); };

  const getFieldProps = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
  });

  return { values, errors, touched, status, getFieldProps, handleSubmit, reset };
}
