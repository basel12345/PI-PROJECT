import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { BIGridComponent } from 'bi-modules';
import { IColumns } from 'bi-modules/interfaces/IColumns.interface';
import { DataTypes } from './enums/DataType';
import { IDatasService } from './interfaces/IDataService';
import { IGrid } from 'bi-modules/interfaces/IGird.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BI-Project';
  columns: IColumns[] = [
		{ DisplayName: "CategoryId", Name: "CategoryId", DataType: DataTypes.Text, Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, controlType: "", viewCellStyle: "", IsVisible: true },
		{ DisplayName: "Description", Name: "Description", DataType: DataTypes.Text, Validators: Validators.required, IsEditable: true, IsFilterable: true, DefaultValue: null, controlType: "", viewCellStyle: "", IsVisible: true },
		{ DisplayName: "ArabicDescription", Name: "ArabicDescription", DataType: DataTypes.Text, Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, controlType: "", viewCellStyle: "", IsVisible: true },
		{ DisplayName: "SalesTypeID", Name: "SalesTypeID", DataType: DataTypes.Text, Validators: Validators.required, IsEditable: true, IsFilterable: true, DefaultValue: null, controlType: "", viewCellStyle: "", IsVisible: true },
		{ DisplayName: "rowguid", Name: "rowguid", DataType: DataTypes.Text, Validators: null, IsEditable: true, IsFilterable: true, DefaultValue: null, controlType: "", viewCellStyle: "", IsVisible: false }
	]
	dataItem: any;
	@ViewChild(BIGridComponent) BIGrid!: IGrid;
	constructor(public dataService: IDatasService ) {
		
		
	}

}
