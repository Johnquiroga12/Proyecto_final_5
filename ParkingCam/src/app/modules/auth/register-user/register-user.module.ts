import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserRoutingModule } from './register-user-routing.module';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
//ng add @angular/material
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
// import john
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    RegisterUserRoutingModule,
    CdkStepperModule,
     //john
     FormsModule,
     ReactiveFormsModule,
     //BrowserAnimationsModule,
     MatStepperModule,
     MatSelectModule,
     // BrowserModule,
     MatSliderModule,
     MatButtonModule,
     MatAutocompleteModule,
     MatFormFieldModule,
     MatInputModule,
     MatButtonToggleModule,
     MatTooltipModule,
     MatSidenavModule,
     MatCheckboxModule,
     MatIconModule,
     MatDialogModule,
     MatTabsModule
  ],
  exports:[
    RegisterUserComponent,
    MatSliderModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    MatTabsModule
  ]
})
export class RegisterUserModule { }