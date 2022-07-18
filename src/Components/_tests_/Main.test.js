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

it('Should render PowerBall number without highlight numbers when powerball selection list is empty', () => {
    const powerBallSelectedNumbers = null;

    const { container }  = render(<PowerBallNumbers powerBallList={powerBallList} powerBallSelection={powerBallSelectedNumbers}/>);

    expect(container.getElementsByClassName("not-selected tenPercent").length).toBe(20)
    expect(container.getElementsByClassName("selected tenPercent relative").length).toBe(0)
});

it('Should render PowerBall number with highlighting 1 number when powerball selection list is present', () => {
    const powerBallSelectedNumbers = 10

    const { container }  = render(<PowerBallNumbers powerBallList={powerBallList} powerBallSelection={powerBallSelectedNumbers}/>);

    expect(container.getElementsByClassName("selected tenPercent relative").length).toBe(1)
    expect(container.getElementsByClassName("not-selected tenPercent").length).toBe(19)
});

it('Should render Normal numbers component with given quick select list and quick selection', () => {
    const quickSelection = [3,4,10,23,12,19,35]

    const wrapper = render(<NormalNumbers quickSelectList={quickSelectList} quickSelection={quickSelection}/>);
    const normalNumbers = wrapper.getByTestId('normalNumbers');

    expect(normalNumbers).toBeInTheDocument("23");
});

it('Should render Normal numbers without highlight numbers when quick selection list is empty', () => {
    const quickSelection = []

    const { container }  = render(<NormalNumbers quickSelectList={quickSelectList} quickSelection={quickSelection}/>);

    expect(container.getElementsByClassName("not-selected tenPercent").length).toBe(35)
    expect(container.getElementsByClassName("selected tenPercent relative").length).toBe(0)
});

it('Should render Normal numbers highlighted highlighted and rest not highlighted when quick selection list is present', () => {
    const quickSelection = [1,2,3,4,5,6,7]

    const { container }  = render(<NormalNumbers quickSelectList={quickSelectList} quickSelection={quickSelection}/>);

    expect(container.getElementsByClassName("selected tenPercent relative").length).toBe(7)
    expect(container.getElementsByClassName("not-selected tenPercent").length).toBe(28)
});
