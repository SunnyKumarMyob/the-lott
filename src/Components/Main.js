import React, { useEffect, useState } from "react";
import NormalNumbers from "./NormalNumbers"
import PowerBallNumbers from "./PowerBallNumbers";
import DrawNumbers from "./DrawNumbers";

const quickSelectList = Array.from({ length: 35 }, (_, i) => i + 1);
const PowerBallList = Array.from({ length: 20 }, (_, i) => i + 1);

export default function Main() {

    const [quickSelectedNumbers, setQuickSelection] = useState([]);
    const [powerBallSelectedNumbers, setPowerBallSelection] = useState(null);
    const inputsQuickSelection = Array.from({ length: 7 }, (_, i) => i + 1);
    const quickSelect = () => {
        setQuickSelection([31, 14, 34, 22, 10, 17, 4]);
        setPowerBallSelection(7)
    };
    const deleteSelection = () => {
        setQuickSelection([]);
        setPowerBallSelection(null);
    };

    useEffect(() => {
        let quickSelectionValues = document.getElementsByName("inputsQuickSelection");
        if (quickSelectedNumbers.length > 0) {
            for (let i = 0; i < quickSelectionValues.length; i++) {
                let quickSelectionValue = quickSelectedNumbers[i];
                quickSelectionValues[i].value = quickSelectionValue;
            }
        } else {
            for (let j = 0; j < quickSelectionValues.length; j++) {
                quickSelectionValues[j].value = "";
            }
        }
    }, [quickSelectedNumbers]);
    useEffect(() => {
        let powerBallVal = document.getElementById("inputPowerBallSelection");
        if (powerBallSelectedNumbers !== null) {
            powerBallVal.value = powerBallSelectedNumbers;
        } else {
            powerBallVal.value = "PB";
        }
    }, [powerBallSelectedNumbers]);

    return (
        <div data-testid="MainPage">
            <DrawNumbers
                inputsQuickSelection={inputsQuickSelection}
                quickSelection={quickSelectedNumbers}
                powerBallSelection={powerBallSelectedNumbers}
                quickSelectOnClick={() => quickSelect()}
                deleteOnClick={() => deleteSelection()}
                testId="DrawNumbers"
            />
            <NormalNumbers
                quickSelectList={quickSelectList}
                quickSelection={quickSelectedNumbers}
            />
            <PowerBallNumbers
                powerBallList={PowerBallList}
                powerBallSelection={powerBallSelectedNumbers}
            />
        </div>
    );
}
