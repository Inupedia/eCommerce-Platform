import React from "react";
import "../../dogFace.less"
import NoseGlow from "./noseGlow";

export default function Nose() {
    return <div className="nose">
        <svg>
            <path
                d="M2.017 10.987Q-.563 7.513.157 4.754C.877 1.994 2.976.135 6.164.093 16.4-.04 22.293-.022 32.048.093c3.501.042 5.48 2.081 6.02 4.661q.54 2.579-2.051 6.233-8.612 10.979-16.664 11.043-8.053.063-17.336-11.043z"
                fill="#243946"></path>
        </svg>
        <NoseGlow/>
    </div>
}