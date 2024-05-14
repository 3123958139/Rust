// 最简代码，也就是这些字段必须有
const{VITE_HIDE_HOME}=import.meta.env;
const Layout = () => import("@/layout/index.vue");

export default {
  path: "/engine_test",
  name: "engine_test",
  component: Layout,
  redirect: "/engine_test",
  meta: {
    icon: "ri:window-fill",
    title: "发动机试验",
    rank: 0
  },
  children: [
    {
      path: "/engine_test",
      name: "engine_test",
      component: () => import("@/views/engine_test/index.vue"),
      meta: {
        title: "发动机试验",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]
} satisfies RouteConfigsTable;

  