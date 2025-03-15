
import { DollarSign, Battery, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoCard = () => {
  return (
    <Card className="bg-eco-darker border-eco-light/20 text-white">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Why charge off-peak?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-4">
          <div className="bg-eco-muted p-3 rounded-lg h-fit">
            <DollarSign className="h-5 w-5 text-eco-accent" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Save on electricity costs</h3>
            <p className="text-white/70 text-sm">
              Off-peak electricity rates are significantly lower at $0.07/kWh compared 
              to peak rates of $0.15/kWh. This can lead to substantial savings 
              over time for EV owners.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-eco-muted p-3 rounded-lg h-fit">
            <Leaf className="h-5 w-5 text-eco-accent" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Reduce carbon footprint</h3>
            <p className="text-white/70 text-sm">
              Off-peak charging often uses electricity from cleaner sources, as there's 
              less demand on the grid and more renewable energy available at night,
              resulting in lower CO2 emissions.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="bg-eco-muted p-3 rounded-lg h-fit">
            <Clock className="h-5 w-5 text-eco-accent" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-1">Earn loyalty rewards</h3>
            <p className="text-white/70 text-sm">
              Charging your EV during off-peak hours can earn you loyalty points 
              with certain energy providers, which can be redeemed for various rewards 
              or additional savings.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;

// Missing imports
import { Leaf } from "lucide-react";
