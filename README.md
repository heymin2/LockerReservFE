# 사물함 예약 서비스
'학과 사물함 예약을 어떻게 더 편리하게 받을 수 있을까'에서 나온 아이디어


## 특이점
1. 로그인은 있으나 회원가입이 없음 -> 비회원 로그인 시스템 이용
2. 파랑, 빨강, 회색 세 개의 사물함이 존재
3. 리액트 처음 사용

## 실패 이유
1. 프로젝트 참여 인원 모두가 첫 프로젝트였기에 소통도 안 되고 개발에 대한 이해도가 낮았음

* 결국 스스로 하고자 하는 대로 함 

* 회의시 이게 왜 이렇게 돼?  반복

* 계속 수정 -> 이거 반복

2. 비회원 로그인 제도 도입은 좋았으나...

* 첫 프로젝트인만큼 로그인으로 해도 어려웠을 것 같음

* 비회원 로그인? 너무 헷갈리고 사람마다 생각하는 비회원 로그인이 달랐음

*결론: 소통의 부재, 명세 기록 없음이 실패의 원인*


## 실행
```
npm start
```

## 로그인 전
![main](https://user-images.githubusercontent.com/97522726/222481500-2df8af16-fa96-4dd3-807c-74dfaaf1a02c.png)

### 1. 사물함, 호 버튼 클릭
![b](https://user-images.githubusercontent.com/97522726/222510510-00260148-dc0d-4d77-b814-38f3f8d4c32f.png)
* 무조건 로그인 하세요라는 창이 뜸 

### 2. 로그인 버튼 클릭
![login](https://user-images.githubusercontent.com/97522726/222482383-38be5538-9d54-4294-b89a-e3b1d9224eee.png)
* 위에 맞게 작성해서 로그인 하면 성공함

## 로그인 후
![m](https://user-images.githubusercontent.com/97522726/222510722-2e6c5165-8e5e-4269-9c05-3b7a5d7fbb3c.png)
 * 파랑: 예약 가능 
 * 빨강: 본인이 예약 중 
 * 회색: 다른 사람이 예약 중
 * 현재는 기능 확인을 위해 이 화면이 첫 페이지임
 
### 1. 사물함 예약
![reserve](https://user-images.githubusercontent.com/97522726/222483735-63011362-53b4-40cc-9aad-afef12611323.png)
* 파랑 사물함 버튼 클릭

### 2. 사물함 예약 취소
![cancel](https://user-images.githubusercontent.com/97522726/222483893-c63a82ff-39fc-414a-a5a9-f08587884511.png)
* 빨강 사물함 버튼 클릭

## 그 외
![talk](https://user-images.githubusercontent.com/97522726/222484173-69ff4bd5-1281-497c-8604-f591bf1c675d.png)
* 직접적인 연락은 채널톡으로 가능함
