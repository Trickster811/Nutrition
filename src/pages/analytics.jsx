import { Card } from "../components/analytics.components";

function NutritionDashboardAnalytics(props) {
  return (
    <div
      className={`flex flex-col grow gap-y-10 h-[90vh] w-3/5 p-2 rounded-md bg-white scrollbar overflow-y-auto`}
    >
      <div className="text-xl md:text-3xl font-[SamsungOneB]">Analytics</div>
      <div className="flex flex-wrap justify-evenly md:gap-x-2 gap-y-2">
        <Card title={"Poids en graisse"} />
        <Card title={"Rapport masse grasse / masse maigre"} />
        <Card title={"Indice de masse grasse corporele (IMMC)"} />
        <Card title={"Rapport taille / hanches (RTH) : Gynoide"} />
        <Card title={"Calcul des besoins proteiques"} />
        <Card title={"Poids Glucides"} />
      </div>
    </div>
  );
}

export default NutritionDashboardAnalytics;
