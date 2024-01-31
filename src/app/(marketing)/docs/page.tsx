import { siteConfig } from "@/config/site";
export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="head-text-sm primary-gradient text-center mt-8 md:mt-16 lg:mt-24">
        Docs Page
      </h1>
      <h1 className="head-text-md primary-gradient text-center mt-8 md:mt-16 lg:mt-24">
        {siteConfig.name}
      </h1>
      <p className="text-2xl my-4 text-center max-w-2xl mx-auto">
        {siteConfig.description}
      </p>
    </main>
  );
}
