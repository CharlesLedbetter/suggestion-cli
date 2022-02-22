import colors from 'colors/safe';

export default function debugLogger(debug: boolean, type: string, data: unknown): void {
    if(debug) {
        console.debug(`${colors.yellow(`DEBUG ${type}:`)}\n`, data);
      }
}