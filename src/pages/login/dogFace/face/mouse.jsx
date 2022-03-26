import React from "react";
import "../dogFace.less";
import Smile from "./mouse/smile";
import MouseHole from "./mouse/mouseHole";
import Breath from "./mouse/breath";

export default function Mouse() {
    return <div className="mouse">
        <Smile/>
        <MouseHole/>
        <Breath/>
    </div>
}