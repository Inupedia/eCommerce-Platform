import React from "react";
import "./dogFace.less";

import LeftEar from "./ears/leftEar";
import RightEar from "./ears/rightEar";

export default function Ear() {
    return <div className="ear">
        <LeftEar/>
        <RightEar/>
    </div>
}