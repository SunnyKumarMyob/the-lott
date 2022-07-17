export const NormalNumbers = ({
    ...props
}) => (
    <div className="element-contianer row left" data-testid="normalNumbers">
        {props.quickSelectList.map((elem) => (
        <div
            key={elem}
            className={
                props.quickSelection.includes(elem)
                    ? "selected tenPercent relative"
                    : "not-selected tenPercent"
            }
        >
            {props.quickSelection.includes(elem) && (
                <div className="centered">
                    <i className="fa-solid fa-xmark"></i>
                </div>
            )}
            <div className="inside-element">{elem}</div>
        </div>
    ))}
</div   >
);

export default NormalNumbers;