
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { chargingHabits } from "@/data/evModels";

interface ChargingHabitSelectorProps {
  onSelectHabit: (percentage: number) => void;
}

const ChargingHabitSelector = ({ onSelectHabit }: ChargingHabitSelectorProps) => {
  const handleValueChange = (value: string) => {
    const habit = chargingHabits.find(h => h.id === value);
    if (habit) {
      onSelectHabit(habit.percentage);
    }
  };

  return (
    <div className="space-y-2">
      <label className="info-label">
        How often do you charge at home?
      </label>
      <Select
        defaultValue="60"
        onValueChange={handleValueChange}
      >
        <SelectTrigger className="bg-eco-darker border-eco-light text-gray-800">
          <SelectValue placeholder="Select charging habit" />
        </SelectTrigger>
        <SelectContent className="bg-white text-gray-800 border-eco-light">
          {chargingHabits.map((habit) => (
            <SelectItem 
              key={habit.id} 
              value={habit.id}
              className="hover:bg-eco-lighter focus:bg-eco-lighter"
            >
              {habit.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-xs text-gray-600 italic mt-2">
        The more you charge at home during off-peak hours, the greater your savings
      </p>
    </div>
  );
};

export default ChargingHabitSelector;
