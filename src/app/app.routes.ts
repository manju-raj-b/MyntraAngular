import { Routes } from '@angular/router';
import { MenbottomwearComponent } from './components/menbottomwear/menbottomwear.component';
import { MenfestivewearComponent } from './components/menfestivewear/menfestivewear.component';
import { MensleepwearComponent } from './components/mensleepwear/mensleepwear.component';
import { MentopwearComponent } from './components/mentopwear/mentopwear.component';
import { MyntrahomeComponent } from './components/myntrahome/myntrahome.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'mentopwear', component: MentopwearComponent},
    {path:'menfestivewear', component: MenfestivewearComponent},
    {path: 'menbottomwear', component:MenbottomwearComponent},
    {path:'mensleepwear', component:MensleepwearComponent},
    {path:'myntrahome', component:MyntrahomeComponent}
    
];
