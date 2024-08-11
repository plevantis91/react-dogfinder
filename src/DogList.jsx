import React from "react";
import { Link } from "react-router-dom";

function DogList({ dogs }) {
    return (
        <div>
            <h1>Meet Our Dogs!</h1>
            <ul>
                {dogs.map(d=>(
                    <li key={d.name}>
                        <Link to={`/dogs/${d.name.toLowerCase()}`}>
                            <img src={d.src} alt={d.name}/>
                            <h2>{d.name}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DogList;