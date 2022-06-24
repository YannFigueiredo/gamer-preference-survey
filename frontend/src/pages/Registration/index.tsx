import { Container, PessoalInfos, PlatformsCards, Card } from './styles';
import { ReactComponent as LogoPC } from '../../assets/logo-pc.svg';
import { ReactComponent as LogoPS } from '../../assets/logo-playstation.svg';
import { ReactComponent as LogoXbox } from '../../assets/logo-xbox.svg';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../../contexts/Games';
import apiRecords from '../../services/records-api';
import {Record } from './types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Registration(){
    const { games } = useContext(GameContext);
    const [ platform, setPlatform ] = useState<string>();
    const [ name, setName ] = useState<string>('');
    const [ age, setAge] = useState<number>(-1);
    const [ game, setGame ] = useState<number>(-1);
    const navigate = useNavigate();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        let record: Record = {voter: name, age: age, gameId: game};

        apiRecords.post('/votes', record)
        .then(response => {
            alert("Seu voto foi salvo com sucesso!");
            navigate('/');
        })
        .catch((error) => {
            alert("Erro ao salvar seu voto!");
            console.log("Erro: " + error);
        });
    }

    return(
        <Container>
            <form onSubmit={onSubmit}>
                <PessoalInfos>
                    <input type='text' required placeholder='Nome' onChange={(e) => {setName(e.target.value)}}/>
                    <input type='number' required placeholder='Idade' onChange={(e) => {setAge(parseInt(e.target.value))}}/>
                </PessoalInfos>
                <PlatformsCards>
                    <Card className={platform === 'PC' ? 'active' : ''}>
                        <div>
                            <LogoPC/>
                        </div>
                        <span>PC</span>
                    </Card>
                    <Card className={platform === 'Xbox' ? 'active' : ''}>
                        <div>
                            <LogoXbox/>
                        </div>
                        <span>Xbox</span>
                    </Card>
                    <Card className={platform === 'Playstation' ? 'active' : ''}>
                        <div>
                            <LogoPS/>
                        </div>
                        <span>Playstation</span>
                    </Card>
                </PlatformsCards>
                <select name='games' required onChange={(e) => {
                    setPlatform(games.filter(game => game.id === parseInt(e.target.value))[0].platform);
                    setGame(parseInt(e.target.value));
                }}>
                    <option value='' disabled selected>Escolha um Game</option>
                    {games.map(game => (
                        <option key={game.id} value={game.id}>
                            {game.title} | {game.platform}
                        </option>
                    ))}
                </select>
                <input type='submit' value='Votar' id='btn-submit'/>
            </form>
        </Container>
    );
}