import { useEffect } from "react";
import { useState } from "react"

const useMouseLocation = (initVal) => {
  
  // 마우스 위치를 추적하는 훅
  const [mouseLocation, setMouseLocation] = useState(initVal || {x: null, y: null});


  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseLocation({x: e.x, y: e.y});
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [])
  

  return mouseLocation
}

export default useMouseLocation;