import { defineStore } from "pinia";

export const useNumbersStore = defineStore("numbers", {
    state: () => {
        return {
            numbers: [14, 15, 16, 21, 22, 13, 19, 27, 25]
        }
    },
    actions: {
        addNumber(num) {
            this.numbers.push(num)
        }
    },
    getters: {
        doubleNum: (state) => {
            return state.numbers.map(num => num * 2)
        },
        filterNum: (state) => {
            return (minNumber) => state.numbers.filter(num => num >= minNumber)
        }
    }
})