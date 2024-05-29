import { Component } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-footer',
    templateUrl: './footer.component.html',
})
export class FooterComponent {
    public currentYear: number = new Date().getFullYear();
    public disclaimer: string =
        'Created by Francisco Sabino, with Love and Coffee ☕️❤️';

    public backToTop(): void {
        window.scrollTo(0, 0);
    }
}
