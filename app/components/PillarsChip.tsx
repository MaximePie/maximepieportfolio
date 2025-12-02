import { Chip } from "../page";

type ChipColor = "blue" | "green" | "red" | "yellow" | "purple";

interface PillarsChipProps {
  chips: Array<{
    text: string;
    color: ChipColor;
  }>;
}

export function PillarsChip({ chips }: PillarsChipProps) {
  return (
    <div className="mt-6 pt-4 border-t border-gray-200 flex gap-2 flex-wrap">
      {chips.map((chip, index) => (
        <Chip key={index} text={chip.text} color={chip.color} />
      ))}
    </div>
  );
}
