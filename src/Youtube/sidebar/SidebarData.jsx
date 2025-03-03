import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';

export const SidebarData = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    path: "#home"
  },
  {
    title: 'Shorts',
    icon: <AppShortcutIcon />,
    path: "#shorts"
  },
  {
    title: 'Subscriptions',
    icon: <SubscriptionsIcon />,
    path: "#subscriptions"
  },
  {
    title: 'You',
    icon: <AccountCircleIcon />,
    path: "#you"
  }
]