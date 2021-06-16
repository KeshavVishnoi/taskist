import React from 'react';

export default class Head extends React.Component{
    render() {
        return (
            <div className="head">
            <header className="dflex">
                 <h2 className="c-name">Taskist</h2>
                 <span className="tagline">Manage Your Daily Life</span>
                 {/* <button className="btn-red">Close</button> */}
            </header>
            </div>
        );
    };
}