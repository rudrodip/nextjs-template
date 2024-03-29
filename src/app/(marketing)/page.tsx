import { siteConfig } from "@/config/site";
export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="head-text-md max-w-7xl primary-gradient text-center mt-8 md:mt-16 lg:mt-24">
        {siteConfig.name}
      </h1>
      <p className="text-2xl my-4 text-center max-w-2xl mx-auto">
        {siteConfig.description}
      </p>
      <a
        href={siteConfig.links.github}
        target="_blank"
        className="text-center text-blue-500"
      >
        Github
      </a>
    </main>
  );
}
