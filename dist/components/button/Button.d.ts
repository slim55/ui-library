import { type FC, type PropsWithChildren } from 'react';
interface StyledButtonPropsType {
    $fullwidth?: boolean;
    $color?: 'primary' | 'secondary';
    $type?: 'contained' | 'outlined';
    onClick?: () => void;
}
type PropsType = PropsWithChildren & {
    fullwidth?: StyledButtonPropsType['$fullwidth'];
    color?: StyledButtonPropsType['$color'];
    type?: StyledButtonPropsType['$type'];
    onClick?: StyledButtonPropsType['onClick'];
};
declare const Button: FC<PropsType>;
export default Button;
