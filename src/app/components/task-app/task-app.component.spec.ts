import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAppComponent } from './task-app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TaskService} from '../../services/task/task.service';
import {Observable, of} from 'rxjs';

describe('TaskAppComponent', () => {
  let component: TaskAppComponent;
  let fixture: ComponentFixture<TaskAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAppComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {provide: TaskService, useClass: MockTaskService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockTaskService {
  public getAll(): Observable<any> {
    return of([]);
  }
  public create(): Observable<any> {
    return of({});
  }
  public delete(): Observable<any> {
    return of();
  }
  public update(): Observable<any> {
    return of();
  }
}
