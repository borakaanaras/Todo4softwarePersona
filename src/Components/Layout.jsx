export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <div className="max-w-xl mx-auto py-8 px-4">
        {children}
      </div>
    </div>
  )
}
