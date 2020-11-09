<template>
  <div class="web">
    <div class="main-container">
      <div class="inpt-nav">
        <!-- <template>
          <label for="#">目的地</label>
          <el-select placeholder="请输入关键词">
           
          </el-select>
          <div class="block">
            <label for="#" class="label">入住</label>
            <el-date-picker type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="block">
            <label for="#" class="label">离店</label>
            <el-date-picker type="date" placeholder="选择日期">
            </el-date-picker>
          </div>
          <label for="#">目的地</label>
          <el-select placeholder="请输入关键词">
          
          </el-select>
        </template> -->
        <a href="###" class="scarchBtn">搜索</a>
      </div>
      <div class="nav">
        <div class="P-1">
          <!-- 000000000 -->
          <h4 @click="filterStart(0)">位置:</h4>
          <div class="p-1">
            <a href="#" class="active">不限</a>
            <ul class="place">
              <li
                v-for="(item, index) in title"
                :key="index"
                @click="navIndex(index)"
              >
                <a href="###">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="P-2">
          <ul>
            <li
              v-for="p in place[a]"
              :key="p.placeId"
              @click="filterplace(p.placeId, 3)"
            >
              <a href="#">{{ p.placeName }}</a>
            </li>
          </ul>
        </div>
        <div class="P-1">
          <h4>星级</h4>
          <div class="p-1">
            <a href="#" class="active">不限</a>
            <ul class="place">
              <li><a href="#" @click="filterStart(1)">经济型</a></li>
              <li><a href="#" @click="filterStart(2)">三星/舒适</a></li>
              <li><a href="#">四星/高档</a></li>
              <li><a href="#">五星/豪华</a></li>
            </ul>
          </div>
        </div>
        <div class="P-1">
          <h4>星级</h4>
          <div class="p-1">
            <a href="#" class="active">不限</a>
          </div>
        </div>
      </div>
      <div class="hotel">
        <ul class="hotelShopList">
          <li
            class="hotelList"
            v-for="hotel in sortHostList.slice(b,c)"
            :key="hotel.hotelID"
          >
            <div class="hotelShop">
              <h2>
                <a href="#">{{ hotel.title }}</a>
                <a href="#">icon</a>
              </h2>
              <p class="hotelPlace">
                <span>icon</span>
                <a href="#">
                  <span>{{ hotel.place }}</span>
                  <span>{{ hotel.distance }}.5km</span>
                </a>
              </p>
              <a href="#" class="down">下载APP预定</a>
              <ul class="hotelPhoto">
                <li v-for="(item, index) in hotel.hotelUrl" :key="index">
                  <a href="#">
                    <img :src="item" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <!-- <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination> -->
      <span class="lod" @click="changeMore">换一批看看</span>
      <div class="appraise">
        <div class="app1">
          <span>你滿意不?</span>
          <a href="###">滿意</a>
          <a href="###">不滿意</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "hotel",
  data() {
    return {
      a: 0,
      sortHostList: [],
      b:0,
      c:6,
    };
  },
  // created() {

  // },
  created() {
    this.gethotelList();
    this.getnavList();
  },
  mounted() {},
  methods: {
    gethotelList() {
      this.$store.dispatch("gethotelAll");
    },
    getnavList() {
      this.$store.dispatch("getnavList");
    },
    navIndex(index) {
      this.a = index;
    },
    initSortHostList() {
      let sortHostList = this.hotelList;
      this.$set(this.$data, "sortHostList", sortHostList);
    },
    // 筛选
    filterStart(i) {
      switch (i) {
        case 1:
          // 2.判断筛选
          // this.initSortHostList();
          this.sortHostList = this.sortHostList.filter((item) => {
            if (item.startID === "44") return item;
          });
          break;
        case 2:
          // 2.判断筛选
          // this.initSortHostList();
          this.sortHostList = this.sortHostList.filter((item) => {
            if (item.startID === "45") return item;
          });
          break;

        default:
          this.initSortHostList();
          break;
      }
    },
    filterplace(a, b) {
      if (a == 71) {
        this.sortHostList = this.sortHostList.filter((item) => {
          if (item.placeID === "1") return item;
        });
      } else if (a == 72) {
        this.sortHostList = this.sortHostList.filter((item) => {
          if (item.placeID === "2") return item;
        });
      }
    },
    changeMore(){
      this.b+=6,
      this.c+=6
    }
  },
  computed: {
    ...mapState({
      hotelList: (state) => state.hotel.hotelALL.hotelList,
    }),
    ...mapState({
      title: (state) => state.hotel.navList.title,
    }),
    ...mapState({
      place: (state) => state.hotel.navList.place || [],
    }),
  },
  watch: {
    // 1.监视计算的数据
    hotelList(v) {
      this.initSortHostList();
      // let sortHostList = [...v];
      // // this.sortHostList = v
      // this.$set(this.$data, "sortHostList", sortHostList);
    },
  },
};
</script>

