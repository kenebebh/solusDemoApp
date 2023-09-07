import { Profile, Navigation, AppTabs, Badges, Powerups } from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen max-w-[375px] mx-auto relative">
      <div className="w-full bg-white h-screen overflow-y-auto">
        <Profile />
        <div className="px-3 pt-5">
          <AppTabs />
          <Badges />
          <Powerups />
        </div>
      </div>
      <Navigation />
    </main>
  );
}
