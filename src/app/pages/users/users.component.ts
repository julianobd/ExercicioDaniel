import { User } from './../../core/models/user';
import { Router } from '@angular/router';
import {
  TableColumn,
  TableAction,
} from './../../shared/modules/table/table-models.model';
import { TableComponent } from './../../shared/modules/table/table.component';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { ModalConfirmComponent } from './../../shared/components/modal-confirm/modal-confirm.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { take } from 'rxjs/operators';
import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  pageSize = 4;

  columns: TableColumn[];
  actions: TableAction[] = [
    {
      iconClass: 'edit',
      eventName: 'edit',
    },
    {
      iconClass: 'delete',
      eventName: 'delete',
    },
  ];

  constructor(
    protected ngxSpinner: NgxSpinnerService,
    private userService: UserService,
    private modalService: NgbModal,
    private snackBar: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe((res: User[]) => {
      this.users = res;
      this.getServersName();
      this.getPermissionName();
      this.columns = [
        {
          displayName: 'Nome',
          columnName: 'name',
        },
        {
          displayName: 'Email',
          columnName: 'email',
        },
        {
          displayName: 'Servidor',
          columnOptional: this.getServersName(),
        },

        {
          displayName: 'Permissão',
          columnOptional: this.getPermissionName(),
        },
      ];
    });
  }

  getServersName() {
    let names = this.users.map((el: any) => {
      return el.server ? el.server.name : 'Nenhum';
    });
    return names;
  }

  getPermissionName() {
    let names = this.users.map((el: any) => {
      return el.permission <= 0
        ? 'Moderador'
        : el.permission == 1
        ? 'Administrador'
        : 'Administrador Global';
    });
    return names;
  }

  openModal(id: string) {
    const modalRef = this.modalService.open(ModalConfirmComponent, {
      centered: true,
      windowClass: 'h-75',
    });
    modalRef.componentInstance.title = 'Excluir Usuário';
    modalRef.componentInstance.body =
      'Tem certeza que deseja excluir este usuário?';
    modalRef.componentInstance.button = 'danger';
    modalRef.componentInstance.action = 'Excluir';
    modalRef.result.then((res) => {
      if (res) {
        this.delete(id);
      }
    });
  }

  delete(id: string) {
    this.userService.delete(id).subscribe((res) => {
      this.users = this.users.filter(u => u.id !== id);
      console.log('Usuário deletado', res);
      this.snackBar.showMessage('Usuário excluído com sucesso!');
    }),
      (err) => {
        console.log(err);
        this.snackBar.showMessage(
          'Não foi possível excluir este usuário',
          true
        );
      };
  }

  onAction(ev: any) {
    if (ev.action === 'edit') {
      return this.router.navigate(['/users/update', ev.item.id]);
    }
    if (ev.action === 'delete') {
      return this.openModal(ev.item.id);
    }
  }
}
