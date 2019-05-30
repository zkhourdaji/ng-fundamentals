import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';
import { userRoutes } from './user.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  providers: [],
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  declarations: [ProfileComponent],
  exports: []
})
export class UserModule {}
