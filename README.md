# To-do-list


## 📌프로젝트 소개
- JavaScript로 작업한 To-do-list 프로젝트를 TypeScript로 리팩토링한 프로젝트 입니다.
[To-do-list_javascript 바로가기](https://github.com/qdt0650/To-do-list)

<br />

## 🕓개발 기간
- 25.02.03 - 25.02.06

<br />

## 🎯사용한 기술 스택
<img src="https://img.shields.io/badge/Visual Studio-5C2D91?style=flat&logo=Visual Studio&logoColor=white"/>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>

<img src="https://img.shields.io/badge/Scss-CC6699?style=flat-square&logo=Scss&logoColor=white"/>

<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>

<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>

<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=typescript&logoColor=white"/>

<br />

## ⚡설치 및 실행 방법
- `npm install -g typescript` 타입스크립트 설치
- `tsc --init` tsconfig.json 파일 생성 -> `outDir`옵션 설정으로 컴파일된 JavaScript파일이 저장될 디렉토리 지정
- `tsc` 명령어로 컴파



## 🔥주요 변경 사항
1) `TodoItem` interface를 생성하여 todo 데이터 타입 정의
```
export interface TodoItem {
     id?: number
     todo?: string
     textColor?: string
     todoDate?: string
     todoCheck?: boolean
     completeButton?: boolean
     editMark?: boolean
  }
```

2) 로컬스토리지(`saveToDos`, `readToDos`)함수 타입 정의
```
export const saveToDos = (todo: TodoItem[]): void => localStorage.setItem('todo', JSON.stringify(todo))
export const readToDos = (): TodoItem[] => {
   const getTodos = localStorage.getItem('todo')
   return getTodos ? JSON.parse(getTodos) : []
}
```

3) 각 이벤트 핸들러에 타입 지정
```
deleteButton.addEventListener('click', (event: MouseEvent) => {
         ...
})
```

## ⚙️환경 설정 적용
- `strict: true` -> 엄격한 타입 체크 활성화로 코드 안정성을 강화
- `nolmplicitAny: true` -> 암시적으로`any`타입 사용하는 것을 방지함으로써 코드의 가독성과 유지보수성을 높임 



