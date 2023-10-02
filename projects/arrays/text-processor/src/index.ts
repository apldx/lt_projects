export type AlignmentOptions = {
  align?: 'left' | 'middle' | 'right';
  width: number;
};

export const alignTexts = (texts: string[], options: AlignmentOptions) => {
  let align = 'left';
  if (options.align) {
    align = options.align;
  }
  const output: string[][] = [];
  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];
    const splits = text.split(' ');
    const storedTexts: string[] = [];
    let currentText = splits[0];
    for (const split of splits.slice(1)) {
      if (currentText.length + split.length < options.width) {
        currentText += ` ${split}`;
      } else {
        if (align === 'left') {
          currentText = currentText.padEnd(options.width, ' ');
        } else if (align === 'right') {
          currentText = currentText.padStart(options.width, ' ');
        } else if (align === 'middle') {
          const spaceLeft = options.width - currentText.length;
          const startWidth = currentText.length + Math.floor(spaceLeft / 2);
          currentText = currentText.padStart(startWidth, ' ');
          currentText = currentText.padEnd(options.width, ' ');
        }
        storedTexts.push(currentText);
        currentText = split;
      }
    }

    if (align === 'left') {
      currentText = currentText.padEnd(options.width, ' ');
    } else if (align === 'right') {
      currentText = currentText.padStart(options.width, ' ');
    } else if (align === 'middle') {
      const spaceLeft = options.width - currentText.length;
      const startWidth = currentText.length + Math.floor(spaceLeft / 2);
      currentText = currentText.padStart(startWidth, ' ');
      currentText = currentText.padEnd(options.width, ' ');
    }
    storedTexts.push(currentText);
    output.push(storedTexts);
  }
  return output;
};
