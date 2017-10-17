import Vue from 'vue'
import Router from 'vue-router'
import ReadArticle from '@/components/ReadArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	/*
      path: '/',
      name: 'Hello',
      component: Hello
  	*/
  	path: '/',
  	name: 'ReadArticle',
  	component: ReadArticle,
    }
  ]
})
