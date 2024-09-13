import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { ReportService } from '../../services/report.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  templateUrl: 'report-list.component.html',
  imports: [
    CommonModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    TableModule,
  ],
  providers: [ReportService],
  animations: [],
})
export class ReportList {
  constructor(private _toastr: ToastrService) {}

  _reportService: ReportService = inject(ReportService);
  _types: { name: string; code: string }[] = [
    {
      name: 'Monthly',
      code: 'MONTHLY',
    },
    {
      name: 'Quarterly',
      code: 'QUARTERLY',
    },
  ];
  _selectedType: 'MONTHLY' | 'QUARTERLY' | undefined;
  _selectedProcessingDay: number | undefined;

  _createReport(): void {
    const processingDay = Number(this._selectedProcessingDay);

    if (this._selectedType === undefined) {
      this._toastr.error('Plese select a Type');
      return;
    }

    if (isNaN(processingDay) || processingDay < 0 || processingDay > 31) {
      this._toastr.error('Plese enter a valid number date');
      return;
    }

    this._toastr.success('Processed date succesfully.');

    this._reportService.createReport(
      this._selectedType as any,
      this._selectedProcessingDay as number
    );
  }
}
