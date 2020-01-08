// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import EmployeeList from "views/EmployeeList/EmployeeList.js";
import ItemList from "views/ItemList/ItemList";
import LiveCCTV from "views/LiveCCTV/LiveCCTV";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/employee",
    name: "Employee List",
    icon: "content_paste",
    component: EmployeeList,
    layout: "/admin"
  },
  {
    path: "/items",
    name: "Item List",
    icon: "menu_book",
    component: ItemList,
    layout: "/admin"
  },
  {
    path: "/live-cctv",
    name: "Live CCTV",
    icon: "linked_camera",
    component: LiveCCTV,
    layout: "/admin"
  }
];

export default dashboardRoutes;
