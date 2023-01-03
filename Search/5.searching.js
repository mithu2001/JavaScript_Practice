//Linear Search Algorithm
const users = [
                {
                    username:"mithu",
                    email:"mithu@123@gmail.com"
                },    
                {
                    username:"ranjit",
                    email:"ranjit@123@gmail.com"
                },    
                {
                    username:"jeebachh",
                    email:"jeebachh@123@gmail.com"
                },  
]
//search : - username:"ranjit",email:"ranjit@123@gmail.com"
//Here users Array contains multiple objects like {},{}, etc
//that's why users is a array of objects const users = [ {},{}, ]
// const array = [1,3,6,9,7];

function LinearSearch(array , key){
    for(let user of array){
      if(user['username'] === key)
        return true;
    }
    return false;
}

const res = LinearSearch(users, "mithu");
console.log(res);
