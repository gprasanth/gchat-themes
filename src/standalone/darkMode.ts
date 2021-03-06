import { applyTheme, initializeRuleSwapList, onStyleSheetLoaded, addRuleSwaps } from '../ops';
import dark from '../themes/dark';

function main() {
    if (!window.location.href.match('chat.google.com')) {
        return;
    }
    initializeRuleSwapList();
    onStyleSheetLoaded(function(styleSheet) {
        addRuleSwaps(styleSheet);
        applyTheme(dark);
    });
}

window.onload = main;