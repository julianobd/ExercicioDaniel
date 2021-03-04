import { BaseModel } from './../../core/models/base.model';
import { TokenService } from './../../core/services/token.service';
import { catchError, take } from 'rxjs/operators';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injector } from '@angular/core';

export abstract class CrudService<T extends BaseModel> {
  protected http: HttpClient;
  protected token: string;
  private API_URL = environment.API;
  private getAll_URL: string;
  private getById_URL: string;
  private update_URL: string;
  private create_URL: string;
  private delete_URL: string;

  constructor(
    protected snackBar: SnackbarService,
    protected injector: Injector,
    protected tokenService: TokenService
  ) {
    this.http = injector.get(HttpClient);
    this.token = this.tokenService.getToken();
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.API_URL}${this.getAll_URL}`).pipe(
      take(1),
      catchError(err => {
        console.log(err);
        this.handleError();
        return throwError(err);
      })
    );
  }

  getById(id): Observable<T> {
    return this.http.get<T>(`${this.API_URL}${this.getById_URL}/${id}`).pipe(
      take(1),
      catchError(err => {
        console.log(err);
        this.handleError();
        return throwError(err);
      })
    );
  }

  create(data: T): Observable<T> {
    return this.http.post<T>(`${this.API_URL}${this.create_URL}`, data).pipe(
      take(1),
      catchError(err => {
        console.log(err);
        this.handleError();
        return throwError(err);
      })
    );
  }

  update(data: T): Observable<T> {
    return this.http
      .put<T>(
        `${this.API_URL}${this.update_URL}/${
          data['id'] ? data['id'] : data['uuid']
        }`,
        data
      )
      .pipe(
        take(1),
        catchError(err => {
          console.log(err);
          this.handleError();
          return throwError(err);
        })
      );
  }

  delete(id): Observable<T> {
    return this.http.delete<T>(`${this.API_URL}${this.delete_URL}/${id}`).pipe(
      take(1),
      catchError(err => {
        console.log(err);
        this.handleError();
        return throwError(err);
      })
    );
  }

  set setGetAll(data: string) {
    this.getAll_URL = data;
  }

  set setGetById(data: string) {
    this.getById_URL = data;
  }

  set setUpdate(data: string) {
    this.update_URL = data;
  }

  set setCreate(data: string) {
    this.create_URL = data;
  }

  set setDelete(data: string) {
    this.delete_URL = data;
  }

  handleError() {
    this.snackBar.showMessage('Erro ao conectar com o servidor', true);
  }
}
