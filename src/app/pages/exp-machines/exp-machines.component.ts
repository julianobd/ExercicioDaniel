import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExpMachine } from './../../core/models/exp-machine';
import {
  TableColumn,
  TableAction
} from './../../shared/modules/table/table-models.model';
import { ExpMachinesService } from './../../core/services/exp-machines.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp-machines',
  templateUrl: './exp-machines.component.html',
  styleUrls: ['./exp-machines.component.scss']
})
export class ExpMachinesComponent implements OnInit {
  expMachines: ExpMachine[] = [];
  pageSize = 4;

  columns: TableColumn[] = [
    {
      displayName: 'Descrição',
      columnName: 'description'
    },
    {
      displayName: 'Xp por minuto',
      columnName: 'expEachMinute',
      className: 'text-center'
    },
    {
      displayName: 'Automática',
      columnName: 'automaticStart',
      className: 'text-center'
    },

    {
      displayName: 'Hora de início',
      columnName: 'hourStart',
      className: 'text-center'
    },
    {
      displayName: 'Hora de término',
      columnName: 'hourEnds',
      className: 'text-center'
    },
    {
      displayName: 'Ativado',
      columnName: 'enabled',
      className: 'text-center'
    }
  ];

  actions: TableAction[] = [
    {
      iconClass: 'edit',
      eventName: 'edit'
    }
  ];

  constructor(
    private expMachineService: ExpMachinesService,
    protected ngxSpinner: NgxSpinnerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.expMachineService.getAll().subscribe(data => {
      this.expMachines = data;
    });
  }

  onAction(ev: any) {
    if (ev.action === 'edit') {
      console.log(ev.item);
      return this.router.navigate(['/exp-machines/update', ev.item.id]);
      // return this.router.navigate(['/exp-machines/update', ev.item.uuid]);
    }
  }
}
