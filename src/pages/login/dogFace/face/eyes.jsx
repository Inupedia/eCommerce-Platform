import React from "react";
import "../dogFace.less";

import LeftEye from "./eyes/leftEye";
import RightEye from "./eyes/rightEye";

export default function Eyes() {
    return <div className="eyes">
        <LeftEye/>
        <RightEye/>
    </div>
}