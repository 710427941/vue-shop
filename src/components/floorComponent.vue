<template>
    <div>
        <h2 v-if='floorTitle' class="floor-title">{{floorTitle}}</h2>
        <div class="floor">
            <div class="floor-anomaly">
                <div class="floor-one">
                    <img v-lazy="floorData0.image" width="100%" />
                </div>
                <div>
                        <div class="floor-two">
                            <img v-lazy="floorData1.image" width="100%"/>
                        </div>
                        <div>
                            <img v-lazy="floorData2.image" width="100%" />
                        </div>
                </div>
            </div>
            <div class="floor-rule">
                    <div v-for="(item,index) in floorData.slice(3)" :key="index">
                        <img v-lazy="item.image" width="100%"/>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['floorData','floorTitle'],
        data() {
            return {
                floorData0: {},
                floorData1: {},
                floorData2: {}
            }
        },
        watch: {
            floorData(newValue, oldValue) {
                this.floorData0 = this.floorData[0]
                this.floorData1 = this.floorData[1]
                this.floorData2 = this.floorData[2]
            }
        },
    }
</script>

<style scoped lang="less">
@import "../assets/less/variable.less";
@import "../assets/less/reset.less";
.floor-title{
    font-size: 16px;
    color: #333;
    height: 3rem;
    line-height: 3rem;
    color: red;
    text-align: center;
    margin: 0;
    background-color: @fff;
}

.floor{
    border-top: 1px solid @f7;
}

.floor-anomaly{
    background-color: @fff;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid @f7;
    div{
        width: 10rem;
        box-sizing:border-box;
        -webkit-box-sizing: border-box; 
    }
}

.floor-one{
    border-right: 1px solid @f7;
}

.floor-two{
    border-bottom: 1px solid @f7;
}

.floor-rule{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
    div{
        width: 10rem;
        box-sizing:border-box;
        -webkit-box-sizing: border-box;  
        border-bottom: 1px solid @f7;
    }
    div:nth-child(odd){
        border-right: 1px solid @f7;
    }
}

</style>