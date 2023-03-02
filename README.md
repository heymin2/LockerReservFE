# 사물함 예약 서비스
'학과 사물함 예약을 어떻게 더 편리하게 받을 수 있을까'에서 나온 아이디어


## 특이점
1. 로그인은 있으나 회원가입이 없음 -> 비회원 로그인 시스템 이용
2. 파랑, 빨강, 회색 세 개의 사물함이 존재 (파랑: 예약 가능 / 빨강: 본인이 예약 중 / 회색: 예약 중)
3. 리액트 처음 사용

## 실행
```
npm start
```

## 로그인 전
![main](https://user-images.githubusercontent.com/97522726/222481500-2df8af16-fa96-4dd3-807c-74dfaaf1a02c.png)

### 1. 사물함, 호 버튼 클릭
![before](https://user-images.githubusercontent.com/97522726/222482023-b4edd226-3fb7-4581-9986-ad87222abfa5.png)
* 무조건 로그인 하세요라는 창이 뜸 

* 위의 빨강, 회색 사물함은 서버 안 열고 사물함 상태 확인할 수 있도록 해둠

### 2. 로그인 버튼 클릭
![login](https://user-images.githubusercontent.com/97522726/222482383-38be5538-9d54-4294-b89a-e3b1d9224eee.png)
* 위에 맞게 작성해서 로그인 하면 성공함

## 로그인 후

### 1. 사물함 예약
![reserve](https://user-images.githubusercontent.com/97522726/222483735-63011362-53b4-40cc-9aad-afef12611323.png)

### 2. 사물함 예약 취소
![cancel](https://user-images.githubusercontent.com/97522726/222483893-c63a82ff-39fc-414a-a5a9-f08587884511.png)

## 그 외
![talk](https://user-images.githubusercontent.com/97522726/222484173-69ff4bd5-1281-497c-8604-f591bf1c675d.png)
* 직접적인 연락은 채널톡으로 가능함
