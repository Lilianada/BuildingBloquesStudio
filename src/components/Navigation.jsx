import { useLocation, Link } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
  },
};

function MobileNavItem({ href, children }) {
  return (
    <motion.li variants={itemVariants}>
      <Link to={href} className="block py-2">
        {children}
      </Link>
    </motion.li>
  );
}

export default function MobileNavigation(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center py-2 text-sm font-medium text-white"
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          className="ml-2 transform group-hover:scale-110"
        >
          <svg width="15" height="15" viewBox="0 0 20 20" fill="#fff">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>

        <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            opacity: 0,
            y: -20,
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.5,
            },
          },
        }}
        className="fixed inset-x-4 top-20 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
          <motion.div className="flex">
            <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Explore Building Bloques
            </h2>
          </motion.div>

          <nav className="mt-6">
          <motion.ul
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
              closed: {
                opacity: 0,
              },
            }}
            className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800"
          >
              <MobileNavItem href="#services">Services</MobileNavItem>
              <MobileNavItem href="#projects">Projects</MobileNavItem>
              <MobileNavItem href="#packages">Packages</MobileNavItem>
              <MobileNavItem href="#templates">Templates</MobileNavItem>
              <MobileNavItem href="#team">Team</MobileNavItem>
              <MobileNavItem href="/contact-us">Contact us</MobileNavItem>
            </motion.ul>
          </nav>
        </motion.div>
    </motion.nav>
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
