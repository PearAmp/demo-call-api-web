<template>
  <div class="container">
    <!-- Q1 -->
    <h1>ทำ a = 2</h1>
    <h2><span class="txt-red">Ans</span> a = {{ total }}</h2>
    <br />
    <!-- Q2 -->
    <h2>
      จงออกแบบหน้าเว็บไซต์ให้มีหน้าตาดังต่อไปนี้ จากนั้น
      ทำให้เว็บไซต์นี้ทำงานได้ดังนี้ <br />
      1) เมื่อกดปุ่ม + ให้ทำการ บวกเลข บนหน้าจอขึ้น 1 <br />
      2) เมื่อกดปุ่ม - ให้ทำการ ลบเลข บนหน้าจอลง 1
    </h2>
    <h2><span class="txt-red">Ans</span></h2>
    <div class="btn-custom d-flex justify-center align-center">
      <v-btn class="btn" color="error" @click="reduce">-</v-btn>
      <h2 class="pl-2 pr-2 box-num">{{ Num }}</h2>
      <v-btn class="btn" color="success" @click="add">+</v-btn>
    </div>
    <br />
    <br />
    <!-- Q3 -->
    <h2>
      1) เมื่อค่าที่แสดงมีค่า ระหว่าง 6 - 9 ค่านั้น จะแสดงด้วย " สีเขียว "
      <br />
      2) เมื่อค่าที่แสดงมีค่า ตั้งแต่ 10 เป็นต้นไป จะแสดงด้วย " สีแดง "
    </h2>
    <br />
    <h2><span class="txt-red">Ans</span></h2>
    <div class="btn-custom d-flex justify-center align-center">
      <v-btn color="error" @click="decrease">-</v-btn>
      <div class="box-num">
        <h2 :style="{ color: textColor }">
          <strong>{{ counter }}</strong>
        </h2>
      </div>
      <v-btn color="success" @click="increase">+</v-btn>
    </div>
    <br />
    <br />
    <!-- Q4 -->
    <h2>เมื่อ กดปุ่ม Click Me จะแสดง text 'Hello'</h2>
    <div class="d-flex">
      <h2><span class="txt-red mr-5">Ans</span></h2>
      <h2 class="text-show pr-5">{{ text }}</h2>
      <v-btn color="btn-click primary" @click="changeText">click me</v-btn>
    </div>
    <br />
    <br />
    <!-- Q5 -->
    <h2>Click Button เปลี่ยนสี</h2>
    <div class="d-flex">
      <h2><span class="txt-red">Ans</span></h2>
      <div :style="{ backgroundColor: bgColor }" class="bg-custom"></div>
    </div>
    <br />
    <div class="btn-custom d-flex">
      <v-btn color="primary" @click="bgRed">Red</v-btn>
      <v-btn color="primary" class="ml-5" @click="bgGreen">Green</v-btn>
    </div>
    <br />
    <br />
    <!-- Q6 -->
    <h2>Click Print webPage</h2>
    <v-btn color="success" @click="Print">Print</v-btn>
    <br />
    <br />
    <!-- Q7 -->
    <h2>Click Change Font Css</h2>
    <h2><span class="txt-red">Ans</span></h2>
    <h3 :style="{ fontSize: fontStrong }">{{ txtShow }}</h3>
    <v-btn color="primary" class="btn-click" @click="changeFont">Click Chang Font</v-btn>
  </div>
</template>

<script>
export default {
  name: 'PearPage',
  data() {
    return {
      // Q1
      first: 1,
      second: 2,
      // Q2
      Num: 0,
      // Q3
      counter: 0,

      // Q4
      text: 'Before',
      bgColor: 'white',

      // Q5
      txtShow: 'font-small',
      fontStrong: '16px',
    }
  },
  computed: {
    // Ans1
    total() {
      return this.first * this.second
    },
    // Ans3
    textColor() {
      if (this.counter >= 6 && this.counter <= 9) {
        return 'green'
      } else if (this.counter >= 10) {
        return 'red'
      } else {
        return 'black'
      }
    },
    // Ans4
  },
  mounted() {},

  methods: {
    // Ans2
    add() {
      this.Num++
    },
    reduce() {
      this.Num--
    },
    // Ans3
    increase() {
      this.counter++
    },
    decrease() {
      if (this.counter > 0) {
        this.counter--
      }
    },
    // Ans4
    changeText() {
      this.text = 'Hello'
    },
    // Ans5
    bgRed() {
      this.bgColor = 'red'
    },
    bgGreen() {
      this.bgColor = 'green'
    },
    // Ans6
    Print() {
      window.print()
    },
    // Ans7
    changeFont() {
      this.fontStrong = '60px'
    },
  },
}
</script>

<style lang="scss" scoped>
.text-show {
  color: #eb7434;
}
.container {
  margin-top: 4rem;
  padding: 1rem;
  max-width: 1320px;
  width: 100%;
}
.txt-red {
  color: red;
}
.box-num {
  border: 1px solid red;
  width: 50px;
  text-align: center;
  border-radius: 0.25rem;
  margin: 0 1rem;
}
.btn-click {
  font-size: 1rem !important;
}
.v-btn {
  font-size: 1.5rem;
}
.bg-custom {
  width: 100px;
  height: 60px;
  margin: 0 1rem;
  border: 2px solid;
}
</style>