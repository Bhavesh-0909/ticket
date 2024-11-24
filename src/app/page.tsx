import AppLayout from "@/components/app-layout";
import HomePage from "@/components/pages/home-page";

export default function Home() {
  return (
    <AppLayout>
      <div className="h-full w-full font-[family-name:var(--font-geist-sans)] p-4 pt-0">
        <HomePage />
      </div>
    </AppLayout>
  );
}
