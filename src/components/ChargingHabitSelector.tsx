
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
      <label className="text-sm font-medium text-white/80">
        How often do you charge at home?
      </label>
      <Select
        defaultValue="60"
        onValueChange={handleValueChange}
      >
        <SelectTrigger className="bg-eco-darker border-eco-light/20 text-white">
          <SelectValue placeholder="Select charging habit" />
        </SelectTrigger>
        <SelectContent className="bg-eco-darker text-white border-eco-light/20">
          {chargingHabits.map((habit) => (
            <SelectItem 
              key={habit.id} 
              value={habit.id}
              className="hover:bg-eco-light focus:bg-eco-light"
            >
              {habit.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-sm text-white/70 italic mt-2">
        The more you charge at home during off-peak hours, the greater your savings
      </p>
    </div>
  );
};

export default ChargingHabitSelector;
