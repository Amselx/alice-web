import Layout from '../../views/layout/Layout'

const sms = {
  path: '/sms',
  component: Layout,
  redirect: '/sms/coupon',
  name: 'sms',
  meta: {title: '营销', icon: 'sms'},
  children: [
    {
      path: 'flash',
      name: 'flash',
      component: () => import('@/views/sms/flash/index'),
      meta: {title: '秒杀活动列表', icon: 'sms-flash'}
    },
    {
      path: 'flashSession',
      name: 'flashSession',
      component: () => import('@/views/sms/flash/sessionList'),
      meta: {title: '秒杀时间段列表'},
      hidden: true
    },
    {
      path: 'selectSession',
      name: 'selectSession',
      component: () => import('@/views/sms/flash/selectSessionList'),
      meta: {title: '秒杀时间段选择'},
      hidden: true
    },
    {
      path: 'flashProductRelation',
      name: 'flashProductRelation',
      component: () => import('@/views/sms/flash/productRelationList'),
      meta: {title: '秒杀商品列表'},
      hidden: true
    },
    {
      path: 'coupon',
      name: 'coupon',
      component: () => import('@/views/sms/coupon/index'),
      meta: {title: '优惠券列表', icon: 'sms-coupon'}
    },
    {
      path: 'addCoupon',
      name: 'addCoupon',
      component: () => import('@/views/sms/coupon/add'),
      meta: {title: '添加优惠券'},
      hidden: true
    },
    {
      path: 'updateCoupon',
      name: 'updateCoupon',
      component: () => import('@/views/sms/coupon/update'),
      meta: {title: '修改优惠券'},
      hidden: true
    },
    {
      path: 'couponHistory',
      name: 'couponHistory',
      component: () => import('@/views/sms/coupon/history'),
      meta: {title: '优惠券领取详情'},
      hidden: true
    },
    {
      path: 'brand',
      name: 'homeBrand',
      component: () => import('@/views/sms/brand/index'),
      meta: {title: '品牌推荐', icon: 'product-brand'}
    },
    {
      path: 'new',
      name: 'homeNew',
      component: () => import('@/views/sms/new/index'),
      meta: {title: '新品推荐', icon: 'sms-new'}
    },
    {
      path: 'hot',
      name: 'homeHot',
      component: () => import('@/views/sms/hot/index'),
      meta: {title: '人气推荐', icon: 'sms-hot'}
    },
    {
      path: 'subject',
      name: 'homeSubject',
      component: () => import('@/views/sms/subject/index'),
      meta: {title: '专题推荐', icon: 'sms-subject'}
    },
    {
      path: 'advertise',
      name: 'homeAdvertise',
      component: () => import('@/views/sms/advertise/index'),
      meta: {title: '广告列表', icon: 'sms-ad'}
    },
    {
      path: 'addAdvertise',
      name: 'addHomeAdvertise',
      component: () => import('@/views/sms/advertise/add'),
      meta: {title: '添加广告'},
      hidden: true
    },
    {
      path: 'updateAdvertise',
      name: 'updateHomeAdvertise',
      component: () => import('@/views/sms/advertise/update'),
      meta: {title: '编辑广告'},
      hidden: true
    }
  ]
};

export default sms;


