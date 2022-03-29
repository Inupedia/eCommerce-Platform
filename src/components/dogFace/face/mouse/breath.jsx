import React from "react";
import "../../dogFace.less"
import Top from "./breath/top"
import Line from "./breath/line"
import Middle from "./breath/middle"

export default function Breath() {
    return <div className="breath">
        <Top/>
        <Line/>
        <Middle/>
    </div>
}