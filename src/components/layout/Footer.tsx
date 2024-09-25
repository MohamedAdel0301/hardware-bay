import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";

const Footer = () => {
  return (
    <footer className="relative mt-auto text-xl">
      <section className="mt-2 flex items-center gap-4">
        <small>&copy; 2024 Mohamed Adel</small>
        <small>
          <Link href="https://github.com/mohamedAdel0301/">
            <DiGithubBadge size={28} />
          </Link>
        </small>
      </section>

      <div className="absolute left-0 top-0 h-[0.1rem] w-full bg-gradient-to-r from-black via-white to-black"></div>
    </footer>
  );
};

export default Footer;
