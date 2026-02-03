import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div>
        <div>
          <div>
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="Job Board Logo"
                width={40}
                height={40}
              />
              <span>Job Board</span>
            </Link>
          </div>
          <div>
            <Link href={"/jobs"}>Browse Jobs</Link>
            <Link href={"/jobs"}>Browse Jobs</Link>
            <Link href={"/jobs"}>Browse Jobs</Link>

          </div>
        </div>
      </div>
    </nav>
  );
}
