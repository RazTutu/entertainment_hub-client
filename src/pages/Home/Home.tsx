import { DashboardLayout } from '@/layouts/dashboard-layout';
import {
  GetEntertainmentOptions,
  useEntertainmentPopular,
} from '@/features/displayEntertainment';
import { useFetchUserProfile } from '@/features/authentication';

const gamesParam: GetEntertainmentOptions = {
  entertainmentType: 'games',
};

const Home = () => {
  useFetchUserProfile();
  const { gamesData, isLoading } =
    useEntertainmentPopular(gamesParam);

  console.log('gamesList is', gamesData?.games);

  return (
    <DashboardLayout>
      <div className="homePage">
        This is the home page
      </div>
    </DashboardLayout>
  );
};

export default Home;
