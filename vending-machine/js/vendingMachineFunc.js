class VendingMachineFunc {
  // 여기서는 이벤트를 붙인다.
  // 콜라 클릭했을 때 이벤트 등등

  // 만약 입금 버튼을 누른다면
  // 입금 버튼을 찾아야하고, 우리가 적은 입금 금액 Input창,
  // 그리고 그 금액이 들어간 부분을 찾아야한다.

  constructor () {
    const vMachine = document.querySelector('.section1');
    
    // 잔액
    this.balance = vMachine.querySelector('.bg-box p');

    // 입금액 Input 엘리먼트
    this.inputCostEl = vMachine.querySelector('#input-money');

    // 입금버튼
    this.btnPut = vMachine.querySelector('#input-money+.btn');

    // 거스름돈 번환 버튼
    this.btnReturn = vMachine.querySelector('.bg-box+.btn');

    // 획득 버튼
    this.btnGet = vMachine.querySelector('.btn-get');

    // 콜라 리스트
    this.itemList = vMachine.querySelector('.cola-list');

    // 장바구니
    this.selectItemList = vMachine.querySelector('.get-list');
    
    
    const myInfo = document.querySelector('.section2');

    // 소지금
    this.myMoney = myInfo.querySelector('.bg-box p');

    
    
    const getInfo = document.querySelector('.section3');

    // 획득 음료 리스트
    this.getList = getInfo.querySelector('.get-list');

    // 총금액
    this.txtTotal = getInfo.querySelector('.total-price');


  }

  setUp() {
    this.bindEvent();
  }
  stagedItemGenerator(target) {
    console.log(this.itemList)
    console.log('stagedItemGenerator',target.dataset)
    const li = document.createElement('li');
    li.dataset.name = target.dataset.name;
    li.dataset.img = target.dataset.img;
    li.dataset.price = target.dataset.price;
    li.innerHTML = `
      <img src="./images/${target.dataset.img}" alt="">
      ${target.dataset.name}
      <strong>
        1
        <span class="a11y-hidden">개</span>
      </strong>
    `
    this.selectItemList.append(li);
  }

  // 찾은 요소에 이벤트 붙이기
  bindEvent() {
    /**
     * 1. 입금 버튼 기능 구현
     * btnPut을 클릭했을 때 무슨일이 일어나는지 생각
     * inputCostEl의 value를 확인,
     * 그 값을 balance = balance + inputCostEl.value;
     * 그리고
     * myMoney = myMoney - inputCostEl.value;
     * 
     * 예외 처리)
     * 1. myMoney < inputCostEl.value
     *    이때 '소지금이 부족합니다' 경고창
     * 2. inputCostEl.value에 아무값도 없을 때
     *    이때 '입금액을 입력해주세요' 경고창
     * 
     * 
     * 그리고 inputCostEl 초기화
     * 
     */
    this.btnPut.addEventListener('click' , () => {
      const balanceNum = parseInt(this.balance.textContent.replaceAll(',',''));
      const myMoneyNum = parseInt(this.myMoney.textContent.replaceAll(',',''));
      const inputCost = parseInt(this.inputCostEl.value);

      console.log('balanceNum', balanceNum);
      console.log('myMoneyNum', myMoneyNum);
      console.log('inputCost', inputCost);
      

      if(inputCost > 0) {
        if(inputCost <= myMoneyNum) {
          // 소지금 차감
          // myMoney - inputCostEl.value
          this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyNum - inputCost) + ' 원';
          
          // 잔액 추가
          this.balance.textContent = new Intl.NumberFormat().format(balanceNum + inputCost) + ' 원';
        } else {
          alert('소지금이 부족합니다.');
        }
      }

      // inputCostEl 입력창 초기화
      this.inputCostEl.value = null;
    })

    /**
     * 2. 거스름돈 반환 기능구현
     * btnReturn을 누르면 어떤 일이 일어나는가 먼저 생각
     * balance 값 확인
     * 값만큼 this.myMoney에 추가
     * balace.textContent 초기화
     */
    this.btnReturn.addEventListener('click', () => {
      const balanceNum = parseInt(this.balance.textContent.replaceAll(',',''));
      const myMoneyNum = parseInt(this.myMoney.textContent.replaceAll(',',''));

      if(balanceNum > 0) {
        this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyNum + balanceNum) + ' 원';
      }

      this.balance.textContent = '0 원';
    })


    /**
     * 자판기 메뉴 기능
     * 리스트에 있는 콜라를 눌렀을 때 무슨일이 벌어져야 하는가
     * this.balane = this.balane - cola price
     * 이때 cola price >  balace 면 '잔액이 부족합니다.' 경고창 출력
     * 선택한 음료가 selectItemList로 이동
     * cola의 data-count 1차감
     * data-count가 0이되면 품절붙이기
     * 
     * 1. 콜라를 누르면 balance = balance - cola price
     */
    const colaBtns = this.itemList.querySelectorAll('button');
    colaBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        console.log(btn)
        const balanceNum = parseInt(this.balance.textContent.replaceAll(',',''));
        const targetPrice = parseInt(btn.dataset.price);

        const selectItemList = this.selectItemList.querySelectorAll('li');

        let isStageed = false;

        if(balanceNum >= targetPrice) {
          this.balance.textContent = new Intl.NumberFormat().format(balanceNum - targetPrice) + ' 원';
          

          for(const item of selectItemList) {

            if(item.dataset.name === btn.dataset.name) {
              console.log(parseInt(item.querySelector('strong').firstChild.textContent))

              const cnt = parseInt(item.querySelector('strong').firstChild.textContent) + 1;
              item.querySelector('strong').firstChild.textContent = cnt;
              isStageed = true;
              break;
            }
          }

          if(!isStageed) {
            this.stagedItemGenerator(btn);
          }

          btn.dataset.count--;

          if(!parseInt(btn.dataset.count)) {
            btn.disabled = true;
            btn.insertAdjacentHTML("afterbegin", "<strong class='soldout'>품절</strong>")
          }

        } else {
          alert('잔액이 부족합니다.');
        }
      })

    })

    /**
     * 4. 획득버튼 기능 구현
     * this.btnGet
     * 
     */

    this.btnGet.addEventListener('click', () => {
      const selectItemList = this.selectItemList.querySelectorAll('li');
      const getList = this.getList.querySelectorAll('li');
      let totalPrice = 0;

      console.log(selectItemList)
      console.log(getList)

 
      for(let itemSelected of selectItemList) {
        let isStageed = false;
        for(const item of getList) {
          if(item.dataset.name === itemSelected.dataset.name) {
            console.log(parseInt(item.querySelector('strong').firstChild.textContent))
  
            const cnt = parseInt(item.querySelector('strong').firstChild.textContent) + 1;
            item.querySelector('strong').firstChild.textContent = cnt;
            isStageed = true;
            break;
          }
        }
        if(!isStageed) {
          this.getList.append(itemSelected);
        }
      }

      this.selectItemList.innerHTML = null;

      
      this.getList.querySelectorAll('li').forEach(el => {
        totalPrice += parseInt(el.dataset.price) * parseInt(el.querySelector('strong').firstChild.textContent)
        console.log(el)
      })

      this.txtTotal.textContent =`총 금액 :  ${new Intl.NumberFormat().format(totalPrice)}  원` 
      

    })

  }


}

export default VendingMachineFunc;