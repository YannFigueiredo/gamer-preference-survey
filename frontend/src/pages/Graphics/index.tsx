import Filters from '../../components/Filters';
import { Container, Stats, GamesStats, OthersStats, PlatformsStats, GenresStats } from './styles';
import Chart from 'react-apexcharts';
import { barOptions, pieOptions } from './chart-options';
//import { buildBarSeries, getPlatformChartData, getGenderChartData } from './helpers';
import apiRecords from '../../services/records-api';
import { useEffect, useState } from 'react';

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
    const [genrerData, setGenderData] = useState<PieChartData>(initialPieData);

    /*useEffect(() => {
        async function getData(){
            const recordsResponse = await apiRecords.get(`/votes`);
            const gamesResponse = await apiRecords.get(`/games`);
            const barData = buildBarSeries(gamesResponse.data, recordsResponse.data.content);
            setBarChartData(barData);
            const platformChartData = getPlatformChartData(recordsResponse.data.content);
            setPlatformData(platformChartData);
            const genrerChartData = getGenderChartData(recordsResponse.data.content);
            setGenderData(genrerChartData);
        }

        getData();
    }, [])*/

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
                                options={{...pieOptions, labels: genrerData?.labels}}
                                type="donut"
                                width="85%"
                                series={genrerData?.series}
                            />
                        </div>
                    </GenresStats>
                </OthersStats>
            </Stats>
        </Container>
    );
}