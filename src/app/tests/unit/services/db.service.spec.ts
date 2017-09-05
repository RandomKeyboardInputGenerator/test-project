import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { DbService } from '../../../services/db.service';

describe('DbService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [DbService]
        });
    });

    it('should be created', inject([DbService], (service: DbService) => {
        expect(service).toBeTruthy();
    }));
});
