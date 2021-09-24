import React, { useState } from "react";

const MyAccordion = ({ question, answer }) => {

    const [show , setShow] = useState(false);

    return (
        <>
            <div className="main-heading">
                <p onClick={ () => setShow(!show)}> { show? "x" : "+"}</p>
                <h3> {question} </h3>
            </div>
            { show && <p> {answer} </p> }
        </>
    );
};

export default MyAccordion;