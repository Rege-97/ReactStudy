import styles from './Card.module.css'

// props
// 디스트럭쳐링으로 사용
// 기본값 설정 가능
const InfoCard = ({
    title = "(No Title)",
    content,
    author = "Anonymous"
}) => (
    <div className={styles.card}>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Author: {author}</p>
    </div>
)

export default InfoCard