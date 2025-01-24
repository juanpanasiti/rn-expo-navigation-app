import { View, Text, Pressable, PressableProps } from 'react-native';
import React from 'react';

interface Props extends PressableProps {
    children: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'contained' | 'text-only';
    className?: string;
}

const CustomButton = React.forwardRef(
    ({ children, color = 'primary', onPress, onLongPress, variant = 'contained', className }: Props, ref: React.Ref<View>) => {
        const bgColor = {
            primary: 'bg-primary',
            secondary: 'bg-secondary',
            tertiary: 'bg-tertiary',
        }[color];
        const textColor = {
            primary: 'text-primary',
            secondary: 'text-secondary',
            tertiary: 'text-tertiary',
        }[color];
        const pressableClassName = variant === 'text-only' ? 'p-3' : `p-3 rounded-md ${bgColor} active:opacity-90`;
        const textClassName = variant === 'text-only' ? `font-work-medium text-center ${textColor}` : 'font-work-medium text-white text-center';

        return (
            <Pressable className={pressableClassName + ` ${className}`} onPress={onPress} onLongPress={onLongPress} ref={ref}>
                <Text className={textClassName}>{children}</Text>
            </Pressable>
        );
    }
);

export default CustomButton;
