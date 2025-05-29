import { Component } from '@angular/core';

// config. of the component 

@Component({
    selector:"app-header",
    standalone:true,
    templateUrl:"./header.component.html",
})

export class HeaderComponent{}


/**
 * standalone -> true by default in 19v
 * 
 * standalone VS module based component
 */