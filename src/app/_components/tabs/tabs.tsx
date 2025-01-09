"use client";

import { Tabs as TabsUI, Tab } from "@nextui-org/react";
import Draws from "./draws/draws";
import { NextUIProvider } from "@nextui-org/react";

export default function Tabs() {
  return (
    <NextUIProvider>
      <div className="flex flex-col gap-4 max-w-full h-full">
        <TabsUI
          variant="underlined"
          className="max-w-full"
          classNames={{
            base: "border-b",
            tabList: "pb-0",
            panel: "h-screen",
          }}
        >
          <Tab key="general" title="General"></Tab>
          <Tab key="participants" title="Participants"></Tab>
          <Tab key="groups" title="Groups"></Tab>
          <Tab key="draws" title="Draws">
            <Draws />
          </Tab>
          <Tab key="order" title="Order of Play"></Tab>
        </TabsUI>
      </div>
    </NextUIProvider>
  );
}
