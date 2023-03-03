import React  from "react";
import Boxes from '../datafile/boxes'

const [squares, setSquares] = Boxes.useState(Boxes)

const boxi = Boxes.map(boxi => {
    <div className="box" key={squares.id}></div>
})
export default function Box () {
    return (
        <main className="">
            {boxi}
        </main>
    )
}