"use client";

import { Button as ButtonUI } from "@nextui-org/react";

type ButtonProps = {
  children: React.ReactNode;
  isIconOnly?: boolean;
};

export default function Button({ children, isIconOnly = false }: ButtonProps) {
  return (
    <ButtonUI
      isIconOnly={isIconOnly}
      variant="bordered"
      className="border rounded-md text-typography-fields"
    >
      {children}
    </ButtonUI>
  );
}
