export default function debugLogger(debug: boolean, data: any) {
    if(debug) {
        console.debug('DEBUG:\n:', data);
      }
}