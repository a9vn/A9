import React from "react";
import AnimatedContent from "../components/UI/AnimatedContent";

const classes = [
  {
    name: "Vanguard",
    icon: "https://raw.githubusercontent.com/ArknightsAssets/ArknightsAssets2/refs/heads/cn/assets/dyn/arts/ui/[uc]charcommon/dynprofession/icon_profession_pioneer.png",
  },
  {
    name: "Guard",
    icon: "https://raw.githubusercontent.com/ArknightsAssets/ArknightsAssets2/refs/heads/cn/assets/dyn/arts/ui/[uc]charcommon/dynprofession/icon_profession_warrior.png",
  },
  {
    name: "Defender",
    icon: "https://raw.githubusercontent.com/ArknightsAssets/ArknightsAssets2/refs/heads/cn/assets/dyn/arts/ui/%5Buc%5Dcharcommon/dynprofession/icon_profession_tank.png",
  },
  {
    name: "Sniper",
    icon: "https://raw.githubusercontent.com/ArknightsAssets/ArknightsAssets2/refs/heads/cn/assets/dyn/arts/ui/[uc]charcommon/dynprofession/icon_profession_sniper.png",
  },
  {
    name: "Caster",
    icon: "https://raw.githubusercontent.com/ArknightsAssets/ArknightsAssets2/refs/heads/cn/assets/dyn/arts/ui/[uc]charcommon/dynprofession/icon_profession_caster.png",
  },
  {
    name: "Medic",
    icon: "https://raw.githubusercontent.com/ArknightsAssets/ArknightsAssets2/refs/heads/cn/assets/dyn/arts/ui/[uc]charcommon/dynprofession/icon_profession_medic.png",
  },
  {
    name: "Supporter",
    icon: "https://raw.githubusercontent.com/ArknightsAssets/ArknightsAssets2/refs/heads/cn/assets/dyn/arts/ui/[uc]charcommon/dynprofession/icon_profession_support.png",
  },
  {
    name: "Specialist",
    icon: "https://raw.githubusercontent.com/ArknightsAssets/ArknightsAssets2/refs/heads/cn/assets/dyn/arts/ui/[uc]charcommon/dynprofession/icon_profession_special.png",
  },
];

const Operator = () => {
  return (
    <div
      id="operator"
      className="fullpage-section bg-gradient-to-br from-green-900 via-black to-green-900"
    >
      <div className="w-full h-full">
        <div className="w-full max-w-6xl mx-auto px-6 h-full flex flex-col justify-center items-center">
          {/* Upper div: Title and class buttons on one row */}
          <div className="w-full flex items-center justify-start mb-4 gap-4 pt-12">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Operator
            </h1>
            <div className="flex flex-wrap justify-end gap-2 ml-auto pt-4">
              {classes.map((cls, index) => (
                <button
                  key={index}
                  className="bg-[#242424] p-2 rounded-lg backdrop-blur-sm bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 cursor-pointer transform hover:scale-105 flex flex-col items-center justify-center group w-20"
                  title={cls.name}
                >
                  <img
                    src={cls.icon}
                    alt={cls.name}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-xs text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {cls.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-gray-600 my-4"></div>

          {/* Lower div: Scrollable list with 8 avatars per row */}
          <div className="w-full flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {/* Placeholders for operator avatars */}
              {Array(36)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-[#1a1a1a] rounded-xl flex flex-col items-center justify-center aspect-square hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-gray-600 rounded-full mb-2"></div>
                    <span className="text-xs text-gray-300">
                      Operator {index + 1}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operator;
