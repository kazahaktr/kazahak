import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function sendEmailNotification(data: Record<string, unknown>) {
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFY_EMAIL) return
  await resend.emails.send({
    from: 'Hasar Danışmanlık <bildirim@kazahak.com>',
    to: process.env.NOTIFY_EMAIL,
    subject: `Yeni Talep: ${data.ad} — ${data.telefon}`,
    html: `
      <h2>Yeni Lead Geldi</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        <tr><td style="padding:6px 12px;font-weight:bold">Ad Soyad</td><td style="padding:6px 12px">${data.ad}</td></tr>
        <tr style="background:#f5f5f5"><td style="padding:6px 12px;font-weight:bold">Telefon</td><td style="padding:6px 12px">${data.telefon}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold">Araç</td><td style="padding:6px 12px">${data.marka ?? '-'} ${data.model ?? ''} ${data.yil ?? ''}</td></tr>
        <tr style="background:#f5f5f5"><td style="padding:6px 12px;font-weight:bold">KM</td><td style="padding:6px 12px">${data.km ? `${data.km} km` : '-'}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold">Piyasa Değeri</td><td style="padding:6px 12px">${data.piyasa ? `${Number(data.piyasa).toLocaleString('tr-TR')} ₺` : '-'}</td></tr>
        <tr style="background:#f5f5f5"><td style="padding:6px 12px;font-weight:bold">Onarım Bedeli</td><td style="padding:6px 12px">${data.onarim ? `${Number(data.onarim).toLocaleString('tr-TR')} ₺` : '-'}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold">Hasar Bölgesi</td><td style="padding:6px 12px">${data.bolge ?? '-'}</td></tr>
        <tr style="background:#f5f5f5"><td style="padding:6px 12px;font-weight:bold">Tahmini Kayıp</td><td style="padding:6px 12px">${data.min && data.max ? `${Number(data.min).toLocaleString('tr-TR')} – ${Number(data.max).toLocaleString('tr-TR')} ₺` : '-'}</td></tr>
      </table>
      <p style="margin-top:16px;color:#666;font-size:12px">kazahak.com hesaplama formu</p>
    `,
  })
}

async function sendTelegramNotification(data: Record<string, unknown>) {
  const token  = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) return

  const text = [
    `🔔 *Yeni Talep!*`,
    `👤 *Ad:* ${data.ad}`,
    `📞 *Tel:* ${data.telefon}`,
    `🚗 *Araç:* ${data.marka ?? '-'} ${data.model ?? ''} ${data.yil ?? ''}`,
    `📍 *Hasar:* ${data.bolge ?? '-'}`,
    `💰 *Piyasa:* ${data.piyasa ? `${Number(data.piyasa).toLocaleString('tr-TR')} ₺` : '-'}`,
    `🔧 *Onarım:* ${data.onarim ? `${Number(data.onarim).toLocaleString('tr-TR')} ₺` : '-'}`,
  ].join('\n')

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { ad, tel, marka, model, yil, km, piyasa, onarim, bolge, base, min, max } = body

    if (!ad?.trim() || !tel?.trim()) {
      return NextResponse.json({ error: 'Ad ve telefon zorunludur' }, { status: 400 })
    }

    const supabase = createAdminClient()
    const { error } = await supabase.from('leads').insert({
      ad:                  ad.trim(),
      telefon:             tel.trim(),
      arac_marka:          marka || null,
      arac_model:          model || null,
      arac_yil:            yil || null,
      arac_km:             km || null,
      piyasa_degeri:       piyasa || null,
      onarim_bedeli:       onarim || null,
      hasar_bolgesi:       bolge || null,
      tahmini_deger_kaybi: base || null,
      tahmin_min:          min || null,
      tahmin_max:          max || null,
      kaynak:              'hesaplama-formu',
      durum:               'yeni',
      created_at:          new Date().toISOString(),
    })

    if (error) {
      console.error('Supabase insert error:', error)
    }

    await Promise.allSettled([
      sendEmailNotification({ ad: ad.trim(), telefon: tel.trim(), marka, model, yil, km, piyasa, onarim, bolge, min, max }),
      sendTelegramNotification({ ad: ad.trim(), telefon: tel.trim(), marka, model, yil, km, piyasa, onarim, bolge }),
    ])

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Lead route error:', err)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
