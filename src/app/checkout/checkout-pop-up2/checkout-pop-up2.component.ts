import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout-pop-up2',
  templateUrl: './checkout-pop-up2.component.html',
  styleUrls: ['./checkout-pop-up2.component.css']
})
export class CheckoutPopUp2Component {

  @Output() popupClosedEvent: EventEmitter<any> = new EventEmitter();

  closePopupOutside(event: any) {
    if (event.target.classList.contains('popup-container')) {
      this.popupClosedEvent.emit();
    }
  }

  close() {
    this.popupClosedEvent.emit();
  }

  showOverlay: boolean = false;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;

  finalizePayment() {
    this.showOverlay = true; // Exibe o overlay de loading
    this.simulatePaymentProcess();
  }

  simulatePaymentProcess() {
    setTimeout(() => {
      const paymentApproved = this.simulatePaymentApproval(); // Simula o pagamento
      this.showOverlay = false; // Esconde o overlay

      if (paymentApproved) {
        this.showSuccessMessage = true; // Exibe a mensagem de sucesso
      } else {
        this.showErrorMessage = true; // Exibe a mensagem de erro
      }

      setTimeout(() => {
        this.showSuccessMessage = false; // Esconde a mensagem após 2 segundos
        this.showErrorMessage = false; // Esconde a mensagem após 2 segundos
      }, 2000);
    }, 2000);
  }

  simulatePaymentApproval(): boolean {
    // Simulação de aprovação de pagamento (retorna verdadeiro ou falso)
    const paymentApproved = Math.random() < 0.8; // 80% de chance de aprovação
    return paymentApproved;
  }
}
