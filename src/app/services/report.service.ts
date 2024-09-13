import { Injectable } from '@angular/core';
import { Report } from '../models';

@Injectable()
export class ReportService {
  _reports: Report[] = [];

  createReport(
    type: { name: string; code: 'MONTHLY' | 'QUARTERLY' },
    dayToProcess: number
  ) {
    const today = new Date();
    let newDate = new Date();

    const quartersMonth = [0, 3, 6, 9];
    const currentMonth = new Date().getMonth() + 1;

    if (type.code == 'MONTHLY') {
      if (today.getDate() > dayToProcess) {
        newDate.setMonth(currentMonth);
      }
    }
    if (type.code == 'QUARTERLY') {
      const mes = quartersMonth.reduce((closest, month) => {
        return Math.abs(month - currentMonth) < Math.abs(closest - currentMonth)
          ? month
          : closest;
      });

      newDate.setMonth(mes);
    }
    newDate.setDate(dayToProcess);

    const newReport = {
      requestDate: today,
      type: type.code,
      dayToProcess,
      processingDate: newDate,
    };

    this._reports.push(newReport);
  }
}
