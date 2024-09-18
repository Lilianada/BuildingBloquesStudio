import { useLocation, Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "./Container";

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Link to={href} className="block py-2">
        {children}
      </Link>
    </li>
  );
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center py-2 text-sm font-medium text-white">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-200 group-hover:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>

      <Popover.Panel
        focus
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <Popover.Button aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
          </Popover.Button>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Explore
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
            <MobileNavItem href="#services">Services</MobileNavItem>
            <MobileNavItem href="#projects">Projects</MobileNavItem>
            <MobileNavItem href="#packages">Packages</MobileNavItem>
            <MobileNavItem href="#templates">Templates</MobileNavItem>
            <MobileNavItem href="#team">Team</MobileNavItem>
            <MobileNavItem href="/contact-us">Contact us</MobileNavItem>
          </ul>
        </nav>
      </Popover.Panel>
    </Popover>
  );
}

function NavItem({ href, children }) {
  const location = useLocation();
  let isActive = location.pathname === href;

  return (
    <li>
      <Link
        to={href}
        className={clsx(
          "relative block px-3 py-2 transition text-white",
          isActive
            ? "text-cyan-500 dark:text-cyan-400"
            : "hover:text-cyan-600 dark:hover:text-cyan-500"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 dark:from-cyan-400/0 dark:via-cyan-400/40 dark:to-cyan-400/0" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full px-3 text-sm font-medium text-gray-300">
        <NavItem href="#services">Services</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#packages">Packages</NavItem>
        <NavItem href="#templates">Templates</NavItem>
        <NavItem href="#team">Team</NavItem>
      </ul>
    </nav>
  );
}

export function Navigation() {
  return (
    <div className="relative z-50 flex flex-col">
        <div className="relative flex gap-4">
          <div className="flex flex-1"></div>
          <div className="flex flex-1 justify-end md:justify-center">
            <MobileNavigation className="pointer-events-auto lg:hidden" />
            <DesktopNavigation className="pointer-events-auto hidden lg:block" />
          </div>
        </div>
    </div>
  );
}
