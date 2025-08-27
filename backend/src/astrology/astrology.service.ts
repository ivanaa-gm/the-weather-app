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
    date: string,
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
      const todayData = response.data.data[0];
      const sign = this.getZodiacSign(date);

      return {
        moonPhase: todayData.moonPhase.current.text,
        moonrise: todayData.moonrise,
        moonset: todayData.moonset,
        sign,
      };
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error fetching data from Stormglass API',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  getZodiacSign(date: string) {
    const zodiacSigns = [
      { sign: 'Capricorn', start: '12-22', end: '01-19' },
      { sign: 'Aquarius', start: '01-20', end: '02-18' },
      { sign: 'Pisces', start: '02-19', end: '03-20' },
      { sign: 'Aries', start: '03-21', end: '04-19' },
      { sign: 'Taurus', start: '04-20', end: '05-20' },
      { sign: 'Gemini', start: '05-21', end: '06-20' },
      { sign: 'Cancer', start: '06-21', end: '07-22' },
      { sign: 'Leo', start: '07-23', end: '08-22' },
      { sign: 'Virgo', start: '08-23', end: '09-22' },
      { sign: 'Libra', start: '09-23', end: '10-22' },
      { sign: 'Scorpio', start: '10-23', end: '11-21' },
      { sign: 'Sagittarius', start: '11-22', end: '12-21' },
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
    return "";
  }
}
