import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
// import { FormGroup, FormBuilder } from '@angular/forms';
import { ServersService } from '../../../core/services/servers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-update',
  templateUrl: './server-update.component.html',
  styleUrls: ['./server-update.component.scss']
})
export class ServerUpdateComponent implements OnInit {
  true: boolean = true;
  false: boolean = false;
  serverId: string;
  server: any;
  parcels: any[];
  // form: FormGroup

  constructor(
    private serversService: ServersService,
    // private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.form = this.formBuilder.group({
    //   name: [null],
    //   shared: [null],
    //   hasDisease: [null],
    //   initialMoney: [null],
    //   initialStatsPoints: [null],
    // });
    this.serverId = this.route.snapshot.paramMap.get('id');
    this.serversService.getById(this.serverId)
      .pipe(take(1))
      .subscribe((server: any) => {
        this.parcels = server.parcels;
        this.server = server;
        // this.form = this.formBuilder.group(server);
        console.log(this.server);
      }
    );
  }

  update() {
    const id = '00000000-0000-0000-0000-000000000000';
    this.parcels.forEach((x) => {
      x.id = id;
    });
    // console.log(this.server)
    this.serversService
      .update(this.server)
      .subscribe((res) => {
        console.log(res);
        console.log('servidor atualizado');
        this.router.navigate(['/server/profile/', this.serverId]);
      }
    );
  }

}
