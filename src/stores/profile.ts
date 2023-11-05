import { Profile } from '@/types/auth';
import { create } from 'zustand';
import {
  createJSONStorage,
  devtools,
  persist,
} from 'zustand/middleware';

export type ProfileStore = {
  profileInfo: Profile;
  setProfileInfo: (profileData: Profile) => void;
};

export const emptyProfile: Profile = {
  email: null,
  username: null,
  id: null,
};

export const useProfileStore = create<ProfileStore>()(
  devtools(
    persist(
      (set) => ({
        profileInfo: emptyProfile,
        setProfileInfo: (profileInfo: Profile) =>
          set({ profileInfo }),
      }),
      {
        name: 'profile-store',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
