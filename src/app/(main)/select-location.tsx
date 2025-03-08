"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button/button";

type province = "경상남도" | "경기도" | "서울특별시";

type KoreanRegions = {
  [p in province]: string[];
};

const koreaRegions: KoreanRegions = {
  경상남도: [
    "창원시",
    "진주시",
    "통영시",
    "사천시",
    "김해시",
    "밀양시",
    "거제시",
    "양산시",
  ],
  경기도: [
    "수원시",
    "성남시",
    "의정부시",
    "안양시",
    "부천시",
    "광명시",
    "평택시",
    "동두천시",
  ],
  서울특별시: [
    "종로구",
    "중구",
    "용산구",
    "성동구",
    "광진구",
    "동대문구",
    "중랑구",
    "성북구",
  ],
};

const SelectLocation = () => {
  const [selectedProvince, setSelectedProvince] = useState<province | null>(
    null
  );

  return (
    <div id="location-form" className="flex justify-center pt-24">
      <div className="w-content flex flex-col">
        {!selectedProvince && (
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {(Object.keys(koreaRegions) as province[]).map((province) => (
              <Button
                key={province}
                onClick={() => setSelectedProvince(province)}
              >
                {province}
              </Button>
            ))}
          </motion.div>
        )}

        {selectedProvince && (
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {koreaRegions[selectedProvince].map((city) => (
              <Button key={city}>{city}</Button>
            ))}

            <Button onClick={() => setSelectedProvince(null)}>뒤로 가기</Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SelectLocation;
