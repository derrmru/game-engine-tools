export default {
    touchScreen: () => {
        let response = false;
        window.addEventListener('touchstart', function onFirstTouch() {
            response = true;    
            window.removeEventListener('touchstart', onFirstTouch, false);
        }, false);
        return response
    }
}