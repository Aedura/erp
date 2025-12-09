import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  inputType?: string;
  register: any;
  name: string;
  defaultVal?: string;
  error?: FieldError;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const InputField = ({ label, inputType = "text", register, name, defaultVal, error, inputProps }: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label htmlFor="" className="text-xs text-primary font-semibold">{label}</label>
      <input type={inputType} {...register(name)} className='ring-2 ring-gray-300 p-2 rounded-lg text-sm w-full' {...inputProps} defaultValue={defaultVal} />
      {error?.message && <p className="text-sm text-red-600 font-medium">{error.message.toString()}</p>}
    </div>
  )
}
export default InputField