import React from 'react';
import Main from "../Main";
import {render} from "@testing-library/react";
import PowerBallNumbers from "../PowerBallNumbers";
import NormalNumbers from "../NormalNumbers";

let powerBallList = Array.from({ length: 20 }, (_, i) => i + 1);
let quickSelectList = Array.from({ length: 35 }, (_, i) => i + 1);

it('Main page test', () => {
    const wrapper = render(<Main/>);
    const mainPage = wrapper.getByTestId('MainPage');
    expect(mainPage).toBeInTheDocument();
});

it('Should render PowerBallNumbers component with given power ball list and power ball selection', () => {
    const powerBallSelection = [4]

    const wrapper = render(<PowerBallNumbers powerBallList={powerBallList} powerBallSelection={powerBallSelection}/>);
    const powerBallNumbers = wrapper.getByTestId('powerBallNumbers');

    expect(powerBallNumbers).toBeInTheDocument("2");
});

it('Should render Normal numbers component with given quick select list and quick selection', () => {
    const quickSelection = [3,4,10,23,12,19,35]

    const wrapper = render(<NormalNumbers quickSelectList={quickSelectList} quickSelection={quickSelection}/>);
    const normalNumbers = wrapper.getByTestId('normalNumbers');

    expect(normalNumbers).toBeInTheDocument("23");
});
