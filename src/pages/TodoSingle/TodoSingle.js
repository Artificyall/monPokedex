//import { getTodoById } from 'api/Todos';
import { getPokeById } from 'api/Todos';
import Title from 'components/Title/Title';
import styles from './TodoSingle.module.scss';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ChangePokemon() {
    const pokeIdPlusUn = window.location.pathname.split("/")[2];
    <Link to={`poke/${pokeIdPlusUn}`} className={styles.main}></Link>
  }


function TodoSingle() {
  
    /*const [todo, setTodo] = useState({});
    const { todoId } = useParams();

    useEffect(() => {
        async function getTodoLoadById(todoId) {
            const todo = await getTodoById(todoId);
            setTodo(todo);
        }
        //Recuperation de l'id dans l'url
        const todoId = window.location.pathname.split("/")[2];
        getTodoLoadById(todoId);

    }, [todoId]);

    return (
        <div className={styles.main}>
            <Title text={todo.title}  />
            {todo.completed ? <p>Completed</p> : <p>Not completed</p>}
        </div>
    )*/


    const [poke, setPoke] = useState({});
    const { pokeId } = useParams();

    useEffect(() => {
        async function getPokeLoadById(pokeId) {
            const poke = await getPokeById(pokeId);
            setPoke(poke);
        }
        //Recuperation de l'id dans l'url
        const pokeId = window.location.pathname.split("/")[2];
        getPokeLoadById(pokeId);

    }, [pokeId]);

    return (
        <div className={styles.main}>
            <div className={styles.carte}>
            <button onClick={ChangePokemon}>+1</button>
                <Title text={poke.name}  />
                <img src={poke.sprites.front_default} alt={poke.name} />  
                <p>Height: {poke.height}</p>
                <p>Weight: {poke.weight}</p>
                <p>Base experience: {poke.base_experience}</p>
                <p>abilities:</p> {poke.abilities.map(ability => (
                    <p className={styles.test}>{ability.ability.name}</p>
                ))}
                <p>types:</p> {poke.types.map(type => (
                    <p className={styles.test}>{type.type.name}</p>
                ))}
                <p>stats:</p> {poke.stats.map(stat => (
                    <p className={styles.test}>{stat.stat.name} : {stat.base_stat}</p>
                ))}
            </div>
        </div>
    )
}

export default TodoSingle;