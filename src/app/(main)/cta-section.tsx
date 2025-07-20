import { Button } from "@/components/ui/button/button";

const CtaSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          지금 바로 시작해보세요!
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          더 이상 점심 메뉴 고민하지 마세요. Lunch Box가 도와드릴게요.
        </p>
        <Button size="lg" className="text-lg px-8 py-6">
          맛집 찾기 시작하기 🚀
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;
