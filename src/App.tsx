import React from 'react';

type TProps = {
    age: number
    onClick: () => void
}


export const App: React.FC<TProps> = ({age, onClick}) => {
    return (
        <div>
            <h1> Age: {age}</h1>
            <button onClick={onClick}>Hello</button>
        </div>
    );
}