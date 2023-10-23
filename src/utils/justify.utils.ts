const LINE_LIMIT = 80;

export const justifyText = (text: string): string => {
    const textLines: string[] = [];
    const textWords: string[] = text.trim().split(/\s+/);
    let currentLine: string = '';

    for (let i = 0; i < textWords.length; i++) {
        const currentWord = textWords[i];
        if (currentLine.length + currentWord.length <= LINE_LIMIT) {
            currentLine += `${currentWord} `;
        } else {
            textLines.push(currentLine.trim());
            currentLine = `${currentWord} `;
        }
    }
    if (currentLine.trim().length > 0) {
        textLines.push(currentLine.trim());
    }
    return textLines.join('\n');
};
