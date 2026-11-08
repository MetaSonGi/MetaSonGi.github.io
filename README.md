# 성남 AI 랩 — MetaSonGi 포트폴리오 허브

성남 판교 컨셉의 개인 웹 프로젝트 갤러리입니다.
`khyun024.github.io` 스타일의 프로젝트 모음을 개선한 버전으로,
GitHub 사용자 사이트(`MetaSonGi.github.io`) 루트에 배포됩니다.

🌐 **바로 실행:** https://metasongi.github.io/

## 구성

- **히어로**: 판교 야경 스카이라인 캔버스 애니메이션(클릭 게임·FEVER) + 헤드라인 글자 디코딩 효과 + 스탯 카운트업
- **NEW 쇼케이스**: 새로 공개한 6개 프로젝트를 3D 회전 링으로 — 드래그(관성)·화살표·키보드로 돌리고 정면 카드 실행
- **프로젝트 갤러리**: 49개 카드, 태그·NEW 필터, 스크롤 순차 등장, 마우스 3D 틸트·글레어·네온 테두리
- **모션**: 스크롤 진행 바, 커서 오라, 자석 버튼, 섹션 제목 글자 등장 — `prefers-reduced-motion` 설정 시 모두 꺼짐
- **소개**: 프로필 카드
- 전부 정적 파일, 설치 없이 브라우저에서 실행

## 연결된 프로젝트

| 프로젝트 | URL |
|---|---|
| 스마트공장 검증장비 시뮬레이터 | https://metasongi.github.io/smart-factory-trainer/ |
| 디지털트윈 AI 랩 | https://metasongi.github.io/digital-twin-ai-lab/ |
| 카메라 3D 뷰어 | https://metasongi.github.io/camera-to-3d-viewer/ |
| 이미지 3D 뷰어 | https://metasongi.github.io/image-to-3d-viewer/ |
| AI 미디어아트 생성기 | https://metasongi.github.io/ai-media-art-generator/ |
| 디지털트윈 미니 시뮬레이터 | https://metasongi.github.io/digital-twin-mini-sim/ |
| … (갤러리 전체 49개는 `app.js`의 `PROJECTS`) | |
| 🆕 CardBord VR 체험 | https://metasongi.github.io/CardBord/ |
| 🆕 메모장 | https://metasongi.github.io/notepad/ |
| 🆕 AI 자격증 로드맵 | https://metasongi.github.io/ai-certification-roadmap/ |
| 🆕 공공·법률 워크벤치 | https://metasongi.github.io/korean-public-workbench/ |
| 🆕 오픈소스 아이디어 선반 | https://metasongi.github.io/oss-shelf/ |
| 🆕 효기 도구 작업실 | https://metasongi.github.io/tool-catalog-workspace/ |

## 파일 구성

| 파일 | 설명 |
|---|---|
| `index.html` | 히어로 + 갤러리 + 소개 구조 |
| `style.css` | 판교 야경 다크 테마 |
| `app.js` | 프로젝트 데이터·필터·스카이라인 애니메이션 |
| `motion.css`, `motion.js` | 모션 레이어 — NEW 3D 쇼케이스, 카드 틸트·등장, 커서·스크롤 효과 |
| `img/` | 카드 썸네일 (프로젝트 이름.jpg, 없으면 분야 이미지로 대체) |
