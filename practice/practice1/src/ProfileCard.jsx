function ProfileCard() {
    const name = "채현";
    const age = 30;
    const job = "웹 백엔드 개발자";

    const cardStyle = {
        border: "1px solid gray",
        padding: "12px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
    };

    return (
        <>
            <div style={cardStyle}>
                <p>이름: {name}</p>
                <p>나이: {age}</p>
                <p>직업: {job}</p>
            </div>
        </>
    )
}

export default ProfileCard