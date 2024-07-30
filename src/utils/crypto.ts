export async function calculateHash(algorithm: string, text: string): Promise<string> {

    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    const hash = await crypto.subtle.digest(algorithm, data);
    return arrayBufferToHex(hash);
}

function arrayBufferToHex(buffer: ArrayBuffer): string {
    const view = new DataView(buffer);
    const result = [];
    for (let i = 0; i < view.byteLength; i += 4) {
        const value = view.getUint32(i) >>> 0;
        const hex = value.toString(16);
        result.push(hex.padStart(8, '0'));
    }
    return result.join('');
}
