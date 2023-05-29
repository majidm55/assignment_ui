interface ISideBarProps {
  text?: string;
  isLoading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  closeReport: React.Dispatch<React.SetStateAction<boolean>>;

}
