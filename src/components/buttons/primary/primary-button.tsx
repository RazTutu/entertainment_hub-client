import { Button } from './styles';

export const PrimaryButton = ({
  text,
  type,
  marginTop,
}: {
  text: string;
  type: string;
  marginTop?: string;
}) => {
  return (
    <Button $type={type} $marginTop={marginTop}>
      {text}
    </Button>
  );
};
