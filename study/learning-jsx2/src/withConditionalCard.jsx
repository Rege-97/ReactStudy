import styles from './Card.module.css'


// 고차 컴포넌트(함수를 매개변수로 받던가 반환하는 함수로 되어있는 컴포넌트)
function withConditionalCard(WrappedComp) {
    return function ConditionalCard({
        disabled, ...props
    }) {
        const cardStyle = {
            opacity: disabled ? 0.5 : 1,
        }

        return (
            <div
                className={styles.card}
                style={cardStyle}
            >
                <WrappedComp{...props} />
            </div>
        );
    }
}

export default withConditionalCard
