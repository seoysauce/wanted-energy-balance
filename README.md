<div id="top"></div>

<div align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=blue"/>
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
</div>

<br />

<div align="center">
  <h3 align="center">3주차 과제 - 에너지밸런스</h3>
  <p align="center">
    검색창을 구현한 과제입니다.
    <br />
    <br />
    <a href="https://jolly-banach-dedde6.netlify.app/"><strong>배포 링크</strong></a>
  </p>
</div>

<br>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#팀원-소개">팀원 소개</a></li>
    <li><a href="#과제-소개">과제 소개</a></li>
    <li><a href="#구현한-기능">구현한 기능</a></li>
    <li>
      <a href="#설치-및-실행">설치 및 실행
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#프로젝트-구조">프로젝트 구조</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<br>

## 팀원 소개

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/gml9812"><img src="https://avatars.githubusercontent.com/u/28294925?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/seoysauce"><img src="https://avatars.githubusercontent.com/u/65898861?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/Yummy-sk"><img src="https://avatars.githubusercontent.com/u/60822846?v=4" width="150px" /></a></td>
  </tr>
  <tr>
    <td align="center"><b>👑 윤희준 (팀장)</b></td>
    <td align="center"><b>정서영</b></td>
    <td align="center"><b>염상권</b></td>
  </tr>
  <tr>
    <td align="center"><b>축약어 검색 및 자동완성 구현</b></td>
    <td align="center"><b>검색 결과 표시 및 레이아웃 구현</b></td>
    <td align="center"><b>태그 필터링 구현 및 debouncing 적용</b></td>
  </tr>
</table>

<br>
<hr>
<br>

## 구현한 기능

- [x] 자동 완성 기능
  - [x] 자소 단위로 영양제 이름 및 사용자가 입력한 검색어를 분해한 뒤, 사용자가 입력한 자소를 포함하고 있는 영양제만 자동 완성에 표시된다. (코드 예제)
  - [x] 위, 아래 방향키, 혹은 마우스 hover로 자동완성 항목을 선택할 수 있으며. 항목을 선택하면 그에 맞추어 인풋이 바뀐다. 
  - [x] 유저가 검색하고 싶은 영양제의 줄임말, 초성, 혹은 포함하는 키워드만 입력하더라도 검색이 가능하다. (gif 예제)
  - [x] 자동 완성 시 영양제 이름뿐만 아니라 제품 사진과 브랜드 명을 함께 보여 준다.
  - [x] 자동 완성 항목을 클릭하면 자동 완성 창이 사라지며, 제품 상세 정보가 검색창 아래에 표시된다. 
 ```bash
 '코어 신바이오틱스 프리바이오틱스 프로바이오틱스' 와 같은 영양제의 정식 명칭을 기억하기는 쉬운 일이 아닙니다. 
 또한 '커클랜드 시그니춰', '비타씨' 와 같이 일상적으로 쓰이는 외래어 표기와 다른 이름을 가진 영양제도 많습니다. 
 많은 사용자들이 정확한 이름을 기억하지 못한 상태로 영양제를 찾을 것이라 생각했기에, 자소 분리를 사용해서
 'ㅋㅋㄹㄷ', '시그닟', '신바이프리프로', '코알라 딸기' 와 같이 영양제 이름 일부를 입력하지 않거나 초성으로 대체하더라도 
 검색을 진행할 수 있도록 했습니다.
 
 또한 사용자 경험을 위해 방향키, hover 등을 통한 자동완성 항목 선택 기능, 
 선택한 영양제에 대한 상세한 정보를 검색창 아래 표시하는 기능,  
 유사한 이름을 가진 영양제들을 구분하기 쉽도록 이름뿐만 아니라 제품 사진 및 브랜드 명 또한 자동완성에 표시하는 기능을 구현했습니다. 
 ```

- [x] 태그 검색 기능
  - [x] Mock Data에 'tags' 항목을 추가적으로 부여해, 주요 키워드의 경우 한국어와 영어 어느 쪽을 사용해도 검색이 가능하다. (gif 예제 vitamin d)
 ```bash
 영양제 이름에는 영어와 한국어가 혼용되는 경우가 많습니다. 
 영양제 명칭에 포함된 것이 '비타민' 인지 'vitamin' 인지 고민하지 않아도 되도록, 주어진 Mock Data에 tag를 추가적으로 부여해 편의성을 높였습니다.
 ```
 
- [x] debouncing
  - [x] 미




<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 설치 및 실행

### Prerequisites

1. NPM Install

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Repository를 clone한다.

  ```sh
  git clone https://github.com/gml9812/wanted-swit.git
  ```

2. NPM Package들을 설치한다.

  ```sh
  npm install
  ```

3. Localhost 환경에서 프로젝트를 실행한다.

  ```sh
  npm start
  ```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 프로젝트 구조

```bash
.
├── public
│   └── index.html
└── src
    ├── Router.tsx
    ├── commons     # constants 저장
    ├── components  # atomic design에 따른 세부 컴포넌트
    ├── hooks # custom hooks
    ├── index.tsx
    ├── pages # 페이지 모음, 본 프로젝트에서는 Main만 존재
    ├── styles      # global styles
    ├── types       # 재사용될 type 모음
    └── utils       # 유틸 함수 모음
```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
