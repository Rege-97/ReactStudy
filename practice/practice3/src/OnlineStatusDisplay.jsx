import useOnlineStatus from "./hooks/useOnlineStatus"

const OnlineStatusDisplay = () => {

    const online = useOnlineStatus()

    return (
        <>
            <p>현재상태 : {online ? '온라인' : '오프라인'}</p>
        </>
    )
}

export default OnlineStatusDisplay