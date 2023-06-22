import Card_2 from "./Card_2";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

export default (props) => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        axios.get(props.api)
            .then((res) => {
                console.log(res.data);
                setCard(res.data);
            });
    }, []);


    return <div>
        <h2 style={{ margin: '50px auto' }}>{props.title}</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {card.map((item) => {
                if (!item.link) {
                    item.link = `/${item.category}/${item._id}`;
                }
                return <Card_2 title={item.common_name} img_src={item.img_src} sci_name={item.scientific_name} loc={item.location} link={item.link} but={item.title} key={item._id}/>
            })}
        </div>
    </div>
};
