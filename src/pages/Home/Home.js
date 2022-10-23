import { /*getTodos,*/ getPokes } from 'api/Todos';
import CardTodo from 'components/CardTodo/CardTodo';
import Title from 'components/Title/Title';
import { useEffect, useState } from 'react';
import styles from './Home.module.scss';

function Home() {

    /*const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function getTodosLoad() {
            const todos = await getTodos();
            setTodos(todos);
        }
        getTodosLoad();
    }, []);

    return (
        <div className={styles.main}>
            <Title text={"Page d'acceuil"} />
            <div className={styles.grid}>
                {todos.map(todo => (
                <CardTodo title={todo.title} id={todo.id}  key={todo.key} />
                ))}        
            </div>
        </div>
    );*/


    const [pokes, setPokes] = useState([]);

    useEffect(() => {
        async function getPokesLoad() {
            const pokes = await getPokes();
            setPokes(pokes);
        }
        getPokesLoad();
    }, []);

    return (
        <div className={styles.main}>
            {/*<Title text={"Page d'acceuil"} />*/}
            <div className={styles.grid}>
                {console.log(pokes)}
                {pokes.map(poke => (
                <CardTodo title={poke.name} id={poke.url.split("/")[6]} key={poke.url} />
                ))}        
            </div>
        </div>
    );
}

export default Home;