import React from "react";
import "../index.less";
import Eyes from "./eyes"
import Nose from "./nose/nose"
import Mouse from "./mouse"

export default function Index() {
    return <div className="face">
        <Eyes/>
        <Nose/>
        <Mouse/>
    </div>
}