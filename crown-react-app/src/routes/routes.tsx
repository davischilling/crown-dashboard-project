import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  Add as AddIcon,
  Person as PersonIcon,
  LocalHospital as LocalHospitalIcon,
  PersonAdd as PersonAddIcon
} from "@material-ui/icons";
import { Login, Signup, Dashboard, Pads, NewPad, Users, NewUser } from '../pages'

const routes = {
  isLogged: [
    {
      id: 2,
      label: "Dashboard",
      link: "/",
      component: <Dashboard />,
      icon: <HomeIcon />,
      roles: [
        "Admin", "User"
      ],
      exact: true
    },
    {
      id: 3,
      label: "Pads",
      link: "/pads",
      component: <Pads />,
      icon: <LocalHospitalIcon />,
      roles: [
        "Admin", "User"
      ],
      exact: true
    },
    {
      id: 4,
      label: "New Pad",
      link: "/pads/",
      linkUpdate: "/pads/update/",
      component: <NewPad />,
      icon: <AddIcon />,
      roles: [
        "Admin", "User"
      ],
      exact: false
    },
    {
      id: 5,
      label: "Users",
      link: "/users",
      component: <Users />,
      icon: <PersonIcon />,
      roles: [
        "Admin"
      ],
      exact: true
    },
    {
      id: 6,
      label: "New User",
      link: "/users/",
      linkUpdate: "/users/update/",
      component: <NewUser />,
      icon: <PersonAddIcon />,
      roles: [
        "Admin", "User"
      ],
      exact: false
    }
  ],
  notLogged: [
    {
      id: 0,
      label: "Login",
      link: "/login",
      component: <Login />,
      roles: [],
      exact: true
    },
    {
      id: 1,
      label: "Signup",
      link: "/signup",
      component: <Signup />,
      roles: [],
      exact: true
    }
  ]
}

export default routes