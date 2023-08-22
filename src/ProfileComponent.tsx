import {useParams} from "react-router-dom";
import React from "react";

export const Profile = () => {
    const params = useParams()
    return (
        <div>
            <span>This is the Profile Page</span> <br/>
            <span>id is {params.id}</span>
        </div>
    )
}