import React from "react";

const GenderCheckbox = ({ handleGender, gender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={gender === "male"}
            onChange={(e) => handleGender("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer `}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={gender === "female"}
            onChange={(e) => handleGender("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
