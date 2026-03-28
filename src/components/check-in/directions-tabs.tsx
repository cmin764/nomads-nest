"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StepCard from "@/components/check-in/step-card";
import { byCar, byFoot } from "@/data/check-in-steps";

export default function DirectionsTabs() {
  return (
    <Tabs defaultValue="car" className="w-full">
      <TabsList className="mb-10 nn-tab-list">
        <TabsTrigger value="car" className="nn-tab">By Car</TabsTrigger>
        <TabsTrigger value="foot" className="nn-tab">By Foot</TabsTrigger>
      </TabsList>

      <TabsContent value="car">
        <div className="space-y-4">
          {byCar.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="foot">
        <div className="space-y-4">
          {byFoot.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