<style lang="less" scoped>
.web {
  background-color: #f8f8f8;
  height: 2000px;
  .main-container {
    padding-top: 20px;
    width: 1190px;
    margin: 15px auto 0;
    .nav {
      width: 1190px;
      height: 209px;
      background-color: #fff;
      .P-1 {
        display: flex;
        font-size: 12px;
        color: #333;
        text-align: center;

        .place {
          display: flex;
        }
        h4 {
          color: #999;
          margin-left: 20px;
          margin-top: 30px;
        }
        .p-1 {
          display: flex;
          margin-top: 30px;

          .active {
            background-color: #ff6633;
            color: #fff;
            padding: 0 4px;
          }
          :first-child {
            margin: 0 20px;
          }
        }
      }
      .P-2 {
        ul {
          width: 1100px;
          height: 40px;
          background-color: #fafafa;
          line-height: 42px;
          font-size: 12px;
          margin-left: 42px;
          border: 1px solid#eee;
          display: flex;
          margin-top: 5px;
          li {
            margin-left: 25px;
            text-align: left;
            a {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }

    .hotel {
      margin-top: 10px;
      .hotelShopList {
        .hotelList {
          box-sizing: border-box;
          border: 1px solid #e9e9e9;
          background-color: #fff;
          padding: 15px 0 0 20px;
          position: relative;
          height: 230px;
          margin-top: 1px;
          &:hover {
            box-shadow: 1px 2px 4px 4px rgba(0, 0, 0, 0.2);
          }
          .hotelShop {
            h2 {
              a {
                font-size: 16px;
                color: #333;
                font-weight: bold;
              }
            }
            .hotelPlace {
              font-size: 12px;
              color: #666;
              margin-top: 3px;
            }
          }
          .down {
            display: block;
            background-color: #ff6433;
            color: #fff;
            width: 90px;
            height: 33px;
            text-align: center;
            line-height: 33px;
            position: absolute;
            top: 15px;
            right: 30px;
            border-radius: 5px;
          }
          .hotelPhoto {
            display: flex;
            margin-top: 45px;
            img {
              display: block;
              width: 137px;
              height: 102px;
              margin-right: 5px;
            }
          }
        }
      }
    }
    .inpt-nav {
      display: flex;
      height: 54px;
      line-height: 54px;
      label {
        color: #999;
        margin-right: 10px;
        font-size: 14px;
      }

      .block {
        position: relative;

        .label {
          padding-left: 10px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
        }
      }
      .scarchBtn {
        display: inline-block;
        width: 80px;
        height: 30px;
        line-height: 28px;
        text-align: center;
        color: #fff;
        background: #f63;
        margin-top: 12px;
      }
    }
    .el-pagination {
      float: right;
      margin-top: 20px;
      overflow: hidden;
    }
    .appraise {
      height: 89px;
      width: 100%;
      background-color: #fff;
      margin-top: 80px;
      text-align: end;
      .app1 {
        a {
          margin-right: 10px;
          width: 40px;
          padding: 5px 5px 5px 30px;

          height: 26px;
          line-height: 140px;
          border: 1px solid #d7d7d7;
          background-color: #fbfbfb;
          color: #333;
        }
        span {
          color: #999;
        }
      }
    }
    .lod{
       display: block;
        width: 1190px;
        height: 50px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
        font-size: 15px;
    }
  }
}
</style>
