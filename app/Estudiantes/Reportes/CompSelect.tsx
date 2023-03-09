"use client";
import React from "react";
import ReactSelect from "react-select";

type Props = {
  title: any;
  select: any;
  placeholder: any;
};

let grupo = [
  {
    value: 1,
    label: "Info Select",
  },
];

const CompSelect = ({ title, placeholder }: Props) => {
  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <h1 className="text-lg font-medium">{title}</h1>
        <ReactSelect options={grupo} placeholder={placeholder} />
      </div>
    </>
  );
};

export default CompSelect;
