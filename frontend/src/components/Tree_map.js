import React from "react";

export default () => {

    return <React.Fragment>
        <div className="row">
        <h2 style={{ margin: '50px auto' }}>Tree Map</h2>
        <div className="embed-responsive embed-responsive-1by1">
            <iframe className="embed-responsive-item" src="https://www.google.com/maps/d/embed?mid=11Apm1XbQ07MZ6idFSzu32Vr4rQ1-i38&ehbc=2E312F" width={600} height={400}></iframe>
        </div>
        </div>
    </React.Fragment>
}