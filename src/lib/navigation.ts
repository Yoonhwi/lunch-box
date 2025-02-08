import { match } from "path-to-regexp";

import { Pages } from "./routes";

interface NavItem {
  label: string;
  pathname: Pages;
  search?: Record<string, string>;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    label: "Home",
    pathname: Pages.Home,
  },
  {
    label: "Users",
    pathname: Pages.Users,
    search: { page: "1" },
    children: [
      {
        label: "User ID",
        pathname: Pages.UsersID,
      },
    ],
  },
];

export const findNavHierarchy = (
  pathname: string,
  current = navItems,
  parents: NavItem[] = []
): NavItem[] => {
  for (const navItem of current) {
    if (match(navItem.pathname)(pathname)) {
      return [...parents, navItem];
    }
    if (navItem.children) {
      const navs = findNavHierarchy(pathname, navItem.children, [
        ...parents,
        navItem,
      ]);
      if (navs.length) {
        return navs;
      }
    }
  }
  return [];
};
