import { IoLogoGameControllerB } from 'react-icons/io';
import {
  DialogContainer,
  DialogContent,
  Title,
  TitleContainer,
} from './styles';
import { theme } from '@/config/theme';

export const Dialog = () => {
  return (
    <DialogContainer>
      <DialogContent>
        <TitleContainer>
          <IoLogoGameControllerB
            size={theme.iconSize.large}
          />
          <Title>God of war Ragnarok</Title>
        </TitleContainer>
      </DialogContent>
    </DialogContainer>
  );
};
