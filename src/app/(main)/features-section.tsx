import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          왜 Lunch Box를 선택해야 할까요?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="text-4xl mb-4">📍</div>
              <CardTitle>위치 기반 추천</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                현재 위치나 원하는 지역을 입력하면 근처의 최고 맛집들을
                찾아드립니다.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="text-4xl mb-4">🎯</div>
              <CardTitle>세밀한 카테고리</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                한식, 일식, 양식부터 찌개, 정식, 파스타까지 세분화된 카테고리로
                정확한 추천을 받으세요.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="text-4xl mb-4">⚡</div>
              <CardTitle>빠른 선택</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                복잡한 고민은 그만! 몇 번의 클릭만으로 오늘의 완벽한 점심을
                결정하세요.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
