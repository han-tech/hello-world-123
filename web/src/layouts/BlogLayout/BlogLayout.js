import { Link, routes } from '@redwoodjs/router'
const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Redwood Blog</Link>
        </h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to={routes.about()}>About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default BlogLayout
