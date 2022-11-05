export default class Animation {
    static setButtonAnimation() {
        const buttons = document.getElementsByClassName('choiceBtn');
        
        Array.from(buttons).forEach(btn => {
            btn.addEventListener('mouseover', () => {
                btn.classList.add('pulse')
            })
        });

        Array.from(buttons).forEach(btn => {
            btn.addEventListener('mouseout', () => {
                btn.classList.remove('pulse')
            })

        });
    }
}