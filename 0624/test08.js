//객체 
const family = {
    'address' : 'seoul' , 
    members: {},
    addFamily: function(age, name , role){
        this.members[role] = {
            age:age,
            name:name
        };
    },
    getHeadcount: function(){
        return Object.keys(this.members).length;
    }
};

family.addFamily(30, 'chloe' , 'aunt');
family.addFamily(3, 'lyn' , 'nice');
family.addFamily(10, 'dangdangi' , 'dog');
console.log(family.getHeadcount());