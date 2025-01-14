import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const HomeScreen = () => {
    return (
        <View>
            <Link className='mb-5 text-2xl ml-3 color-primary' href='/products'>
                Productos
            </Link>
            <Link className='mb-5 text-2xl ml-3 color-primary' href='/profile'>
                Perfil
            </Link>
            <Link className='mb-5 text-2xl ml-3 color-primary' href='/settings'>
                Settings
            </Link>
        </View>
    );
};

export default HomeScreen;
