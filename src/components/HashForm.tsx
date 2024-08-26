import {useEffect, useState} from "react";
import {calculateHash} from "../utils/crypto.ts";
import ResultField from "./ResultField.tsx";

export default function HashForm() {
    const availableAlgorithms = [
        'SHA-1',
        'SHA-256',
        'SHA-384',
        'SHA-512'
    ];
    const DEFAULT_ALGORITHM = 1;

    const [algorithm, setAlgorithm] = useState(availableAlgorithms[DEFAULT_ALGORITHM]);
    const [text, setText] = useState('');
    const [hash, setHash] = useState('');

    useEffect(() => {
            const f = async () => {
                const hash = await calculateHash(algorithm, text);
                setHash(hash);
            }
            f();
        },
        [algorithm, text]
    );

    return (
        <>
            <form id="hash-form" onSubmit={(e) => e.preventDefault()}>
                <div className="field-wrapper">
                    <label htmlFor="algorithm">Algorithm</label>
                    <select
                        id="algorithm"
                        onChange={e => setAlgorithm(e.target.value)}
                    >
                        {availableAlgorithms.map(algorithm =>
                            <option key={algorithm} selected={algorithm === availableAlgorithms[DEFAULT_ALGORITHM]}>{algorithm}</option>
                        )}
                    </select>
                </div>
                <div className="field-wrapper">
                    <label htmlFor="text">Text</label>
                    <textarea
                        id="text"
                        onChange={e => setText(e.target.value)}
                        rows={10}
                    ></textarea>
                </div>
            </form>
            <ResultField hash={hash}/>
        </>
    );
}
