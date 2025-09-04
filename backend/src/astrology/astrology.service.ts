import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { HttpException, HttpStatus } from '@nestjs/common';

export interface AstrologyResponse {
  moonPhase: string;
  moonrise: string;
  moonset: string;
  sign: string;
}

@Injectable()
export class AstrologyService {
  constructor(private httpService: HttpService) {}

  async getAstrology(
    latitude: string,
    lоngitude: string,
  ): Promise<AstrologyResponse> {
    const apiKey = process.env.STORMGLASS_API_KEY;
    if (!apiKey) {
      throw new HttpException(
        'API key not found. ',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const url = `https://api.stormglass.io/v2/astronomy/point?lat=${latitude}&lng=${lоngitude}`;
    try {
      const response = await firstValueFrom(
        this.httpService.get(url, {
          headers: {
            Authorization: apiKey,
          },
        }),
      );

      return response.data.data.slice(0, 7).map((item) => {
        const date = item.time.split('T')[0];
        const moonPhaseText = item.moonPhase.current.text;

        const formattedMoonPhase = moonPhaseText
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .replace(/\s+/g, '-')
          .toLowerCase();

        return {
          moonPhase: formattedMoonPhase,
          zodiacSign: this.getZodiacSign(date),
        };
      });
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error fetching data from Stormglass API',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  getZodiacSign(date: string) {
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
    const [year, month, day] = date.split('-').map(Number);
    const formattedDate = `${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;

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
