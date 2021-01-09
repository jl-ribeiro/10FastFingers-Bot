import { Given as Dado } from "cypress-cucumber-preprocessor/steps";
import { Then as Então } from "cypress-cucumber-preprocessor/steps";
import { And as E } from "cypress-cucumber-preprocessor/steps";

var texto = null;

Dado('que o usuário acessa o 10FastFingers', (/*done*/) => {
    var url = 'https://10fastfingers.com/typing-test/english';
    cy.visit(url);

    cy.on('uncaught:exception', (err, runnable) => {
        //    expect(err.message).to.include('Responsible use of your data');
        //    done();
        return false;
    });
})

E('concorda com os cookies', () => {
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
})

E('altera o idioma para {string}', (idioma) => {
    cy.get("#switch-typing-test-language").click();
    cy.get("#language-list")
        .contains(idioma.charAt(0).toUpperCase() + idioma.slice(1))
        .click({
            force: true,
            onBeforeLoad: () => {
                cy.get("#inputfield").click();
            }
        });
})

E('realiza a leitura das palavras', () => {
    cy.get('#row1').should('be.visible');

    cy.get("#wordlist").invoke('text').then((text) => {
        texto = text.toString().split('|');
    });
})

E('remove o banner', () => {
    cy.get("#closeBtn").click();
})

Então('começa a digitar o texto lido', () => {
    for (let i = 0; i < texto.length; i++) {
        cy.get('#inputfield', { log: false })
            .type(texto[i] + ' ', { log: false });
    }
    texto = null;
})

E('espera o teste terminar', () => {
    verificaSeTerminou();
})

function verificaSeTerminou() {
    cy.wait(8000);
    cy.get("#row1").then($tag => {
        if ($tag.is(':visible')) {
            cy.get('#inputfield').type(' ').type('{backspace}');
            verificaSeTerminou();
        } else {
            return;
        }
    })
}