interface HeaderProps {
    type: keyof JSX.IntrinsicElements;
    text: string;
}
  
  export default function Header({ type, text }: HeaderProps) {
    const Tag = type;
    return <Tag className={type}>{text}</Tag>;
  }