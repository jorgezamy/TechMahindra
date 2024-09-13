import { Injectable } from '@angular/core';
import { period, Report } from '../models';

@Injectable()
export class ReportService {
  _reports: Report[] = [
    // {
    //   requestDate: new Date(),
    //   type: 'MONTHLY',
    //   dayToProcess: 15,
    //   processingDate: new Date('09/15/2024'),
    // },
    // {
    //   requestDate: new Date(),
    //   type: 'QUARTERLY',
    //   dayToProcess: 15,
    //   processingDate: new Date('10/15/2024'),
    // },
  ];

  createReport(type: period, dayToProcess: number) {
    const today = new Date();
  }
}
