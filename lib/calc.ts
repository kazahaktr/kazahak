// ─── DEĞER KAYBI HESAPLAMA ENGİNE ─────────────────────────────
// Yargıtay içtihadı ve sektör standartlarına göre katsayılar

const CY = new Date().getFullYear()

const AGE_KM: Record<string, number[]> = {
  '0-1':  [0.30, 0.27, 0.24, 0.20],
  '1-3':  [0.25, 0.22, 0.18, 0.14],
  '3-5':  [0.19, 0.16, 0.13, 0.10],
  '5-7':  [0.14, 0.11, 0.09, 0.07],
  '7-10': [0.09, 0.07, 0.06, 0.04],
  '10+':  [0.05, 0.04, 0.03, 0.02],
}

export const BOLGE: Record<string, { tr: string; icon: string; k: number }> = {
  on:    { tr: 'Ön',     icon: '⬆️', k: 1.00 },
  arka:  { tr: 'Arka',   icon: '⬇️', k: 0.90 },
  yan:   { tr: 'Yan',    icon: '↔️',  k: 0.80 },
  cati:  { tr: 'Çatı',   icon: '🔲',  k: 0.85 },
  coklu: { tr: 'Çoklu',  icon: '🔶',  k: 1.15 },
}

export const BRANDS = [
  'Audi','BMW','Citroën','Dacia','Fiat','Ford','Honda','Hyundai',
  'Jeep','Kia','Land Rover','Mercedes-Benz','Mitsubishi','Nissan',
  'Opel','Peugeot','Porsche','Renault','Seat','Skoda',
  'Toyota','Volkswagen','Volvo','Diğer',
]

export const KM_OPTS = [
  { label: '0 – 30.000 km',      val: 15000  },
  { label: '30.001 – 60.000 km', val: 45000  },
  { label: '60.001 – 100.000 km',val: 80000  },
  { label: '100.000+ km',         val: 130000 },
]

export const YEARS = Array.from({ length: 25 }, (_, i) => 2025 - i)

function getAgeKey(year: number): string {
  const a = CY - year
  if (a <= 1)  return '0-1'
  if (a <= 3)  return '1-3'
  if (a <= 5)  return '3-5'
  if (a <= 7)  return '5-7'
  if (a <= 10) return '7-10'
  return '10+'
}

function getKmIdx(km: number): number {
  if (km <= 30000)  return 0
  if (km <= 60000)  return 1
  if (km <= 100000) return 2
  return 3
}

function getSiddet(repair: number, value: number): number {
  const r = repair / value
  if (r < 0.10) return 0.80
  if (r < 0.20) return 1.00
  if (r < 0.30) return 1.15
  return 1.25
}

export interface CalcInput {
  yil: number
  km: number
  piyasa: number
  onarim: number
  bolge: string
}

export interface CalcResult {
  base: number
  min: number
  max: number
  yk: number
  sd: number
  bk: number
  pct: string
}

export function calcDegerKaybi(input: CalcInput): CalcResult {
  const { yil, km, piyasa, onarim, bolge } = input
  const yk = AGE_KM[getAgeKey(yil)][getKmIdx(km)]
  const sd = getSiddet(onarim, piyasa)
  const bk = BOLGE[bolge]?.k ?? 1
  const base = piyasa * yk * sd * bk
  return {
    base: Math.round(base),
    min:  Math.round(base * 0.78),
    max:  Math.round(base * 1.28),
    yk, sd, bk,
    pct: (onarim / piyasa * 100).toFixed(1),
  }
}

export const tl       = (n: number) => '₺' + new Intl.NumberFormat('tr-TR').format(n)
export const parseNum = (s: string) => Number(String(s).replace(/\D/g, '')) || 0
export const fmtNum   = (v: string) => { const n = parseNum(v); return n ? new Intl.NumberFormat('tr-TR').format(n) : '' }
