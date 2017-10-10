import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tuijian from '@/components/tuijian'
import index from '@/view/index'
import detail from '@/components/detail'
import Shipin from '@/components/shipin'
import Rendian from '@/components/redian'
import Shehui from '@/components/shehui'
import Yule from '@/components/yule'
import Junshi from '@/components/junshi'
import Keji from '@/components/keji'
import Qiche from '@/components/qiche'
import Tiyu from '@/components/tiyu'
import Caijing from '@/components/Caijing'
import Guoji from '@/components/guoji'
import Shishang from '@/components/shishang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[{
        path: '/tuijian',
        name: 'tuijian',
        component:Tuijian
      }
        ,{
          path: '/',
          name: 'tuijian',
          component:Tuijian,

        },
        {
          path: '/shipin',
          name: 'shipin',
          component:Shipin,

        },

        {
          path: '/redian',
          name: 'redian',
          component:Rendian,

        }
        ,

        {
          path: '/shehui',
          name: 'shehui',
          component:Shehui,

        }
        ,

        {
          path: '/yule',
          name: 'yule',
          component:Yule,

        },
        ,
        {
          path: '/junshi',
          name: 'junshi',
          component:Junshi,

        } ,
        {
          path: '/keji',
          name: 'keji',
          component:Keji,

        } ,
        {
          path: '/qiche',
          name: 'qiche',
          component:Qiche,

        }
        ,
        {
          path: '/tiyu',
          name: 'tiyu',
          component:Tiyu,

        }
        ,
        {
          path: '/caijing',
          name: 'caijing',
          component:Caijing,

        },
        {
          path: '/guoji',
          name: 'guoji',
          component:Guoji,

        },
        {
          path: '/shishang',
          name: 'shishang',
          component:Shishang,

        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component:detail
    }
  ]
})

