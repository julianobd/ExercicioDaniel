import { map, catchError } from 'rxjs/operators';
import { Avatar } from './../../../core/models/avatar';
import { Validators } from '@angular/forms';
import { AvatarService } from './../../../core/services/avatar.service';
import { BaseFormComponent } from 'src/app/shared/components/base-form/base-form.component';
import { Component, Injector } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-avatar-form',
  templateUrl: './avatar-form.component.html',
  styleUrls: ['./avatar-form.component.scss']
})
export class AvatarFormComponent extends BaseFormComponent<Avatar> {
  avatar: Avatar;

  constructor(
    protected avatarService: AvatarService,
    protected injector: Injector
  ) {
    super(injector, avatarService);
    this.setErrorAdded = 'Não foi possível adicionar o avatar!';
    this.setSuccessAdded = 'Avatar adicionado com sucesso!';
    this.setNavigate = ['/avatar'];
  }

  buildForm() {
    this.form = this.formBuilder.group({
      uuid: [null],
      name: ['', [Validators.required]],
      title: ['', [Validators.required]],
      health: [0, [Validators.required]],
      armor: [0, [Validators.required]],
      hungry: [0, [Validators.required]],
      leader: [false, [Validators.required]],
      experience: [0, [Validators.required]],
      money: [0, [Validators.required]],
      statusPoint: [0, [Validators.required]],
      isBanned: [false, [Validators.required]],
      bannedReason: [''],
      isAdmin: [false, [Validators.required]],
      isDead: [false, [Validators.required]],
      strength: [false, [Validators.required]],
      endurance: [false, [Validators.required]],
      agility: [false, [Validators.required]],
      accuracy: [false, [Validators.required]]
    });
    if (this.route.snapshot.paramMap.get('id')) {
      const id = this.route.snapshot.paramMap.get('id');
      this.editing = true;
      this.avatarService
        .getAll()
        .pipe(
          map((data: any) => {
            let array = data.filter(el => el.uuid === id);
            return array[0];
          })
        )
        .subscribe((avatar: Avatar) => {
          this.form.patchValue(avatar);
        });
    } else {
      this.ngxSpinner.show();
      setTimeout(() => {
        this.ngxSpinner.hide();
      }, 100);
    }
  }

  // submit() {
    // let service;
    // if (this.editing) {
    //   service = this.avatarService.updateAvatar(this.form.value);
    // } else {
    //   service = this.avatarService.createJob(this.form.value);
    // }
    // this.avatarService
    //   .update(this.form.value)
    //   .pipe(
    //     catchError(err => {
    //       if (err) {
    //         this.ngxSpinner.hide();
    //         console.log(err);
    //         this.snackBar.showMessage(
    //           `${
    //             this.editing
    //               ? 'Erro ao salvar as alterações!'
    //               : 'Não foi possível adicionar o avatar!'
    //           }`,
    //           true
    //         );
    //       }
    //       return EMPTY;
    //     })
    //   )
    //   .subscribe(res => {
    //     this.snackBar.showMessage(
    //       `${
    //         this.editing
    //           ? 'As alterações foram salvas com sucesso!'
    //           : 'Avatar adicionado com sucesso!'
    //       }`
    //     );
    //     console.log('sucesso', res);
    //     this.router.navigate(['/avatar']);
    //   });
  // }
}
