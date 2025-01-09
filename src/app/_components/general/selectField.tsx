import { Select, SelectItem } from "@nextui-org/select";

type SelectFieldProps = {
  options: string[];
  label: string;
};

export default function SelectField({ options, label }: SelectFieldProps) {
  return (
    <Select
      className="sm:max-w-xs sm:w-auto w-full min-w-48"
      classNames={{
        trigger: "min-h-10 h-10 rounded-md border shadow-none bg-white",
        value: "!text-fields text-sm",
      }}
      defaultSelectedKeys={"0"}
      aria-label={label}
    >
      {options.map((option, idx) => (
        <SelectItem key={idx}>{option}</SelectItem>
      ))}
    </Select>
  );
}
