export default function ResultField({hash}: { hash: string }) {
    function highlightHash(e: React.MouseEvent<HTMLInputElement>): void {
        const inputField: HTMLInputElement = e.target as HTMLInputElement;
        inputField.select();
    }

    return (
        <>
            <label htmlFor={hash} hidden aria-hidden="false">Result</label>
            <input
                id="result"
                onClick={highlightHash}
                value={hash}
                readOnly={true}
            />
        </>
    );
}
