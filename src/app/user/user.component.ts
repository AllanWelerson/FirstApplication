import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user = {};

  constructor(private usersService: UsersService, private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.initUser();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usersService.getUser(id).subscribe(user => this.user = user);
  }

  initUser(){
    // Temp
    // to fix console error
    this.user = {
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: ""
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: ""
      }

    };
  }

  back(){
    this.location.back();
  }

}
