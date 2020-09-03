import React from 'react';

interface Props {
    logOut: () => void
    resetTodos: () => void
}

const IsAuth = (props: Props): JSX.Element => {

    const onLogOut = () => {
        props.logOut();
        props.resetTodos();
    }

        return (
            <nav>
                <ul>
                    <li>
                        <button
                            className='btn btn__secondary'
                            onClick={onLogOut}
                        >
                            Log Out
                        </button>
                    </li>
                </ul>
            </nav>
        )
    }

export default IsAuth;
