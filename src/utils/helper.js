export const updateTextLenght = (text, number) => {    
  return text.length > number ? `${text.slice(0, number - 4)}...` : text;
};
