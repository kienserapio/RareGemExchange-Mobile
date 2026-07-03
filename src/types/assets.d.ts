// Ambient declarations for static image assets resolved by Metro's asset system.
// Importing an image yields its numeric asset id, usable as an RN `source`.
declare module '*.png' {
  const asset: number;
  export default asset;
}
declare module '*.jpg' {
  const asset: number;
  export default asset;
}
declare module '*.jpeg' {
  const asset: number;
  export default asset;
}

// Global stylesheet consumed by NativeWind (imported for its side effects).
declare module '*.css';
