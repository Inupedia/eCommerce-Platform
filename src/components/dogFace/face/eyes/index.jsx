import React from "react";
import "../../index.less";

import LeftEye from "./leftEye";
import RightEye from "./rightEye";

export default function Index() {
    return <div className="eyes">
        <LeftEye/>
        <RightEye/>
    </div>
}