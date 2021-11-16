import * as FaIcons from "react-icons/fa";

export const SidebarData = [
    {
        title: 'About Me',
        path: '/aboutme',
        icon: <FaIcons.FaUserAstronaut />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <FaIcons.FaCodeBranch />,
        cName: 'nav-text'
    },
    {
        title: 'Skills',
        path: '/skillz',
        icon: <FaIcons.FaRegFileCode />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Me',
        path: '/contactme',
        icon: <FaIcons.FaPhoneAlt />,
        cName: 'nav-text'
    },
]