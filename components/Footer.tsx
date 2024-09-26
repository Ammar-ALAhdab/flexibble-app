import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

function Footer() {
  return (
    <footer className="footer flexStart">
      <div className="flex items-start flex-col">
        <Image src="/logo-purple.svg" alt="flexibble" width={115} height={38} />{" "}
        <p className="text-start text-sm font-normal mt-5 mb-10 max-w-xs">
          Flexibble is the world's leading community for creatives to share,
          grow, and get hired.
        </p>
        <div className="flex flex-wrap gap-12">
          {footerLinks.map((link) => (
            <FooterColumn title={link.title} links={link.links} />
          ))}
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>@ 2024 Flexibble. All right reserved</p>
        <p className="text-gray"><span className="text-black font-semibold">10,214</span> projects submitted</p>

      </div>
    </footer>
  );
}

export default Footer;
