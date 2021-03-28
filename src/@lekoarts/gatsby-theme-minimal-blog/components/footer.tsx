/** @jsx jsx */
import { jsx, Link } from 'theme-ui';

const Footer = () => {
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
      <div>Built with ☕</div>
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
