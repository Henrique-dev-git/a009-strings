const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const stringNoSpace =minhaString.trim();

console.log(`essa frase tinha ${minhaString.length} caracteres`);

console.log(`e agora tem ${stringNoSpace.length} caracteres`);

console.log(stringNoSpace.replace("________","sticioso"));


