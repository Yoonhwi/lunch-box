const HowWorkSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          사용법은 이렇게 간단해요!
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">위치 입력</h3>
            <p className="text-muted-foreground">
              현재 위치나 원하는 지역을 입력하세요
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">카테고리 선택</h3>
            <p className="text-muted-foreground">
              오늘 먹고 싶은 음식 종류를 선택하세요
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">맛집 발견</h3>
            <p className="text-muted-foreground">
              추천받은 맛집 중에서 선택하고 출발!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorkSection;
