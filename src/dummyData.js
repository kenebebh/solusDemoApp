import badge from "../public/badge.png";
import slashed from "../public/slashedIcon.png";
import insured from "../public/insuredIcon.png";
import sus from "../public/susIcon.png";

export const BadgesData = [
  {
    imgSrc: badge,
    badgeTitle: "Zlarrior",
    badgeText: "Youre now a Solus Warrior",
  },
  {
    imgSrc: badge,
    badgeTitle: "Zlader",
    badgeText: "Youre now a Solus Trader",
  },
];

export const PowerUpsData = [
  {
    imgSrc: slashed,
    powerupTitle: "Slashed",
    powerupText: "5% discount on each share price",
    powerUpStatus: "Activated",
  },
  {
    imgSrc: insured,
    powerupTitle: "Insured",
    powerupText: "10% loss managed on 1 futures",
    powerUpStatus: "Activated",
  },
  {
    imgSrc: sus,
    powerupTitle: "SUS Sale",
    powerupText: "20% off for 1000 SUS purchase",
    powerUpStatus: "Activated",
  },
];
