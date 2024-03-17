import { Game } from '@/types';
import {
  CardContainer,
  CardImage,
  CardText,
  ImageContainer,
  Title,
  Info,
  ButtonsContainer,
} from './styles';
import { PLAYABLE_ON, RELEASED_ON } from './constants';
import { shortenPlatforms } from './functions';
import { PrimaryButton } from '@/components/buttons/primary';
import { theme } from '@/config/theme';
import { useDialog, useOpenDialog } from '@/stores';
import { Dialog } from '../dialog/Dialog';

export const GameCard = ({
  external_api_id,
  background_image,
  key,
  name,
  platforms,
  released_date,
}: Game) => {
  const dialog = useDialog();
  const openDialog = useOpenDialog();

  const openDialogHandle = (dialogState: boolean) => {
    openDialog(dialogState);
  };

  return (
    <>
      <CardContainer>
        <ImageContainer>
          <CardImage src={background_image} alt={name} />
        </ImageContainer>
        <CardText>
          <Title>{name}</Title>
          <Info>
            {PLAYABLE_ON} {shortenPlatforms(platforms)}
          </Info>
          <Info>
            {RELEASED_ON} {released_date}
          </Info>
          <ButtonsContainer>
            <PrimaryButton
              type="filled"
              text="PLAYED"
              onClick={() => openDialogHandle(true)}
            ></PrimaryButton>
            <PrimaryButton
              type="outlined"
              text="WILL PLAY"
              marginTop={theme.space[2]}
            ></PrimaryButton>
          </ButtonsContainer>
        </CardText>
      </CardContainer>
      {dialog && <Dialog />}
    </>
  );
};
