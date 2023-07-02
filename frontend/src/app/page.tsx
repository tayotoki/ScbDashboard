import { MainLayout } from "@/shared/layouts";

export default function Home() {
  return (
    <main>
      <MainLayout content={<div>Main Content</div>} header={<header>Header</header>} sidebar={<div>Sidebar</div>} />
    </main>
  );
}
