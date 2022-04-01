import React from "react";
import "../../index.less";
import Smile from "./smile";
import MouseHole from "./mouseHole";
import Breath from "./breath";

export default function Index() {
    return <div className="mouse">
        <Smile/>
        <MouseHole/>
        <Breath/>
    </div>
}