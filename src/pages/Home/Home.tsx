import { DashboardLayout } from '@/layouts/dashboard-layout';
import {
  GetEntertainmentOptions,
  useEntertainmentPopular,
} from '@/features/displayEntertainment';
import { useFetchUserProfile } from '@/features/authentication';
import { GameCard } from '@/features/displayEntertainment';
import {
  EntertainmentContent,
  EntertainmentContainer,
  EntertainmentType,
} from './styles';
import { Game } from '@/types';

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
      <EntertainmentContainer>
        <EntertainmentType></EntertainmentType>
        <EntertainmentContent>
          {gamesData?.games &&
            gamesData.games.map((game: Game) => (
              <GameCard {...game} />
            ))}
        </EntertainmentContent>
      </EntertainmentContainer>
    </DashboardLayout>
  );
};

export default Home;
