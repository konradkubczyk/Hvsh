export default function ResultField({hash}: { hash: string }) {
    function highlightHash(e: React.MouseEvent<HTMLTextAreaElement>): void {
        const inputField = e.target as HTMLTextAreaElement;
        inputField.select();
    }

    return (
        <>
            <label htmlFor={hash} hidden aria-hidden="false">Result</label>
            <textarea
                id="result"
                onClick={highlightHash}
                value={hash}
                readOnly={true}
                rows={4}
            />
        </>
    );
}
