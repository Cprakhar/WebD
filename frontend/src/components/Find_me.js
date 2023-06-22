import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";
import { useParams } from "react-router-dom";

export default () => {

    let { category, id } = useParams();
    console.log(id);

    const [card, setCard] = useState([]);
    const api = `http://localhost:5000/${category}/${id}`;

    useEffect(() => {
        axios.get(api)
            .then(res => setCard(res.data));
    }, []);

    return <React.Fragment>
        <div className="row row-cols-md-3 g-4">
            <Card img_src={card.img_src} key={card._id} sci_name={card.scientific_name} title={card.common_name} loc={card.location} />
            <div className="col-md-6">
                <div className="embed-responsive embed-responsive-1by1">
                    <iframe className="embed-responsive-item" src="https://www.google.com/maps/d/embed?mid=11Apm1XbQ07MZ6idFSzu32Vr4rQ1-i38&ehbc=2E312F" width={600} height={400}></iframe>
                </div>
            </div>
        </div>
    </React.Fragment>
}