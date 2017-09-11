import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

import { NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AppTranslationModule } from '../../app/app.translation.module';

import {
    ColorEditorComponent,
    ColorRenderComponent,
    LocationRenderComponent,
    LocationEditorComponent,
    LocationPickerModalComponent,
    DropdownEditorComponent,
    IconRenderComponent,
    NotEditableReportComponent, MediaViewerModalComponent, ButtonViewUploadComponent,
    IconEditorComponent,
    IconPickerModalComponent,
    LongTextRenderComponent,
    TextViewerModalComponent,
    NotEditableLongTextComponent,
    TextEditorComponent,
    TextEditorModalComponent,
    DateEditorComponent,
    DateRenderComponent,
    TimeEditorComponent,
    TimeRenderComponent,
    
    // LocationZonePickerModalComponent,
} from './components';

const CBU_COMPONENTS = [
    ColorEditorComponent,
    ColorRenderComponent,
    LocationRenderComponent,
    LocationEditorComponent,
    LocationPickerModalComponent,
    DropdownEditorComponent,
    IconRenderComponent, MediaViewerModalComponent, ButtonViewUploadComponent,
    NotEditableReportComponent,
    IconEditorComponent,
    IconPickerModalComponent,
    LongTextRenderComponent,
    TextViewerModalComponent,
    NotEditableLongTextComponent,
    TextEditorComponent,
    TextEditorModalComponent,
    DateEditorComponent,
    DateRenderComponent,
    TimeEditorComponent,
    TimeRenderComponent,
    // LocationZonePickerModalComponent,
];

const CBU_PROVIDERS = [
    NotificationsService,
];

@NgModule({
    declarations: [
        ...CBU_COMPONENTS,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModalModule,
        AgmCoreModule,
        AppTranslationModule,
    ],
    exports: [
        SimpleNotificationsModule,
        AppTranslationModule,
    ],
    entryComponents: [
        ...CBU_COMPONENTS,
    ],
    providers: [
        ...CBU_PROVIDERS,
    ],
})
export class SharedModule {
    // TODO: forRoot()
}
