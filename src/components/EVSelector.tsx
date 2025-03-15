
import { useState, useEffect } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { evMakes, EVModel } from "@/data/evModels";

interface EVSelectorProps {
  onSelectEV: (ev: EVModel) => void;
}

const EVSelector = ({ onSelectEV }: EVSelectorProps) => {
  const [selectedMake, setSelectedMake] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [availableModels, setAvailableModels] = useState<EVModel[]>([]);

  useEffect(() => {
    if (selectedMake) {
      const make = evMakes.find(make => make.id === selectedMake);
      if (make) {
        setAvailableModels(make.models);
        // Reset selected model when make changes
        setSelectedModel("");
      }
    } else {
      setAvailableModels([]);
      setSelectedModel("");
    }
  }, [selectedMake]);

  useEffect(() => {
    if (selectedMake && selectedModel) {
      const make = evMakes.find(make => make.id === selectedMake);
      if (make) {
        const model = make.models.find(model => model.id === selectedModel);
        if (model) {
          onSelectEV(model);
        }
      }
    }
  }, [selectedMake, selectedModel, onSelectEV]);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="info-label">EV Make</label>
        <Select
          value={selectedMake}
          onValueChange={setSelectedMake}
        >
          <SelectTrigger className="bg-eco-darker border-eco-light text-gray-800">
            <SelectValue placeholder="Select make" />
          </SelectTrigger>
          <SelectContent className="bg-white text-gray-800 border-eco-light">
            {evMakes.map((make) => (
              <SelectItem key={make.id} value={make.id} className="hover:bg-eco-muted focus:bg-eco-muted">
                {make.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="info-label">EV Model</label>
        <Select
          value={selectedModel}
          onValueChange={setSelectedModel}
          disabled={!selectedMake}
        >
          <SelectTrigger className="bg-eco-darker border-eco-light text-gray-800">
            <SelectValue placeholder={selectedMake ? "Select model" : "Select make first"} />
          </SelectTrigger>
          <SelectContent className="bg-white text-gray-800 border-eco-light">
            {availableModels.map((model) => (
              <SelectItem key={model.id} value={model.id} className="hover:bg-eco-muted focus:bg-eco-muted">
                {model.model}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default EVSelector;
