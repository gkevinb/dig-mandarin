import React, { useState } from "react";
import { db } from "./firebase";
import "./Row.css";

function Row(props) {
    const [character, setCharacter] = useState(props.character);
    const [english, setEnglish] = useState(props.english);
    const [pinyin, setPinyin] = useState(props.pinyin);
    const [hskLevel, setHskLevel] = useState(props.hskLevel);
    const [partOfSpeech, setpartOfSpeech] = useState(props.partOfSpeech);
    const [matchingResult, setMatchingResult] = useState(props.matchingResult);
    const [editable, setEditable] = useState(false);

    const edit = () => {
        setEditable(true);
    };

    const confim = () => {
        setEditable(false);
        db.collection("characters").doc(props.id).update({
            character: character,
            english: english,
            pinyin: pinyin,
            hskLevel: hskLevel,
            partOfSpeech: partOfSpeech,
            matchingResult: matchingResult,
        });
    };

    return (
        <tr className="row">
            <td
                contentEditable={editable}
                suppressContentEditableWarning
                onBlur={(e) => setCharacter(e.currentTarget.innerText)}>
                {character}
            </td>
            <td
                contentEditable={editable}
                suppressContentEditableWarning
                onBlur={(e) => setEnglish(e.currentTarget.innerText)}>
                {english}
            </td>
            <td
                contentEditable={editable}
                suppressContentEditableWarning
                onBlur={(e) => setPinyin(e.currentTarget.innerText)}>
                {pinyin}
            </td>
            <td
                contentEditable={editable}
                suppressContentEditableWarning
                onBlur={(e) => setHskLevel(e.currentTarget.innerText)}>
                {hskLevel}
            </td>
            <td
                contentEditable={editable}
                suppressContentEditableWarning
                onBlur={(e) => setpartOfSpeech(e.currentTarget.innerText)}>
                {partOfSpeech}
            </td>
            <td
                contentEditable={editable}
                suppressContentEditableWarning
                onBlur={(e) => setMatchingResult(e.currentTarget.innerText)}>
                {matchingResult}
            </td>
            <td>
                {editable ? (
                    <button onClick={confim}>Confirm</button>
                ) : (
                    <button onClick={edit}>Edit</button>
                )}
            </td>
        </tr>
    );
}

export default Row;
