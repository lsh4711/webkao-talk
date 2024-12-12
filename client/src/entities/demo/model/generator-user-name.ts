const surnames = ["김", "이", "박", "최", "정", "강", "조", "윤", "장", "임"];
const firstNameParts = ["민", "서", "지", "우", "현", "재", "은", "성", "아", "연"];

const getRandomElement = <T>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const  generateUsername = (): string => {
  const surname = getRandomElement(surnames);
  const firstName = getRandomElement(firstNameParts) + getRandomElement(firstNameParts); 
  return surname + firstName;
}


