interface HeaderProps {
    type: keyof JSX.IntrinsicElements;
    value: string;
}
  
  export default function Header({ type, value }: HeaderProps) {
    const Tag = type;
    return <Tag className={type}>{value}</Tag>;
  }