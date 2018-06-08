import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {CardModule} from 'primeng/card';
import {GrowlModule} from 'primeng/growl';
import {Message,SelectItem} from 'primeng/components/common/api';
import {TableModule} from 'primeng/table';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {MenubarModule} from 'primeng/menubar';
import {PanelMenuModule} from 'primeng/panelmenu';
import {AccordionModule} from 'primeng/accordion'; 
import {DataTableModule} from 'primeng/datatable';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {ProgressBarModule} from 'primeng/progressbar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  imports: [
    CommonModule,
    SplitButtonModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    CardModule,
    GrowlModule,
    TableModule,
    ScrollPanelModule,
    MenubarModule,
    PanelMenuModule,
    AccordionModule,
    DataTableModule,
    DropdownModule,
    PanelModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ToggleButtonModule
    
  ],
  exports: [
    CommonModule,
    SplitButtonModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    CardModule,
    GrowlModule,
    TableModule,
    ScrollPanelModule,
    MenubarModule,
    PanelMenuModule,
    AccordionModule,
    DataTableModule,
    DropdownModule,
    PanelModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    ToggleButtonModule
  ],
  declarations: []
})
export class PrimengModule { }