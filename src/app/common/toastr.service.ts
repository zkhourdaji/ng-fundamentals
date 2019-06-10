import { InjectionToken } from '@angular/core';
import { Toastr } from './toastr.interface';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');
