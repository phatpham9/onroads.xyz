/** @jsx jsx */
import { jsx, Link } from 'theme-ui';
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [4],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy;{new Date().getFullYear()} by {siteTitle}
      </div>
      <div>
        Hosted
        {` `}
        on
        {` `}
        <Link
          aria-label="Link to the website's GitHub repository"
          href="https://github.com/phatpham9/onroads.xyz"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
