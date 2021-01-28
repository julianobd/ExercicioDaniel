import { SnackbarService } from './../services/snackbar.service';
import { LoadingService } from './../services/loading.service';
import { catchError, map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(
    private spinner: NgxSpinnerService,
    private _loading: LoadingService,
    private snackBar: SnackbarService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._loading.setLoading(true, request.url);
    this.spinner.show('content');
    // this.spinner.show();
    return next
      .handle(request)
      .pipe(
        catchError((err) => {
          this._loading.setLoading(false, request.url);
          this.spinner.hide('content');
          this.spinner.hide();
          this.snackBar.showMessage('Erro ao conectar com o servidor', true)
          return err;
        })
      )
      .pipe(
        map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
          if (evt instanceof HttpResponse) {
            this._loading.setLoading(false, request.url);
            this.spinner.hide('content');
            this.spinner.hide();
          }
          return evt;
        })
      );
  }
}
