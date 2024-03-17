import { ChipContainer, ChipText } from './styles';

export const Chip = ({
  label,
  filled,
  onClick,
}: {
  label: string;
  filled: boolean;
  onClick?: () => void;
}) => {
  return (
    <ChipContainer $filled={filled} onClick={onClick}>
      <ChipText>{label}</ChipText>
    </ChipContainer>
  );
};
