import { SidebarNav } from '@/components/dashboard/sidebar-nav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarNav />
      <main className="flex-1 md:ml-64 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
