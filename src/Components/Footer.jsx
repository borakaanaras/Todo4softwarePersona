export function Footer({ total, completed, active }) {
  return (
    <footer className="mt-8 pt-6 border-t border-zinc-700 text-center text-sm text-zinc-400">
      <p>
        Toplam: <strong className="text-zinc-300">{total}</strong>
        {' · '}
        Aktif: <strong className="text-zinc-300">{active}</strong>
        {' · '}
        Tamamlanan: <strong className="text-zinc-300">{completed}</strong>
      </p>
    </footer>
  )
}
