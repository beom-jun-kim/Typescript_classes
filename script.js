// public: 모든 클래스에서 접근 가능
// private: 해당 클래스 내에서만 접근 가능 (자식 클래스에서도 접근 불가)
// protected: 해당 클래스와 자식 클래스에서 접근 가능

/* abstract(추상클래스): 다른 클래스가 상속받을 수 있는 클래스 / 오직 다른 곳에서 상속받을 수만 있다*/
/* 추상메소드: 추상 클래스를 상속받는 모든 것들을 구현을 해야하는 메소드를 의미 */
// abstract class User {
//     constructor(
//         protected firstName: string,
//         protected lastName: string,
//         protected nickname: string
//     ) {}
//     abstract getNickName():void
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// /* extends : 상속할때 사용 */
// class Player extends User {

//     getNickName(){
//         console.log(this.nickname)
//     }
// }

// const nico = new Player("nico", "las", "니꼬");

// // nico.nickname

// nico.getFullName()