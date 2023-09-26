import {atom} from 'recoil';

// 이게 리코일의 저장소에 상태의 기본 형태
// key는 상태에 대한 식별자 같은건데 이걸로 따로 뭘 하고 그러지는 않는다.
// 대신에 다른 상태를 만들었을 때 key이름을 중복선언하면 에러가 난다.
// 통상적으로 key 이름은 변수 이름하고 똑같이 지어준다.

// default는 초기값
// count = 0;
export const count = atom({key: 'count', default: 100});  // const count = 0; 과 같은 코드이다.
// 라이브러리에서 이렇게 쓰라고 만든거기 때문에 이해는 하지 말자
// 그냥 리코일 상태 작성 형태라고 생각하면 된다.