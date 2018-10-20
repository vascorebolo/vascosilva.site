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
    label: "Photos",
    path: "/photos",
    exact: false,
    component: "Portfolio",
    showLink: true,
  }
]

export default routes
