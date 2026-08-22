export function determRandom(index: number, min = -1, max = 1) {
    const value = Math.sin(index * 12.9898) * 43758.5453123;
    const rand = value - Math.floor(value);
    
    return min + rand * (max - min);
}