function UserInfoCard() {
    const user = {
        name: "채현",
        age: 30,
        email: "chaehyun@example.com",
        isAdmin: true,
        interests: ["React", "Spring", "DB"]
    };

    const styleA = {
        backgroundColor: "lightyellow"
    }

    return (
        <>
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>
            <p>이메일: {user.email}</p>
            <p style={user.isAdmin && styleA}>
                역할: {user.isAdmin ? "관리자입니다" : "일반 사용자입니다"}
            </p>
            <p>
                관심사:
                <ul>
                    {user.interests.map((interest, index) => (
                        <li key={index}>{interest}</li>
                    ))}
                </ul>
            </p>
        </>
    )
}

export default UserInfoCard
