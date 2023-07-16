import React, { useCallback, useState } from "react";

const AddNotes = (props) => {

    const [addTextBox, setAddTextBox] = useState([]);
    const [getText, setGetText] = useState("")

    const createHandler = (e) => {
        // setAddTextBox(prevstate => {
        //     return[...prevstate, {
        //         id:Math.random().toString(),
        //         // note: e.target.value
        //     }]
        // })
        // setAddTextBox(precState => {
        //     return [...precState, []]
        // });

        const createBox = [...addTextBox, []]
        setAddTextBox(createBox)

        // setAddTextBox(prevstate => {
        //     return[...prevstate, {
        //         id:Math.random().toString(),
        //         note: e.target.value
        //     }]
        // })
    }

    const getTextHandler = (onChangeValue, i) => {
        console.log("text area >>>>> ", onChangeValue.target.value );
        const inputText = [...addTextBox]
        inputText[i] = onChangeValue.target.value;
        setAddTextBox(inputText)
    }

    // passed anonymous function from button
    const handleDel = (i) => {
        console.log("this id gonna f**king del !! ", i)
        const remainingTextBox = [...addTextBox]
        remainingTextBox.splice(i, 1);
        setAddTextBox(remainingTextBox);
    }

    // another anonymous func using
    // const handleDel = (id) => () =>{
    //     console.log("annonymous fuction cahnge!!! ", id);
    // }

    //using callback
    // const handleDel = useCallback(
    //     (i) => () => {
    //         console.log("callback calling id is >>>> ", i);
    //         const remainingTextBox = [...addTextBox]
    //         remainingTextBox.splice(i, 1);
    //         // const remainingTextBox = addTextBox.filter((textbox) => {
    //         //     console.log("textbox id ", textbox.id);
    //         //     return (textbox.id != id);
    //         // });
    //         setAddTextBox(remainingTextBox);

    //     },
    //     [],
    // )

    console.log("data is >>> ", addTextBox)

    return (
        <>
            <button className="btn btn-success" onClick={createHandler}>Create Note</button>
            {
                addTextBox.map((data, i) => {
                    return (
                        <div className="container my-3 mx-3" style={{"width": "20rem"}} key={data.id} >
                            <textarea className="form-control" rows="6" value={data} onChange={e => getTextHandler(e,i)}/>
                            <button className="btn btn-success mx-2 my-2">Save</button>
                            {/* using anonymous function passing values  */}
                            {/* <button className="btn btn-danger my-2" onClick={() => handleDel(data.id)}>Delete --- {data.id}</button> */}

                            {/* another anonymous func using */}
                            {/* <button className="btn btn-danger my-2" onClick={handleDel(data.id)}>Delete --- {data.id}</button> */}

                            {/* using Callback */}
                            <button className="btn btn-danger my-2" onClick={() => handleDel(i)}>Delete --- {data.id}</button>
                        </div>
                    )
                })
            }
            
        </>
    )
}


export default AddNotes;
