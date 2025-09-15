
type ImageProps = {
  source: string;
  className?: string; // Mark as optional if it's not always required
  alt: string;
};


export default function Image({ source, className, alt }:ImageProps) {
console.log(className)
  return (
    <img 
      src={source} 
      className={className} 
    />
  );
}
