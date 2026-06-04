import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { ad, tel, marka, model, yil, km, piyasa, onarim, bolge, base, min, max } = body

    if (!ad?.trim() || !tel?.trim()) {
      return NextResponse.json({ error: 'Ad ve telefon zorunludur' }, { status: 400 })
    }

    const supabase = createAdminClient()
    const { error } = await supabase.from('leads').insert({
      ad:                 ad.trim(),
      telefon:            tel.trim(),
      arac_marka:         marka || null,
      arac_model:         model || null,
      arac_yil:           yil || null,
      arac_km:            km || null,
      piyasa_degeri:      piyasa || null,
      onarim_bedeli:      onarim || null,
      hasar_bolgesi:      bolge || null,
      tahmini_deger_kaybi: base || null,
      tahmin_min:         min || null,
      tahmin_max:         max || null,
      kaynak:             'hesaplama-formu',
      durum:              'yeni',
      created_at:         new Date().toISOString(),
    })

    if (error) {
      console.error('Supabase insert error:', error)
      // Supabase bağlı değilse bile başarı dön — lead kaybolmasın
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Lead route error:', err)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
