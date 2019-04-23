<template>
<div id="main">
  <ul class="clear">
      <router-link :to="item.link" tag="li" v-for="(item,index) in linkArr">
        {{item.name}}
      </router-link>
      <div>
        <router-view></router-view>
      </div>
  </ul>
</div>
</template>
<style>
*{
    margin: 0;
    padding: 0;
}
ul {
    width: 100%;
    background: #3389ee;
    height: 45px;
    line-height: 45px;
}
ul li{
    list-style: none;
    float: left;
    width: 200px;
    height: 45px;
    line-height: 45px;
    text-align: center;
}
li:hover {
    background: #668B8B;
    color: #3389ee;
}
.clear{
    clear: both;
}
</style>
<script>

export default {
    // components: {
    //     nav1,
    //     nav2,
    //     nav3
    // },
    data(){
        return{
            linkArr: [
                {
                    name: 'nav1',
                    isactive: true,
                    link: '/nav1'
                },{
                    name: 'nav2',
                    isactive: false,
                    link: '/nav2'
                },{
                    name: 'nav3',
                    isactive: false,
                    link: '/nav3'
                }
            ]
        }
    }
}
</script>


