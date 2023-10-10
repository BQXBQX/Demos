import { defineStore } from 'pinia'

export const TodoMVCStore = defineStore('TodoMVC',{
    state : ()=>(
        {
            content:["pinia","vuex","vite","webpack"]
        }
        ),
    actions:{
        add(newContent){
            this.content.push(newContent);
        },
        remove(oldContent){
            this.content = this.content.filter(item => item!== oldContent);
        },
    },
})

