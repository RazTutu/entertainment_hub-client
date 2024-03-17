import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type DialogStore = {
  dialogOpen: boolean;
  setDialogOpen: (dialogOpen: boolean) => void;
};

const useDialogStore = create<DialogStore>()(
  devtools((set) => ({
    dialogOpen: false,
    setDialogOpen: (newDialogState: boolean) =>
      set({ dialogOpen: newDialogState }),
  }))
);

export const useDialog = () =>
  useDialogStore((state) => state.dialogOpen);

export const useOpenDialog = () => {
  const changeDialog = useDialogStore(
    (state) => state.setDialogOpen
  );
  const toggleState = (newDialogState: boolean) => {
    changeDialog(newDialogState);
  };
  return toggleState;
};
