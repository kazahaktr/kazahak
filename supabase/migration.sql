-- ─── LEADS TABLE ────────────────────────────────────────────
-- Supabase SQL Editor'a yapıştırıp çalıştırın

create table if not exists public.leads (
  id                  uuid default gen_random_uuid() primary key,
  created_at          timestamptz default now(),
  ad                  text not null,
  telefon             text not null,
  arac_marka          text,
  arac_model          text,
  arac_yil            int,
  arac_km             int,
  piyasa_degeri       numeric,
  onarim_bedeli       numeric,
  hasar_bolgesi       text,
  tahmini_deger_kaybi numeric,
  tahmin_min          numeric,
  tahmin_max          numeric,
  kaynak              text default 'hesaplama-formu',
  durum               text default 'yeni',   -- yeni | aranacak | tamamlandi
  notlar              text
);

-- RLS: sadece service role okuyabilir
alter table public.leads enable row level security;
create policy "service_role_only" on public.leads
  for all using (auth.role() = 'service_role');

-- ─── OPTIONAL: Email notification via Supabase Webhooks ─────
-- Supabase Dashboard > Database > Webhooks > New Webhook
-- Table: leads | Events: INSERT | URL: your webhook endpoint
