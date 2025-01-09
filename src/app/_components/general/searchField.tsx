"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@nextui-org/react";

export default function SearchField() {
  return (
    <Input
      className="sm:max-w-xs sm:w-auto w-full"
      classNames={{
        inputWrapper: "border shadow-none rounded-md",
      }}
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
        >
          <MagnifyingGlassIcon className="w-4 h-4 text-fields" />
        </button>
      }
      aria-label="Search Field"
      placeholder="Search..."
      type="text"
      variant="bordered"
    />
  );
}
