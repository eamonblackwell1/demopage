// Fix for Japanese IME (Input Method Editor) preventing premature message submission
(function() {
    let isComposing = false;

    // Wait for the chatbot widget to load
    function initIMEFix() {
        // Try to find the chatbot input field
        const observer = new MutationObserver(() => {
            // Look for input or textarea elements within the chatbot widget
            const chatInputs = document.querySelectorAll('iframe, input[type="text"], textarea');
            
            chatInputs.forEach(element => {
                if (element.tagName === 'IFRAME') {
                    // If it's an iframe, try to access its content
                    try {
                        const iframeDoc = element.contentDocument || element.contentWindow?.document;
                        if (iframeDoc) {
                            const iframeInputs = iframeDoc.querySelectorAll('input[type="text"], textarea');
                            iframeInputs.forEach(input => attachIMEHandlers(input));
                        }
                    } catch (e) {
                        // Cross-origin iframe, can't access content
                        // Will use global event listener instead
                    }
                } else {
                    attachIMEHandlers(element);
                }
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Global event listeners as fallback
        document.addEventListener('compositionstart', () => {
            isComposing = true;
        }, true);

        document.addEventListener('compositionend', () => {
            isComposing = false;
        }, true);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && isComposing) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }, true);
    }

    function attachIMEHandlers(input) {
        // Prevent multiple attachments
        if (input.dataset.imeFixed) return;
        input.dataset.imeFixed = 'true';

        input.addEventListener('compositionstart', () => {
            isComposing = true;
        });

        input.addEventListener('compositionend', () => {
            isComposing = false;
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && isComposing) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }, true);
    }

    // Initialize after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initIMEFix);
    } else {
        initIMEFix();
    }
})();
