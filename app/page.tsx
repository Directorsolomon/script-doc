import Dashboard from '@/components/Dashboard';
import { ModeToggle } from '@/components/mode-toggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Film Script Review App</h1>
          <ModeToggle />
        </div>
      </header>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}