// 最简代码，也就是这些字段必须有
const { VITE_HIDE_HOME } = import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/table",
  name: "table",
  component: Layout,
  redirect: "/table",
  meta: {
    icon: "ri:table-view",
    title: "表格",
    rank: 0
  },
  children: [
    {
      path: "/table",
      name: "table",
      component: () => import("@/views/table/index.vue"),
      meta: {
        title: "表格",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;
