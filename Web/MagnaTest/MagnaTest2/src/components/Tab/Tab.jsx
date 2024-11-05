import './Tab.css';

export default function Tab(props){
    return (
        <div className="header" id='tab'>
            <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">
                        <button className="transparent-button" id="buttonBanner" onClick={props.onSelect}>{props.children}</button>
                    </ul>
                    </div>
                </nav>
                </div>
            </div>
            </div>
        </div>
    );
}