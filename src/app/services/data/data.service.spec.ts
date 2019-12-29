import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      {provide: String, useValue: 'http://localhost:8080'}
    ]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
