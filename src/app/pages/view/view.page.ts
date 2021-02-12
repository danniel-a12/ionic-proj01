import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { $ } from 'protractor';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  public item: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private afs:AngularFirestore

  ) { }

  ngOnInit() {

    this.route.params.subscribe ((data) => {
      if(data.id){
        this.item = this.afs.doc<any>(`articles/${data.id}`).valueChanges();          

      }

    }
    )
  }

}
