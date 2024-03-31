import { IoLogoGameControllerB } from 'react-icons/io';
import {
  DialogContainer,
  DialogContent,
  Notes,
  NotesDescription,
  Label,
  Title,
  TitleContainer,
} from './styles';
import { theme } from '@/config/theme';
import { DIALOG_NOTES_PLACEHOLDER } from './constants';

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
        <Notes>
          <Label>Notes</Label>
          <NotesDescription
            placeholder={DIALOG_NOTES_PLACEHOLDER}
          />
        </Notes>
      </DialogContent>
    </DialogContainer>
  );
};
