const { createApp } = Vue

createApp({
  data() {
    return {
        valueInput: '',
        error: false,
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        ]
    }
  },
  methods: {
    createToDo(){
        if(this.valueInput != ''){
            let obj = {
                text: this.valueInput,
                done: false
            }
            this.todos.unshift(obj)
            this.valueInput = ''
            this.error = false
        } else {
            this.error = true
        }
    },
    deleteToDo(i){
        this.todos.splice( i, 1 )
    },
    taskCompleted(i){
        if(this.todos[i].done === false){
            this.todos[i].done = true
        } else {
            this.todos[i].done = false
        }
    },
    deleteTasks(){
        this.todos = []
    }
  }
}).mount('#app')
