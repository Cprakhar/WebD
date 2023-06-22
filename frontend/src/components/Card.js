import React from "react"
import { Link } from "react-router-dom"
export default (props) => {

    return <div className="col-md">
        <div className="card" style={{ width: '18rem', textAlign: 'left'}}>
            <img src={'/images' + props.img_src} className="card-img-top" alt="..." />
            <div className="card-body">
                    {props.title ? <h3 class="card-title">{props.title}</h3> : null}
                    <p class="card-text ">
                        { props.sci_name ? <h5><span class="dict">Scientific name: </span>{props.sci_name}</h5> : null}
                        {props.loc ? <h5><span class="dict">Location: </span>{props.loc}</h5> : null}
                    </p>
            </div>
        </div>
    </div>
}