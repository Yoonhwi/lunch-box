import { Card, CardContent } from "@/components/ui/card";

const CategoriesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          다양한 음식 카테고리
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { emoji: "🍚", name: "한식", subs: ["찌개", "정식", "비빔밥"] },
            { emoji: "🍣", name: "일식", subs: ["초밥", "라면", "돈카츠"] },
            { emoji: "🍝", name: "양식", subs: ["파스타", "피자", "스테이크"] },
            { emoji: "🍜", name: "중식", subs: ["짜장면", "짬뽕", "탕수육"] },
            { emoji: "🌮", name: "멕시칸", subs: ["타코", "부리또", "나초"] },
            { emoji: "🍛", name: "동남아", subs: ["쌀국수", "팟타이", "커리"] },
            { emoji: "🥗", name: "샐러드", subs: ["그린샐러드", "시저샐러드"] },
            {
              emoji: "☕",
              name: "카페",
              subs: ["브런치", "샌드위치", "디저트"],
            },
          ].map((category) => (
            <Card
              key={category.name}
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">{category.emoji}</div>
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.subs.join(" • ")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
