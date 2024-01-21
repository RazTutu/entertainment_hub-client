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

export const GameCard = ({
  external_api_id,
  background_image,
  key,
  name,
  platforms,
  released_date,
}: Game) => {
  return (
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
          <PrimaryButton text="PLAYED"></PrimaryButton>
          <PrimaryButton text="WILL PLAY"></PrimaryButton>
        </ButtonsContainer>
      </CardText>
    </CardContainer>
  );
};
