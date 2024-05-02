import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        chartData={{
          colors: ["#e4e8ef", "#475be8"],
          percentFillValue: 40,
          chartInfo: {
            targetName: "Aşısı Gelen",
            outName: "Aşılanmış",
          },
        }}
        cardInfo={{
          title: "Hayvanlarının aşı vakti gelmiş olabilir.",
          value: "/vaccination.jpg",
          text: "Aşılanması gereken 5 hayvanın kaldı.",
        }}
      />
      <AreaCard
        chartData={{
          colors: ["#e4e8ef", "#4ce13f"],
          percentFillValue: 40,
          chartInfo: {
            targetName: "Mevcut",
            outName: "Tahmini Gerekli",
          },
        }}
        cardInfo={{
          title: "Aylık yem sarfiyatını aldın mı? Girşini yapalım.",
          value: "/feeding.png",
          text: "Hala 5 ton yemin var.",
        }}
      />
      {/* <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "In Escrow",
          value: "/shipment.png",
          text: "Available to payout",
        }}
      /> */}
      <AreaCard
        chartData={{
          colors: ["#e4e8ef", "#f29a2e"],
          percentFillValue: 40,
          chartInfo: {
            targetName: "Sağılan Süt",
            outName: "Tahmini Gelecek Süt",
          },
        }}
        cardInfo={{
          title: "İşlerin nasıl gittiğine bakmak ister misin?",
          value: "/rapor.png",
          text: "Buradan bakabilirsin.",
        }}
      />
    </section>
  );
};

export default AreaCards;