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
            <div className={styles.ellipse}></div>
                <img className={styles.pictureCard} src={poke.sprites.front_default} alt={poke.name} />  
                <p>Height: </p><p className={styles.test}>{poke.height}</p>
                <p>Weight: </p><p className={styles.test}>{poke.weight}</p>
                <p>abilities:</p> {poke.abilities.map(ability => (
                    <p className={styles.test}>{ability.ability.name}</p>
                ))}
                <p>types:</p> {poke.types.map(type => (
                    <p className={styles.test}>{ 
                        type.type.name == "bug" ? <img src="https://www.flaticon.com/svg/static/icons/svg/3033/3033446.svg" alt="bug" /> :
                        type.type.name == "flying" ? <img src="https://www.flaticon.com/svg/static/icons/svg/3033/3033446.svg" alt="flying" /> : 
                        type.type.name == "poison" ? <img src="https://www.flaticon.com/svg/static/icons/svg/3033/3033446.svg" alt="poison" /> : 
                        type.type.name == "grass" ? <img src="https://www.flaticon.com/svg/static/icons/svg/3033/3033446.svg" alt="grass" /> : 
                        type.type.name == "normal" ? <img src="https://www.flaticon.com/svg/static/icons/svg/3033/3033446.svg" alt="normal" /> : 
                        type.type.name == "water" ? <img src="https://www.flaticon.com/svg/static/icons/svg/3033/3033446.svg" alt="water" /> : 
                        type.type.name == "electric" ? <img src="https://www.flaticon.com/svg/static/icons/svg/3033/3033446.svg" alt="electric" /> : 
                        type.type.name == "ground" ? <img src="https://www.flaticon.com/svg/static/icons/svg/3033/3033446.svg" alt="ground" /> : 
                        type.type.name == "fairy" ? <img src="https://www.flaticon.com/svg/static/icons/svg/3033/3033446.svg" alt="fairy" /> : 
                        type.type.name == "fighting" ? <img src="https://www.flaticon.com/svg/static/icons/svg/3033/3033446.svg" alt="fighting" /> : 
                        type.type.name == "psychic" ? <img src="https://www.flaticon.com/svg/static/icons/svg/3033/3033446.svg" alt="psychic" /> : 
                        type.type.name == "rock" ? <img src="https://www.flaticon.com/svg/static/icons/svg/3033/3033446.svg" alt="rock" /> : 
                        type.type.name == "steel" ? <img src="https://www.flaticon.com/svg/static/icons/svg/3033/3033446.svg" alt="steel" /> : 
                        type.type.name }</p>
                ))}
            </div>
        </div>
    )
}

export default TodoSingle;