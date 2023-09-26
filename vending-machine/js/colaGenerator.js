class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector('.cola-list');
  }


  async setUp() {
    const data = await this.loadDate();
    this.colaFactory(data);
  }

  async loadDate () {
    try {
      const response = await fetch('./items.json');
      if(!response.ok) {
        throw new Error('HTTP ERROR', response.status);
      } else {
        return await response.json();
      }


    } catch (error) {
      console.error('콜라데이터 로드중에 에러가 발생했습니다.',error);
    }
  }

  // cola list 만들기, 콜라의 템플릿 코드
  colaFactory(data) {
    console.log(data)
    const docFrag = new DocumentFragment();
    data.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = 
      `
      <button type="button" class="btn-cola" data-name="${item.name}" data-count="${item.count}" data-price="${item.cost}" data-img="${item.img}">
        <img src="./images/${item.img}" alt="">
        <span class="cola-name">${item.name}</span>
        <strong class="cola-price">${item.cost}원</strong>
      </button>
      `;

      docFrag.append(li);
    });

    this.itemList.append(docFrag);
  }


}


export default ColaGenerator;