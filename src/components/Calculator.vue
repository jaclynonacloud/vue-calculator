<template>
  <div class="calculator">
    <div class="calculator__display" v-html="getDisplayTotal()"></div>
    <div class="calculator__buttons">
      <button class="button empty"></button>
      <button class="button" @click="doClear">C</button>
      <button class="button empty"></button>
      <button class="button" :class="{ current : isCurrentOperator('/') }" @click="addOperator('/')">/</button>
      <button class="button" @click="addToRaw('7')">7</button>
      <button class="button" @click="addToRaw('8')">8</button>
      <button class="button" @click="addToRaw('9')">9</button>
      <button class="button" :class="{ current : isCurrentOperator('*') }" @click="addOperator('*')">X</button>
      <button class="button" @click="addToRaw('3')">4</button>
      <button class="button" @click="addToRaw('5')">5</button>
      <button class="button" @click="addToRaw('6')">6</button>
      <button class="button" :class="{ current : isCurrentOperator('-') }" @click="addOperator('-')">-</button>
      <button class="button" @click="addToRaw('1')">1</button>
      <button class="button" @click="addToRaw('2')">2</button>
      <button class="button" @click="addToRaw('3')">3</button>
      <button class="button" :class="{ current : isCurrentOperator('+') }" @click="addOperator('+')">+</button>
      <button class="button empty"></button>
      <button class="button" @click="addToRaw('0')">0</button>
      <button class="button" @click="addToRaw('.')">.</button>
      <button class="button" :style="totalDiv" @click="doTotal" @mouseover="colorChange" @mouseout="colorReturn">=</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      total: '0',
      current: '0',
      activeOperator: '',

      totalDiv: {
        backgroundColor: "#1F825E"
      }
    }
  },
  mounted: function() {

    //handle key presses
    window.addEventListener("keyup", e => {
      let key = ""
      //set allowed inputs
      switch(e.key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case ".":
          key = e.key
          this.addToRaw(key)
          break

        case "_":
          key = "-"
          this.addOperator(key)
          break
        case "x":
          key = "*"
          this.addOperator(key)
          break
        case "+":
        case "-":
        case "/":
        case "*":
          key = e.key
          this.addOperator(key)
          break

        case "Enter":
          this.doTotal()
          break

        case "c":
          this.doClear()
          break
      }

      
    })
  },
  methods: {

    getDisplayTotal: function() {
      let display = this.total
      if(this.current != '0') display = this.current
      
      //make sure length is no larger than 17
      if(display.length > 17) display = display.slice(0, 17)

      return display
    },

    addToRaw: function(str) {
      this.current += str

      //trim floating 0 if there is one
      if(this.current.length > 1 && !this.current.startsWith("0."))  {
        if(this.current.startsWith("0")) this.current = this.current.slice(1)
      }

    },

    addOperator: function(op) {
      //if we don't have an active operator, set it to the current
      if(this.activeOperator == '') this.activeOperator = op

      //get the current total in numbers!
      this.total = parseFloat(this.total)

      //switch the operator logic
      switch(this.activeOperator) {
        case "+":
          this.total += parseFloat(this.current)
          break
        case "-":
          if(this.total == 0) this.total = parseFloat(this.current) //if we haven't set any total yet, don't subtract yet, just hold
          else if(this.current != '0') this.total -= parseFloat(this.current) //make sure we have a current total, or do nothing yet, just hold
          break
        case "*":
          if(this.total == 0) this.total = parseFloat(this.current) //if we haven't set any total yet, multiply by 1
          else if(this.current != '0') this.total *= parseFloat(this.current) //make sure we have a current total, or do nothing yet, just hold
          break
        case "/":
          if(this.total == 0) this.total = parseFloat(this.current) //if we haven't set any total yet, don't divide yet, just hold
          else if(this.current != '0') this.total /= parseFloat(this.current) //make sure we have a current total, or do nothing yet, just hold
          break
      }

      //reset the current to 0
      this.current = "0"      

      //set the active operator
      this.activeOperator = op
    },

    doTotal: function() {
      //if we haven't picked an operator, do nothing
      if(this.activeOperator == '') return
      //do the last crunching
      this.addOperator(this.activeOperator)
      this.activeOperator = ''
    },

    doClear: function() {
      this.total = '0'
      this.current = '0'
      this.activeOperator = ''
    },

    isCurrentOperator(op) {
      return this.activeOperator == op
    },

    // Silly Stuff
    colorChange: function() {
      this.totalDiv.backgroundColor = "#2E5578"
    },
    colorReturn: function() {
      this.totalDiv.backgroundColor = "#1F825E"
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$mainColour: #41B883;
$accColour: #35495E;
$buttonColour: mix($mainColour, $accColour, 40);

.calculator {
  display: flex;
  flex-flow: column;
  align-items: center;
  background: $mainColour;
  width: max-content;
  padding: 15px;
  margin: 0 auto;
  border-bottom: solid 2px $buttonColour;
  box-sizing: border-box;

  &__display {
    background: $accColour;
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 5px;
    color: white;
    text-align: right;
    border-top: solid 2px $buttonColour;
    box-sizing: border-box;
  }

  &__buttons {
    display: grid;
    grid-template-columns: repeat(4, 40px);
    grid-auto-rows: 40px;
    grid-gap: 5px;

    .button {
      background: $buttonColour;
      border: none;
      color: white;
      border-bottom: solid 2px $accColour;
      user-select: none;
      outline: none;
      cursor: pointer;

      &.current {
        background: #1f8282;
      }

      &:hover {
        background: $accColour;
      }

      &.empty {
        background: mix($buttonColour, $mainColour, 50);
        pointer-events: none;
      }
    }
  }
}
</style>
