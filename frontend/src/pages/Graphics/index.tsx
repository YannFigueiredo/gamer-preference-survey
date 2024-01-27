import Filters from '../../components/Filters';
import { Container, Stats, GamesStats, OthersStats, PlatformsStats, GenresStats } from './styles';
import Chart from 'react-apexcharts';
import { barOptions, pieOptions } from './chart-options';
import { buildBarSeries, getPlatformChartData, getGenderChartData } from './helpers';
import { useEffect, useState, useContext } from 'react';
import { GameContext } from '../../contexts/Games';
import recordsApi from '../../services/records-api';
import { RecordItem } from '../../contexts/types';

type GenreItem = {
  id: number;
  name: string;
}

type PieChartData = {
    labels: string[];
    series: number[];
}

type BarChartData = {
    x: string;
    y: number;
}

const initialPieData = {
    labels: [],
    series: []
}

export default function Graphics(){
    const [barChartData, setBarChartData] = useState<BarChartData[]>([]);
    const [platformData, setPlatformData] = useState<PieChartData>(initialPieData);
    const [genreData, setGenderData] = useState<PieChartData>(initialPieData);
    const { games } = useContext(GameContext);
    const [ genres, setGenres ] = useState<GenreItem[]>([]);
    const [ records, setRecords ] = useState<RecordItem[]>([]);

    async function loadGenres(){
      await recordsApi.get('/genres')
      .then(response => {setGenres(response.data)})
      .catch(error => {
        console.error("Erro ao listar os gêneros: ", error);
        throw error;
      });
    };

    async function loadRecords(){
      await recordsApi.get('/votes')
      .then(response => {setRecords(response.data.completeContent)})
      .catch(error => {
        console.error("Erro ao listar os votos: ", error);
        throw error;
      });
    };

    function getData(){
        const barData = buildBarSeries(games, records);
        setBarChartData(barData);
        const platformChartData = getPlatformChartData(games, records);
        setPlatformData(platformChartData);
        const genreChartData = getGenderChartData(games, genres, records);
        setGenderData(genreChartData);
    }

    useEffect(() => {
      loadGenres();
      loadRecords();
    }, []);

    useEffect(() => {
      getData();
    }, [genres, records]);

    return(
        <Container>
            <Filters link='/records' textButton='Ver tabela' justifyContent='right'/>
            <Stats>
                <GamesStats>
                    <h1>Jogos mais votados</h1>
                    <div>
                        <Chart
                            options={barOptions}
                            type='bar'
                            width='95%'
                            height='500'
                            series={[{data: barChartData}]}
                        />
                    </div>
                </GamesStats>
                <OthersStats>
                    <PlatformsStats>
                        <h2>Plataformas</h2>
                        <div>
                            <Chart
                                options={{...pieOptions, labels: platformData?.labels}}
                                type="donut"
                                width="85%"
                                series={platformData?.series}
                            />
                        </div>
                    </PlatformsStats>
                    <GenresStats>
                        <h2>Gêneros</h2>
                        <div>
                            <Chart
                                options={{...pieOptions, labels: genreData?.labels}}
                                type="donut"
                                width="85%"
                                series={genreData?.series}
                            />
                        </div>
                    </GenresStats>
                </OthersStats>
            </Stats>
        </Container>
    );
}