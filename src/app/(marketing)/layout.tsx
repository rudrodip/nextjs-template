import { marketingConfig } from "@/config/marketing";
import { DefaultNavbar } from "@/components/navbar/default-navbar";
import Link from "next/link";
import ThemeToggleDropDown from "@/components/theme/theme-toggler";
import { Icons } from "@/components/icons";
import { UserAccountNav } from "@/components/navbar/user-account-nav";
import { getCurrentUser } from "@/lib/session";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full md:w-auto sticky top-0 lg:top-2 mx-auto px-5 py-2 flex justify-between gap-4 md:rounded-lg bg-secondary/60 dark:bg-secondary/40 backdrop-blur-md z-40 border-gradient border-gradient-primary only-bottom">
        <Link
          href="/"
          className="hidden md:flex justify-center items-center w-full"
        >
          <Icons.logo />
        </Link>
        <DefaultNavbar mainNav={marketingConfig.mainNav} />
        <div className="flex gap-2 items-center justify-between">
          {user ? (
            <UserAccountNav
              user={{
                name: user.name,
                image: user.image,
                email: user.email,
              }}
            />
          ) : (
            <Link
              href="/login"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              Login
            </Link>
          )}
          <ThemeToggleDropDown />
        </div>
      </header>
      <main className="flex-1 app overflow-x-hidden px-2 md:px-0">
        {children}
      </main>
    </div>
  );
}
