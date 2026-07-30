function trap(height: number[]): number {
    let count = 0;
    let preMaxL = 0;
    let preMaxR = 0;

    let mxl: number[] = [];
    let mxr: number[] = [];

    for (let i = 0; i < height.length; i++) {
        const container = height[i]!;

        if (container > preMaxL) {
            preMaxL = container;
        }

        mxl.push(preMaxL);
    }

    for (let i = height.length - 1; i >= 0; i--) {
        const container = height[i]!;

        if (container > preMaxR) {
            preMaxR = container;
        }

        mxr.unshift(preMaxR);
    }

    for (let i = 0; i < height.length; i++) {
        const container = height[i]!;

        const trap = Math.min(mxl[i]!, mxr[i]!) - container;

        count += trap;
    }

    return count;
};
