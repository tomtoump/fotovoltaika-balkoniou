import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function syncGtagConsent(): void {
  if (typeof window.gtag !== 'function') return;
  const granted = CookieConsent.acceptedCategory('analytics');
  window.gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
  });
}

CookieConsent.run({
  disablePageInteraction: true,

  guiOptions: {
    consentModal: {
      layout: 'box wide',
      position: 'middle center',
      equalWeightButtons: false,
      flipButtons: true,
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: false,
      flipButtons: true,
    },
  },
  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    analytics: {
      enabled: false,
    },
  },
  language: {
    default: 'el',
    translations: {
      el: {
        consentModal: {
          title: 'Χρησιμοποιούμε cookies',
          description:
            'Χρησιμοποιούμε τεχνικά cookies απαραίτητα για τη λειτουργία του ιστοτόπου, καθώς και προαιρετικά cookies στατιστικών (Google Analytics) για να βελτιώνουμε το περιεχόμενο. Μπορείτε να αποδεχθείτε, να απορρίψετε ή να ρυθμίσετε τις προτιμήσεις σας.',
          acceptAllBtn: 'Αποδοχή όλων',
          acceptNecessaryBtn: 'Απόρριψη όλων',
          showPreferencesBtn: 'Ρυθμίσεις',
          footer:
            '<a href="/privacy">Πολιτική απορρήτου</a> · <a href="/terms">Όροι χρήσης</a>',
        },
        preferencesModal: {
          title: 'Ρυθμίσεις cookies',
          acceptAllBtn: 'Αποδοχή όλων',
          acceptNecessaryBtn: 'Απόρριψη όλων',
          savePreferencesBtn: 'Αποθήκευση προτιμήσεων',
          closeIconLabel: 'Κλείσιμο',
          sections: [
            {
              title: 'Χρήση cookies',
              description:
                'Τα cookies είναι μικρά αρχεία που αποθηκεύονται στον περιηγητή σας. Χρησιμοποιούνται είτε για να λειτουργεί σωστά ο ιστότοπος, είτε για στατιστικά σκοπούς. Παρακάτω μπορείτε να ενεργοποιήσετε ή να απενεργοποιήσετε κάθε κατηγορία.',
            },
            {
              title: 'Απαραίτητα cookies',
              description:
                'Απαραίτητα για τη βασική λειτουργία του ιστοτόπου (π.χ. αποθήκευση των προτιμήσεών σας για τα cookies). Δεν μπορούν να απενεργοποιηθούν.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Στατιστικά cookies',
              description:
                'Cookies της υπηρεσίας Google Analytics για ανώνυμη μέτρηση επισκεψιμότητας. Μας βοηθούν να καταλάβουμε ποιες σελίδες είναι πιο χρήσιμες και πώς να βελτιώσουμε το περιεχόμενο.',
              linkedCategory: 'analytics',
            },
            {
              title: 'Περισσότερες πληροφορίες',
              description:
                'Για αναλυτικές πληροφορίες, δείτε την <a href="/privacy">Πολιτική απορρήτου</a>.',
            },
          ],
        },
      },
    },
  },
  onConsent: syncGtagConsent,
  onChange: syncGtagConsent,
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const trigger = target.closest<HTMLElement>('[data-cc="show-preferencesModal"]');
  if (!trigger) return;
  event.preventDefault();
  CookieConsent.showPreferences();
});
