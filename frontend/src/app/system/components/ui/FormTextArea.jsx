import React from "react";

const FormTextArea = ({ placeholder, value, onChange, name, Icon }) => {
  return (
    <div className="relative w-full">
      {Icon && <Icon className="w-5 h-5 text-gray-400 absolute left-4 top-4" />}

      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={4}
        className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-white text-gray-800
                   placeholder-gray-400 outline-none border border-white/20
                   focus:border-white focus:ring-2 focus:ring-white/20
                   transition-all duration-200 text-sm resize-none shadow-sm"
      />
    </div>
  );
};

export default FormTextArea;
