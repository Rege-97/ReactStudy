import styles from './Card.module.css'

// children 매개변수를 사용 시 자식 컴포넌트들로 전달
const CardLayout =({
    title, children
}) =>(
    <div className={styles.card}>
        <h2>{title}</h2>
        <div>
            {children}
        </div>
    </div>
)

export default CardLayout