//객체 -> 속성접근/추가/수정/삭제
let family = {
    'address' : 'Seoul' , 
    members : {},

    addFamily: function(age , name , role){
        this.members[role]={
            age:age,
            name: name
        };
    },
    getHeadcount: function(){
        return Object.keys(this.members).length
    }
};

family.addFamily(30, '클로애' , '고모');
family.addFamily(3, '린' , '조카');
family.addFamily(10, '댕댕이' , '강아지');

    let printMembers = function(){
    let members = family.members;
        for( role in members){
        console.log('role=>' + role + ', name=>' + members[role].name
        + ', age=>' + members[role].age);

    }
};

printMembers();

let members = family.members;
members['nephew'] = {age:3, name:'hyun'}; // 삽입
members.nice = {age:5 , name: 'lyn'}; // 수정
delete members.aunt; // 삭제
delete members['dog']; // 삭제
printMembers();