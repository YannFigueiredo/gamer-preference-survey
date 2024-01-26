import { Game } from './types';
import { RecordItem } from '../../contexts/types';

type GenreItem = {
  id: number;
  name: string;
}

const getPlatform = (games: Game[], gameId: number) => {
  const game =  games.filter(game => game.id === gameId)[0];

  return game ? game.platform : "";
};

const getName = (games: Game[], gameId: number) => {
  const game =  games.filter(game => game.id === gameId)[0];

  return game ? game.title : "";
};

const getGenre = (games: Game[], genres: GenreItem[], gameId: number) => {
  const game =  games.filter(game => game.id === gameId)[0];
  let genre: string = "";

  if(game) genre = genres.filter(genre => game.GenreId === genre.id)[0].name;

  return genre ? genre : "";
}

export const buildBarSeries = (games: Game[], records: RecordItem[]) => {
  const mappedGames = games.map(game => {
    const filteredGames = records.filter(item => {
      return getName(games, item.GameId) === game.title && getPlatform(games, item.GameId) === game.platform
    });

    return {
      x: `${game.title} | ${game.platform}`,
      y: filteredGames.length
    }
    
  });

  const sortedGames = mappedGames.sort((a, b) => {
    return b.y - a.y;
  });

  return sortedGames.slice(0, 10);
};

export const getPlatformChartData = (games: Game[], records: RecordItem[]) => {
  const platforms = ["PC", "Playstation", "Xbox"];

  const series = platforms.map(platform => {
    const filtedGames = records.filter(item => {
      return platform === getPlatform(games, item.GameId);
    })

    return filtedGames.length;
  });

  return {
    labels: platforms,
    series,
  };
};

export const getGenderChartData = (games: Game[], genres: GenreItem[], records: RecordItem[]) => {
   const genderByAmount = records.reduce((accumulator, currentValue) => {
     if (accumulator[getGenre(games, genres, currentValue.GameId)] !== undefined) {
       accumulator[getGenre(games, genres, currentValue.GameId)] += 1;
     } else {
      accumulator[getGenre(games, genres, currentValue.GameId)] = 1;
     }

     return accumulator;
   }, {} as Record<string, number>);

   const labels = Object.keys(genderByAmount);
   const series = Object.values(genderByAmount);

  return {
    labels,
    series
  };
};