import React from "react";
import "./dogFace.less";
import Eyes from "./face/eyes"
import Nose from "./face/nose/nose"
import Mouse from "./face/mouse"

export default function Face() {
    return <div className="face">
        <Eyes/>
        <Nose/>
        <Mouse/>
    </div>
}