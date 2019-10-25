import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useSiteMetadata } from "../components/hooks/use-site-metadata"

const NavMenu = ({
  menuData = [],
  locale,
  navClass,
  menuItemClickHandler,
  activeHash,
  sideDrawerOpen,
}) => {
  const { languages } = useSiteMetadata()
  return (
    <>
      <nav className={navClass}>
        <ul className="nav-menu">
          {menuData.map(menu => {
            const toHash =
              menu.node.metadata.hash === "home"
                ? "#"
                : `#${menu.node.metadata.hash}`
            return (
              <li key={menu.node.metadata.title}>
                <a
                  className={
                    menu.node.metadata.hash === activeHash ? "active" : ""
                  }
                  onClick={() =>
                    menuItemClickHandler(
                      menu.node.metadata.hash,
                      sideDrawerOpen
                    )
                  }
                >
                  {menu.node.metadata.title}
                </a>
              </li>
            )
          })}

          <li>
            {languages.map(lang => {
              return (
                <Link key={lang.slug} className="linkFlag" to={`/${lang.slug}`}>
                  <img
                    src={"/img/" + lang.localized_name[locale] + ".png"}
                  ></img>
                </Link>
              )
            })}
          </li>
        </ul>
      </nav>
    </>
  )
}

NavMenu.propTypes = {
  data: PropTypes.object,
}

export default NavMenu
