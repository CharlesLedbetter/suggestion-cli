export function debugLogger(debug: boolean, data: any) {
    if(debug) {
        console.log('DEBUG:\n:', data);
      }
}