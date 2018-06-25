<template>
  <div class="answer">
    <div class="answer-top">
      <img class="imgOne" src="../../static/image/logo.svg"/>
      <span class="spn1">团队角色自我知觉问卷</span>
      <span class="spn3">已分配：{{readyNum}}</span>
      <Explain/>
    </div>
    <div class="answer-main">
      <div class="answer-main-right">
        <el-tabs id="table1" :tab-position="tabPosition" style="height: 660px;">
          <el-tab-pane id="first" label="第一题">
            <div class="first">
              <span class="spn2">一&nbsp;：&nbsp;我认为自己能为团队做出的贡献是</span>
              <div class="first-page" v-for="(item,index) in items" :key="index">
                <p class="p1">{{item.text}}</p>
                <div class="block">
                  <el-slider
                    v-model="item.value"
                    :step="1"
                    :max="10"
                    show-stops>
                  </el-slider>
                </div>
                <span class="spn4">{{item.value}}</span>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="第二题">
            <div class="first">
              <span class="spn2">二&nbsp;：&nbsp;我认为自己能为团队做出的贡献是</span>
              <p v-for="(item,index) in items" :key="index">{{item.text}}</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="第三题">
            <div class="first">
              <span class="spn2">三&nbsp;：&nbsp;我认为自己能为团队做出的贡献是</span>
              <p v-for="(item,index) in items" :key="index">{{item.text}}</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="第四题">
            <div class="first">
              <span class="spn2">四&nbsp;：&nbsp;我认为自己能为团队做出的贡献是</span>
              <p v-for="(item,index) in items" :key="index">{{item.text}}</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="第五题">
            <div class="first">
              <span class="spn2">五&nbsp;：&nbsp;我认为自己能为团队做出的贡献是</span>
              <p v-for="(item,index) in items" :key="index">{{item.text}}</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="第六题">
            <div class="first">
              <span class="spn2">六&nbsp;：&nbsp;我认为自己能为团队做出的贡献是</span>
              <p v-for="(item,index) in items" :key="index">{{item.text}}</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="第七题">
            <div class="first">
              <span class="spn2">七&nbsp;：&nbsp;我认为自己能为团队做出的贡献是</span>
              <p v-for="(item,index) in items" :key="index">{{item.text}}</p>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Explain from './../components/Explain'

export default {
  components: {
    Explain
  },
  data () {
    return {
      items: [
        {text: 'A、我能很快地发现并把握新的机会。', value: 0},
        {text: 'B、无论在一般还或特别的问题上，我的建议都易于被他人接受', value: 0},
        {text: 'C、我能与不同类型的人融洽地合作做事。', value: 0},
        {text: 'D、我总有许多点子。', value: 0},
        {text: 'E、我善于发掘对实现团体目标有价值的人。', value: 0},
        {text: 'F、我可使别人放心所交托给我完成的任务。', value: 0},
        {text: 'G、技术知识和经验通常是我的主要财富。', value: 0},
        {text: 'H、为创造有益的结果，我愿意面对寂寞和冷漠的对待。', value: 0},
        {text: 'I、通常我能判断某些计划或主意是否适用在某种特定的情况。', value: 0},
        {text: 'J、我能理解充分而且不带偏见地提出可供选择的方案。', value: 0}
      ],
      tabPosition: 'top',
      readyNum: '4',
      value6: 0,
      employees: '张三'
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  @login-bc: #81BFCB;
  @answer-bc: #D7D7D7;
  @answer-tc: #F2F2F2;
  .answer{
    width: 100%;
    height: 100%;
    .answer-top{
      width: 80%;
      height: 50px;
      background-color:white;
      margin: 0 auto;
      position: relative;
      box-shadow: 0px 2px 2px #888888;
      margin-bottom: 2px;
      .spn1{
        font-weight: 600;
        float: left;
        color: @login-bc;
        line-height: 50px;
        font-size: 25px;
        width: 270px;
        height: 100%;
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
      }
      .imgOne{
        width: 80px;
        height: 40px;
        margin-top: 5px;
        margin-left: 150px;
        float: left;
      }
    }
    .answer-main{
      width: 80%;
      height: 660px;
      margin: 0 auto;
      box-sizing: border-box;
      .answer-main-right{
        width: 100%;
        height: 100%;
        background-color: @answer-tc;
        float: right;
        position: relative;
        .spn2{
          font-weight: 600;
        }
      }
    }
  }
  .first{
    width: 100%;
    height: 605px;
  }
  #table1{
    box-sizing: border-box;
    position: relative;
    width: 60%;
    left: 0;
    right: 0;
    margin: auto;
    background-color: white;
    padding-left: 50px;
  }
  .spn3{
    position: absolute;
    top: 20px;
    right: 70px;
    color: #409EFF;
    font-size: 14px;
  }
  .Explain{
    position: absolute;
    top: 10px;
    right: 150px;
    color: #409EFF;
  }
  .block{
    width: 80%;
    margin-left: 30px;
  }
  .p1{
    line-height: 20px;
    margin: 0;
  }
  .first > div:nth-child(2){
    margin-top: 10px;
  }
  .first-page{
    position: relative;
  }
  .spn4{
    color: @login-bc;
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 25px;
    left: 88%;
    margin: auto;
  }
</style>
