import Link from "next/link";
import {
  RiFacebookFill,
  RiGithubFill,
  RiTranslate,
  RiTwitterFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="container fs-4">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 me-2 mb-md-0 text-muted lh-1">
            <span className="mb-3 mb-md-0 text-muted">
              <RiTranslate /> © 2022{" "}
              <Link
                href="https://www.marwan.gq/"
                className="text-decoration-none text-muted text-hover"
              >
                Marwan Zayed
              </Link>
            </span>
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-muted icons"
              href="https://twitter.com/marwanzayed20"
            >
              <RiTwitterFill />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted icons"
              href="https://www.facebook.com/marwanzayed13/"
            >
              <RiFacebookFill />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted icons"
              href="https://github.com/marwanzayed-coder"
            >
              <RiGithubFill />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
