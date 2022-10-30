import {Component, Input, OnInit, Output} from '@angular/core';
import {Client} from "../../../_Shared/interface/clients.interface";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  client ?: Client[];



  constructor() { }

  ngOnInit(): void {
  }

}
