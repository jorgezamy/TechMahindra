import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from 'primeng/dropdown'
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from "primeng/table";

import { Report } from "../../models";
import { ReportService } from "../../services/report.service";

@Component({
    standalone: true,
    templateUrl: 'report-list.component.html',
    imports: [CommonModule, ButtonModule, DropdownModule, FormsModule, InputTextModule, TableModule],
    providers: [ReportService],
    animations: []
})
export class ReportList {

    _reportService: ReportService = inject(ReportService);
    _types: { name: string, code: string }[] = [
        {
            name: 'Monthly',
            code: 'MONTHLY'
        },
        {
            name: 'Quarterly',
            code: 'QUARTERLY'
        }
    ]
    _selectedType: 'MONTHLY' | 'QUARTERLY' | undefined;
    _selectedProcessingDay: number | undefined;

    _createReport(): void {
        this._reportService.createReport(this._selectedType as 'MONTHLY' | 'QUARTERLY', this._selectedProcessingDay as number);
    }
}