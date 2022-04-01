import React from "react";
import "../index.less";

import LeftEar from "./leftEar";
import RightEar from "./rightEar";

export default function Index() {
    return <div className="ear">
        <LeftEar/>
        <RightEar/>
    </div>
}