import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'post_content',
      path:'/topic/:id&author=:name',  //
      components:{
        main:Article,
        slideBar:SlideBar
      }
    },
    {
      name:'root',
      path:'/',  //这是啥
      components:{
        main:PostList
        
      }
    },
    {
      name:'user_info',
      path:'/user_info:name',  //这是啥
      components:{
        main:UserInfo 
      }
    }
  ]
})
