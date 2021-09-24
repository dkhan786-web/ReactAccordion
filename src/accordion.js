import React, { useState } from "react";
import { questions } from "./App";
import "./index.css";
import MyAccordion from "./myAccordion";

const Accordion = () => {

    const [data, setData] = useState(questions);

    return (
        <>
            <section className="main-div">
                <div className="center-div">
                    <h1>Accordion React JS</h1>
                    {
                        data.map((curElem) => {
                            const { id } = curElem;
                            return <MyAccordion key={id} {...curElem} />
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Accordion;