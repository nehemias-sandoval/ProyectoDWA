$(document).ready(function () {
    setTimeout(()=>{
        const tl = gsap.timeline({
            repeat: -1,
            onStart() {
                console.log('start');
            },
            onComplete() {
                console.log('complete');
            }
        });
        tl.to("#icon", { duration: .5, scale: 1, ease: 'expo' });
        tl.to("#icon", { scale: 0, delay: 3, ease: 'expo' })
    }, 1000)
});