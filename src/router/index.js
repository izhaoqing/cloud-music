import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Recommend from '@/components/Recommend'
import SongSheet from '@/components/SongSheet'
import Rank from '@/components/Rank'
import Singer from '@/components/Singer'
import SingerDetail from '@/components/SingerDetail'
import RankDetail from '@/components/RankDetail'
import Mv from '@/components/Mv'
import Search from '@/components/Search'
// import BaseNav from '@/base/BaseNav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    }, {
      path: '/recommend',
      name: 'recommend',
      component: Recommend,
      children: [{
        path: ':id',
        component: SongSheet
      }, {
        path: '/rank',
        name: 'rank',
        component: Rank,
        children: [{
          path: ':idx',
          component: RankDetail
        }]
      }, {
        path: '/singer',
        name: 'singer',
        component: Singer,
        children: [{
          path: ':id',
          component: SingerDetail
        }]
      }]
    }, {
      path: '/mv',
      component: Mv
    }, {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
