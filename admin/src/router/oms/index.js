import Layout from '../../views/layout/Layout'

const oms = {
  path: '/oms',
  component: Layout,
  redirect: '/oms/order',
  name: 'oms',
  meta: {title: '订单', icon: 'order'},
  children: [
    {
      path: 'order',
      name: 'order',
      component: () => import('@/views/oms/order/index'),
      meta: {title: '订单列表', icon: 'product-list'}
    },
    {
      path: 'orderDetail',
      name: 'orderDetail',
      component: () => import('@/views/oms/order/orderDetail'),
      meta: {title: '订单详情'},
      hidden: true
    },
    {
      path: 'deliverOrderList',
      name: 'deliverOrderList',
      component: () => import('@/views/oms/order/deliverOrderList'),
      meta: {title: '发货列表'},
      hidden: true
    },
    {
      path: 'orderSetting',
      name: 'orderSetting',
      component: () => import('@/views/oms/order/setting'),
      meta: {title: '订单设置', icon: 'order-setting'}
    },
    {
      path: 'returnApply',
      name: 'returnApply',
      component: () => import('@/views/oms/apply/index'),
      meta: {title: '退货申请处理', icon: 'order-return'}
    },
    {
      path: 'returnReason',
      name: 'returnReason',
      component: () => import('@/views/oms/apply/reason'),
      meta: {title: '退货原因设置', icon: 'order-return-reason'}
    },
    {
      path: 'returnApplyDetail',
      name: 'returnApplyDetail',
      component: () => import('@/views/oms/apply/applyDetail'),
      meta: {title: '退货原因详情'},
      hidden: true
    }
  ]
};

export default oms;


