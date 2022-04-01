import React from "react";
import "./index.less"
import Ears from "./ears";
import Face from "./face";

export default function Index() {
    return <div className="dogFace">
        <Ears/>
        <Face/>
    </div>
}