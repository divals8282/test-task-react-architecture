interface PropsI {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export type ComponentT = (props: PropsI) => React.ReactNode;
