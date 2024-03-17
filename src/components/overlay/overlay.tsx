import { useDialog, useOpenDialog } from '@/stores';
import { OverlayContainer } from './styles';

export const Overlay = () => {
  const changeDialogState = useOpenDialog();
  const dialog = useDialog();

  const closeOverlay = (newState: boolean) => {
    if (dialog) {
      changeDialogState(newState);
    }
  };

  return (
    <OverlayContainer
      onClick={() => closeOverlay(false)}
    />
  );
};
