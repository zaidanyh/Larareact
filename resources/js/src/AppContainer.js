import React from 'react';

const AppContainer = ({title, children}) => {
    return (
        <div className="container">
            <div className="card border-secondary m-3">
                <div className="card-header"><h3>{title}</h3></div>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AppContainer;
