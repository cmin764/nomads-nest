"use client";

import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabsShellProps {
  visit: ReactNode;
  eat: ReactNode;
  around: ReactNode;
}

export default function TabsShell({ visit, eat, around }: TabsShellProps) {
  return (
    <Tabs defaultValue="visit" className="w-full">
      <div className="flex justify-center mb-12">
        <TabsList className="nn-tab-list">
          <TabsTrigger value="visit" className="nn-tab">
            What to Visit
          </TabsTrigger>
          <TabsTrigger value="eat" className="nn-tab">
            Where to Eat
          </TabsTrigger>
          <TabsTrigger value="around" className="nn-tab">
            Getting Around
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="visit">{visit}</TabsContent>
      <TabsContent value="eat">{eat}</TabsContent>
      <TabsContent value="around">{around}</TabsContent>
    </Tabs>
  );
}
