import { Link } from 'react-router-dom';
import { Container } from './styles';

type Props = {
    link: string,
    textButton: string,
    justifyContent: string
}

export default function Filters({link, textButton, justifyContent}: Props){
    return(
        <Container style={{justifyContent: justifyContent}}>
            {
                link === '/graphics' &&
                <div>
                    <input type='text' placeholder='Data inicial' id='min-date'/>
                    <input type='text' placeholder='Data final' id='max-date'/>
                    <button id='btn-reset-filter'>Limpar pesquisa</button>
                </div>
            }
            <Link to={link}>
                <button id='btn-link'>{textButton}</button>
            </Link>
        </Container>
    );
}