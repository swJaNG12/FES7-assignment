import { useEffect } from "react";
import { useState } from "react";

const useScroll = () => {
  const [isBottom, setIsBottom] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // console.log('window.scrollY, 현재 스크롤된 값', window.scrollY);
      // console.log('document.documentElement.scrollTop, 현재 스크롤된 값', document.documentElement.scrollTop);
      // console.log('document.documentElement.offsetHeight, 페이지의 전체 높이를 의미', document.documentElement.offsetHeight);
      // console.log('document.documentElement.clientHeight, 현재문서의 전체높이', document.documentElement.clientHeight);
      // console.log('window.innerHeight, 현재문서의 전체높', window.innerHeight);
      // console.log('document.body.clientHeight, 현재문서의 전체높이', document.body.clientHeight);
      // console.log('document.body.offsetHeight, 현재문서의 전체높이', document.body.offsetHeight);

      // console.log('\n')
      const currentScrollY = window.scrollY;
      const currentInnerHeight = window.innerHeight;
      const currentOffsetHeight = document.documentElement.offsetHeight;
  
      console.log('1',currentScrollY + currentInnerHeight + 15)
      console.log(currentOffsetHeight)
      if(currentScrollY + currentInnerHeight + 20 >= currentOffsetHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
      console.log(isBottom)
    })
  },[])

  return isBottom;
}

export default useScroll;