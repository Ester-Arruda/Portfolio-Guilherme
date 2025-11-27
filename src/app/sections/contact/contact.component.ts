import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email = 'guilhermesoares_vaz@gmail.com';
  mailtoLink = `mailto:${this.email}`;

  copied = false;
  private copyTimeout: any;

  copyEmail() {
    if (!navigator.clipboard) {
      const el = document.createElement('input');
      el.value = this.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.showCopied();
      return;
    }

    navigator.clipboard.writeText(this.email).then(() => this.showCopied(), () => {
      this.showCopied();
    });
  }

  private showCopied() {
    this.copied = true;
    clearTimeout(this.copyTimeout);
    this.copyTimeout = setTimeout(() => (this.copied = false), 2200);
  }
}
