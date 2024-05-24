import { ChangeEvent } from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  isTextArea?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  type = 'text',
  isTextArea = false,
}) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    {isTextArea ? (
      <textarea
        rows={7}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-black-100 py-4 px-6 placeholder:text-[#C1C2D3] text-white rounded-lg outline-none border-none font-medium resize-none"
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-black-100 py-4 px-6 placeholder:text-[#C1C2D3] text-white rounded-lg outline-none border-none font-medium"
      />
    )}
  </label>
);

export default FormField;
