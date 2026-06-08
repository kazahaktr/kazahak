'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('kz_cookie')) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('kz_cookie', '1')
    setVisible(false)
  }

  function reject() {
    localStorage.setItem('kz_cookie', '0')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-navy border-t border-white/10 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-white/70 text-xs leading-relaxed flex-1">
          🍪 Bu site, deneyiminizi iyileştirmek ve ziyaretçi istatistiklerini ölçmek amacıyla çerezler
          kullanmaktadır. Devam ederek{' '}
          <Link href="/gizlilik-politikasi" className="text-brand hover:underline">Gizlilik Politikamızı</Link>
          {' '}kabul etmiş olursunuz.
        </p>
        <div className="flex gap-2 shrink-0">
          <button onClick={reject}
            className="px-4 py-2 text-xs font-semibold text-white/50 hover:text-white border border-white/20 rounded-lg transition-colors">
            Reddet
          </button>
          <button onClick={accept}
            className="px-4 py-2 text-xs font-bold bg-brand hover:bg-orange-600 text-white rounded-lg transition-colors">
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  )
}
