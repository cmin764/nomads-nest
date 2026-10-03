import { Car, Footprints } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StepCard from "@/components/check-in/step-card";
import TransportModal from "@/components/check-in/transport-modal";
import { byCar, byFoot } from "@/data/check-in-steps";

export default function DirectionsTabs() {
  return (
    <Tabs defaultValue="car" className="w-full">
      {/* Mobile: Bus Routes centered above tabs; Desktop: tabs left, Bus Routes right */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center mb-10">
        <div className="sm:hidden">
          <TransportModal />
        </div>
        <TabsList className="nn-tab-list">
          <TabsTrigger value="car" className="nn-tab">
            <Car size={14} />
            By Car
          </TabsTrigger>
          <TabsTrigger value="foot" className="nn-tab">
            <Footprints size={14} />
            By Foot
          </TabsTrigger>
        </TabsList>
        <div className="hidden sm:block sm:ml-auto">
          <TransportModal />
        </div>
      </div>

      <TabsContent value="car">
        <div className="space-y-4">
          {byCar.map((step, i) => (
            <StepCard key={i} step={step} index={i} priority={i < 2} />
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

