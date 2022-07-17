import Input from "../Common/Input";

export const DrawNumbers = ({
    quickSelectOnClick,
    deleteOnClick,
    ...props
}) => (
    <div className="row relative">
        <div className="input-container">
            {props.inputsQuickSelection.map((elem) => (
                <Input
                    key={elem}
                    name="inputsQuickSelection"
                    className={
                        props.quickSelection.length > 0
                            ? "filled quickSelectionList"
                            : ""
                    }
                    disabled />
            ))}
            <Input
                id="inputPowerBallSelection"
                className={
                    props.powerBallSelection !== null
                        ? "filled powerBallList"
                        : ""
                }
                disabled
            />
        </div>
        <div className="button-container">
            <button onClick={quickSelectOnClick} name="btn-quick-select">
                <i className="fas fa-bolt"></i>
            </button>
            <button onClick={deleteOnClick} name="btn-reset">
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
    </div>
);

export default DrawNumbers;