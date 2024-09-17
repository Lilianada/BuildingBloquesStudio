import { useLocation, Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import clsx from "clsx";

import { Container } from "../components/Container";

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
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
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
            Navigation
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
            <MobileNavItem href="#services">Services</MobileNavItem>
            <MobileNavItem href="#about">About</MobileNavItem>
            <MobileNavItem href="#team">Team</MobileNavItem>
            <MobileNavItem href="#packages">Packages</MobileNavItem>
            <MobileNavItem href="#templates">Templates</MobileNavItem>
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
          "relative block px-3 py-2 transition",
          isActive
            ? "text-cyan-700 dark:text-cyan-600"
            : "hover:text-cyan-800 dark:hover:text-cyan-700"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/80 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
        <NavItem href="#services">Services</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#team">Team</NavItem>
        <NavItem href="#packages">Packages</NavItem>
        <NavItem href="#templates">Templates</NavItem>
      </ul>
    </nav>
  );
}

export function NewHeader() {
  return (
    <div className="relative z-50 flex flex-col">
      <Container>
        <div className="relative flex gap-4">
          <div className="flex flex-1"></div>
          <div className="flex flex-1 justify-end md:justify-center">
            <MobileNavigation className="pointer-events-auto md:hidden" />
            <DesktopNavigation className="pointer-events-auto hidden md:block" />
          </div>
        </div>
      </Container>
    </div>
  );
}
