import React, { useEffect, useState } from 'react';
import './App.css';
import Apple from './components/Apple';
import NewAppleModal from './components/modal/NewAppleModal';
import NewButton from './components/NewButton';
import AppleData from './data.json';

// 초기 json 데이터를 이용하여 사과 정보를 가져옵니다.

const parseData = () => {
  const apples = {};

  AppleData.forEach((item) => {
    apples[item.id] = item;
  });

  return apples;
};

const positionApples = (apples) => {
  Object.values(apples).forEach((apple) => {
    apple.position = {
      left: apple.offset.x,
      top: apple.offset.y,
    };
  });
};

function App() {
  // 사과들의 상태 정보 관리
  const [apples, setApples] = useState({});

  // 드래그를 통한 이벤트 정보 상태를 관리
  const [dragAppleInfo, setDragAppleInfo] = useState(null);

  // 사과 추가 모달 상태
  const [isAddOpen, setIsAddOpen] = useState(false);

  useEffect(() => {
    const parsedApples = parseData();
    positionApples(parsedApples);
    setApples({ ...parsedApples });
    // 값 확인
    console.log(parsedApples);
  }, []);

  // 사과를 제거하는 함수입니다.
  const handleDelete = (apple) => {
    const tempApples = { ...apples };
    delete tempApples[apple.id];
    setApples(tempApples);
  };
  // 모달 호출함수
  const showModal = () => {
    setIsAddOpen(true);
  };

  const AppleList = Object.values(apples).map((apple) => {
    return (
      <Apple
        key={apple.id}
        apple={apple}
        // 드래그를 시작하면 트리거
        onDragStart={(dragOffset) => {
          return setDragAppleInfo({ apple, dragOffset });
        }}
        // 드래그를 끝내면 트리거
        onDragEnd={() => {
          setDragAppleInfo(null);
        }}
        // 더블클릭했을 때 호출합니다.
        onDobleClick={() => handleDelete(apple)}
      />
    );
  });
  return (
    <div
      className="App"
      onMouseMove={(event) => {
        // dragAppleIno 값의 변화가 없다면 함수 종료(사과를 움직이지 않았음)
        if (dragAppleInfo === null) {
          return;
        }

        // 사과를 움직였다면
        const { apple, dragOffset } = dragAppleInfo;

        // 기존의 사과정보에 새로운 사과 정보를 업데이트 할겁니다.
        const newApple = {};
        newApple.id = apple.id;
        newApple.sweetness = apple.sweetness;
        newApple.offset = apple.offset;
        newApple.position = {
          top: event.pageY - dragOffset.y,
          left: event.pageX - dragOffset.x,
        };

        // 기존의 사과 데이터를 새로운 사과의 데이터로 덮습니다.
        apples[newApple.id] = newApple;

        // state가 바뀌면서 App 컴포넌트가 새롭게 렌더링됩니다.
        setApples({ ...apples });
      }}
    >
      <ul>{AppleList}</ul>
      <NewButton onClick={showModal} />
      {isAddOpen && <NewAppleModal isOpen={isAddOpen} />}
    </div>
  );
}
export default App;
