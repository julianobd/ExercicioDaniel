import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(
    private token: TokenService,
    private http: HttpClient
  ) { }

  getServers(): Observable<any[]> {
    return this.http.get<any[]>(`http://hcs.dev4.com.br/api/Servers/ListServers/${this.token.getToken()}`)
  }

  getServerById(id: string): Observable<any> {
    return this.http.get<any>(`http://hcs.dev4.com.br/api/Servers/ListServers/${this.token.getToken()}/${id}`)
  }

  updateServer(server: any): Observable<any> {
    return this.http.put<any>(`http://hcs.dev4.com.br/api/Servers/ListServers/${this.token.getToken()}/${server.id}`, server)
  }

  updateExpTable(id: string, expTable: any): Observable<any> {
    return this.http.put<any>(`http://hcs.dev4.com.br/api/Servers/ListServers/${this.token.getToken()}/${id}`, expTable)
  }

  updateAvailableItems(id: string, AvailableItem: any): Observable<any> {
    return this.http.put<any>(`http://hcs.dev4.com.br/api/Servers/ListServers/${this.token.getToken()}/${id}`, AvailableItem)
  }
}
