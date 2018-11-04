import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { JhipsterConnektAppSharedLibsModule, JhipsterConnektAppSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [JhipsterConnektAppSharedLibsModule, JhipsterConnektAppSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [JhipsterConnektAppSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterConnektAppSharedModule {}
