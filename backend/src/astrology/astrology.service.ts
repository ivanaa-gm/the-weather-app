import { Injectable } from '@nestjs/common';
import * as SunCalc from 'suncalc';

export interface AstrologyResponse {
  moonPhase: string;
  zodiacSign: string;
}

@Injectable()
export class AstrologyService {
  async getAstrology(): Promise<AstrologyResponse[]> {
    const today = new Date();

    const days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      return date;
    });

    return days.map((date) => {
      const phase = SunCalc.getMoonIllumination(date).phase;
      const moonPhase = this.getMoonPhaseText(phase);
      const zodiacSign = this.getZodiacSign(date);

      return { moonPhase, zodiacSign };
    });
  }

  private getMoonPhaseText(phase: number): string {
  if (phase < 0.03 || phase > 0.97) return 'new-moon';
  if (phase >= 0.03 && phase < 0.22) return 'waxing-crescent';
  if (phase >= 0.22 && phase < 0.28) return 'first-quarter';
  if (phase >= 0.28 && phase < 0.47) return 'waxing-gibbous';
  if (phase >= 0.47 && phase <= 0.53) return 'full-moon';
  if (phase > 0.53 && phase < 0.72) return 'waning-gibbous';
  if (phase >= 0.72 && phase < 0.78) return 'last-quarter';
  return 'waning-crescent';
}


  private getZodiacSign(date: Date): string {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    const zodiacSigns = [
      { sign: 'capricorn', start: '12-22', end: '01-19' },
      { sign: 'aquarius', start: '01-20', end: '02-18' },
      { sign: 'pisces', start: '02-19', end: '03-20' },
      { sign: 'aries', start: '03-21', end: '04-19' },
      { sign: 'taurus', start: '04-20', end: '05-20' },
      { sign: 'gemini', start: '05-21', end: '06-20' },
      { sign: 'cancer', start: '06-21', end: '07-22' },
      { sign: 'leo', start: '07-23', end: '08-22' },
      { sign: 'virgo', start: '08-23', end: '09-22' },
      { sign: 'libra', start: '09-23', end: '10-22' },
      { sign: 'scorpio', start: '10-23', end: '11-21' },
      { sign: 'sagittarius', start: '11-22', end: '12-21' },
    ];

    for (const { sign, start, end } of zodiacSigns) {
      if (start <= end) {
        if (formattedDate >= start && formattedDate <= end) return sign;
      } else {
        if (formattedDate >= start || formattedDate <= end) return sign;
      }
    }
    return '';
  }
}
