import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './features/auth/auth.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AuthModule],
  bootstrap: []
})
export class AppModule {}
