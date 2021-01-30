import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import firebase from "firebase";
import Login from "./Login";
import { userState } from "./atoms/userState";
import { useRecoilState } from "recoil";

function Admin() {
    const [user, setUser] = useRecoilState(userState);
    const [character, setCharacter] = useState("");
    const [english, setEnglish] = useState("");
    const [pinyin, setPinyin] = useState("");
    const [hskLevel, setHskLevel] = useState("");
    const [partOfSpeech, setpartOfSpeech] = useState("");
    const [matchingResult, setMatchingResult] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                setUser({
                    email: userAuth.email,
                    uid: userAuth.uid,
                });
            }
        });
    }, []);

    const logout = (e) => {
        setUser({
            email: "",
            uid: ""
        })
        auth.signOut();
    }

    const addToDb = (e) => {
        e.preventDefault();

        db.collection("characters").add({
            character: character,
            english: english,
            pinyin: pinyin,
            hskLevel: hskLevel,
            partOfSpeech: partOfSpeech,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setCharacter("");
        setEnglish("");
        setPinyin("");
        setHskLevel("");
        setpartOfSpeech("");
        setMatchingResult("");
    };

    return (
        <div className="admin">
            {!user.email ? (
                <Login />
            ) : (
                <div className="admin__panel">

                    

                    <form>
                        <input
                            value={character}
                            onChange={(e) => setCharacter(e.target.value)}
                            placeholder="Character"
                            type="text"
                        />
                        <input
                            value={english}
                            onChange={(e) => setEnglish(e.target.value)}
                            placeholder="English"
                            type="text"
                        />
                        <input
                            value={pinyin}
                            onChange={(e) => setPinyin(e.target.value)}
                            placeholder="Pinyin"
                            type="text"
                        />
                        <input
                            value={hskLevel}
                            onChange={(e) => setHskLevel(e.target.value)}
                            placeholder="HSK Level"
                            type="text"
                        />
                        <input
                            value={partOfSpeech}
                            onChange={(e) => setpartOfSpeech(e.target.value)}
                            placeholder="Part of Speech"
                            type="text"
                        />
                        <input
                            value={matchingResult}
                            onChange={(e) => setMatchingResult(e.target.value)}
                            placeholder="Matching Result"
                            type="text"
                        />

                        <button type="submit" onClick={addToDb}>
                            Add to DB
                        </button>
                    </form>
                    <button onClick={logout}>Logout</button>
                </div>
            )}
        </div>
    );
}

export default Admin;
