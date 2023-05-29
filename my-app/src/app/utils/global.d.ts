interface Window {
  addToast: (content: string, options?: Options, callback?: (id: string) => void) => void;
}
