export function Footer({ total, completed, active }) {
  return (
    <footer className="mt-8 pt-6 border-t border-slate-200 text-center text-sm text-slate-500">
      <p>
        Toplam: <strong className="text-slate-700">{total}</strong>
        {' · '}
        Aktif: <strong className="text-slate-700">{active}</strong>
        {' · '}
        Tamamlanan: <strong className="text-slate-700">{completed}</strong>
      </p>
    </footer>
  )
}
