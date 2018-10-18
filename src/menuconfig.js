const routes = [
  {
    label: "Home",
    path: "/",
    exact: true,
    component: "Home",
    showLink: false,
  },
  {
    label: "About",
    path: "/about",
    exact: false,
    component: "About",
    showLink: true,
  },
  {
    label: "Gallery",
    path: "/gallery",
    exact: false,
    component: "Test",
    showLink: true,
  }
]

export default routes
