import Card from "../Card";
import { useEffect, useState } from "react";
import styles from './styles.module.css';
import axios from 'axios';

export default function CardList() {

    const [card, setCard] = useState([ ]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/publicacoes').then(resposta => {setCard(resposta.data)});
    }, [])

    return (
        <div className={styles.card_list}>
            {card.map(c => (
            <Card key={c.id}
                id={c.id}
                titulo={c.titulo}
                autor={c.autor}
                orientador={c.orientador}
                capa = {c.capa} />
            ))}
        </div>
    )


}