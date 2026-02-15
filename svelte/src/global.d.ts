interface Window {
    lenis?: {
        stop(): void;
        start(): void;
        scrollTo(target: number, options?: { immediate?: boolean }): void;
        raf(time: number): void;
        on(event: string, callback: (...args: any[]) => void): void;
    };
}

declare const gsap: any;
