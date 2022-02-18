[배포 링크](https://optimistic-jang-2fcf3b.netlify.app/)

로직 테스트를 위해 만들어 사용한 간단한 검색창입니다. 필요하다면 가져다 사용하세요!

**검색 로직 수정 방법**
- pages/Main/index.tsx에 있는 AutoComplete 컴포넌트에 원하는 mock data를 주고 테스트하면 됩니다. 
- AutoComplete 컴포넌트는 기본적으로 아래와 같은 형식의 데이터를 받도록 설정되어 있습니다.
 ```javascript
 // types/searchData.ts
 
interface SearchData {
  text: string; // 실제로 자동 완성 시 사용되는 약 이름(필수)
}
 ```
 brand, usage등 추가적으로 검색 사용할 데이터들이 있다면 SearchData에 추가하시면 됩니다. 
 
- 로직 수정은 hooks/useAutoComplete.tsx의 filterLogic() 함수에서 하시면 됩니다. 기본 값은 입력한 알파벳의 포함 여부로 해 놨습니다. 

**검색창 기능(네이버 검색창 참고)**
- 인풋 창에 무언가 입력하면 하단에 자동완성 창이 생성됨.
- 자동완성 창에는 입력값과 관련 있는 항목만 필터링되어 보여짐.
- 자동완성 칸이 열린 상태에서 위, 아래 방향키로 자동완성 항목 선택 가능. 항목 선택하면 그에 맞추어 인풋도 바뀜.
- 맨 위에 있는 자동완성 항목이 선택된 상태에서 위 방향키 누르면 자동완성 창 사라짐.
- 맨 아래 있는 자동완성 항목이 선택된 상태에서 아래 방향키 누르면 맨 위에 있는 항목이 선택됨.
- 자동완성 항목 클릭하면 클릭한 항목에 따라 인풋이 바뀌고, 자동완성 창 사라짐.
