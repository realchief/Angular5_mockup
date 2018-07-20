import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { filter } from "rxjs/operators";

import { Entity } from '../models/entity';
import { Entities } from '../models/mock-list';

@Injectable()
export class EntityService {
	private entities = new BehaviorSubject<Entity[]>(Entities);

	getEntities(): Observable<Entity[]> {
        return this.entities.asObservable();
    }

    getSelectedEntities(): Observable<Entity[]> {
        return this.entities.pipe(filter(value => value.selected == true));
    }

    selectEntity(entity: Entity) {
        for (var i = 0; i < this.entities.length; i ++) {
            if (this.entities[i].id == entity.id) {
                this.entities.selected = !this.entities.selected;
            }
        }
    }
}