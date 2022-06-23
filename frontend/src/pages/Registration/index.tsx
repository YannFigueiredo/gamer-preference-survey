import { Container, PessoalInfos, PlatformsCards, Card } from './styles';
import { ReactComponent as LogoPC } from '../../assets/logo-pc.svg';
import { ReactComponent as LogoPS } from '../../assets/logo-playstation.svg';
import { ReactComponent as LogoXbox } from '../../assets/logo-xbox.svg';
import { useState, useContext } from 'react';
import { GameContext } from '../../contexts/Games';

export default function Registration(){
    const { games } = useContext(GameContext);
    const [ platform, setPlatform ] = useState<string>();
    const [ name, setName ] = useState<string>();
    const [ age, setAge] = useState<number>();
    const [ game, setGame ] = useState<number>();

    return(
        <Container>
            <form action="" method="post">
                <PessoalInfos>
                    <input type='text' placeholder='Nome'/>
                    <input type='text' placeholder='Idade'/>
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
                <select name='games' onChange={(e) => {
                    setPlatform(games.filter(game => game.id === parseInt(e.target.value))[0].platform);
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