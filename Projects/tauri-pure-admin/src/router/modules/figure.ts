// 最简代码，也就是这些字段必须有
const{VITE_HIDE_HOME}=import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/figure",
  name: "figure",
  component: Layout,
  redirect: "/figure",
  meta: {
    icon: "ri:pie-chart-2-fill",
    title: "图表",
    rank: 0
  },
  children: [
    {
      path: "/figure",
      name: "figure",
      component: () => import("@/views/figure/index.vue"),
      meta: {
        title: "图表",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;

  