import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin']
})

export const Logo = () => {
  return (
    <Link href="/">
      <span className={`text-xl font-bold tracking-tight ${plusJakartaSans.className}`}>
        Absorb
      </span>
    </Link>);
}
