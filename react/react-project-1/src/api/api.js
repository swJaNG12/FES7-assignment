import axios from 'axios';

 // 데이터 읽어오기 Read, HTTP method get
//  axios.get(주소)
export async function readData() {
  const { data } = await axios.get('http://localhost:3001/todolist/');
  // console.log(data)
  return data;
}

// 데이터 추가하기 create, http method post
//  axios.post(주소, data)
export async function createData(todo) {
  await axios.post('http://localhost:3001/todolist',  todo );
}

// 데이터 수정하기 Update, http method patch
// axios.patch(서버주소/path/id, 바꿀 데이터)
export async function updateData({id, updateTodo}) {
  await axios.patch(`http://localhost:3001/todolist/${id}`, updateTodo);
}