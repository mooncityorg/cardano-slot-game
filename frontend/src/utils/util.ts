export function sleep(duration: number): Promise<void> {
    return new Promise(resolve => {
        const start = performance.now();

        function tick(timestamp: DOMHighResTimeStamp) {
            const elapsed = timestamp - start;
            if (elapsed >= duration) {
                resolve();
            } else {
                requestAnimationFrame(tick);
            }
        }

        requestAnimationFrame(tick);
    });
}
