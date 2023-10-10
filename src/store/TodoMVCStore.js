import { defineStore } from 'pinia'

const TodoMVCStore = defineStore('TodoMVC',{
    state : ()=>(
        {
            content:["pinia","vuex","vite","webpack"]
        }
        ),
    actions:{
        add(newContent){
            this.content.push(newContent);
        },
        delete(oldContent){
            this.content = this.content.filter(item => item!== oldContent);
        },
    },
})