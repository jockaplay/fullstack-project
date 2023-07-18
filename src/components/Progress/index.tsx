import "./progress.css";

const Progress = () => {
    return (
        <div className="progress">
            <div className="progress__bar">
                <div className="progress__circle checked">
                    <span className="progress__label"><b>1</b></span>
                </div>
                <div className="progress__circle">
                    <span className="progress__label"><b>2</b></span>
                </div>
                <div className="progress__circle">
                    <span className="progress__label"><b>3</b></span>
                </div>
            </div>
        </div>
    );
}

export default Progress;