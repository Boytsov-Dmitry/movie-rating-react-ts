import React from "react";
import { Star } from './Star'

interface CinemaProps {
    count: number
}



export const Stars = ({ count = 0 }: CinemaProps) => {
    const arr: any = []

    if(count < 1 || count > 5) {
        return
    }

    for(let i=0; i < count; i++) {
        arr.push(<Star />);
    };

    return(
        <ul className="card-body-stars u-clearfix">{...arr}</ul>
    )
}