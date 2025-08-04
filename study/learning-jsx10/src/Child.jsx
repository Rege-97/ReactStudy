import React from "react";

function Child({ active, onClick }) {
    console.log(
        'Child rendered'
    )

    return (
        <div>
            <p>
                Child: {
                    active ? 'Active' : 'Not active'
                }
            </p>
            <button onClick={onClick}>
                Increase
            </button>
        </div>
    )
}
// React의 memo함수로 export 하면 자식 컴포넌트가 리렌더링 될때만 렌더링됨
export default React.memo(Child)