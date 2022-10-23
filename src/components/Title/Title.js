import styles from './Title.module.scss';

function Title( { text, icon } ) {
    return (
        <h1 className={styles.title}>{icon} {text}</h1>
    );
}

export default Title;