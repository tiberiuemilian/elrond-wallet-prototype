import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Node } from '../models/node';

@Injectable({
  providedIn: 'root'
})
export class NodeDataService {
  private status = new Subject<boolean>();
  public nodeStatus = this.status.asObservable();

  constructor() {
  }

  clear(key) {
    localStorage.removeItem('node' + key);
  }

  save(key, data) {
    // this.nodeData.next(data);
    localStorage.setItem('node' + key, JSON.stringify(data));
  }

  load(key): Node {
    const localStorageData = localStorage.getItem('node' + key);
    return (localStorageData) ? JSON.parse(localStorageData) as Node : Node.getDefault();
  }

  set(status) {
    this.status.next(status);
  }
}
