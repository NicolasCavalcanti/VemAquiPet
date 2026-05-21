import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import SchedulingFlow from "@/components/SchedulingFlow";

export const metadata: Metadata = {
  title: "Agendar Serviço Pet: Vet em Casa, Banho e mais",
  description:
    "Agende serviços pet em domicílio na Granja Viana, Cotia e região. Escolha o serviço, data e horário disponíveis.",
};

export function generateStaticParams() {
  return [
    { service: "vet-em-casa" },
    { service: "banho-em-casa" },
    { service: "pet-sitter" },
    { service: "adestramento" },
    { service: "passeador" },
    { service: "condominios" },
  ];
}

interface Props {
  params: Promise<{ service: string }>;
}

export default async function AgendarServicePage({ params }: Props) {
  const { service } = await params;

  return (
    <>
      <section className="bg-[#243C4A] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Agendar", href: "/agendar" }]} />
          <div className="mt-5">
            <h1
              className="text-2xl md:text-4xl font-extrabold text-[#FFF7EA] mb-2"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Agendar serviço
            </h1>
            <p className="text-[#FFF7EA]/60 text-sm">
              Escolha o serviço, sua região, a data e o horário. Leva menos de 5 minutos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#F6EFE6] min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SchedulingFlow initialService={service} />
        </div>
      </section>
    </>
  );
}
