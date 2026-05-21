"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Stethoscope,
  Droplets,
  Heart,
  GraduationCap,
  Footprints,
  Building,
  ChevronLeft,
  ChevronRight,
  Calendar,
  CheckCircle,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";

type Step = "service" | "region" | "calendar" | "tutor" | "pet" | "triage" | "confirm" | "done";

interface BookingData {
  service: string;
  serviceLabel: string;
  region: string;
  neighborhood: string;
  date: string;
  time: string;
  tutorName: string;
  tutorPhone: string;
  tutorEmail: string;
  petName: string;
  petSpecies: string;
  petBreed: string;
  petAge: string;
  petWeight: string;
  petNotes: string;
  triageFlags: string[];
}

const serviceOptions = [
  { id: "vet-em-casa", label: "Vet em Casa", icon: <Stethoscope size={22} />, status: "disponivel" },
  { id: "banho-em-casa", label: "Banho em Casa", icon: <Droplets size={22} />, status: "lista" },
  { id: "pet-sitter", label: "Pet Sitter", icon: <Heart size={22} />, status: "lista" },
  { id: "adestramento", label: "Adestramento", icon: <GraduationCap size={22} />, status: "breve" },
  { id: "passeador", label: "Passeador", icon: <Footprints size={22} />, status: "breve" },
  { id: "condominios", label: "Condomínios", icon: <Building size={22} />, status: "disponivel" },
];

const neighborhoods = [
  "Granja Viana",
  "Cotia",
  "São Paulo II",
  "Fazendinha",
  "Alphaville Granja Viana",
  "Outro",
];

const timeSlots = ["08:00", "09:30", "11:00", "13:30", "15:00", "16:30", "18:00"];

