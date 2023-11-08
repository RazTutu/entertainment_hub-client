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
  avatar: null,
};

const useProfileStore = create<ProfileStore>()(
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

export const useProfile = () =>
  useProfileStore((state) => state.profileInfo);

export const useEditProfile = () => {
  const setProfileInfo = useProfileStore(
    (state) => state.setProfileInfo
  );
  const editProfile = (profileData: Profile) => {
    setProfileInfo(profileData);
  };
  return editProfile;
};

export const useClearProfile = () => {
  const setProfileInfo = useProfileStore(
    (state) => state.setProfileInfo
  );
  const clearProfile = () => {
    return setProfileInfo(emptyProfile);
  };
  return clearProfile;
};
