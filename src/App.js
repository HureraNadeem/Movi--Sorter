import React, { useState } from 'react'
import './App.css';
import Card from "./Card";

import { Action } from "./Action";
import { Romance } from "./Romance";
import { Comedy } from "./Comedy";

// import Test  from "./Test";

function App() {

    const empty = [];
    const [currentItems, newItems] = useState(empty);
    const FilterItems = (category) => {
        if (category === "Action") {
            console.log(Action);
            return newItems(Action);
        }
        else if (category === "Romance") {
            console.log(Romance);
            return newItems(Romance);
        }
        else if (category === "Comedy") {
            console.log(Comedy);
            return newItems(Comedy);
        }
        else if (category === "All") {
            const AllItems = Action.concat(Comedy).concat(Romance);
            console.log(AllItems);
            return newItems(AllItems);
        }
    }
    return (
        <>
            <div className="heading_div">
                <h1 className="heading">Sorting movies for you</h1>
            </div>

            <section>
                <div>
                    <h2>Available Genres</h2>
                    <ul class="check-list">
                        <li>Action</li>
                        <li>Romance</li>
                        <li>Comedy</li>
                    </ul>
                </div>
            </section>

            <div className="btn-div">
                <input className="btn" type="button" value="Action" onClick={() => { FilterItems("Action") }} />
                <input className="btn" type="button" value="Comedy" onClick={() => { FilterItems("Comedy") }} />
                <input className="btn" type="button" value="Romance" onClick={() => { FilterItems("Romance") }} />
                <input className="btn" type="button" value="All" onClick={() => { FilterItems("All") }} />
            </div>


            {
                currentItems.map((value) => {
                    return (
                            <Card
                                name={value.name}
                                year={value.year}
                                linksrc={value.linksrc}
                            />
                    )
                })
            }
            {/* <Test/> */}

        </>
    )
}

export default App
