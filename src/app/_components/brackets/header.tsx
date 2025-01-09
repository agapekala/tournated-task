import Button from "../general/button";
import { ArrowUpTrayIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { DocumentIcon } from "@heroicons/react/24/outline";
import SearchField from "../general/searchField";
import SelectField from "../general/selectField";

export default function Header() {
  return (
    <div className="flex flex-wrap justify-between gap-2 bg-white rounded-sm p-2 ">
      <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto sm:justify-start">
        <h1 className="text-xl font-bold">Draws</h1>
        <div className="flex gap-2">
          <Button isIconOnly={true}>
            <ArrowUpTrayIcon className="h-4 w-4" />
          </Button>
          <Button>
            <DocumentIcon className="h-4 w-4" />
            <span>Documents</span>
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <SearchField />
        <SelectField
          options={["All categories", "Category 1", "Category 2"]}
          label="Select category"
        />

        <SelectField
          options={["All segments", "Segment 1", "Segment 2"]}
          label="Select segment"
        />
      </div>
    </div>
  );
}
