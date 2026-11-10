// 날짜 계산 - 20261110
const getToday = () => {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  const year = today.getFullYear();
  const month = String(today.getMonth()+1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

export const TODAY = getToday(); 
