export const PowerBallNumbers = ({
    ...props
}) => (
    <div data-testid="powerBallNumbers">
    <h4 className="tag">SELECT YOUR POWER BALL</h4>
        <div className="element-contianer row left">
            {
            props.powerBallList.map((elem) => (
                <div
                    key={elem}
                    className={
                        props.powerBallSelection === elem
                            ? "selected tenPercent relative"
                            : "not-selected tenPercent"
                    }
                >
                    {props.powerBallSelection === elem && (
                        <div className="centered">
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    )}
                    <div className="inside-element">{elem}</div>
                </div>
            ))}
        </div>
    </div>
);

export default PowerBallNumbers;