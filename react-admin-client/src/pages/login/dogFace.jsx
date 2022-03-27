import React from "react";
import "./dogFace/dogFace.less"
import Ear from "./dogFace/ear";
import Face from "./dogFace/face";

export default function DogFace() {
    return <div className="dogFace">
        <Ear/>
        <Face/>
    </div>
}