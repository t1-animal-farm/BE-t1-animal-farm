# 프로젝트 소개
자신이 키우는 반려동물 사진을 올리고 자랑할수 있는 커뮤니티 

# 1조 백엔드 팀 소개
* 박민수 - comments 담당
* 박영호 - posts 담당
* 백수빈 - signup, login 담당

# 백엔드에서 시도한 것들 
* 3 layer architecture 적용
* 클래스 문법 사용으로 OOP 반영
* 프런트에서 잘못된 형식으로 보낸 request로 서버가 셧다운 되지 않도록 에러미들웨어 적용, try catch로 에러 잡기  
* 깃 전략 (develop 브랜치로 머지하고 최종본 master로 배포하기) 
* prettier 사용하여 pull request 시 conflict 최소화 

# 백엔드 기술 스택
* Node.js
* Express
* Multer
* AWS S3
* Sequelize
* mySQL
* jswebtoken
* bcrypt

# ERD
![Screen Shot 2022-12-17 at 2 28 59 PM](https://user-images.githubusercontent.com/116314838/209049240-ec6d1469-dd34-4f0a-89fa-b12ca00603fd.png)

# API 명세 및 프로젝트 관리 노션 
[1조 SA 노션](https://www.notion.so/1-SA-fe91e4a3548249bf9874b5a45755e8fe)

# 백엔드 협업 프로세스 
1. 개발 시작전 프로젝트 구조 통일
2. 3 layered architecture 사용
3. prettier 사용으로 컨밴션 맞추기 
4. 각자 기능 완료하면 깃헙 develop 브랜치로 pull request, conflict 함께 수정 후 merge & pull 하기

# .env
* PORT=
* DB_USERNAME=
* DB_PW=
* DB_HOST=
* SECRET_KEY=
* ACCESKEYID=
* SECRETKEYID=

