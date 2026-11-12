class MinStack {
    constructor() {
        this.stack=[]
        this.minStack=[]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if(this.minStack.length===0 || val<=this.minStack[this.minStack.length-1]){
            this.minStack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const popped=this.stack.pop()
        if(popped===this.minStack[this.minStack.length-1]){
            this.minStack.pop()
        }
    }

    /**
     * @return {number}
     */
    top() {
        if(this.stack.length===0){
            return null
        }
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
         if(this.minStack.length===0){
            return null
        }
        return this.minStack[this.minStack.length-1]
    }
}
