import { RiskLevel } from '../risk-profile/entities/risk-profile.entity';

export function calculateRiskLevel(
  weight: number,
  height: number,
  cardiovascularDisease: boolean,
): RiskLevel {
  console.table(RiskLevel);

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  console.log(bmi);

  // if ( bmi > 30) {
  //    RiskLevel.HIGH;
  // } else if (cardiovascularDisease || bmi > 25) {
  //   return RiskLevel.MODERATE;
  // } else {
  //   return RiskLevel.LOW;
  // }

  return bmi > 30
    ? RiskLevel.HIGH
    : cardiovascularDisease || bmi > 25
      ? RiskLevel.MODERATE
      : RiskLevel.LOW;
}
