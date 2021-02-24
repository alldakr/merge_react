import Home from "pages/Main";
import IntroPage from "pages/Intro";
import CustomEducPage from "pages/CustomEducation";
import OfflineEduPage from "pages/OfflineEducation";
import OnlineEduPage from "pages/OnlineEducation";
import DMKHallPage from "pages/DMKHall";
import CommunityPage from "pages/Community";
import MyPage from "pages/MyPage";
import LoginPage from "pages/Auth/Login";
import Signup from "pages/Auth/Signup";

// import LoginRequiredRoute from "utils/LoginRequiredRoute";

const layout = "/main";
const routes = [
  {
    collapse: true,
    name: "MainHome",
    icon: "ni ni-ungroup text-orange",
    // state: "examplesCollapse",
    state: "",
    views: [
      {
        path: "/intro",
        name: "IntroPage",
        miniName: "P",
        component: IntroPage,
        layout: layout,
      },
      {
        path: "/customEdu",
        name: "CustomEducation",
        miniName: "P",
        component: CustomEducPage,
        layout: layout,
      },
      {
        path: "/offlineEdu",
        name: "OfflineEducation",
        miniName: "L",
        component: OfflineEduPage,
        // component: () => {},
        layout: layout,
      },
      {
        path: "/onlineEdu",
        name: "OnlineEducation",
        miniName: "R",
        component: OnlineEduPage,
        layout: layout,
      },
      {
        path: "/dmkHall",
        name: "DMKHall",
        miniName: "L",
        component: DMKHallPage,
        layout: layout,
      },
      {
        path: "/community",
        name: "Community",
        miniName: "L",
        component: CommunityPage,
        layout: layout,
      },
      {
        path: "/mypage",
        name: "MyPage",
        miniName: "L",
        component: MyPage,
        layout: layout,
      },
      {
        path: "/login",
        name: "Login",
        miniName: "L",
        component: LoginPage,
        layout: layout,
      },
      {
        path: "/signup",
        name: "Signup",
        miniName: "L",
        component: Signup,
        layout: layout,
      },
      {
        path: "/",
        name: "MainHomePage",
        miniName: "A",
        component: Home,
        layout: layout,
      },
    ],
  },
];

export default routes;
