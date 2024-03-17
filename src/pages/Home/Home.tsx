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
import { Chip } from '@/components/chip';
import { useSelectChip } from './hooks';

const gamesParam: GetEntertainmentOptions = {
  entertainmentType: 'games',
};

const Home = () => {
  useFetchUserProfile();
  const { gamesData, isLoading } =
    useEntertainmentPopular(gamesParam);
  const { activeChip, toggleActiveChips } = useSelectChip(
    {
      games: true,
      movies: false,
      books: false,
    }
  );
  console.log('gamesList is', gamesData?.games);

  return (
    <DashboardLayout>
      <EntertainmentContainer>
        <EntertainmentType>
          <Chip
            label="Games"
            filled={activeChip.games}
            onClick={() => toggleActiveChips('games')}
          ></Chip>
          <Chip
            label="Movies"
            filled={activeChip.movies}
            onClick={() => toggleActiveChips('movies')}
          ></Chip>
          <Chip
            label="Books"
            filled={activeChip.books}
            onClick={() => toggleActiveChips('books')}
          ></Chip>
        </EntertainmentType>
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