const triageQuestions = [
  { id: "falta-ar", label: "O pet está com falta de ar ou dificuldade respiratória?" },
  { id: "convulsao", label: "O pet teve convulsão recentemente?" },
  { id: "sangrando", label: "O pet está sangrando?" },
  { id: "inconsciente", label: "O pet está inconsciente ou não responde?" },
  { id: "toxico", label: "O pet comeu algo tóxico?" },
  { id: "trauma", label: "O pet sofreu queda, acidente ou trauma?" },
  { id: "dor-intensa", label: "O pet está com dor intensa ou gemendo muito?" },
  { id: "sem-urina", label: "O pet está há mais de 24 horas sem urinar?" },
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTHS_PT = [
  "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
  "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",
];
const DAYS_PT = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

export default function SchedulingFlow() {
  const [step, setStep] = useState<Step>("service");
  const [data, setData] = useState<Partial<BookingData>>({});
  const [triageAnswers, setTriageAnswers] = useState<Record<string, boolean>>({});
  const [calendarDate, setCalendarDate] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });

  const hasCritical = Object.values(triageAnswers).some(Boolean);
  const isVet = data.service === "vet-em-casa";
  const serviceNotActive =
    data.service === "adestramento" || data.service === "passeador";
  const serviceInterest =
    data.service === "banho-em-casa" || data.service === "pet-sitter";

  const steps: Step[] = isVet
    ? ["service", "region", "calendar", "tutor", "pet", "triage", "confirm"]
    : ["service", "region", "calendar", "tutor", "pet", "confirm"];

  const currentIndex = steps.indexOf(step);

  const goNext = () => {
    const next = steps[currentIndex + 1];
    if (next) setStep(next);
    else setStep("done");
  };
  const goBack = () => {
    const prev = steps[currentIndex - 1];
    if (prev) setStep(prev);
  };

  const progressPct = step === "done" ? 100 : Math.round((currentIndex / (steps.length - 1)) * 100);

  const renderCalendar = () => {
    const { year, month } = calendarDate;
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const today = new Date();
    const cells = [];

    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);

    const isPast = (d: number) => {
      const cellDate = new Date(year, month, d);
      const todayMid = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      return cellDate < todayMid;
    };
    const isSelected = (d: number) => {
      return data.date === `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    };

    return (
      <div className="bg-white rounded-2xl border border-[#F6EFE6] p-5">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() =>
              setCalendarDate((prev) => {
                const d = new Date(prev.year, prev.month - 1);
                return { year: d.getFullYear(), month: d.getMonth() };
              })
            }
            className="p-2 rounded-lg hover:bg-[#F6EFE6] transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="font-semibold text-[#243C4A] text-sm" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
            {MONTHS_PT[month]} {year}
          </span>
          <button
            onClick={() =>
              setCalendarDate((prev) => {
                const d = new Date(prev.year, prev.month + 1);
                return { year: d.getFullYear(), month: d.getMonth() };
              })
            }
            className="p-2 rounded-lg hover:bg-[#F6EFE6] transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS_PT.map((d) => (
            <div key={d} className="text-center text-xs font-medium text-[#5F6F5A] py-1">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {cells.map((d, i) => (
            <div key={i}>
              {d === null ? (
                <div />
              ) : (
                <button
                  disabled={isPast(d)}
                  onClick={() => {
                    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
                    setData((prev) => ({ ...prev, date: dateStr, time: undefined }));
                  }}
                  className={`w-full aspect-square rounded-lg text-sm font-medium transition-colors ${
                    isPast(d)
                      ? "text-[#5F6F5A]/30 cursor-not-allowed"
                      : isSelected(d)
                      ? "bg-[#243C4A] text-[#FFF7EA]"
                      : "hover:bg-[#DFF3E8] text-[#243C4A]"
                  }`}
                >
                  {d}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (step === "done") {
    return (
      <div className="text-center py-16 max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-full bg-[#DFF3E8] flex items-center justify-center text-[#2F7D5A] mx-auto mb-6">
          <CheckCircle size={32} />
        </div>
        <h2
          className="text-2xl font-bold text-[#243C4A] mb-3"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          Agendamento recebido.
        </h2>
        <p className="text-[#5F6F5A] mb-8">
          A equipe Vem Aqui Pet entrará em contato para confirmar os detalhes do seu
          agendamento por WhatsApp ou e-mail.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/5511999999999"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2F7D5A] text-white text-sm font-semibold hover:bg-[#266a4b] transition-colors"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            <MessageCircle size={15} />
            Falar no WhatsApp
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#F6EFE6] text-[#243C4A] text-sm font-semibold hover:bg-[#FFF7EA] transition-colors"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[#5F6F5A] font-medium">
            Passo {currentIndex + 1} de {steps.length}
          </span>
          <span className="text-xs text-[#5F6F5A]">{progressPct}%</span>
        </div>
        <div className="h-2 bg-[#F6EFE6] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#D9906A] rounded-full transition-all duration-300"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Step: Service */}
      {step === "service" && (
        <div>
          <h2
            className="text-xl font-bold text-[#243C4A] mb-2"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Qual serviço você precisa?
          </h2>
          <p className="text-sm text-[#5F6F5A] mb-6">
            Selecione o tipo de atendimento para verificar disponibilidade.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {serviceOptions.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setData((prev) => ({ ...prev, service: s.id, serviceLabel: s.label }));
                  if (s.status !== "breve" && s.status !== "lista") goNext();
                }}
                className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all ${
                  data.service === s.id
                    ? "border-[#D9906A] bg-[#D9906A]/5"
                    : "border-[#F6EFE6] bg-white hover:border-[#D9906A]/40"
                } ${s.status !== "disponivel" ? "opacity-70" : ""}`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    data.service === s.id ? "bg-[#D9906A] text-white" : "bg-[#FFF7EA] text-[#D9906A]"
                  }`}
                >
                  {s.icon}
                </div>
                <span
                  className="font-semibold text-[#243C4A] text-sm text-center"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {s.label}
                </span>
                {s.status === "lista" && (
                  <span className="text-[10px] font-medium text-[#D9906A] bg-[#D9906A]/10 px-2 py-0.5 rounded-full">
                    Lista de interesse
                  </span>
                )}
                {s.status === "breve" && (
                  <span className="text-[10px] font-medium text-[#5F6F5A] bg-[#F6EFE6] px-2 py-0.5 rounded-full">
                    Em breve
                  </span>
                )}
              </button>
            ))}
          </div>

          {(serviceNotActive || serviceInterest) && data.service && (
            <div className="mt-6 p-5 rounded-xl bg-[#FFF7EA] border border-[#F6EFE6]">
              {serviceNotActive && (
                <>
                  <p className="font-semibold text-[#243C4A] text-sm mb-2" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                    Este serviço estará disponível em breve.
                  </p>
                  <p className="text-sm text-[#5F6F5A] mb-4">
                    Deixe seu contato para ser avisado quando o {data.serviceLabel} estiver disponível na sua região.
                  </p>
                </>
              )}
              {serviceInterest && (
                <>
                  <p className="font-semibold text-[#243C4A] text-sm mb-2" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                    Este serviço está na lista de interesse.
                  </p>
                  <p className="text-sm text-[#5F6F5A] mb-4">
                    Cadastre seu interesse e seja notificado quando o {data.serviceLabel} estiver disponível na sua área.
                  </p>
                </>
              )}
              <button
                onClick={goNext}
                className="px-5 py-2.5 rounded-xl bg-[#2F7D5A] text-white text-sm font-semibold hover:bg-[#266a4b] transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Entrar na lista de interesse
              </button>
            </div>
          )}

          {data.service === "vet-em-casa" && (
            <div className="mt-6 text-right">
              <button
                onClick={goNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Continuar <ChevronRight size={15} />
              </button>
            </div>
          )}

          {data.service === "condominios" && (
            <div className="mt-6 text-right">
              <button
                onClick={goNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Continuar <ChevronRight size={15} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Step: Region */}
      {step === "region" && (
        <div>
          <h2
            className="text-xl font-bold text-[#243C4A] mb-2"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Qual é a sua região?
          </h2>
          <p className="text-sm text-[#5F6F5A] mb-6">
            Informe seu bairro ou condomínio para verificar disponibilidade.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {neighborhoods.map((n) => (
              <button
                key={n}
                onClick={() => setData((prev) => ({ ...prev, neighborhood: n }))}
                className={`p-4 rounded-xl border-2 text-sm font-medium text-left transition-all ${
                  data.neighborhood === n
                    ? "border-[#D9906A] bg-[#D9906A]/5 text-[#D9906A]"
                    : "border-[#F6EFE6] bg-white text-[#243C4A] hover:border-[#D9906A]/40"
                }`}
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {n}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-medium text-[#243C4A] mb-1.5">Complemento (condomínio, rua)</label>
              <input
                type="text"
                value={data.region ?? ""}
                onChange={(e) => setData((prev) => ({ ...prev, region: e.target.value }))}
                placeholder="Ex: Condomínio Granja Viana I"
                className="w-full px-4 py-2.5 rounded-xl border border-[#F6EFE6] bg-white text-sm text-[#243C4A] focus:outline-none focus:ring-2 focus:ring-[#D9906A]/30"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#243C4A] mb-1.5">CEP</label>
              <input
                type="text"
                placeholder="00000-000"
                className="w-full px-4 py-2.5 rounded-xl border border-[#F6EFE6] bg-white text-sm text-[#243C4A] focus:outline-none focus:ring-2 focus:ring-[#D9906A]/30"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={goBack} className="flex items-center gap-1.5 text-sm text-[#5F6F5A] hover:text-[#243C4A]">
              <ChevronLeft size={15} /> Voltar
            </button>
            <button
              onClick={goNext}
              disabled={!data.neighborhood}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Continuar <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Step: Calendar */}
      {step === "calendar" && (
        <div>
          <h2
            className="text-xl font-bold text-[#243C4A] mb-2"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Escolha a data e o horário
          </h2>
          <p className="text-sm text-[#5F6F5A] mb-6">
            Selecione uma data e depois um horário disponível.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {renderCalendar()}
            <div>
              <p className="text-sm font-semibold text-[#243C4A] mb-4" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                {data.date ? `Horários disponíveis em ${data.date.split("-").reverse().join("/")}:` : "Selecione uma data primeiro"}
              </p>
              {data.date && (
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setData((prev) => ({ ...prev, time: t }))}
                      className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                        data.time === t
                          ? "border-[#D9906A] bg-[#D9906A]/5 text-[#D9906A]"
                          : "border-[#F6EFE6] bg-white text-[#243C4A] hover:border-[#D9906A]/40"
                      }`}
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button onClick={goBack} className="flex items-center gap-1.5 text-sm text-[#5F6F5A] hover:text-[#243C4A]">
              <ChevronLeft size={15} /> Voltar
            </button>
            <button
              onClick={goNext}
              disabled={!data.date || !data.time}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Continuar <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Step: Tutor */}
      {step === "tutor" && (
        <div>
          <h2 className="text-xl font-bold text-[#243C4A] mb-2" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
            Dados do tutor
          </h2>
          <p className="text-sm text-[#5F6F5A] mb-6">Informe seus dados para contato e confirmação.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              { key: "tutorName", label: "Nome completo", placeholder: "Seu nome" },
              { key: "tutorPhone", label: "WhatsApp", placeholder: "(11) 99999-9999" },
              { key: "tutorEmail", label: "E-mail", placeholder: "seu@email.com", full: true },
            ].map((f) => (
              <div key={f.key} className={f.full ? "sm:col-span-2" : ""}>
                <label className="block text-xs font-medium text-[#243C4A] mb-1.5">{f.label}</label>
                <input
                  type={f.key === "tutorEmail" ? "email" : "text"}
                  value={(data as Record<string, string>)[f.key] ?? ""}
                  onChange={(e) => setData((prev) => ({ ...prev, [f.key]: e.target.value }))}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#F6EFE6] bg-white text-sm text-[#243C4A] focus:outline-none focus:ring-2 focus:ring-[#D9906A]/30"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            <button onClick={goBack} className="flex items-center gap-1.5 text-sm text-[#5F6F5A] hover:text-[#243C4A]">
              <ChevronLeft size={15} /> Voltar
            </button>
            <button
              onClick={goNext}
              disabled={!data.tutorName || !data.tutorPhone}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Continuar <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Step: Pet */}
      {step === "pet" && (
        <div>
          <h2 className="text-xl font-bold text-[#243C4A] mb-2" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
            Dados do pet
          </h2>
          <p className="text-sm text-[#5F6F5A] mb-6">Informe os dados do animal que será atendido.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              { key: "petName", label: "Nome do pet", placeholder: "Nome" },
              {
                key: "petSpecies",
                label: "Espécie",
                type: "select",
                opts: ["Cachorro", "Gato", "Outro"],
              },
              { key: "petBreed", label: "Raça", placeholder: "Ex: Labrador" },
              { key: "petAge", label: "Idade", placeholder: "Ex: 3 anos" },
              { key: "petWeight", label: "Peso aproximado", placeholder: "Ex: 12 kg" },
              { key: "petNotes", label: "Observações", placeholder: "Alergias, medicamentos em uso...", full: true },
            ].map((f) => (
              <div key={f.key} className={(f as { full?: boolean }).full ? "sm:col-span-2" : ""}>
                <label className="block text-xs font-medium text-[#243C4A] mb-1.5">{f.label}</label>
                {(f as { type?: string }).type === "select" ? (
                  <select
                    value={(data as Record<string, string>)[f.key] ?? ""}
                    onChange={(e) => setData((prev) => ({ ...prev, [f.key]: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#F6EFE6] bg-white text-sm text-[#243C4A] focus:outline-none focus:ring-2 focus:ring-[#D9906A]/30"
                  >
                    <option value="">Selecione</option>
                    {((f as { opts?: string[] }).opts ?? []).map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    value={(data as Record<string, string>)[f.key] ?? ""}
                    onChange={(e) => setData((prev) => ({ ...prev, [f.key]: e.target.value }))}
                    placeholder={(f as { placeholder?: string }).placeholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#F6EFE6] bg-white text-sm text-[#243C4A] focus:outline-none focus:ring-2 focus:ring-[#D9906A]/30"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            <button onClick={goBack} className="flex items-center gap-1.5 text-sm text-[#5F6F5A] hover:text-[#243C4A]">
              <ChevronLeft size={15} /> Voltar
            </button>
            <button
              onClick={goNext}
              disabled={!data.petName}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Continuar <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Step: Triage (Vet em Casa only) */}
      {step === "triage" && (
        <div>
          <h2 className="text-xl font-bold text-[#243C4A] mb-2" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
            Triagem de segurança
          </h2>
          <p className="text-sm text-[#5F6F5A] mb-6">
            Responda às perguntas abaixo com honestidade. Isso garante que o atendimento em casa
            seja adequado para o seu pet.
          </p>
          <div className="space-y-3 mb-6">
            {triageQuestions.map((q) => (
              <div
                key={q.id}
                className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white border border-[#F6EFE6]"
              >
                <p className="text-sm text-[#243C4A] flex-1">{q.label}</p>
                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => setTriageAnswers((prev) => ({ ...prev, [q.id]: true }))}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      triageAnswers[q.id] === true
                        ? "bg-[#E98168] text-white"
                        : "bg-[#F6EFE6] text-[#5F6F5A] hover:bg-[#E98168]/20"
                    }`}
                  >
                    Sim
                  </button>
                  <button
                    onClick={() => setTriageAnswers((prev) => ({ ...prev, [q.id]: false }))}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      triageAnswers[q.id] === false
                        ? "bg-[#DFF3E8] text-[#2F7D5A]"
                        : "bg-[#F6EFE6] text-[#5F6F5A] hover:bg-[#DFF3E8]/60"
                    }`}
                  >
                    Não
                  </button>
                </div>
              </div>
            ))}
          </div>

          {hasCritical && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#E98168]/10 border border-[#E98168]/30 mb-6">
              <AlertTriangle size={18} className="text-[#E98168] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#243C4A] text-sm mb-1" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                  Atenção: seu pet pode precisar de atendimento urgente.
                </p>
                <p className="text-sm text-[#5F6F5A]">
                  Pelo que você informou, este caso pode exigir atendimento de urgência ou
                  estrutura hospitalar. Nossa equipe pode orientar o melhor encaminhamento, mas
                  o atendimento domiciliar pode não ser adequado. Entre em contato pelo WhatsApp
                  antes de confirmar.
                </p>
                <a
                  href="https://wa.me/5511999999999"
                  className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-[#2F7D5A] hover:underline"
                >
                  <MessageCircle size={14} /> Falar no WhatsApp
                </a>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between">
            <button onClick={goBack} className="flex items-center gap-1.5 text-sm text-[#5F6F5A] hover:text-[#243C4A]">
              <ChevronLeft size={15} /> Voltar
            </button>
            <button
              onClick={goNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              {hasCritical ? "Ver resumo mesmo assim" : "Continuar"}
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Step: Confirm */}
      {step === "confirm" && (
        <div>
          <h2 className="text-xl font-bold text-[#243C4A] mb-2" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
            Confirmar agendamento
          </h2>
          <p className="text-sm text-[#5F6F5A] mb-6">Revise as informações antes de confirmar.</p>

          <div className="rounded-2xl bg-white border border-[#F6EFE6] p-6 space-y-4 mb-6">
            {[
              { label: "Serviço", value: data.serviceLabel },
              { label: "Região", value: [data.neighborhood, data.region].filter(Boolean).join(", ") },
              { label: "Data", value: data.date ? data.date.split("-").reverse().join("/") : "" },
              { label: "Horário", value: data.time },
              { label: "Tutor", value: [data.tutorName, data.tutorPhone].filter(Boolean).join(" | ") },
              { label: "Pet", value: [data.petName, data.petSpecies, data.petBreed].filter(Boolean).join(", ") },
              ...(data.petNotes ? [{ label: "Observações", value: data.petNotes }] : []),
            ].map((row) => (
              <div key={row.label} className="flex items-start gap-4 py-2 border-b border-[#F6EFE6] last:border-0">
                <span className="text-xs font-semibold text-[#5F6F5A] w-24 flex-shrink-0 pt-0.5">{row.label}</span>
                <span className="text-sm text-[#243C4A]">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => setStep("done")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <Calendar size={15} />
              Confirmar agendamento
            </button>
            <a
              href="https://wa.me/5511999999999"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2F7D5A] text-white text-sm font-semibold hover:bg-[#266a4b] transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <MessageCircle size={15} />
              Falar no WhatsApp
            </a>
            <button
              onClick={goBack}
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 text-sm text-[#5F6F5A] hover:text-[#243C4A] px-4 py-3.5"
            >
              <ChevronLeft size={15} /> Alterar horário
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
