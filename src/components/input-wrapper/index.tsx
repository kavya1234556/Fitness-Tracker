import React from "react";

const InputWrapper = ({
  children,
  label,
  labelClassName,
}: {
  children: React.ReactNode;
  label: string;
  labelClassName?: string;
}) => {
  return (
    <div className=" flex flex-col gap-[10px]">
      <label className={labelClassName}>{label}</label>
      {children}
    </div>
  );
};

export default InputWrapper;
