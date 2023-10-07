import emotion1 from './img/emotion1.png'
import emotion2 from './img/emotion2.png'
import emotion3 from './img/emotion3.png'
import emotion4 from './img/emotion4.png'
import emotion5 from './img/emotion5.png'


export const getEmotionImgById = (EmotionId) => {
  switch(EmotionId.toString()) {
    case '1':
      return emotion1;
    case '2':
      return emotion2;
    case '3':
      return emotion3;
    case '4':
      return emotion4;  
    case '5':
      return emotion5;
    default:
      return null;
  }
}

export const getFormatteDate = (targetDate) => {
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  
  if(date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
}

export const emotionList = [
  {
    id: 1,
    name: '완전 좋음',
    img: getEmotionImgById(1)
  },
  {
    id: 2,
    name: '좋음',
    img: getEmotionImgById(1)
  },
  {
    id: 3,
    name: '그럭저럭',
    img: getEmotionImgById(3)
  },
  {
    id: 4,
    name: '나쁨',
    img: getEmotionImgById(4)
  },
  {
    id: 5,
    name: '완전 나쁨',
    img: getEmotionImgById(5)
  },

]


export const  getMonthRangeByDate = (date) => {
  // new Date(년, 월, 일)
  const beginTimeStamp = new Date(date.getFullYear(), date.getMonth(), 1).getTime();

  // new Date(년, 월, 일, 시, 분, 초)
  // Date 객체에서 0일은 그 전달의 마지막 날을 뜻한다.
  // 2020년 10월 0일 === 2020년 9월 마지막날
  const endTimeStamp = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59).getTime();

  return { beginTimeStamp, endTimeStamp };
};