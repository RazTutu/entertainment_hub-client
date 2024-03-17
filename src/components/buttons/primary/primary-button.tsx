import { Button } from './styles';

export const PrimaryButton = ({
  text,
  type,
  marginTop,
  onClick,
}: {
  text: string;
  type: string;
  marginTop?: string;
  onClick?: () => void;
}) => {
  return (
    <Button
      $type={type}
      $marginTop={marginTop}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
