import React from "react"
import { Link } from "react-router-dom"
export default (props) => {

    var styled = {};
    if(props.but){
        styled = {textAlign: 'center'};

    }

    return <div className="col">
        <div className="card" style={{ width: '18rem', textAlign: 'left'}}>
            <img src={'/images' + props.img_src} className="card-img-top" alt="..." />
            <div className="card-body" style={styled}>
                    {props.title ? <h3 class="card-title">{props.title}</h3> : null}
                    <p class="card-text ">
                        { props.sci_name ? <h5><span class="dict">Scientific name: </span>{props.sci_name}</h5> : null}
                        {props.loc ? <h5><span class="dict">Location: </span>{props.loc}</h5> : null}
                    </p>
                <button className="btn btn-warning btn-opacity-10"><Link to={props.link} style={{textDecoration: 'none', color: 'whitesmoke'}}>{props.but ? props.but : 'Find me!'}</Link></button>
            </div>
        </div>
    </div>
}