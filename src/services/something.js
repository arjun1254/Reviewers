const todo={
    id:23,
    active:false,
    title:'Eat',
    user: {
        id: 23,
        name: 'sabin'
    }
}
const {user}=todo
const{name: username}=user
const todo2={
    ...todo,
    user:{
        ...user
    }
}