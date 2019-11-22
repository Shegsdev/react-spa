export const chunkData = (data, chunkSize) => {
    let result = [];
    if (typeof(data) === 'object') {
        let chunk = data.slice(0);
        while (chunk[0]) {
            result.push(chunk.splice(0, chunkSize));
        }
        return result;
    }
}
