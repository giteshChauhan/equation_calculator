import { BsGithub } from "react-icons/bs";
import "../../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>{"Format: operand-(operator)-operand-comparison-rhs"}</div>
      <a
        className="myLinks"
        href="https://github.com/giteshChauhan/equation_calculator/tree/master/server/client"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub size="2rem" />
        Frontend
      </a>
      <a
        className="myLinks"
        href="https://github.com/giteshChauhan/equation_calculator/tree/master/server"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub size="2rem" />
        Backend
      </a>
    </div>
  );
};

export default Footer;
