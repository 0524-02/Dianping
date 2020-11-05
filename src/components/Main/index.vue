<template>
    <div class="main">
        <div class="mainLeft">
           <!-- <a href="javascript:;">
               <img class="logo" src="./images/logo.png" alt="logo">
           </a> -->
           <router-link to="/home">
                <img class="logo" src="./images/logo.png" alt="logo">
           </router-link>

           <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" class="input-error input-xxlarge" />
                        <button class="sui-btn btn-xlarge btn-danger" type="button" @click="toSearch">搜索</button>
                    </form>
            </div>

            <a class="activePic" href="javascript:;">
                <img src="./images/header_01.gif" alt="header_01">
            </a>
        </div>

           <!-- <div class="Type">
              <p class="allType">全部分类</p>
              <a href="javascript:;">
                  <p class="food">霸王餐</p>
              </a>
              <i class="iconfont iconhot1 iconColor"></i>
              <a href="javascript:;">
                  <p class="talk">社区论坛</p>
              </a>
              <a class="order">
                  <p>预约订座</p>
              </a>       
            </div>    -->
       
    </div>
</template>

<script>
export default {
    name:'Main',
    methods:{
         toSearch() {
            let location = {
                name: "search",
                // params: { keyword: this.keyword || undefined },
            };
            //判断当前路由当中是不是有query参数，有就带上
            // let {query} = this.$route 
            // if(query){
            //     location.query = query
            // }
            //判断当前路由路径是什么，如果是home，那么我们就push，如果不是home那就replace
            if(this.$route.path !== '/home'){
                this.$router.replace(location)
            }else{
                this.$router.push(location)
            }
        }
    }
}
</script>

<style  lang="less" scoped>
    .main{
        width: 1190px;
        margin: 0 auto;

        .mainLeft {
            height: 95px;
            display: flex;
            position: relative;
            line-height: 95px;
            width: 210px;

            .logo {
                height: 57px;
                position: absolute;
                top: 20px;

            }

            .searchArea {
                position: absolute;
                left: 300px;
                margin-top: 35px;

                .searchForm {
                     display: flex;

                    input {
                        box-sizing: border-box;
                        width: 400px;
                        height: 36px;
                        padding: 0px 4px;
                        border: 2px solid #ff6633;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 36px;
                        width: 100px;
                        background-color: #ff6633;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }

            .activePic {
                position: absolute;
                right: -900px;
                top: 15px;
            }
        }

          .Type {
            display: flex;
            height: 35px;
            font-size: 15px;
            font-weight: 700;
            line-height: 35px;

            .iconColor {
                color: #ff6633;
            }

            .allType {
                width: 210px;
                height: 35px;
                line-height: 35px;
                padding-left: 15px;
                font-size: 15px;
                color: #fff;
                background: #ff6b37
            }

            .food {
                width: 45px;
                height: 35px;
                line-height: 35px;
                margin-left: 50px;
                color: #333;
            }

            .talk{
                width: 60px;
                height: 35px;
                margin-left: 50px;
                color: #333;
            }
            .order {
                width: 60px;
                height: 35px;
                margin-left: 50px;
                color: #333;
            }
        }
        
    }
</style>